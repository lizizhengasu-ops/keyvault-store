const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

const DB_PATH = path.join(__dirname, '../../data/keyvault.db');

function seed() {
    const db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');

    const count = db.prepare('SELECT COUNT(*) as c FROM products').get();
    if (count.c > 0) {
        console.log('Database already seeded, skipping...');
        db.close();
        return;
    }

    console.log('Seeding database with OEM products...');

    const insertProduct = db.prepare(`
        INSERT INTO products (name, description, category, platform, price, original_price, icon_type, badge, badge_class, discount_text, sort_order, image_url, detail_images)
        VALUES (@name, @description, @category, @platform, @price, @original_price, @icon_type, @badge, @badge_class, @discount_text, @sort_order, @image_url, @detail_images)
    `);

    const winDetail = JSON.stringify([
        "/images/products/win11pro/detail/detail-01.png",
        "/images/products/win11pro/detail/detail-02.png",
        "/images/products/win11pro/detail/detail-03.png",
        "/images/products/win11pro/detail/detail-04.png",
        "/images/products/win11pro/detail/detail-05.png",
        "/images/products/win11pro/detail/detail-06.png",
        "/images/products/win11pro/detail/detail-07.png"
    ]);
    const win11HomeDetail = JSON.stringify([
        "/images/products/win11home/detail/detail-01.png",
        "/images/products/win11home/detail/detail-02.png",
        "/images/products/win11home/detail/detail-03.png",
        "/images/products/win11home/detail/detail-04.png",
        "/images/products/win11home/detail/detail-05.png",
        "/images/products/win11home/detail/detail-06.png",
        "/images/products/win11home/detail/detail-07.png"
    ]);
    const win10Detail = JSON.stringify([
        "/images/products/win10pro/detail/detail-01.png",
        "/images/products/win10pro/detail/detail-02.png",
        "/images/products/win10pro/detail/detail-03.png",
        "/images/products/win10pro/detail/detail-04.png",
        "/images/products/win10pro/detail/detail-05.png",
        "/images/products/win10pro/detail/detail-06.png",
        "/images/products/win10pro/detail/detail-07.png"
    ]);
    const win10HomeDetail = JSON.stringify([
        "/images/products/win10home/detail/detail-01.png",
        "/images/products/win10home/detail/detail-02.png",
        "/images/products/win10home/detail/detail-03.png",
        "/images/products/win10home/detail/detail-04.png",
        "/images/products/win10home/detail/detail-05.png",
        "/images/products/win10home/detail/detail-06.png",
        "/images/products/win10home/detail/detail-07.png"
    ]);
    const officeDetail = JSON.stringify([
        "/images/products/office2019/detail/bb6c089d-aec8-48d3-8b3a-69ded77268b0.jpeg",
        "/images/products/office2019/detail/Office\u4e2d\u5c0f\u4f01\u4e1a\u56fe.png"
    ]);

    const products = [
        { name: 'Windows 11 Pro OEM Key (1PC)', description: 'Genuine OEM license key. Lifetime activation for 1 PC. Digital download. Supports 32/64-bit.', category: 'windows', platform: 'OEM Key - Digital Download', price: 34.99, original_price: 116.99, icon_type: 'windows', badge: 'Best Seller', badge_class: 'new', discount_text: '-70%', sort_order: 1, image_url: '/images/products/win11pro/thumb.png', detail_images: winDetail },
        { name: 'Windows 11 Home OEM Key (1PC)', description: 'Genuine OEM license key. Lifetime activation for 1 PC. Digital download. Supports 32/64-bit.', category: 'windows', platform: 'OEM Key - Digital Download', price: 19.99, original_price: 66.99, icon_type: 'windows', badge: 'Popular', badge_class: 'hot', discount_text: '-70%', sort_order: 2, image_url: '/images/products/win11home/thumb.png', detail_images: win11HomeDetail },
        { name: 'Windows 10 Pro OEM Key (1PC)', description: 'Genuine OEM license key. Lifetime activation for 1 PC. Digital download. Supports 32/64-bit.', category: 'windows', platform: 'OEM Key - Digital Download', price: 14.99, original_price: 49.99, icon_type: 'windows', badge: '', badge_class: '', discount_text: '-70%', sort_order: 3, image_url: '/images/products/win10pro/thumb.png', detail_images: win10Detail },
        { name: 'Windows 10 Home OEM Key (1PC)', description: 'Genuine OEM license key. Lifetime activation for 1 PC. Digital download. Supports 32/64-bit.', category: 'windows', platform: 'OEM Key - Digital Download', price: 11.99, original_price: 39.99, icon_type: 'windows', badge: '', badge_class: '', discount_text: '-70%', sort_order: 4, image_url: '/images/products/win10home/thumb.png', detail_images: win10HomeDetail },
        { name: 'Office Professional Plus 2019 (1PC)', description: 'Genuine Office 2019 Pro Plus license key. Lifetime activation for 1 PC. Includes Word, Excel, PowerPoint, Outlook, Publisher, Access.', category: 'office', platform: 'OEM Key - Digital Download', price: 44.99, original_price: 149.99, icon_type: 'office', badge: 'Best Value', badge_class: 'hot', discount_text: '-70%', sort_order: 5, image_url: '/images/products/office2019/thumb.jpeg', detail_images: officeDetail },
        { name: 'Win 11 Pro + Office 2019 Bundle', description: 'Bundle: Windows 11 Pro OEM + Office Pro Plus 2019. Complete professional bundle.', category: 'windows', platform: 'Bundle - Digital Download', price: 54.99, original_price: 183.98, icon_type: 'windows', badge: 'Bundle Deal', badge_class: 'hot', discount_text: '-70%', sort_order: 6, image_url: '/images/products/office2019/thumb.jpeg', detail_images: '[]' },
        { name: 'Win 11 Home + Office 2019 Bundle', description: 'Bundle: Windows 11 Home OEM + Office Pro Plus 2019. The perfect home office combo.', category: 'windows', platform: 'Bundle - Digital Download', price: 44.99, original_price: 133.98, icon_type: 'windows', badge: 'Bundle Deal', badge_class: 'hot', discount_text: '-66%', sort_order: 7, image_url: '/images/products/office2019/thumb.jpeg', detail_images: '[]' },
        { name: 'Win 10 Pro + Office 2019 Bundle', description: 'Bundle: Windows 10 Pro OEM + Office Pro Plus 2019. Professional bundle at a great price.', category: 'windows', platform: 'Bundle - Digital Download', price: 39.99, original_price: 128.98, icon_type: 'windows', badge: 'Bundle Deal', badge_class: 'hot', discount_text: '-69%', sort_order: 8, image_url: '/images/products/office2019/thumb.jpeg', detail_images: '[]' },
        { name: 'Win 10 Home + Office 2019 Bundle', description: 'Bundle: Windows 10 Home OEM + Office Pro Plus 2019. Complete home setup affordably.', category: 'windows', platform: 'Bundle - Digital Download', price: 36.99, original_price: 125.98, icon_type: 'windows', badge: 'Bundle Deal', badge_class: 'hot', discount_text: '-71%', sort_order: 9, image_url: '/images/products/office2019/thumb.jpeg', detail_images: '[]' }
    ];

    const insertMany = db.transaction((items) => {
        for (const item of items) {
            insertProduct.run(item);
        }
    });
    insertMany(products);

    const insertCode = db.prepare(`
        INSERT INTO activation_codes (product_id, code, status) VALUES (?, ?, 'available')
    `);
    const sampleCodes = [];
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 50; j++) {
            const prefix = i <= 4 ? 'WIN' : (i <= 5 ? 'OFC' : 'BDL');
            sampleCodes.push([i, prefix + '-' + String(i).padStart(3,'0') + '-' + String(j).padStart(3,'0') + '-' + randomHex(8).toUpperCase()]);
        }
    }
    const insertCodes = db.transaction((codes) => {
        for (const code of codes) {
            insertCode.run(code[0], code[1]);
        }
    });
    insertCodes(sampleCodes);

    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const adminHash = bcrypt.hashSync(adminPassword, 10);
    db.prepare('INSERT OR IGNORE INTO admin_users (username, password_hash, display_name) VALUES (?, ?, ?)').run(adminUsername, adminHash, 'Administrator');

    db.close();
    console.log('Database seeded successfully!');
    console.log('  - ' + products.length + ' products');
    console.log('  - ' + sampleCodes.length + ' activation codes');
    console.log('  - Admin user: ' + adminUsername + ' / ' + adminPassword);
}

function randomHex(length) {
    const chars = '0123456789abcdef';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

if (require.main === module) {
    require('dotenv').config();
    seed();
}

module.exports = seed;




