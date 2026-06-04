const express = require('express');
const { getDB } = require('../db/init');

const router = express.Router();

router.get('/', (req, res) => {
    const category = String(req.query.category || '').trim();
    const search = String(req.query.search || '').trim().toLowerCase();
    const db = getDB();
    let sql = `
        SELECT p.*,
            (SELECT COUNT(*) FROM activation_codes ac WHERE ac.product_id = p.id AND ac.status = 'available') AS stock
        FROM products p
        WHERE p.is_active = 1
    `;
    const params = [];
    if (category && category !== 'all') {
        sql += ' AND p.category = ?';
        params.push(category);
    }
    if (search) {
        sql += ' AND (LOWER(p.name) LIKE ? OR LOWER(p.description) LIKE ? OR LOWER(p.platform) LIKE ?)';
        params.push('%' + search + '%', '%' + search + '%', '%' + search + '%');
    }
    sql += ' ORDER BY p.sort_order, p.id';
    const products = db.prepare(sql).all(...params);
    db.close();
    res.json({ products });
});

router.get('/:id', (req, res) => {
    const db = getDB();
    const product = db.prepare(`
        SELECT p.*,
            (SELECT COUNT(*) FROM activation_codes ac WHERE ac.product_id = p.id AND ac.status = 'available') AS stock
        FROM products p WHERE p.id = ? AND p.is_active = 1
    `).get(req.params.id);
    db.close();
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ product });
});

module.exports = router;
