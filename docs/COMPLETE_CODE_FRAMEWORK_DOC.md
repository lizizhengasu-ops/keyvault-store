# keys-starter - Complete Code Framework

## Overview

WordPress e-commerce for Windows/Office license keys.
Theme: Astra 4.13.4 | Total file: 39253 bytes | Custom code: 30334 bytes
Languages: English / Chinese / Spanish (Polylang)

---
## Custom Code Sections

### Section 1: Custom: button text + footer + hide mobile header (NO JS nav interference)

### Section 2

`php
add_filter( "woocommerce_product_add_to_cart_text", function( $text ) {
    return "Buy & Download";
}, 999 );
`

### Section 3

`php
// Buy Now redirect for single product pages
add_filter( "woocommerce_add_to_cart_redirect", function( $url ) {
    return wc_get_checkout_url();
});

add_action( "wp_head", function() {
    echo "<style>
        @media (min-width: 922px) {
            #ast-mobile-header { display: none !important; }
            .ast-mobile-popup-drawer { display: none !important; }
        }
    </style>";
});

add_action( "wp_footer", function() {
    echo '<div class="ms-footer-fullwidth">
        <div class="ms-footer-inner">
            <div class="ms-footer-cols">
                <div class="ms-footer-col">
                    <h4>About Keys-Starter</h4>
                    <ul>
                        <li><a href="/about/">About Us</a></li>
                        <li><a href="/refund_returns/">Refunds & Returns</a></li>
                        <li><a href="/shipping/">Shipping Policy</a></li>
                        <li><a href="/privacy/">Privacy Policy</a></li>
                        <li><a href="/terms/">Terms of Service</a></li>
                        <li><a href="/contact/">Contact</a></li>
                    </ul>
                </div>
                <div class="ms-footer-col">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="/blog/">Software Blog</a></li>
                        <li><a href="/faq/">FAQ</a></li>
                        <li><a href="/activation/">Installation & Activation</a></li>
                        <li><a href="/bulk-orders/">B2B Wholesale</a></li>
                    </ul>
                </div>
                <div class="ms-footer-col">
                    <h4>Trusted Partner</h4>
                    <div class="ms-partner-badge">Microsoft Partner</div>
                    <p class="ms-partner-desc">Keys-Starter is an authorized global distributor of genuine Microsoft license keys.</p>
                </div>
            </div>
        </div>
        <div class="ms-footer-bottom">
            <div class="ms-footer-inner">
                <p>&copy; 2026 Keys-Starter. All rights reserved.</p>
            </div>
        </div>
    </div>';
});
`

### Section 4

`php
// Microsoft Style CSS
add_action('wp_head', function() {
    echo '<style>
        :root {
            --ms-blue: #0078d4;
            --ms-blue-dark: #005a9e;
            --ms-bg: #ffffff;
            --ms-bg-light: #f2f2f2;
            --ms-text: #1a1a1a;
            --ms-border: #e6e6e6;
            --ms-shadow: 0 2px 8px rgba(0,0,0,0.08);
            --ms-hover-shadow: 0 4px 16px rgba(0,0,0,0.12);
            --ms-radius: 4px;
        }
        body, button, input, select, textarea {
            font-family: "Segoe UI", SegoeUI, sans-serif !important;
        }
        .site-header {
            background: #fff !important;
            border-bottom: 1px solid var(--ms-border) !important;
        }
        .main-navigation a {
            color: var(--ms-text) !important;
            font-size: 14px !important;
            padding: 8px 14px !important;
        }
        .main-navigation a:hover {
            color: var(--ms-blue) !important;
        }
        .wc-block-grid__product {
            border: 1px solid var(--ms-border) !important;
            border-radius: var(--ms-radius) !important;
            padding: 16px !important;
            background: #fff !important;
            box-shadow: var(--ms-shadow) !important;
            transition: box-shadow 0.2s ease !important;
        }
        .wc-block-grid__product:hover {
            box-shadow: var(--ms-hover-shadow) !important;
            transform: translateY(-2px) !important;
        }
        .wc-block-grid__product-add-to-cart .wp-block-button__link.add_to_cart_button {
            background: var(--ms-blue) !important;
            color: #fff !important;
            border-radius: var(--ms-radius) !important;
            padding: 4px 12px !important;
            font-size: 12px !important;
            line-height: 1.5 !important;
            min-height: auto !important;
            display: inline-block !important;
            width: auto !important;
        }
        .wc-block-grid__product-add-to-cart .wp-block-button__link.add_to_cart_button:hover {
            background: var(--ms-blue-dark) !important;
        }
        .site-footer {
            border-top: 1px solid var(--ms-border) !important;
            background: var(--ms-bg-light) !important;
        }
        /* Sticky header */
        #ast-desktop-header {
            position: sticky !important;
            top: 0 !important;
            z-index: 9999 !important;
        }
    
        /* Footer - wincdkey style */
        .ms-footer-fullwidth { background:#f2f2f2; border-top:1px solid #e6e6e6; padding:40px 0 0; margin-top:40px; width:100%; display:block; }
        .ms-footer-inner { max-width:1240px; margin:0 auto; padding:0 20px; }
        .ms-footer-cols { display:grid; grid-template-columns:1fr 1fr 1fr; gap:40px; }
        .ms-footer-col h4 { font-size:14px; font-weight:600; color:#1a1a1a; margin:0 0 16px; text-transform:uppercase; letter-spacing:0.5px; }
        .ms-footer-col ul { list-style:none; margin:0; padding:0; }
        .ms-footer-col ul li { margin-bottom:8px; }
        .ms-footer-col ul li a { color:#616161; text-decoration:none; font-size:13px; }
        .ms-footer-col ul li a:hover { color:#0078d4; text-decoration:underline; }
        .ms-partner-badge { display:inline-block; background:#0078d4; color:#fff; padding:4px 12px; border-radius:4px; font-size:12px; font-weight:600; margin-bottom:12px; }
        .ms-partner-desc { font-size:13px; color:#616161; line-height:1.6; margin:0; }
        .ms-footer-bottom { background:#e6e6e6; margin-top:40px; padding:16px 0; text-align:center; }
        .ms-footer-bottom p { margin:0; font-size:12px; color:#616161; }
        .ms-footer-col { margin-bottom:24px; }
        @media (max-width:768px) {
            .ms-footer-cols { grid-template-columns:1fr; gap:24px; }
            .ms-footer-fullwidth { padding:24px 0 0; }
        }
</style>';
});
`

