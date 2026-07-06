require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const { initDB, getDB } = require('./src/db/init');
const seoKit = require('../seo-kit/index.js');

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

// SEO Kit middleware
app.use(seoKit.express.middleware());

// API Routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/products', require('./src/routes/products'));
app.use('/api/cart', require('./src/routes/cart'));
app.use('/api/orders', require('./src/routes/orders'));
app.use('/api/stripe', require('./src/routes/stripe'));
app.use('/api/admin', require('./src/routes/admin'));



// Frontend SEO API - called by SPA when creating pages
app.post('/api/seo/generate', (req, res) => {
  try {
    var result = seoKit.generate(req.body);
    seoKit.logEvent({action:'api-generate', type: req.body.type, page: req.body.slug, score: result.valid ? 100 : 0});
    res.json(result);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});
app.get('/api/seo/report', (req, res) => {
  try {
    res.json(seoKit.report({ from: req.query.from, to: req.query.to }));
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// ========== SEO-friendly pre-rendered routes ==========
const SLUG_MAP = {
  'windows-11-pro-key': 1, 'windows-11-home-key': 2,
  'windows-10-pro-key': 3, 'windows-10-home-key': 4,
  'office-2019-pro-plus-key': 5,
  'win-11-pro-office-2019-bundle': 6, 'win-11-home-office-2019-bundle': 7,
  'win-10-pro-office-2019-bundle': 8, 'win-10-home-office-2019-bundle': 9
};
const CATEGORIES = {
  'windows-keys': 'Windows License Keys', 'windows-11-keys': 'Windows 11 License Keys',
  'windows-10-keys': 'Windows 10 License Keys', 'office-keys': 'Office License Keys'
};
const STATIC_PAGES = {
  'b2b': { name: 'Bulk Windows and Office License Keys for Business', type: 'b2b' },
  'faq': { name: 'OEM License Keys Frequently Asked Questions', type: 'faq' }
};

function shortenName(n) { return n.replace(/\s*\([^)]*\)/g, '').trim(); }

function buildHTML(seo, body) {
  var j = JSON.stringify(seo.jsonLd);
  var h = function(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};
  return '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">'
    + '<title>' + h(seo.title) + '</title><meta name="description" content="' + h(seo.metaDescription) + '">'
    + '<meta property="og:title" content="' + h(seo.ogTitle) + '"><meta property="og:description" content="' + h(seo.ogDescription) + '">'
    + '<meta property="og:url" content="' + h(seo.ogUrl) + '"><meta property="og:type" content="' + seo.ogType + '">'
    + '<link rel="canonical" href="' + h(seo.canonical) + '"><script type="application/ld+json">' + j + '</script>'
    + '<link rel="stylesheet" href="/css/styles.css"></head><body>' + body + '<script src="/js/app.js"></script></body></html>';
}

// Product page - pre-rendered with SEO
app.get('/product/:slug', (req, res, next) => {
  var slug = req.params.slug.toLowerCase();
  var pid = SLUG_MAP[slug];
  if (!pid) return next();
  try {
    var db = getDB();
    var p = db.prepare("SELECT p.*,(SELECT COUNT(*) FROM activation_codes ac WHERE ac.product_id=p.id AND ac.status='available') AS stock FROM products p WHERE p.id=? AND p.is_active=1").get(pid);
    db.close();
    if (!p) return next();
    var seo = seoKit.generate({type:'product',name:shortenName(p.name),slug:slug,category:p.category,price:p.price,stock:p.stock||0,description:p.description,baseUrl:process.env.DOMAIN||'http://localhost:'+PORT});
    var body = '<div id="root"><div style="max-width:1068px;margin:0 auto;padding:80px 20px"><h1>' + p.name + '</h1><p style="color:#666">' + p.platform + '</p><p>$' + p.price.toFixed(2) + (p.original_price ? ' <s>$' + p.original_price.toFixed(2) + '</s>' : '') + '</p><p>' + p.description + '</p></div></div>';
    res.send(buildHTML(seo, body));
    seoKit.logEvent({action:'generate',type:'product',page:'/product/' + slug,score:100});
  } catch(e) { console.error('SEO product error:',e); next(); }
});

// Category pages
Object.keys(CATEGORIES).forEach(function(slug) {
  app.get('/' + slug, function(req, res, next) {
    try {
      var seo = seoKit.generate({type:'category',name:CATEGORIES[slug],slug:slug,baseUrl:process.env.DOMAIN||'http://localhost:'+PORT});
      res.send(buildHTML(seo, '<div id="root"><div style="max-width:1068px;margin:0 auto;padding:80px 20px"><h1>' + CATEGORIES[slug] + '</h1><div id="productsGrid"></div></div></div>'));
      seoKit.logEvent({action:'generate',type:'category',page:'/' + slug,score:100});
    } catch(e) { console.error('Category error:',e); next(); }
  });
});

// Static pages (B2B, FAQ)
Object.keys(STATIC_PAGES).forEach(function(slug) {
  app.get('/' + slug, function(req, res, next) {
    try {
      var c = STATIC_PAGES[slug];
      var seo = seoKit.generate({type:c.type,name:c.name,slug:slug,baseUrl:process.env.DOMAIN||'http://localhost:'+PORT});
      res.send(buildHTML(seo, '<div id="root"><div style="max-width:768px;margin:0 auto;padding:80px 20px"><h1>' + c.name + '</h1><p style="color:#666;line-height:1.7">Page being updated.</p></div></div>'));
      seoKit.logEvent({action:'generate',type:c.type,page:'/' + slug,score:100});
    } catch(e) { console.error('Static page error:',e); next(); }
  });
});

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


// Sitemap route
app.get('/sitemap.xml', (req, res) => {
  var pages = [
    {loc: '/', priority: '1.0'},
    {loc: '/windows-keys', priority: '0.9'},
    {loc: '/windows-11-keys', priority: '0.9'},
    {loc: '/windows-10-keys', priority: '0.8'},
    {loc: '/office-keys', priority: '0.9'},
    {loc: '/product/windows-11-pro-key', priority: '0.8'},
    {loc: '/product/windows-11-home-key', priority: '0.8'},
    {loc: '/product/windows-10-pro-key', priority: '0.8'},
    {loc: '/product/windows-10-home-key', priority: '0.8'},
    {loc: '/product/office-2019-pro-plus-key', priority: '0.8'},
    {loc: '/product/win-11-pro-office-2019-bundle', priority: '0.7'},
    {loc: '/product/win-11-home-office-2019-bundle', priority: '0.7'},
    {loc: '/product/win-10-pro-office-2019-bundle', priority: '0.7'},
    {loc: '/product/win-10-home-office-2019-bundle', priority: '0.7'},
    {loc: '/b2b', priority: '0.9'},
    {loc: '/faq', priority: '0.8'}
  ];
  var baseUrl = process.env.DOMAIN || 'http://localhost:' + PORT;
  var xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  pages.forEach(function(p) { xml += '<url><loc>' + baseUrl + p.loc + '</loc><priority>' + p.priority + '</priority><changefreq>weekly</changefreq></url>'; });
  xml += '</urlset>';
  res.header('Content-Type', 'application/xml');
  res.send(xml);
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
