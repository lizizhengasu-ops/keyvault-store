const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const DATA_DIR = process.env.RAILWAY_VOLUME_MOUNT_PATH
  ? process.env.RAILWAY_VOLUME_MOUNT_PATH
  : path.join(__dirname, '../../data');

const DB_PATH = path.join(DATA_DIR, 'keyvault.db');

function getDB() {
    const dir = DATA_DIR;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');
    return db;
}

function initDB() {
    const db = getDB();

    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id            INTEGER PRIMARY KEY AUTOINCREMENT,
            email         TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            display_name  TEXT DEFAULT '',
            created_at    TEXT DEFAULT (datetime('now')),
            updated_at    TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS products (
            id              INTEGER PRIMARY KEY AUTOINCREMENT,
            name            TEXT NOT NULL,
            description     TEXT DEFAULT '',
            category        TEXT NOT NULL,
            platform        TEXT DEFAULT '',
            price           REAL NOT NULL,
            original_price  REAL,
            icon_type       TEXT DEFAULT 'windows',
            badge           TEXT DEFAULT '',
            badge_class     TEXT DEFAULT '',
            discount_text   TEXT DEFAULT '',
            is_active       INTEGER DEFAULT 1,
            sort_order      INTEGER DEFAULT 0,
            image_url       TEXT DEFAULT '',
            detail_images   TEXT DEFAULT '',
            created_at      TEXT DEFAULT (datetime('now')),
            updated_at      TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS activation_codes (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id  INTEGER NOT NULL,
            code        TEXT NOT NULL,
            status      TEXT DEFAULT 'available',
            order_id    INTEGER,
            reserved_at TEXT,
            used_at     TEXT,
            created_at  TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (product_id) REFERENCES products(id),
            FOREIGN KEY (order_id)   REFERENCES orders(id)
        );

        CREATE INDEX IF NOT EXISTS idx_codes_status ON activation_codes(status, product_id);

        CREATE TABLE IF NOT EXISTS orders (
            id              INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id         INTEGER NOT NULL,
            stripe_session_id TEXT,
            total_amount    REAL NOT NULL,
            currency        TEXT DEFAULT 'usd',
            status          TEXT DEFAULT 'pending',
            payment_intent_id TEXT,
            paid_at         TEXT,
            created_at      TEXT DEFAULT (datetime('now')),
            updated_at      TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS order_items (
            id              INTEGER PRIMARY KEY AUTOINCREMENT,
            order_id        INTEGER NOT NULL,
            product_id      INTEGER NOT NULL,
            product_name    TEXT NOT NULL,
            quantity        INTEGER NOT NULL DEFAULT 1,
            unit_price      REAL NOT NULL,
            FOREIGN KEY (order_id)   REFERENCES orders(id),
            FOREIGN KEY (product_id) REFERENCES products(id)
        );

        CREATE TABLE IF NOT EXISTS admin_users (
            id            INTEGER PRIMARY KEY AUTOINCREMENT,
            username      TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            display_name  TEXT DEFAULT 'Admin',
            created_at    TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS cart_items (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id    INTEGER NOT NULL,
            product_id INTEGER NOT NULL,
            quantity   INTEGER NOT NULL DEFAULT 1,
            created_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id)    REFERENCES users(id),
            FOREIGN KEY (product_id) REFERENCES products(id),
            UNIQUE(user_id, product_id)
        );
    `);

    db.close();
    console.log('Database initialized successfully');
}

module.exports = { initDB, getDB };

if (require.main === module) {
    initDB();
}