### Section 5

`php
// Drop-down Navigation (wincdkey style) + Search + Product Page
add_action('wp_head', function() {
    echo '<style>
        .main-header-menu .menu-item-has-children { position: relative; }
        .main-header-menu .menu-item-has-children > a:after {
            content: " \25BC";
            font-size: 9px; margin-left: 4px; vertical-align: middle;
        }
        .main-header-menu .sub-menu {
            display: none; position: absolute; top: 100%; left: 0;
            background: #fff; min-width: 200px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.12);
            border: 1px solid #e6e6e6; border-radius: 4px;
            padding: 8px 0; z-index: 1000;
        }
        .main-header-menu .menu-item-has-children:hover > .sub-menu { display: block; }
        .main-header-menu .sub-menu a {
            padding: 8px 20px !important; display: block;
            font-size: 13px !important; color: #333 !important;
        }
        .main-header-menu .sub-menu a:hover { background: #f2f2f2 !important; color: #0078d4 !important; }
        
        .site-search { margin: 0 20px; flex: 1; max-width: 400px; }
        .site-search .search-form { display: flex; border: 1px solid #e6e6e6; border-radius: 4px; overflow: hidden; background: #f8f8f8; }
        .site-search .search-form input[type=\"search\"] {
            border: none !important; background: transparent !important;
            padding: 6px 12px !important; font-size: 13px !important;
            outline: none !important; width: 100%;
        }
        .site-search .search-form button {
            background: #0078d4 !important; color: #fff !important;
            border: none !important; padding: 6px 14px !important;
            cursor: pointer; font-size: 13px;
            border-radius: 0 4px 4px 0 !important;
        }
        .site-search .search-form button:hover { background: #005a9e !important; }
        
        .woocommerce ul.products { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        .woocommerce ul.products li.product {
            border: 1px solid #e6e6e6; border-radius: 4px; padding: 16px;
            background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            transition: box-shadow 0.2s, transform 0.2s;
            width: auto !important; margin: 0 !important;
        }
        .woocommerce ul.products li.product:hover {
            box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px);
        }
        .woocommerce ul.products li.product .button {
            background: #0078d4 !important; color: #fff !important;
            border-radius: 4px !important; font-size: 12px !important;
            padding: 4px 12px !important; margin-top: 8px !important;
        }
        .woocommerce ul.products li.product .button:hover { background: #005a9e !important; }
        .woocommerce ul.products li.product .price {
            font-size: 15px !important; font-weight: 600 !important; color: #0078d4 !important;
        }
        
        .single-product .product { background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; padding: 24px; }
        .single-product .product_title { font-size: 28px !important; font-weight: 600 !important; color: #1a1a1a !important; }
        .single-product .summary .price { font-size: 24px !important; font-weight: 600 !important; color: #0078d4 !important; }
        .single-product .single_add_to_cart_button {
            background: #0078d4 !important; color: #fff !important;
            border-radius: 4px !important; padding: 10px 28px !important;
            font-size: 15px !important; font-weight: 500 !important; border: none !important;
        }
        .single-product .single_add_to_cart_button:hover { background: #005a9e !important; }
        
        .woocommerce-ordering select {
            border: 1px solid #e6e6e6 !important; border-radius: 4px !important;
            padding: 6px 12px !important; font-size: 13px !important; background: #fff !important;
        }
        .woocommerce-result-count { font-size: 13px !important; color: #666 !important; }
        
        @media (max-width: 768px) { .woocommerce ul.products { grid-template-columns: repeat(2,1fr); } }

        /* Mobile Enhanced */
        @media (max-width: 768px) {
            .main-header-bar { padding: 8px 16px !important; }
            .site-search { max-width: 100% !important; margin: 8px 0 !important; }
            .ast-site-identity { padding: 0 !important; }
            .wp-block-columns { flex-wrap: wrap !important; }
            .wp-block-column { flex-basis: 100% !important; margin: 10px 0 !important; }
        }
        /* Cart Page */
        .woocommerce-cart .woocommerce-cart-form { background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; padding: 16px; }
        .woocommerce-cart .cart_totals { background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; padding: 20px; }
        .woocommerce-cart .checkout-button { background: #0078d4 !important; color: #fff !important; border-radius: 4px !important; }
        .woocommerce-cart .checkout-button:hover { background: #005a9e !important; }
        /* Checkout Page */
        .woocommerce-checkout form.checkout { background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; padding: 24px; }
        .woocommerce-checkout #place_order { background: #0078d4 !important; color: #fff !important; border-radius: 4px !important; }
        .woocommerce-checkout #place_order:hover { background: #005a9e !important; }

        @media (max-width: 480px) { .woocommerce ul.products { grid-template-columns: 1fr; } }
    </style>';
});
`

### Section 6

