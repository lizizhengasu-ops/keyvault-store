require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const { initDB } = require('./src/db/init');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database
initDB();

// Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());

// Stripe webhook needs raw body - must be before other route parsers
app.use('/api/stripe/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/products', require('./src/routes/products'));
app.use('/api/cart', require('./src/routes/cart'));
app.use('/api/orders', require('./src/routes/orders'));
app.use('/api/stripe', require('./src/routes/stripe'));
app.use('/api/admin', require('./src/routes/admin'));

// Page routes
app.get('/order-success', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'order-success.html'));
});

app.get('/orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'order-history.html'));
});

// Admin pages
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'index.html'));
});

app.get('/admin/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'products.html'));
});

app.get('/admin/codes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'codes.html'));
});

app.get('/admin/orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'orders.html'));
});

// SPA fallback - serve index.html for all unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`KeyVault server running at http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Reserved code cleanup - release codes reserved >30 min
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes
setInterval(() => {
    try {
        const Database = require('better-sqlite3');
        const db = new Database(path.join(__dirname, 'data', 'keyvault.db'));
        const result = db.prepare(`
            UPDATE activation_codes
            SET status = 'available', reserved_at = NULL, order_id = NULL
            WHERE status = 'reserved'
              AND reserved_at < datetime('now', '-30 minutes')
        `).run();
        if (result.changes > 0) {
            console.log(`[Cleanup] Released ${result.changes} expired reserved codes`);
        }
        db.close();
    } catch (e) {
        // DB might not exist yet during initial setup
    }
}, CLEANUP_INTERVAL);
