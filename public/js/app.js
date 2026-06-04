const state = {
    products: [],
    cart: { items: [], total: 0 },
    guestCart: JSON.parse(localStorage.getItem('kv_guest_cart') || '[]'),
    user: JSON.parse(localStorage.getItem('kv_user') || 'null'),
    token: localStorage.getItem('kv_token') || '',
    authMode: 'login',
};

const $ = (id) => document.getElementById(id);
const money = (value) => '$' + Number(value || 0).toFixed(2);

function api(path, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    if (state.token) headers.Authorization = 'Bearer ' + state.token;
    return fetch(path, { ...options, headers }).then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || 'Request failed');
        return data;
    });
}

function iconText(type) {
    return type === 'office' ? '365' : 'Win';
}

async function loadProducts() {
    const category = $('categoryFilter').value;
    const search = $('searchInput').value;
    const params = new URLSearchParams({ category, search });
    const data = await api('/api/products?' + params);
    state.products = data.products;
    renderProducts();
    renderDeals();
}

function renderDeals() {
    const deals = state.products.slice(0, 4);
    $('heroDeals').innerHTML = deals.map(function(product) { return `
        <div class="deal-row">
            <img class="deal-thumb" src="${product.image_url || ''}" alt="${product.name}" onerror="this.style.display='none'">
            <div>
                <strong>${product.name}</strong>
                <div class="platform">${product.platform}</div>
            </div>
            <div style="color:#c42b1c;font-weight:700;display:inline-flex;align-items:center;gap:6px">${money(product.price)}${product.original_price ? "<s style=\"color:var(--muted);font-size:13px;font-weight:400\">"+money(product.original_price)+"</s>" : ""}</div>
        </div>
    `; }).join('') || '<div class="notice">Products will appear here after seeding the database.</div>';
}

function renderProducts() {
    var gridProducts = state.products.filter(function(p) { return p.sort_order > 1; });
    $('productsGrid').innerHTML = gridProducts.map(function(product) { return `
        <article class="product-card" onclick="openDetail(${product.id})">
            ${product.badge ? '<span class="badge ' + (product.badge_class || '') + '">' + product.badge + '</span>' : ''}
            <div class="product-img-wrap">
                <img class="product-img" src="${product.image_url || ''}" alt="${product.name}" onerror="this.style.display='none'">
                <span class="product-icon-fallback" style="${product.image_url ? 'display:none' : ''}">${iconText(product.icon_type)}</span>
            </div>
            <div class="platform">${product.platform}</div>
            <h3>${product.name}</h3>
            ${product.stock > 0 ? '<div class="stock">' + product.stock + ' keys available</div>' : '<div class="stock">Out of stock</div>'}
        </article>
    `; }).join('') || '<div class="notice">No products found.</div>';
}

async function loadCart() {
    if (!state.token) {
        state.cart = buildGuestCart();
        renderCart();
        return;
    }
    state.cart = await api('/api/cart');
    renderCart();
}

function saveGuestCart() {
    localStorage.setItem('kv_guest_cart', JSON.stringify(state.guestCart));
}

function buildGuestCart() {
    var items = state.guestCart.map(function(guestItem) {
        var product = state.products.find(function(item) { return item.id === guestItem.product_id; });
        if (!product) return null;
        return {
            product_id: product.id,
            quantity: Math.min(guestItem.quantity, product.stock),
            name: product.name,
            price: product.price,
            original_price: product.original_price,
            platform: product.platform,
            icon_type: product.icon_type,
            stock: product.stock,
        };
    }).filter(function(item) { return item && item.quantity > 0; });
    var total = items.reduce(function(sum, item) { return sum + item.price * item.quantity; }, 0);
    return { items: items, total: Number(total.toFixed(2)) };
}

function renderCart() {
    var count = state.cart.items.reduce(function(sum, item) { return sum + item.quantity; }, 0);
    $('cartCount').textContent = count;
    $('cartTotal').textContent = money(state.cart.total);
    $('cartItems').innerHTML = state.cart.items.map(function(item) { return `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong>
                <div class="platform">${money(item.price)} x ${item.quantity}</div>
            </div>
            <div class="qty">
                <button onclick="updateQty(${item.product_id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQty(${item.product_id}, ${item.quantity + 1})">+</button>
            </div>
        </div>
    `; }).join('') || '<div class="notice">Your cart is empty.</div>';
}

async function addToCart(productId) {
    if (!state.token) {
        var current = state.guestCart.find(function(item) { return item.product_id === productId; });
        if (current) current.quantity += 1;
        else state.guestCart.push({ product_id: productId, quantity: 1 });
        saveGuestCart();
        await loadCart();
        return openCart();
    }
    await api('/api/cart/items', { method: 'POST', body: JSON.stringify({ product_id: productId, quantity: 1 }) });
    await loadCart();
    openCart();
}

async function updateQty(productId, quantity) {
    if (!state.token) {
        if (quantity <= 0) state.guestCart = state.guestCart.filter(function(item) { return item.product_id !== productId; });
        else {
            var current = state.guestCart.find(function(item) { return item.product_id === productId; });
            if (current) current.quantity = quantity;
        }
        saveGuestCart();
        await loadCart();
        return;
    }
    await api('/api/cart/items/' + productId, { method: 'PATCH', body: JSON.stringify({ quantity: quantity }) });
    await loadCart();
}