`php
// ========== Filter Sidebar + Sort Section ==========
add_action('wp_head', function() {
    echo '<style>
        .ms-shop-wrap { display: flex; gap: 24px; align-items: flex-start; }
        .ms-filter-sidebar { width: 220px; flex-shrink: 0; background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; padding: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
        .ms-filter-sidebar h3 { font-size: 15px; font-weight: 600; color: #1a1a1a; margin: 0 0 12px 0; padding-bottom: 8px; border-bottom: 1px solid #e6e6e6; }
        .ms-filter-section { margin-bottom: 20px; }
        .ms-filter-section:last-child { margin-bottom: 0; }
        .ms-filter-label { display: block; font-size: 13px; color: #333; margin-bottom: 6px; cursor: pointer; }
        .ms-filter-label input { margin-right: 6px; }
        .ms-price-row { display: flex; gap: 8px; align-items: center; }
        .ms-price-row input[type="number"] { width: 70px; padding: 4px 8px; font-size: 12px; border: 1px solid #e6e6e6; border-radius: 4px; }
        .ms-price-apply { background: #0078d4; color: #fff; border: none; border-radius: 4px; padding: 4px 12px; font-size: 12px; cursor: pointer; }
        .ms-price-apply:hover { background: #005a9e; }
        .ms-shop-content { flex: 1; min-width: 0; }
        .ms-shop-topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px; }
        .ms-results-count { font-size: 13px; color: #616161; }
        .ms-sort-select { padding: 6px 12px; font-size: 13px; border: 1px solid #e6e6e6; border-radius: 4px; background: #fff; cursor: pointer; }
        .ms-sort-select:hover { border-color: #0078d4; }
        @media (max-width: 768px) { .ms-shop-wrap { flex-direction: column; } .ms-filter-sidebar { width: 100%; } }
    </style>';
});
add_filter('woocommerce_catalog_orderby', function($orderby) {
    return array(
        'popularity' => 'Popularity: Most popular',
        'date'       => 'Newest first',
        'price'      => 'Price: Low to High',
        'price-desc' => 'Price: High to Low',
        'name'       => 'Name: A to Z'
    );
});
add_action('woocommerce_before_main_content', function() {
    if (!is_shop() && !is_product_category() && !is_product_tag()) return;
    echo '<div class="ms-shop-wrap"><aside class="ms-filter-sidebar"><h3>Platforms</h3><div class="ms-filter-section">';
    $cats = get_terms(array('taxonomy' => 'product_cat', 'hide_empty' => false));
    foreach ($cats as $cat) {
        if ($cat->slug === 'uncategorized') continue;
        $checked = (isset($_GET['product_cat']) && $_GET['product_cat'] === $cat->slug) ? 'checked' : '';
        echo '<label class="ms-filter-label"><input type="checkbox" data-cat="'.esc_attr($cat->slug).'" '.$checked.'>'.esc_html($cat->name).' ('.$cat->count.')</label>';
    }
    echo '</div><h3>Price range (USD)</h3><div class="ms-filter-section">';
    echo '<div class="ms-price-row">';
    echo '<input type="number" class="ms-price-input" id="ms-price-min" placeholder="Min" min="0" step="0.01" value="'.(isset($_GET['min_price'])?esc_attr($_GET['min_price']):'').'">';
    echo '<span style="color:#999;">-</span>';
    echo '<input type="number" class="ms-price-input" id="ms-price-max" placeholder="Max" min="0" step="0.01" value="'.(isset($_GET['max_price'])?esc_attr($_GET['max_price']):'').'">';
    echo '<button class="ms-price-apply" id="ms-price-apply">Apply</button></div></div></aside><div class="ms-shop-content">';
}, 5);
add_action('woocommerce_before_shop_loop', function() {
    echo '<div class="ms-shop-topbar"><span class="ms-results-count">Results found: '.wc_get_loop_prop('total').'</span>';
    echo '<select class="ms-sort-select" id="ms-sort-select">';
    $opts = array('popularity'=>'Popularity: Most popular','date'=>'Newest first','price'=>'Price: Low to High','price-desc'=>'Price: High to Low','name'=>'Name: A to Z');
    $current = isset($_GET['orderby'])?$_GET['orderby']:'popularity';
    foreach ($opts as $val=>$label) { $sel=($current===$val)?'selected':''; echo '<option value="'.$val.'" '.$sel.'>'.$label.'</option>'; }
    echo '</select></div>';
});
add_action('woocommerce_after_main_content', function() { echo '</div></div>'; }, 50);
add_action('wp_footer', function() {
    echo '<script>
document.addEventListener("DOMContentLoaded",function(){
    var s=document.getElementById("ms-sort-select");
    if(s){s.addEventListener("change",function(){var u=new URL(window.location.href);if(this.value&&this.value!=="popularity"){u.searchParams.set("orderby",this.value)}else{u.searchParams.delete("orderby")}window.location.href=u.toString()})}
    var b=document.getElementById("ms-price-apply");
    if(b){b.addEventListener("click",function(){var u=new URL(window.location.href);var mn=document.getElementById("ms-price-min").value;var mx=document.getElementById("ms-price-max").value;if(mn){u.searchParams.set("min_price",mn)}else{u.searchParams.delete("min_price")}if(mx){u.searchParams.set("max_price",mx)}else{u.searchParams.delete("max_price")}window.location.href=u.toString()});document.querySelectorAll(".ms-price-input").forEach(function(i){i.addEventListener("keydown",function(e){if(e.key==="Enter"){b.click()}})})}
    document.querySelectorAll(".ms-filter-label input[type=checkbox]").forEach(function(c){c.addEventListener("change",function(){var ck=[];document.querySelectorAll(".ms-filter-label input[type=checkbox]:checked").forEach(function(x){ck.push(x.getAttribute("data-cat"))});var u=new URL(window.location.href);if(ck.length>0){u.searchParams.set("product_cat",ck.join(","))}else{u.searchParams.delete("product_cat")}window.location.href=u.toString()})})
});
    <\/script>';
});
`

### Section 7

`php
// ========== IP Auto Language Detection (Polylang) ==========
add_action('init', function() {
`

### Section 8

`php
// Don't run in admin, AJAX, or CRON
    if (is_admin() || wp_doing_ajax() || defined('DOING_CRON')) return;
`

