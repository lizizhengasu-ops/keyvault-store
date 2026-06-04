const express = require('express');
const { getDB } = require('../db/init');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();
router.use(requireAuth);

function loadCart(userId) {
    const db = getDB();
    const items = db.prepare(`
        SELECT ci.product_id, ci.quantity, p.name, p.price, p.original_price, p.platform, p.icon_type,
            (SELECT COUNT(*) FROM activation_codes ac WHERE ac.product_id = p.id AND ac.status = 'available') AS stock
        FROM cart_items ci
        JOIN products p ON p.id = ci.product_id
        WHERE ci.user_id = ? AND p.is_active = 1
        ORDER BY ci.created_at, ci.id
    `).all(userId);
    db.close();
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { items, total: Number(total.toFixed(2)) };
}

router.get('/', (req, res) => res.json(loadCart(req.user.id)));

router.post('/items', (req, res) => {
    const productId = Number(req.body.product_id);
    const quantity = Math.max(1, Number(req.body.quantity || 1));
    const db = getDB();
    const product = db.prepare('SELECT id FROM products WHERE id = ? AND is_active = 1').get(productId);
    if (!product) {
        db.close();
        return res.status(404).json({ error: 'Product not found' });
    }
    const stock = db.prepare("SELECT COUNT(*) AS c FROM activation_codes WHERE product_id = ? AND status = 'available'").get(productId).c;
    const current = db.prepare('SELECT quantity FROM cart_items WHERE user_id = ? AND product_id = ?').get(req.user.id, productId);
    const nextQuantity = Math.min(stock, (current ? current.quantity : 0) + quantity);
    if (nextQuantity < 1) {
        db.close();
        return res.status(400).json({ error: 'This product is out of stock' });
    }
    db.prepare(`
        INSERT INTO cart_items (user_id, product_id, quantity)
        VALUES (?, ?, ?)
        ON CONFLICT(user_id, product_id) DO UPDATE SET quantity = excluded.quantity
    `).run(req.user.id, productId, nextQuantity);
    db.close();
    res.json(loadCart(req.user.id));
});

router.patch('/items/:productId', (req, res) => {
    const productId = Number(req.params.productId);
    const quantity = Math.max(0, Number(req.body.quantity || 0));
    const db = getDB();
    if (quantity === 0) {
        db.prepare('DELETE FROM cart_items WHERE user_id = ? AND product_id = ?').run(req.user.id, productId);
    } else {
        const stock = db.prepare("SELECT COUNT(*) AS c FROM activation_codes WHERE product_id = ? AND status = 'available'").get(productId).c;
        db.prepare('UPDATE cart_items SET quantity = ? WHERE user_id = ? AND product_id = ?').run(Math.min(quantity, stock), req.user.id, productId);
    }
    db.close();
    res.json(loadCart(req.user.id));
});

router.delete('/items/:productId', (req, res) => {
    const db = getDB();
    db.prepare('DELETE FROM cart_items WHERE user_id = ? AND product_id = ?').run(req.user.id, req.params.productId);
    db.close();
    res.json(loadCart(req.user.id));
});

router.delete('/', (req, res) => {
    const db = getDB();
    db.prepare('DELETE FROM cart_items WHERE user_id = ?').run(req.user.id);
    db.close();
    res.json(loadCart(req.user.id));
});

module.exports = router;
