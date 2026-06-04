const express = require('express');
const bcrypt = require('bcryptjs');
const { getDB } = require('../db/init');
const { signAdmin, requireAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/login', (req, res) => {
    const username = String(req.body.username || '').trim();
    const password = String(req.body.password || '');
    const db = getDB();
    const admin = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username);
    db.close();
    if (!admin || !bcrypt.compareSync(password, admin.password_hash)) {
        return res.status(401).json({ error: 'Invalid admin credentials' });
    }
    res.json({ token: signAdmin(admin), admin: { id: admin.id, username: admin.username, display_name: admin.display_name } });
});

router.use(requireAdmin);

router.get('/stats', (req, res) => {
    const db = getDB();
    const stats = {
        products: db.prepare('SELECT COUNT(*) AS c FROM products').get().c,
        orders: db.prepare('SELECT COUNT(*) AS c FROM orders').get().c,
        paidOrders: db.prepare("SELECT COUNT(*) AS c FROM orders WHERE status = 'paid'").get().c,
        revenue: db.prepare("SELECT COALESCE(SUM(total_amount), 0) AS c FROM orders WHERE status = 'paid'").get().c,
        availableCodes: db.prepare("SELECT COUNT(*) AS c FROM activation_codes WHERE status = 'available'").get().c,
    };
    db.close();
    res.json({ stats });
});

router.get('/products', (req, res) => {
    const db = getDB();
    const products = db.prepare(`
        SELECT p.*,
            (SELECT COUNT(*) FROM activation_codes ac WHERE ac.product_id = p.id AND ac.status = 'available') AS stock
        FROM products p ORDER BY p.sort_order, p.id
    `).all();
    db.close();
    res.json({ products });
});

router.post('/products', (req, res) => {
    const product = normalizeProduct(req.body);
    const db = getDB();
    const result = db.prepare(`
        INSERT INTO products (name, description, category, platform, price, original_price, icon_type, badge, badge_class, discount_text, is_active, sort_order)
        VALUES (@name, @description, @category, @platform, @price, @original_price, @icon_type, @badge, @badge_class, @discount_text, @is_active, @sort_order)
    `).run(product);
    db.close();
    res.status(201).json({ id: result.lastInsertRowid });
});

router.put('/products/:id', (req, res) => {
    const product = { ...normalizeProduct(req.body), id: Number(req.params.id) };
    const db = getDB();
    db.prepare(`
        UPDATE products SET name=@name, description=@description, category=@category, platform=@platform,
            price=@price, original_price=@original_price, icon_type=@icon_type, badge=@badge,
            badge_class=@badge_class, discount_text=@discount_text, is_active=@is_active,
            sort_order=@sort_order, updated_at=datetime('now')
        WHERE id=@id
    `).run(product);
    db.close();
    res.json({ ok: true });
});

router.get('/codes', (req, res) => {
    const db = getDB();
    const codes = db.prepare(`
        SELECT ac.*, p.name AS product_name
        FROM activation_codes ac JOIN products p ON p.id = ac.product_id
        ORDER BY ac.id DESC LIMIT 500
    `).all();
    db.close();
    res.json({ codes });
});

router.post('/codes/import', (req, res) => {
    const productId = Number(req.body.product_id);
    const codes = String(req.body.codes || '').split(/\r?\n|,/).map((code) => code.trim()).filter(Boolean);
    if (!productId || !codes.length) return res.status(400).json({ error: 'Product and at least one code are required' });
    const db = getDB();
    const tx = db.transaction(() => {
        const stmt = db.prepare("INSERT INTO activation_codes (product_id, code, status) VALUES (?, ?, 'available')");
        for (const code of codes) stmt.run(productId, code);
    });
    tx();
    db.close();
    res.status(201).json({ imported: codes.length });
});

router.get('/orders', (req, res) => {
    const db = getDB();
    const orders = db.prepare(`
        SELECT o.*, u.email
        FROM orders o JOIN users u ON u.id = o.user_id
        ORDER BY o.id DESC LIMIT 500
    `).all();
    db.close();
    res.json({ orders });
});

function normalizeProduct(input) {
    return {
        name: String(input.name || '').trim(),
        description: String(input.description || '').trim(),
        category: String(input.category || 'windows').trim(),
        platform: String(input.platform || '').trim(),
        price: Number(input.price || 0),
        original_price: input.original_price ? Number(input.original_price) : null,
        icon_type: String(input.icon_type || input.category || 'windows').trim(),
        badge: String(input.badge || '').trim(),
        badge_class: String(input.badge_class || '').trim(),
        discount_text: String(input.discount_text || '').trim(),
        is_active: input.is_active === false || input.is_active === 0 ? 0 : 1,
        sort_order: Number(input.sort_order || 0),
    };
}

module.exports = router;