### Section 9

`php
// If user manually switched language via Polylang switcher, respect that
    if (isset($_COOKIE['pll_language'])) return;
`

### Section 10

`php
// Detect visitor IP
    $ip = $_SERVER['REMOTE_ADDR'];
    if (in_array($ip, array('127.0.0.1', '::1', 'localhost'))) return;
`

### Section 11

`php
// Call free ip-api.com (no API key required, 45 req/min limit)
    $response = wp_remote_get("http://ip-api.com/json/{$ip}?fields=countryCode", array('timeout' => 3));
    if (is_wp_error($response)) return;
    
    $data = json_decode(wp_remote_retrieve_body($response), true);
    if (empty($data['countryCode'])) return;
`

### Section 12

`php
// Map country to Polylang slug
    $target = ($data['countryCode'] === 'CN') ? 'zh' : 'en';
    $current = pll_current_language();
    
    if ($current === $target) return;
`

### Section 13

`php
// Redirect to translated URL
    global $wp;
    $current_url = home_url(add_query_arg(array(), $wp->request));
    $translated = pll_translate_url($current_url, $target);
    
    if ($translated && $translated !== $current_url) {
        wp_redirect($translated);
        exit;
    }
`

### Section 14

`php
// Fallback: redirect to language home
    wp_redirect(pll_home_url($target));
    exit;
});
`

### Section 15

`php
// ========== Breadcrumb Navigation ==========
add_action("woocommerce_before_main_content", function() {
    if (function_exists("woocommerce_breadcrumb")) {
        woocommerce_breadcrumb(array(
            "delimiter"   => " / ",
            "wrap_before" => "<nav class=\"ms-breadcrumb\" itemprop=\"breadcrumb\">",
            "wrap_after"  => "</nav>",
            "before"      => "",
            "after"       => "",
            "home"        => "Home"
        ));
    }
}, 15);
`

### Section 16

`php
// ========== Why Choose Us ==========
add_action("woocommerce_after_main_content", function() {
    if (!is_shop() && !is_product_category() && !is_product_tag()) return;
    echo '<div class="ms-why-choose" style="max-width:1200px;margin:40px auto;padding:0 20px;text-align:center;">';
    echo '<h2 style="font-size:22px;font-weight:600;color:#1a1a1a;margin-bottom:24px;">Why Choose Keys-Starter?</h2>';
    echo '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;">';
    $features = array(
        array("icon"=>"★","title"=>"Genuine License Keys","desc"=>"100% authentic Microsoft license keys"),
        array("icon"=>"⚡","title"=>"Instant Delivery","desc"=>"Receive your key by email within seconds"),
        array("icon"=>"✔","title"=>"Lifetime Warranty","desc"=>"Free replacement if any issue arises"),
        array("icon"=>"☎","title"=>"24/7 Support","desc"=>"Dedicated support team ready to help")
    );
    foreach ($features as $f) {
        echo '<div class="ms-feature-card" style="background:#f8f8f8;border-radius:8px;padding:24px;">';
        echo '<div style="font-size:32px;margin-bottom:8px;">' . $f["icon"] . '</div>';
        echo '<h3 style="font-size:15px;font-weight:600;color:#1a1a1a;margin:0 0 8px 0;">' . $f["title"] . '</h3>';
        echo '<p style="font-size:13px;color:#666;margin:0;">' . $f["desc"] . '</p>';
        echo '</div>';
    }
    echo '</div></div>';
}, 15);
`

### Section 17

`php
// ========== Quantity +/- Selector Styling ==========
add_action("wp_head", function() {
    echo '<style>
        .quantity { display: inline-flex; align-items: center; border: 1px solid #e6e6e6; border-radius: 4px; overflow: hidden; }
        .quantity .qty { width: 50px; text-align: center; border: none !important; padding: 6px 0; font-size: 14px; }
        .quantity .minus, .quantity .plus { background: #f8f8f8; border: none; padding: 6px 12px; cursor: pointer; font-size: 16px; color: #333; }
        .quantity .minus:hover, .quantity .plus:hover { background: #e6e6e6; }
    </style>';
});
`

### Section 18

`php
// ========== Social Proof Section ==========
add_action("woocommerce_after_main_content", function() {
    if (!is_shop() && !is_product_category() && !is_product_tag()) return;
    echo '<div style="max-width:1200px;margin:0 auto 40px;padding:0 20px;text-align:center;">';
    echo '<h2 style="font-size:22px;font-weight:600;color:#1a1a1a;margin-bottom:24px;">Trusted by Thousands</h2>';
    echo '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">';
    echo '<div style="background:#fff;border:1px solid #e6e6e6;border-radius:8px;padding:20px;">';
    echo '<div style="font-size:24px;color:#0078d4;margin-bottom:8px;">★★★★★</div>';
    echo '<p style="font-size:13px;color:#333;margin:0 0 4px 0;">"Got my Windows 11 key in under 30 seconds. Works perfectly!"</p>';
    echo '<p style="font-size:11px;color:#999;margin:0;">- Alex, Verified Buyer</p></div>';
    echo '<div style="background:#fff;border:1px solid #e6e6e6;border-radius:8px;padding:20px;">';
    echo '<div style="font-size:24px;color:#0078d4;margin-bottom:8px;">★★★★★</div>';
    echo '<p style="font-size:13px;color:#333;margin:0 0 4px 0;">"Best price I found online for Office 2021. Highly recommend!"</p>';
    echo '<p style="font-size:11px;color:#999;margin:0;">- Sarah, Verified Buyer</p></div>';
    echo '<div style="background:#fff;border:1px solid #e6e6e6;border-radius:8px;padding:20px;">';
    echo '<div style="font-size:24px;color:#0078d4;margin-bottom:8px;">★★★★★</div>';
    echo '<p style="font-size:13px;color:#333;margin:0 0 4px 0;">"Support helped me with activation within 5 minutes. Great service!"</p>';
    echo '<p style="font-size:11px;color:#999;margin:0;">- Mike, Verified Buyer</p></div>';
    echo '</div></div>';
}, 20);
`

