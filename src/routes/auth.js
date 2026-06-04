const express = require('express');
const bcrypt = require('bcryptjs');
const { getDB } = require('../db/init');
const { signUser, requireAuth } = require('../middleware/auth');

const router = express.Router();

function cleanUser(user) {
    return { id: user.id, email: user.email, display_name: user.display_name || '' };
}

router.post('/register', (req, res) => {
    const email = String(req.body.email || '').trim().toLowerCase();
    const password = String(req.body.password || '');
    const displayName = String(req.body.display_name || '').trim();
    if (!email || !email.includes('@')) return res.status(400).json({ error: 'Valid email is required' });
    if (password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters' });

    const db = getDB();
    try {
        const hash = bcrypt.hashSync(password, 10);
        const result = db.prepare('INSERT INTO users (email, password_hash, display_name) VALUES (?, ?, ?)').run(email, hash, displayName);
        const user = { id: result.lastInsertRowid, email, display_name: displayName };
        res.json({ token: signUser(user), user: cleanUser(user) });
    } catch (err) {
        res.status(409).json({ error: 'An account with this email already exists' });
    } finally {
        db.close();
    }
});

router.post('/login', (req, res) => {
    const email = String(req.body.email || '').trim().toLowerCase();
    const password = String(req.body.password || '');
    const db = getDB();
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    db.close();
    if (!user || !bcrypt.compareSync(password, user.password_hash)) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.json({ token: signUser(user), user: cleanUser(user) });
});

router.get('/me', requireAuth, (req, res) => {
    res.json({ user: cleanUser(req.user) });
});

module.exports = router;