function openCart() { $('cartDrawer').classList.add('open'); }
function closeCart() { $('cartDrawer').classList.remove('open'); }
function openAuth() { $('authModal').classList.add('open'); $('authError').textContent = ''; }
function closeAuth() { $('authModal').classList.remove('open'); }
function openGuest() { $('guestModal').classList.add('open'); $('guestError').textContent = ''; }
function closeGuest() { $('guestModal').classList.remove('open'); }

function syncAuth() {
    $('authButton').textContent = state.user ? 'Hi, ' + (state.user.display_name || state.user.email.split('@')[0]) : 'Sign in';
}

async function submitAuth(event) {
    event.preventDefault();
    $('authError').textContent = '';
    try {
        var payload = { email: $('email').value, password: $('password').value, display_name: $('displayName').value };
        var endpoint = state.authMode === 'login' ? '/api/auth/login' : '/api/auth/register';
        var data = await api(endpoint, { method: 'POST', body: JSON.stringify(payload) });
        state.token = data.token;
        state.user = data.user;
        localStorage.setItem('kv_token', state.token);
        localStorage.setItem('kv_user', JSON.stringify(state.user));
        if (state.guestCart.length) {
            for (var i = 0; i < state.guestCart.length; i++) {
                await api('/api/cart/items', { method: 'POST', body: JSON.stringify({ product_id: state.guestCart[i].product_id, quantity: state.guestCart[i].quantity }) });
            }
            state.guestCart = [];
            saveGuestCart();
        }
        closeAuth();
        syncAuth();
        await loadCart();
    } catch (err) {
        $('authError').textContent = err.message;
    }
}

function toggleAuthMode() {
    state.authMode = state.authMode === 'login' ? 'register' : 'login';
    $('authTitle').textContent = state.authMode === 'login' ? 'Sign in' : 'Create account';
    $('nameField').style.display = state.authMode === 'login' ? 'none' : 'grid';
    $('toggleAuth').textContent = state.authMode === 'login' ? 'Create an account' : 'I already have an account';
}

async function checkout() {
    if (!state.cart.items.length) return;
    if (!state.token) return openGuest();
    try {
        var data = await api('/api/stripe/checkout', { method: 'POST', body: '{}' });
        window.location.href = data.url;
    } catch (err) {
        alert(err.message);
    }
}

async function guestCheckout(event) {
    event.preventDefault();
    $('guestError').textContent = '';
    try {
        var data = await api('/api/stripe/guest-checkout', {
            method: 'POST',
            body: JSON.stringify({
                email: $('guestEmail').value,
                items: state.cart.items.map(function(item) { return { product_id: item.product_id, quantity: item.quantity }; })
            }),
        });
        state.guestCart = [];
        saveGuestCart();
        window.location.href = data.url;
    } catch (err) {
        $('guestError').textContent = err.message;
    }
}

function bind() {
    $('categoryFilter').addEventListener('change', loadProducts);
    $('searchInput').addEventListener('input', function() {
        clearTimeout(window.searchTimer);
        window.searchTimer = setTimeout(loadProducts, 200);
    });
    $('cartButton').addEventListener('click', openCart);
    $('authButton').addEventListener('click', function() { state.user ? location.href = '/orders' : openAuth(); });
    $('authForm').addEventListener('submit', submitAuth);
    $('guestForm').addEventListener('submit', guestCheckout);
    $('guestSignIn').addEventListener('click', function() { closeGuest(); openAuth(); });
    $('toggleAuth').addEventListener('click', toggleAuthMode);
    $('checkoutButton').addEventListener('click', checkout);
    $('detailAddToCart').addEventListener('click', function() {
        if (currentDetailProduct) addToCart(currentDetailProduct.id);
    });
    document.querySelectorAll('[data-close="cart"]').forEach(function(el) { el.addEventListener('click', closeCart); });
    document.querySelectorAll('[data-close="auth"]').forEach(function(el) { el.addEventListener('click', closeAuth); });
    document.querySelectorAll('[data-close="guest"]').forEach(function(el) { el.addEventListener('click', closeGuest); });
    document.querySelectorAll('[data-close="detail"]').forEach(function(el) { el.addEventListener('click', closeDetail); });
}

var currentDetailProduct = null;

function openDetail(productId) {
    var product = state.products.find(function(p) { return p.id === productId; });
    if (!product) return;
    currentDetailProduct = product;
    var detailImages = [];
    try { detailImages = JSON.parse(product.detail_images || '[]'); } catch(e) {}
    var detailHtml = '';
    for (var i = 0; i < detailImages.length; i++) {
        detailHtml += '<img class="detail-img" src="' + detailImages[i] + '" alt="' + product.name + ' detail" onerror="this.style.display=\'none\'">';
    }
    $('detailImages').innerHTML = detailHtml;
    $('detailName').textContent = product.name;
    $('detailPrice').textContent = money(product.price);
    if (product.original_price) {
        $('detailOriginalPrice').innerHTML = '<s>' + money(product.original_price) + '</s>';
    } else {
        $('detailOriginalPrice').innerHTML = '';
    }
    $('detailDesc').textContent = product.description;
    $('detailModal').classList.add('open');
}

function closeDetail() { $('detailModal').classList.remove('open'); }

bind();
syncAuth();
loadProducts().catch(function(err) { $('productsGrid').innerHTML = '<div class="notice">' + err.message + '</div>'; });
loadCart().catch(function() {});

window.addToCart = addToCart;
window.updateQty = updateQty;
window.openDetail = openDetail;