### Section 19

`php
// ========== Category Icons in Nav ==========
add_action("wp_head", function() {
    echo '<style>
        .main-navigation li.menu-item a[href*="windows"]::before { content: "\01F4BB"; margin-right: 4px; }
        .main-navigation li.menu-item a[href*="office"]::before { content: "\01F4C4"; margin-right: 4px; }
        .main-navigation li.menu-item a[href*="product-category/keys"]::before { content: "\01F511"; margin-right: 4px; }
    </style>';
});
`

### Section 20

`php
// ========== Style Related Products ==========
add_action("wp_head", function() {
    echo '<style>
        .related.products h2 { font-size:20px; font-weight:600; color:#1a1a1a; margin:40px 0 16px; }
        .woocommerce ul.products li.product .add_to_cart_button, 
        .woocommerce ul.products li.product .button { background:#0078d4 !important; color:#fff !important; border-radius:4px !important; font-size:12px !important; padding:4px 10px !important; display:inline-block !important; }
        .ms-breadcrumb { font-size:12px; color:#666; margin-bottom:16px; padding:0; }
        .ms-breadcrumb a { color:#0078d4; text-decoration:none; }
        .ms-breadcrumb a:hover { text-decoration:underline; }
        .ms-hero-fullwidth { background:linear-gradient(135deg,#0078d4,#004578); padding:clamp(20px,4vw,40px) 0; text-align:center; margin:0 0 24px 0; width:100%; display:block; clear:both; }
        .ms-hero-fullwidth .ms-hero-inner { max-width:1240px; margin:0 auto; padding:0 20px; }
        .ms-hero-fullwidth h2 { font-size:clamp(20px,2.5vw,28px); color:#fff; margin:0 0 8px 0; font-weight:600; }
        .ms-hero-fullwidth p { font-size:clamp(13px,1.5vw,16px); color:rgba(255,255,255,0.9); margin:0 0 clamp(12px,2vw,20px) 0; }
        .ms-hero-fullwidth .ms-hero-btn { display:inline-block; background:#fff; color:#0078d4; padding:clamp(6px,1vw,10px) clamp(16px,2.5vw,28px); border-radius:4px; text-decoration:none; font-weight:600; font-size:clamp(12px,1.4vw,15px); white-space:nowrap; }
        .ms-hero-fullwidth .ms-hero-btn:hover { background:#f0f0f0; }
        @media (max-width:768px) {
            .ms-hero-fullwidth { padding:16px 0; }
            .ms-hero-fullwidth h2 { font-size:18px; }
            .ms-hero-fullwidth p { font-size:12px; margin-bottom:10px; }
            .ms-hero-fullwidth .ms-hero-btn { font-size:11px; padding:6px 14px; }
        }
    </style>';
});
`

### Section 21

`php
// ========== WooCommerce Site Visibility Fix ==========
add_filter("woocommerce_coming_soon", "__return_false");
add_filter("option_wc_coming_soon", "__return_false");
add_filter("pre_option_wc_coming_soon", "__return_false");
`

### Section 22

`php
// ========== Language-Specific Nav + Switcher ==========
add_action("wp_head", function() {
`

### Section 23

`php
// Get correct URLs from WordPress
    if (!function_exists("pll_home_url")) return;
    $en_url = untrailingslashit(home_url());
    $zh_url = untrailingslashit(pll_home_url("zh"));
    $es_url = untrailingslashit(pll_home_url("es"));
    $shop_en = home_url("/?post_type=product");
    $win_en = get_term_link("windowskey", "product_cat");
    $office_en = get_term_link("keys", "product_cat");
    $account_en = get_permalink(10);
    $cart_en = get_permalink(8);
    $shop_zh = $zh_url . "/?post_type=product";
    $win_zh = str_replace($en_url, $zh_url, $win_en);
    $office_zh = str_replace($en_url, $zh_url, $office_en);
    $account_zh = str_replace($en_url, $zh_url, $account_en);
    $cart_zh = str_replace($en_url, $zh_url, $cart_en);
    $shop_es = $es_url . "/?post_type=product";
    $win_es = str_replace($en_url, $es_url, $win_en);
    $office_es = str_replace($en_url, $es_url, $office_en);
    $account_es = str_replace($en_url, $es_url, $account_en);
    $cart_es = str_replace($en_url, $es_url, $cart_en);
    echo "<script>
var msUrls=" . json_encode(array(
        "shop_en" => $shop_en, "win_en" => $win_en, "office_en" => $office_en,
        "account_en" => $account_en, "cart_en" => $cart_en,
        "shop_zh" => $shop_zh, "win_zh" => $win_zh, "office_zh" => $office_zh,
        "account_zh" => $account_zh, "cart_zh" => $cart_zh,
        "shop_es" => $shop_es, "win_es" => $win_es, "office_es" => $office_es,
        "account_es" => $account_es, "cart_es" => $cart_es
    )) . ";
</script>";
    echo '<script>
document.addEventListener("DOMContentLoaded",function(){
var p=window.location.pathname;
var lang=p.indexOf("/zh/")===0?"zh":p.indexOf("/es/")===0?"es":"en";
var nav=document.querySelector(".main-header-menu");
if(!nav)return;
var url=msUrls;
var items={
en:[["All Products",url.shop_en],["Win-Keys",url.win_en],["Office-Keys",url.office_en],["My Account",url.account_en],["Cart",url.cart_en]],
zh:[["商店",url.shop_zh],["Windows密钥",url.win_zh],["Office密钥",url.office_zh],["我的账户",url.account_zh],["购物车",url.cart_zh]],
es:[["Tienda",url.shop_es],["Claves Windows",url.win_es],["Claves Office",url.office_es],["Mi Cuenta",url.account_es],["Carrito",url.cart_es]]
};
nav.innerHTML="";
items[lang].forEach(function(x){
var li=document.createElement("li");li.className="page_item menu-item";
var a=document.createElement("a");a.href=x[1];a.className="menu-link";a.textContent=x[0];
li.appendChild(a);nav.appendChild(li);
});
var li=document.createElement("li");li.className="menu-item";li.style.cssText="display:flex;align-items:center;";
var sel=document.createElement("select");sel.id="ms-lang-sel";
sel.addEventListener("change",function(){var v=this.value;if(v)window.location.href=v;});
sel.style.cssText="padding:2px 4px;border:1px solid #e6e6e6;border-radius:3px;font-size:11px;background:#fff;cursor:pointer;";
[["/","EN"],["/zh/","中"],["/es/","ES"]].forEach(function(o){
var opt=document.createElement("option");opt.value=o[0];
opt.selected=o[0]==="/"?p==="/"||p.indexOf("/en/")===0:p.indexOf(o[0])===0;
opt.textContent=o[1];sel.appendChild(opt);
});
li.appendChild(sel);nav.appendChild(li);
});
</script>';
});
`

