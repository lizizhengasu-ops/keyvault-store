const { getDB } = require('../db/init');
const { sendCodesEmail } = require('./email');

function publicOrder(order, items, codes) {
    return { ...order, items, codes };
}

function getOrderForUser(orderId, userId) {
    const db = getDB();
    const order = db.prepare('SELECT * FROM orders WHERE id = ? AND user_id = ?').get(orderId, userId);
    if (!order) {
        db.close();
        return null;
    }
    const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(orderId);
    const codes = db.prepare(`
        SELECT ac.id, ac.code, ac.product_id, oi.product_name
        FROM activation_codes ac
        LEFT JOIN order_items oi ON oi.order_id = ac.order_id AND oi.product_id = ac.product_id
        WHERE ac.order_id = ? AND ac.status = 'sold'
        ORDER BY ac.id
    `).all(orderId);
    db.close();
    return publicOrder(order, items, codes);
}

function getOrderForGuest(orderId, email) {
    const db = getDB();
    const order = db.prepare(`
        SELECT o.* FROM orders o
        JOIN users u ON u.id = o.user_id
        WHERE o.id = ? AND LOWER(u.email) = LOWER(?)
    `).get(orderId, email);
    if (!order) {
        db.close();
        return null;
    }
    const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(orderId);
    const codes = db.prepare(`
        SELECT ac.id, ac.code, ac.product_id, oi.product_name
        FROM activation_codes ac
        LEFT JOIN order_items oi ON oi.order_id = ac.order_id AND oi.product_id = ac.product_id
        WHERE ac.order_id = ? AND ac.status = 'sold'
        ORDER BY ac.id
    `).all(orderId);
    db.close();
    return publicOrder(order, items, codes);
}

function getOrCreateGuestUser(email) {
    const normalized = String(email || '').trim().toLowerCase();
    if (!normalized || !normalized.includes('@')) throw new Error('Valid email is required for guest checkout');
    const db = getDB();
    let user = db.prepare('SELECT id, email FROM users WHERE email = ?').get(normalized);
    if (!user) {
        const hash = `guest:${Date.now()}:${Math.random().toString(36).slice(2)}`;
        const result = db.prepare('INSERT INTO users (email, password_hash, display_name) VALUES (?, ?, ?)').run(normalized, hash, 'Guest');
        user = { id: result.lastInsertRowid, email: normalized };
    }
    db.close();
    return user;
}

function createPendingOrder(userId, cartItems) {
    const db = getDB();
    const tx = db.transaction(() => {
        if (!cartItems.length) throw new Error('Your cart is empty');

        let total = 0;
        const orderItems = [];
        for (const item of cartItems) {
            const product = db.prepare('SELECT * FROM products WHERE id = ? AND is_active = 1').get(item.product_id);
            if (!product) throw new Error(`Product ${item.product_id} is unavailable`);
            const stock = db.prepare("SELECT COUNT(*) AS c FROM activation_codes WHERE product_id = ? AND status = 'available'").get(item.product_id).c;
            if (stock < item.quantity) throw new Error(`${product.name} has only ${stock} keys available`);
            total += product.price * item.quantity;
            orderItems.push({ product, quantity: item.quantity });
        }

        const order = db.prepare('INSERT INTO orders (user_id, total_amount, status) VALUES (?, ?, ?)').run(userId, Number(total.toFixed(2)), 'pending');
        for (const item of orderItems) {
            db.prepare(`
                INSERT INTO order_items (order_id, product_id, product_name, quantity, unit_price)
                VALUES (?, ?, ?, ?, ?)
            `).run(order.lastInsertRowid, item.product.id, item.product.name, item.quantity, item.product.price);

            const available = db.prepare(`
                SELECT id FROM activation_codes
                WHERE product_id = ? AND status = 'available'
                ORDER BY id LIMIT ?
            `).all(item.product.id, item.quantity);
            for (const code of available) {
                db.prepare(`
                    UPDATE activation_codes
                    SET status = 'reserved', reserved_at = datetime('now'), order_id = ?
                    WHERE id = ?
                `).run(order.lastInsertRowid, code.id);
            }
        }
        return order.lastInsertRowid;
    });

    try {
        const orderId = tx();
        const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
        const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(orderId);
        db.close();
        return publicOrder(order, items, []);
    } catch (err) {
        db.close();
        throw err;
    }
}

async function markOrderPaid(orderId, stripeData = {}) {
    const db = getDB();
    const tx = db.transaction(() => {
        const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
        if (!order) throw new Error('Order not found');
        if (order.status === 'paid') return order;

        const reservedCount = db.prepare("SELECT COUNT(*) AS c FROM activation_codes WHERE order_id = ? AND status = 'reserved'").get(orderId).c;
        const expected = db.prepare('SELECT COALESCE(SUM(quantity), 0) AS c FROM order_items WHERE order_id = ?').get(orderId).c;
        if (reservedCount < expected) throw new Error('Reserved keys are missing for this order');

        db.prepare(`
            UPDATE orders
            SET status = 'paid', stripe_session_id = COALESCE(?, stripe_session_id),
                payment_intent_id = COALESCE(?, payment_intent_id),
                paid_at = datetime('now'), updated_at = datetime('now')
            WHERE id = ?
        `).run(stripeData.sessionId || null, stripeData.paymentIntentId || null, orderId);

        db.prepare(`
            UPDATE activation_codes
            SET status = 'sold', used_at = datetime('now')
            WHERE order_id = ? AND status = 'reserved'
        `).run(orderId);

        db.prepare('DELETE FROM cart_items WHERE user_id = ?').run(order.user_id);
        return db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
    });

    let order;
    try {
        order = tx();
        const user = db.prepare('SELECT email FROM users WHERE id = ?').get(order.user_id);
        const codes = db.prepare(`
            SELECT ac.code, oi.product_name
            FROM activation_codes ac
            LEFT JOIN order_items oi ON oi.order_id = ac.order_id AND oi.product_id = ac.product_id
            WHERE ac.order_id = ? AND ac.status = 'sold'
            ORDER BY ac.id
        `).all(orderId);
        db.close();
        await sendCodesEmail(user.email, order, codes);
        return order;
    } catch (err) {
        db.close();
        throw err;
    }
}

function attachStripeSession(orderId, sessionId) {
    const db = getDB();
    db.prepare('UPDATE orders SET stripe_session_id = ?, updated_at = datetime("now") WHERE id = ?').run(sessionId, orderId);
    db.close();
}

module.exports = { createPendingOrder, getOrderForUser, getOrderForGuest, getOrCreateGuestUser, markOrderPaid, attachStripeSession };
