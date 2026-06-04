const jwt = require('jsonwebtoken');
const { getDB } = require('../db/init');

const JWT_SECRET = process.env.JWT_SECRET || 'development-secret-change-me';

function signUser(user) {
    return jwt.sign({ id: user.id, email: user.email, role: 'user' }, JWT_SECRET, { expiresIn: '7d' });
}

function signAdmin(admin) {
    return jwt.sign({ id: admin.id, username: admin.username, role: 'admin' }, JWT_SECRET, { expiresIn: '8h' });
}

function readToken(req) {
    const header = req.headers.authorization || '';
    if (!header.startsWith('Bearer ')) return null;
    return header.slice(7);
}

function requireAuth(req, res, next) {
    try {
        const token = readToken(req);
        if (!token) return res.status(401).json({ error: 'Authentication required' });
        const payload = jwt.verify(token, JWT_SECRET);
        if (payload.role !== 'user') return res.status(403).json({ error: 'User access required' });
        const db = getDB();
        const user = db.prepare('SELECT id, email, display_name FROM users WHERE id = ?').get(payload.id);
        db.close();
        if (!user) return res.status(401).json({ error: 'User not found' });
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
}

function requireAdmin(req, res, next) {
    try {
        const token = readToken(req);
        if (!token) return res.status(401).json({ error: 'Admin authentication required' });
        const payload = jwt.verify(token, JWT_SECRET);
        if (payload.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });
        const db = getDB();
        const admin = db.prepare('SELECT id, username, display_name FROM admin_users WHERE id = ?').get(payload.id);
        db.close();
        if (!admin) return res.status(401).json({ error: 'Admin not found' });
        req.admin = admin;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid or expired admin token' });
    }
}

module.exports = { signUser, signAdmin, requireAuth, requireAdmin };