### Section 24

`php
// ========== Full-Width Hero Banner on Shop Pages ==========
add_action('astra_content_before', function() {
    if (!is_shop() && !is_product_category() && !is_product_tag()) return;
    ?>
    <div class="ms-hero-fullwidth">
        <div class="ms-hero-inner">
            <h2>Windows & Office Keys</h2>
            <p>Genuine licenses at unbeatable prices. Instant delivery guaranteed.</p>
            <a href="/shop/" class="ms-hero-btn">Shop All Products</a>
        </div>
    </div>
    <?php
});
`

### Section 25

`php
// Search bar injection
add_action('wp_footer', function() {
    echo '<script>
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".main-header-bar-navigation") || document.querySelector(".main-navigation");
    if(header && !document.querySelector(".site-search")) {
        var s = document.createElement("div");
        s.className = "site-search";
        s.innerHTML = "<form role=\"search\" method=\"get\" class=\"search-form\" action=\"/\">"
            + "<input type=\"search\" placeholder=\"搜产品...\" value=\"\" name=\"s\" />"
            + "<button type=\"submit\">搜索</button></form>";
        header.parentNode.insertBefore(s, header);
    }
});
    </script>';
});
`

---
## CSS Injected via wp_head

`css
:root {
            --ms-blue: #0078d4;
            --ms-blue-dark: #005a9e;
            --ms-bg: #ffffff;
            --ms-bg-light: #f2f2f2;
            --ms-text: #1a1a1a;
            --ms-border: #e6e6e6;
            --ms-shadow: 0 2px 8px rgba(0,0,0,0.08);
            --ms-hover-shadow: 0 4px 16px rgba(0,0,0,0.12);
            --ms-radius: 4px;
        }
        body, button, input, select, textarea {
            font-family: "Segoe UI", SegoeUI, sans-serif !important;
        }
        .site-header {
            background: #fff !important;
            border-bottom: 1px solid var(--ms-border) !important;
        }
        .main-navigation a {
            color: var(--ms-text) !important;
            font-size: 14px !important;
            padding: 8px 14px !important;
        }
        .main-navigation a:hover {
            color: var(--ms-blue) !important;
        }
        .wc-block-grid__product {
            border: 1px solid var(--ms-border) !important;
            border-radius: var(--ms-radius) !important;
            padding: 16px !important;
            background: #fff !important;
            box-shadow: var(--ms-shadow) !important;
            transition: box-shadow 0.2s ease !important;
        }
        .wc-block-grid__product:hover {
            box-shadow: var(--ms-hover-shadow) !important;
            transform: translateY(-2px) !important;
        }
        .wc-block-grid__product-add-to-cart .wp-block-button__link.add_to_cart_button {
            background: var(--ms-blue) !important;
            color: #fff !important;
            border-radius: var(--ms-radius) !important;
            padding: 4px 12px !important;
            font-size: 12px !important;
            line-height: 1.5 !important;
            min-height: auto !important;
            display: inline-block !important;
            width: auto !important;
        }
        .wc-block-grid__product-add-to-cart .wp-block-button__link.add_to_cart_button:hover {
            background: var(--ms-blue-dark) !important;
        }
        .site-footer {
            border-top: 1px solid var(--ms-border) !important;
            background: var(--ms-bg-light) !important;
        }
        /* Sticky header */
        #ast-desktop-header {
            position: sticky !important;
            top: 0 !important;
            z-index: 9999 !important;
        }
    
        /* Footer - wincdkey style */
        .ms-footer-fullwidth { background:#f2f2f2; border-top:1px solid #e6e6e6; padding:40px 0 0; margin-top:40px; width:100%; display:block; }
        .ms-footer-inner { max-width:1240px; margin:0 auto; padding:0 20px; }
        .ms-footer-cols { display:grid; grid-template-columns:1fr 1fr 1fr; gap:40px; }
        .ms-footer-col h4 { font-size:14px; font-weight:600; color:#1a1a1a; margin:0 0 16px; text-transform:uppercase; letter-spacing:0.5px; }
        .ms-footer-col ul { list-style:none; margin:0; padding:0; }
        .ms-footer-col ul li { margin-bottom:8px; }
        .ms-footer-col ul li a { color:#616161; text-decoration:none; font-size:13px; }
        .ms-footer-col ul li a:hover { color:#0078d4; text-decoration:underline; }
        .ms-partner-badge { display:inline-block; background:#0078d4; color:#fff; padding:4px 12px; border-radius:4px; font-size:12px; font-weight:600; margin-bottom:12px; }
        .ms-partner-desc { font-size:13px; color:#616161; line-height:1.6; margin:0; }
        .ms-footer-bottom { background:#e6e6e6; margin-top:40px; padding:16px 0; text-align:center; }
        .ms-footer-bottom p { margin:0; font-size:12px; color:#616161; }
        .ms-footer-col { margin-bottom:24px; }
        @media (max-width:768px) {
            .ms-footer-cols { grid-template-columns:1fr; gap:24px; }
            .ms-footer-fullwidth { padding:24px 0 0; }
        }
`

