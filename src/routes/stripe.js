const express = require('express');
const Stripe = require('stripe');
const { requireAuth } = require('../middleware/auth');
const { getDB } = require('../db/init');
const { createPendingOrder, attachStripeSession, markOrderPaid, getOrCreateGuestUser, getOrderForGuest } = require('../services/orders');

const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

router.get('/config', (req, res) => {
    res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || '' });
});

router.post('/checkout', requireAuth, async (req, res) => {
    const db = getDB();
    const cartItems = db.prepare('SELECT product_id, quantity FROM cart_items WHERE user_id = ?').all(req.user.id);
    db.close();

    try {
        const order = createPendingOrder(req.user.id, cartItems);
        if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes('xxx')) {
            return res.json({ orderId: order.id, devCheckout: true, url: `/order-success?order=${order.id}&dev=1` });
        }

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            customer_email: req.user.email,
            line_items: order.items.map((item) => ({
                quantity: item.quantity,
                price_data: {
                    currency: 'usd',
                    unit_amount: Math.round(item.unit_price * 100),
                    product_data: { name: item.product_name },
                },
            })),
            metadata: { orderId: String(order.id), userId: String(req.user.id) },
            success_url: `${process.env.DOMAIN || 'http://localhost:3000'}/order-success?order=${order.id}&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.DOMAIN || 'http://localhost:3000'}/?checkout=cancelled`,
        });
        attachStripeSession(order.id, session.id);
        res.json({ orderId: order.id, sessionId: session.id, url: session.url });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/guest-checkout', async (req, res) => {
    const email = String(req.body.email || '').trim().toLowerCase();
    const cartItems = Array.isArray(req.body.items) ? req.body.items.map((item) => ({
        product_id: Number(item.product_id),
        quantity: Math.max(1, Number(item.quantity || 1)),
    })).filter((item) => item.product_id && item.quantity) : [];

    try {
        const user = getOrCreateGuestUser(email);
        const order = createPendingOrder(user.id, cartItems);
        const guestParam = encodeURIComponent(email);
        if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes('xxx')) {
            return res.json({ orderId: order.id, devCheckout: true, url: `/order-success?order=${order.id}&dev=1&guest=${guestParam}` });
        }

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            customer_email: email,
            line_items: order.items.map((item) => ({
                quantity: item.quantity,
                price_data: {
                    currency: 'usd',
                    unit_amount: Math.round(item.unit_price * 100),
                    product_data: { name: item.product_name },
                },
            })),
            metadata: { orderId: String(order.id), userId: String(user.id), guest: '1' },
            success_url: `${process.env.DOMAIN || 'http://localhost:3000'}/order-success?order=${order.id}&guest=${guestParam}&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.DOMAIN || 'http://localhost:3000'}/?checkout=cancelled`,
        });
        attachStripeSession(order.id, session.id);
        res.json({ orderId: order.id, sessionId: session.id, url: session.url });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/guest-order/:id', (req, res) => {
    const order = getOrderForGuest(req.params.id, req.query.email || '');
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json({ order });
});

router.post('/guest-order/:id/dev-pay', async (req, res) => {
    if (process.env.NODE_ENV === 'production') return res.status(404).json({ error: 'Not found' });
    const order = getOrderForGuest(req.params.id, req.body.email || req.query.email || '');
    if (!order) return res.status(404).json({ error: 'Order not found' });
    try {
        await markOrderPaid(order.id, { sessionId: `guest_dev_${Date.now()}` });
        res.json({ order: getOrderForGuest(order.id, req.body.email || req.query.email || '') });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/webhook', async (req, res) => {
    let event = req.body;
    const secret = process.env.STRIPE_WEBHOOK_SECRET;
    if (secret && !secret.includes('xxx')) {
        try {
            event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], secret);
        } catch (err) {
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const orderId = Number(session.metadata && session.metadata.orderId);
        if (orderId) {
            try {
                await markOrderPaid(orderId, { sessionId: session.id, paymentIntentId: session.payment_intent });
            } catch (err) {
                console.error('[Stripe] Could not complete order:', err.message);
            }
        }
    }
    res.json({ received: true });
});

module.exports = router;
