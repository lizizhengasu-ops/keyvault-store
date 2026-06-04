const admin = {
    token: localStorage.getItem('kv_admin_token') || '',
    products: [],
};

function $(id) { return document.getElementById(id); }
function money(value) { return `$${Number(value || 0).toFixed(2)}`; }

async function api(path, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    if (admin.token) headers.Authorization = `Bearer ${admin.token}`;
    const res = await fetch(path, { ...options, headers });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Request failed');
    return data;
}

function renderLogin() {
    const box = $('loginBox');
    if (!box || admin.token) {
        if (box) box.innerHTML = '';
        return;
    }
    box.innerHTML = `
        <form class="hero-panel" id="adminLogin" style="max-width:420px">
            <h2>Admin sign in</h2>
            <div class="field"><label>Username</label><input id="adminUser" value="admin"></div>
            <div class="field"><label>Password</label><input id="adminPass" type="password" value="admin123"></div>
            <div class="error" id="adminError"></div>
            <button class="primary-btn" type="submit">Sign in</button>
        </form>
    `;
    $('adminLogin').addEventListener('submit', async (event) => {
        event.preventDefault();
        try {
            const data = await api('/api/admin/login', { method: 'POST', body: JSON.stringify({ username: $('adminUser').value, password: $('adminPass').value }) });
            admin.token = data.token;
            localStorage.setItem('kv_admin_token', admin.token);
            location.reload();
        } catch (err) {
            $('adminError').textContent = err.message;
        }
    });
}

function requireToken() {
    renderLogin();
    return Boolean(admin.token);
}

async function dashboard() {
    if (!requireToken()) return;
    const data = await api('/api/admin/stats');
    $('stats').innerHTML = [
        ['Products', data.stats.products],
        ['Orders', data.stats.orders],
        ['Paid orders', data.stats.paidOrders],
        ['Revenue', money(data.stats.revenue)],
        ['Available keys', data.stats.availableCodes],
    ].map(([label, value]) => `<div class="stat">${label}<strong>${value}</strong></div>`).join('');
}

async function loadProducts() {
    const data = await api('/api/admin/products');
    admin.products = data.products;
    return data.products;
}

async function productsPage() {
    if (!requireToken()) return;
    await loadProducts();
    $('productForm').innerHTML = `
        <form class="hero-panel form-grid" id="saveProduct">
            <input type="hidden" id="productId">
            <div class="field"><label>Name</label><input id="name" required></div>
            <div class="field"><label>Category</label><select id="category"><option value="windows">Windows</option><option value="office">Office</option></select></div>
            <div class="field wide"><label>Description</label><input id="description"></div>
            <div class="field"><label>Platform</label><input id="platform"></div>
            <div class="field"><label>Price</label><input id="price" type="number" step="0.01" required></div>
            <div class="field"><label>Original price</label><input id="original_price" type="number" step="0.01"></div>
            <div class="field"><label>Badge</label><input id="badge"></div>
            <div class="field"><label>Sort order</label><input id="sort_order" type="number"></div>
            <div class="field"><label>Active</label><select id="is_active"><option value="1">Active</option><option value="0">Hidden</option></select></div>
            <div class="wide"><button class="primary-btn" type="submit">Save product</button> <button class="ghost-btn" type="button" onclick="clearProduct()">New</button></div>
        </form>
    `;
    $('saveProduct').addEventListener('submit', saveProduct);
    renderProductsTable();
}

function renderProductsTable() {
    $('productsTable').innerHTML = `<table><thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th><th></th></tr></thead><tbody>${admin.products.map((p) => `<tr><td>${p.name}</td><td>${p.category}</td><td>${money(p.price)}</td><td>${p.stock}</td><td>${p.is_active ? 'Active' : 'Hidden'}</td><td><button class="ghost-btn" onclick="editProduct(${p.id})">Edit</button></td></tr>`).join('')}</tbody></table>`;
}

function editProduct(id) {
    const p = admin.products.find((item) => item.id === id);
    for (const key of ['name','category','description','platform','price','original_price','badge','sort_order','is_active']) {
        $(key).value = p[key] ?? '';
    }
    $('productId').value = p.id;
}

function clearProduct() {
    $('saveProduct').reset();
    $('productId').value = '';
}

async function saveProduct(event) {
    event.preventDefault();
    const payload = {
        name: $('name').value,
        category: $('category').value,
        description: $('description').value,
        platform: $('platform').value,
        price: Number($('price').value),
        original_price: $('original_price').value,
        badge: $('badge').value,
        badge_class: $('badge').value.toLowerCase().includes('popular') || $('badge').value.toLowerCase().includes('value') ? 'hot' : 'new',
        icon_type: $('category').value,
        sort_order: Number($('sort_order').value || 0),
        is_active: Number($('is_active').value),
    };
    const id = $('productId').value;
    await api(id ? `/api/admin/products/${id}` : '/api/admin/products', { method: id ? 'PUT' : 'POST', body: JSON.stringify(payload) });
    clearProduct();
    await productsPage();
}

async function codesPage() {
    if (!requireToken()) return;
    await loadProducts();
    $('codeImport').innerHTML = `
        <form class="hero-panel" id="importCodes">
            <div class="field"><label>Product</label><select id="codeProduct">${admin.products.map((p) => `<option value="${p.id}">${p.name}</option>`).join('')}</select></div>
            <div class="field"><label>Codes, one per line</label><textarea id="codes"></textarea></div>
            <button class="primary-btn" type="submit">Import codes</button>
        </form>
    `;
    $('importCodes').addEventListener('submit', async (event) => {
        event.preventDefault();
        await api('/api/admin/codes/import', { method: 'POST', body: JSON.stringify({ product_id: $('codeProduct').value, codes: $('codes').value }) });
        $('codes').value = '';
        await renderCodes();
    });
    await renderCodes();
}

async function renderCodes() {
    const data = await api('/api/admin/codes');
    $('codesTable').innerHTML = `<table><thead><tr><th>ID</th><th>Product</th><th>Code</th><th>Status</th><th>Order</th></tr></thead><tbody>${data.codes.map((c) => `<tr><td>${c.id}</td><td>${c.product_name}</td><td>${c.code}</td><td>${c.status}</td><td>${c.order_id || ''}</td></tr>`).join('')}</tbody></table>`;
}

async function ordersPage() {
    if (!requireToken()) return;
    const data = await api('/api/admin/orders');
    $('ordersTable').innerHTML = `<table><thead><tr><th>Order</th><th>Customer</th><th>Status</th><th>Total</th><th>Paid at</th><th>Created</th></tr></thead><tbody>${data.orders.map((o) => `<tr><td>#${o.id}</td><td>${o.email}</td><td>${o.status}</td><td>${money(o.total_amount)}</td><td>${o.paid_at || ''}</td><td>${o.created_at}</td></tr>`).join('')}</tbody></table>`;
}

const logout = $('logout');
if (logout) logout.addEventListener('click', () => {
    localStorage.removeItem('kv_admin_token');
    location.reload();
});

const page = document.body.dataset.adminPage;
({ dashboard, products: productsPage, codes: codesPage, orders: ordersPage }[page] || dashboard)().catch((err) => {
    if (err.message.includes('Invalid') || err.message.includes('required')) {
        localStorage.removeItem('kv_admin_token');
        admin.token = '';
        renderLogin();
    } else {
        alert(err.message);
    }
});

window.editProduct = editProduct;
window.clearProduct = clearProduct;