`css
.main-header-menu .menu-item-has-children { position: relative; }
        .main-header-menu .menu-item-has-children > a:after {
            content: " \25BC";
            font-size: 9px; margin-left: 4px; vertical-align: middle;
        }
        .main-header-menu .sub-menu {
            display: none; position: absolute; top: 100%; left: 0;
            background: #fff; min-width: 200px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.12);
            border: 1px solid #e6e6e6; border-radius: 4px;
            padding: 8px 0; z-index: 1000;
        }
        .main-header-menu .menu-item-has-children:hover > .sub-menu { display: block; }
        .main-header-menu .sub-menu a {
            padding: 8px 20px !important; display: block;
            font-size: 13px !important; color: #333 !important;
        }
        .main-header-menu .sub-menu a:hover { background: #f2f2f2 !important; color: #0078d4 !important; }
        
        .site-search { margin: 0 20px; flex: 1; max-width: 400px; }
        .site-search .search-form { display: flex; border: 1px solid #e6e6e6; border-radius: 4px; overflow: hidden; background: #f8f8f8; }
        .site-search .search-form input[type=\"search\"] {
            border: none !important; background: transparent !important;
            padding: 6px 12px !important; font-size: 13px !important;
            outline: none !important; width: 100%;
        }
        .site-search .search-form button {
            background: #0078d4 !important; color: #fff !important;
            border: none !important; padding: 6px 14px !important;
            cursor: pointer; font-size: 13px;
            border-radius: 0 4px 4px 0 !important;
        }
        .site-search .search-form button:hover { background: #005a9e !important; }
        
        .woocommerce ul.products { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        .woocommerce ul.products li.product {
            border: 1px solid #e6e6e6; border-radius: 4px; padding: 16px;
            background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            transition: box-shadow 0.2s, transform 0.2s;
            width: auto !important; margin: 0 !important;
        }
        .woocommerce ul.products li.product:hover {
            box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px);
        }
        .woocommerce ul.products li.product .button {
            background: #0078d4 !important; color: #fff !important;
            border-radius: 4px !important; font-size: 12px !important;
            padding: 4px 12px !important; margin-top: 8px !important;
        }
        .woocommerce ul.products li.product .button:hover { background: #005a9e !important; }
        .woocommerce ul.products li.product .price {
            font-size: 15px !important; font-weight: 600 !important; color: #0078d4 !important;
        }
        
        .single-product .product { background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; padding: 24px; }
        .single-product .product_title { font-size: 28px !important; font-weight: 600 !important; color: #1a1a1a !important; }
        .single-product .summary .price { font-size: 24px !important; font-weight: 600 !important; color: #0078d4 !important; }
        .single-product .single_add_to_cart_button {
            background: #0078d4 !important; color: #fff !important;
            border-radius: 4px !important; padding: 10px 28px !important;
            font-size: 15px !important; font-weight: 500 !important; border: none !important;
        }
        .single-product .single_add_to_cart_button:hover { background: #005a9e !important; }
        
        .woocommerce-ordering select {
            border: 1px solid #e6e6e6 !important; border-radius: 4px !important;
            padding: 6px 12px !important; font-size: 13px !important; background: #fff !important;
        }
        .woocommerce-result-count { font-size: 13px !important; color: #666 !important; }
        
        @media (max-width: 768px) { .woocommerce ul.products { grid-template-columns: repeat(2,1fr); } }

        /* Mobile Enhanced */
        @media (max-width: 768px) {
            .main-header-bar { padding: 8px 16px !important; }
            .site-search { max-width: 100% !important; margin: 8px 0 !important; }
            .ast-site-identity { padding: 0 !important; }
            .wp-block-columns { flex-wrap: wrap !important; }
            .wp-block-column { flex-basis: 100% !important; margin: 10px 0 !important; }
        }
        /* Cart Page */
        .woocommerce-cart .woocommerce-cart-form { background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; padding: 16px; }
        .woocommerce-cart .cart_totals { background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; padding: 20px; }
        .woocommerce-cart .checkout-button { background: #0078d4 !important; color: #fff !important; border-radius: 4px !important; }
        .woocommerce-cart .checkout-button:hover { background: #005a9e !important; }
        /* Checkout Page */
        .woocommerce-checkout form.checkout { background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; padding: 24px; }
        .woocommerce-checkout #place_order { background: #0078d4 !important; color: #fff !important; border-radius: 4px !important; }
        .woocommerce-checkout #place_order:hover { background: #005a9e !important; }

        @media (max-width: 480px) { .woocommerce ul.products { grid-template-columns: 1fr; } }
`

