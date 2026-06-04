const express = require('express');
const { getDB } = require('../db/init');
const { requireAuth } = require('../middleware/auth');
const { createPendingOrder, getOrderForUser, markOrderPaid } = require('../services/orders');

const router = express.Router();
router.use(requireAuth);

router.get('/', (req, res) => {
    const db = getDB();
    const orders = db.prepare(`
        SELECT id, total_amount, currency, status, paid_at, created_at
        FROM orders WHERE user_id = ? ORDER BY id DESC
    `).all(req.user.id);
    db.close();
    res.json({ orders });
});

router.get('/:id', (req, res) => {
    const order = getOrderForUser(req.params.id, req.user.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json({ order });
});

router.post('/', (req, res) => {
    const db = getDB();
    const cartItems = db.prepare('SELECT product_id, quantity FROM cart_items WHERE user_id = ?').all(req.user.id);
    db.close();
    try {
        const order = createPendingOrder(req.user.id, cartItems);
        res.status(201).json({ order });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/:id/dev-pay', async (req, res) => {
    if (process.env.NODE_ENV === 'production') return res.status(404).json({ error: 'Not found' });
    const order = getOrderForUser(req.params.id, req.user.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    try {
        await markOrderPaid(order.id, { sessionId: `dev_${Date.now()}` });
        res.json({ order: getOrderForUser(order.id, req.user.id) });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