`css
.ms-shop-wrap { display: flex; gap: 24px; align-items: flex-start; }
        .ms-filter-sidebar { width: 220px; flex-shrink: 0; background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; padding: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
        .ms-filter-sidebar h3 { font-size: 15px; font-weight: 600; color: #1a1a1a; margin: 0 0 12px 0; padding-bottom: 8px; border-bottom: 1px solid #e6e6e6; }
        .ms-filter-section { margin-bottom: 20px; }
        .ms-filter-section:last-child { margin-bottom: 0; }
        .ms-filter-label { display: block; font-size: 13px; color: #333; margin-bottom: 6px; cursor: pointer; }
        .ms-filter-label input { margin-right: 6px; }
        .ms-price-row { display: flex; gap: 8px; align-items: center; }
        .ms-price-row input[type="number"] { width: 70px; padding: 4px 8px; font-size: 12px; border: 1px solid #e6e6e6; border-radius: 4px; }
        .ms-price-apply { background: #0078d4; color: #fff; border: none; border-radius: 4px; padding: 4px 12px; font-size: 12px; cursor: pointer; }
        .ms-price-apply:hover { background: #005a9e; }
        .ms-shop-content { flex: 1; min-width: 0; }
        .ms-shop-topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px; }
        .ms-results-count { font-size: 13px; color: #616161; }
        .ms-sort-select { padding: 6px 12px; font-size: 13px; border: 1px solid #e6e6e6; border-radius: 4px; background: #fff; cursor: pointer; }
        .ms-sort-select:hover { border-color: #0078d4; }
        @media (max-width: 768px) { .ms-shop-wrap { flex-direction: column; } .ms-filter-sidebar { width: 100%; } }
`

`css
.quantity { display: inline-flex; align-items: center; border: 1px solid #e6e6e6; border-radius: 4px; overflow: hidden; }
        .quantity .qty { width: 50px; text-align: center; border: none !important; padding: 6px 0; font-size: 14px; }
        .quantity .minus, .quantity .plus { background: #f8f8f8; border: none; padding: 6px 12px; cursor: pointer; font-size: 16px; color: #333; }
        .quantity .minus:hover, .quantity .plus:hover { background: #e6e6e6; }
`

`css
.main-navigation li.menu-item a[href*="windows"]::before { content: "\01F4BB"; margin-right: 4px; }
        .main-navigation li.menu-item a[href*="office"]::before { content: "\01F4C4"; margin-right: 4px; }
        .main-navigation li.menu-item a[href*="product-category/keys"]::before { content: "\01F511"; margin-right: 4px; }
`

`css
.related.products h2 { font-size:20px; font-weight:600; color:#1a1a1a; margin:40px 0 16px; }
        .woocommerce ul.products li.product .add_to_cart_button, 
        .woocommerce ul.products li.product .button { background:#0078d4 !important; color:#fff !important; border-radius:4px !important; font-size:12px !important; padding:4px 10px !important; display:inline-block !important; }
        .ms-breadcrumb { font-size:12px; color:#666; margin-bottom:16px; padding:0; }
        .ms-breadcrumb a { color:#0078d4; text-decoration:none; }
        .ms-breadcrumb a:hover { text-decoration:underline; }
        .ms-hero-fullwidth { background:linear-gradient(135deg,#0078d4,#004578); padding:clamp(20px,4vw,40px) 0; text-align:center; margin:0 0 24px 0; width:100%; display:block; clear:both; }
        .ms-hero-fullwidth .ms-hero-inner { max-width:1240px; margin:0 auto; padding:0 20px; }
        .ms-hero-fullwidth h2 { font-size:clamp(20px,2.5vw,28px); color:#fff; margin:0 0 8px 0; font-weight:600; }
        .ms-hero-fullwidth p { font-size:clamp(13px,1.5vw,16px); color:rgba(255,255,255,0.9); margin:0 0 clamp(12px,2vw,20px) 0; }
        .ms-hero-fullwidth .ms-hero-btn { display:inline-block; background:#fff; color:#0078d4; padding:clamp(6px,1vw,10px) clamp(16px,2.5vw,28px); border-radius:4px; text-decoration:none; font-weight:600; font-size:clamp(12px,1.4vw,15px); white-space:nowrap; }
        .ms-hero-fullwidth .ms-hero-btn:hover { background:#f0f0f0; }
        @media (max-width:768px) {
            .ms-hero-fullwidth { padding:16px 0; }
            .ms-hero-fullwidth h2 { font-size:18px; }
            .ms-hero-fullwidth p { font-size:12px; margin-bottom:10px; }
            .ms-hero-fullwidth .ms-hero-btn { font-size:11px; padding:6px 14px; }
        }
`

---
## Complete Hook Map (add_action / add_filter)

- add_filter( "woocommerce_product_add_to_cart_text", function( $text ) {
- add_filter( "woocommerce_add_to_cart_redirect", function( $url ) {
- add_action( "wp_head", function() {
- add_action( "wp_footer", function() {
- add_action('wp_head', function() {
- add_action('wp_head', function() {
- add_action('wp_head', function() {
- add_filter('woocommerce_catalog_orderby', function($orderby) {
- add_action('woocommerce_before_main_content', function() {
- add_action('woocommerce_before_shop_loop', function() {
- add_action('woocommerce_after_main_content', function() { echo '</div></div>'; }, 50);
- add_action('wp_footer', function() {
- add_action('init', function() {
- add_action("woocommerce_before_main_content", function() {
- add_action("woocommerce_after_main_content", function() {
- add_action("wp_head", function() {
- add_action("woocommerce_after_main_content", function() {
- add_action("wp_head", function() {
- add_action("wp_head", function() {
- add_filter("woocommerce_coming_soon", "__return_false");
- add_filter("option_wc_coming_soon", "__return_false");
- add_filter("pre_option_wc_coming_soon", "__return_false");
- add_action("wp_head", function() {
- add_action('astra_content_before', function() {
- add_action('wp_footer', function() {

---
## Locked Formats Summary

See LOCKED_HERO_FORMAT.md for hero banner (astra_content_before, ms-hero-fullwidth).

Footer structure (wincdkey-style):
- Hook: wp_footer (PHP echo)
- Outer: .ms-footer-fullwidth (full width, bg:#f2f2f2)
- Inner: .ms-footer-inner (max-width:1240px)
- Grid: .ms-footer-cols (3 columns, 1fr)
- Column 1: About Keys-Starter (6 links)
- Column 2: Information (4 links)
- Column 3: Trusted Partner (badge + description)
- Bottom: .ms-footer-bottom (bg:#e6e6e6, copyright)