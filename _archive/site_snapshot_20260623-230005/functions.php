<?php
/**
 * Astra functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Define Constants
 */
define( 'ASTRA_THEME_VERSION', '4.13.4' );
define( 'ASTRA_THEME_SETTINGS', 'astra-settings' );
define( 'ASTRA_THEME_DIR', trailingslashit( get_template_directory() ) );
define( 'ASTRA_THEME_URI', trailingslashit( esc_url( get_template_directory_uri() ) ) );
define( 'ASTRA_THEME_ORG_VERSION', file_exists( ASTRA_THEME_DIR . 'inc/w-org-version.php' ) );

/**
 * Minimum Version requirement of the Astra Pro addon.
 * This constant will be used to display the notice asking user to update the Astra addon to the version defined below.
 */
define( 'ASTRA_EXT_MIN_VER', '4.12.0' );

/**
 * Load in-house compatibility.
 */
if ( ASTRA_THEME_ORG_VERSION ) {
	require_once ASTRA_THEME_DIR . 'inc/w-org-version.php';
}

/**
 * Setup helper functions of Astra.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-theme-options.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-theme-strings.php';
require_once ASTRA_THEME_DIR . 'inc/core/common-functions.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-icons.php';

define( 'ASTRA_WEBSITE_BASE_URL', 'https://wpastra.com' );

/**
 * Update theme
 */
require_once ASTRA_THEME_DIR . 'inc/theme-update/astra-update-functions.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-theme-background-updater.php';

/**
 * Fonts Files
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-font-families.php';
if ( is_admin() ) {
	require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts-data.php';
}

require_once ASTRA_THEME_DIR . 'inc/lib/webfont/class-astra-webfont-loader.php';
require_once ASTRA_THEME_DIR . 'inc/lib/docs/class-astra-docs-loader.php';
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts.php';

require_once ASTRA_THEME_DIR . 'inc/dynamic-css/custom-menu-old-header.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/container-layouts.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/astra-icons.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-walker-page.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-enqueue-scripts.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-gutenberg-editor-css.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-wp-editor-css.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-command-palette.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/block-editor-compatibility.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/inline-on-mobile.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/content-background.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/dark-mode.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-dynamic-css.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-global-palette.php';

// Enable NPS Survey only if the starter templates version is < 4.3.7 or > 4.4.4 to prevent fatal error.
if ( ! defined( 'ASTRA_SITES_VER' ) || version_compare( ASTRA_SITES_VER, '4.3.7', '<' ) || version_compare( ASTRA_SITES_VER, '4.4.4', '>' ) ) {
	// NPS Survey Integration
	require_once ASTRA_THEME_DIR . 'inc/lib/class-astra-nps-notice.php';
	require_once ASTRA_THEME_DIR . 'inc/lib/class-astra-nps-survey.php';
}

/**
 * Custom template tags for this theme.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-attr.php';
require_once ASTRA_THEME_DIR . 'inc/template-tags.php';

require_once ASTRA_THEME_DIR . 'inc/widgets.php';
require_once ASTRA_THEME_DIR . 'inc/core/theme-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/admin-functions.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-memory-limit-notice.php';
require_once ASTRA_THEME_DIR . 'inc/core/sidebar-manager.php';

/**
 * Markup Functions
 */
require_once ASTRA_THEME_DIR . 'inc/markup-extras.php';
require_once ASTRA_THEME_DIR . 'inc/extras.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog-config.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog.php';
require_once ASTRA_THEME_DIR . 'inc/blog/single-blog.php';

/**
 * Markup Files
 */
require_once ASTRA_THEME_DIR . 'inc/template-parts.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-loop.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-mobile-header.php';

/**
 * Functions and definitions.
 */
require_once ASTRA_THEME_DIR . 'inc/class-astra-after-setup-theme.php';

// Required files.
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-helper.php';

require_once ASTRA_THEME_DIR . 'inc/schema/class-astra-schema.php';

/* Setup API */
require_once ASTRA_THEME_DIR . 'admin/includes/class-astra-learn.php';
require_once ASTRA_THEME_DIR . 'admin/includes/class-astra-api-init.php';

if ( is_admin() ) {
	/**
	 * Admin Menu Settings
	 */
	require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-settings.php';
	require_once ASTRA_THEME_DIR . 'admin/class-astra-admin-loader.php';
	require_once ASTRA_THEME_DIR . 'inc/lib/astra-notices/class-bsf-admin-notices.php';
}

/**
 * BSF Analytics.
 */
require_once ASTRA_THEME_DIR . 'admin/class-astra-bsf-analytics.php';

/**
 * Metabox additions.
 */
require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-boxes.php';
require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-box-operations.php';
require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-elementor-editor-settings.php';

/**
 * Customizer additions.
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-customizer.php';

/**
 * Astra Modules.
 */
require_once ASTRA_THEME_DIR . 'inc/modules/posts-structures/class-astra-post-structures.php';
require_once ASTRA_THEME_DIR . 'inc/modules/related-posts/class-astra-related-posts.php';

/**
 * Compatibility
 */
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-gutenberg.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-jetpack.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/woocommerce/class-astra-woocommerce.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/edd/class-astra-edd.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/lifterlms/class-astra-lifterlms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/learndash/class-astra-learndash.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bb-ultimate-addon.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-contact-form-7.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-visual-composer.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-site-origin.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-gravity-forms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bne-flyout.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-ubermeu.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-divi-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-amp.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-yoast-seo.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/surecart/class-astra-surecart.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-starter-content.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-buddypress.php';
require_once ASTRA_THEME_DIR . 'inc/addons/transparent-header/class-astra-ext-transparent-header.php';
require_once ASTRA_THEME_DIR . 'inc/addons/breadcrumbs/class-astra-breadcrumbs.php';
require_once ASTRA_THEME_DIR . 'inc/addons/scroll-to-top/class-astra-scroll-to-top.php';
require_once ASTRA_THEME_DIR . 'inc/addons/heading-colors/class-astra-heading-colors.php';
require_once ASTRA_THEME_DIR . 'inc/builder/class-astra-builder-loader.php';

// Elementor Compatibility requires PHP 5.4 for namespaces.
if ( version_compare( PHP_VERSION, '5.4', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor-pro.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-web-stories.php';
}

// Beaver Themer compatibility requires PHP 5.3 for anonymous functions.
if ( version_compare( PHP_VERSION, '5.3', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-themer.php';
}

require_once ASTRA_THEME_DIR . 'inc/core/markup/class-astra-markup.php';

/**
 * Abilities API integration.
 */
require_once ASTRA_THEME_DIR . 'inc/abilities/bootstrap.php';

/**
 * Load deprecated functions
 */
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-filters.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-functions.php';


// Custom: button text + footer + hide mobile header (NO JS nav interference)
add_filter( "woocommerce_product_add_to_cart_text", function( $text ) {
    return "Buy & Download";
}, 999 );
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
        .main-header-menu .menu-item-has-children:hover > .sub-menu { display: block !important; }
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
    
        /* Dropdown overflow fix */
        #ast-desktop-header { overflow: visible !important; z-index: 99999 !important; }
        .ast-primary-header-bar { overflow: visible !important; }
        .main-header-bar-navigation { overflow: visible !important; }
        .main-header-menu { overflow: visible !important; }
        .menu-item-has-children { overflow: visible !important; }

        .sub-menu-header { font-weight:700; color:#1a1a1a !important; font-size:11px; padding:8px 20px 4px; border-top:1px solid #e6e6e6; margin-top:4px; cursor:default; pointer-events:none; text-transform:uppercase; letter-spacing:0.5px; }
        .sub-menu-header:first-child { border-top:none; margin-top:0; }</style>';
});

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


// ========== IP Auto Language Detection (Polylang) ==========
add_action('init', function() {
    // Don't run in admin, AJAX, or CRON
    if (is_admin() || wp_doing_ajax() || defined('DOING_CRON')) return;
    
    // If user manually switched language via Polylang switcher, respect that
    if (isset($_COOKIE['pll_language'])) return;
    
    // Detect visitor IP
    $ip = $_SERVER['REMOTE_ADDR'];
    if (in_array($ip, array('127.0.0.1', '::1', 'localhost'))) return;
    
    // Call free ip-api.com (no API key required, 45 req/min limit)
    $response = wp_remote_get("http://ip-api.com/json/{$ip}?fields=countryCode", array('timeout' => 3));
    if (is_wp_error($response)) return;
    
    $data = json_decode(wp_remote_retrieve_body($response), true);
    if (empty($data['countryCode'])) return;
    
    // Map country to Polylang slug
    $target = ($data['countryCode'] === 'CN') ? 'zh' : 'en';
    $current = pll_current_language();
    
    if ($current === $target) return;
    
    // Redirect to translated URL
    global $wp;
    $current_url = home_url(add_query_arg(array(), $wp->request));
    $translated = pll_translate_url($current_url, $target);
    
    if ($translated && $translated !== $current_url) {
        wp_redirect($translated);
        exit;
    }
    
    // Fallback: redirect to language home
    wp_redirect(pll_home_url($target));
    exit;
});


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

// ========== Quantity +/- Selector Styling ==========
add_action("wp_head", function() {
    echo '<style>
        .quantity { display: inline-flex; align-items: center; border: 1px solid #e6e6e6; border-radius: 4px; overflow: hidden; }
        .quantity .qty { width: 50px; text-align: center; border: none !important; padding: 6px 0; font-size: 14px; }
        .quantity .minus, .quantity .plus { background: #f8f8f8; border: none; padding: 6px 12px; cursor: pointer; font-size: 16px; color: #333; }
        .quantity .minus:hover, .quantity .plus:hover { background: #e6e6e6; }
    </style>';
});

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
// ========== Category Icons in Nav ==========
add_action("wp_head", function() {
    echo '<style>
        .main-header-menu .menu-item a[href*="windows"]::before { content: "\01F4BB"; margin-right: 5px; font-size:13px; }
        .main-header-menu .menu-item a[href*="office"]::before, .main-header-menu .menu-item a[href*="product-category/keys"]::before { content: "\01F511"; margin-right: 5px; font-size:13px; }
        .main-header-menu .menu-item a[href*="linux"]::before { content: "\01F427"; margin-right: 5px; font-size:13px; }
        .main-header-menu .menu-item a[href*="others"]::before { content: "\01F4E6"; margin-right: 5px; font-size:13px; }
    </style>';
});



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



// ========== WooCommerce Site Visibility Fix ==========
add_filter("woocommerce_coming_soon", "__return_false");
add_filter("option_wc_coming_soon", "__return_false");
add_filter("pre_option_wc_coming_soon", "__return_false");
// ========== Language-Specific Nav + Switcher ==========
add_action("wp_head", function() {
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
        "shop_en" => str_replace($en_url, "", $shop_en), "win_en" => str_replace($en_url, "", $win_en), "office_en" => str_replace($en_url, "", $office_en),
        "account_en" => str_replace($en_url, "", $account_en), "cart_en" => str_replace($en_url, "", $cart_en),
        "shop_zh" => str_replace($en_url, "", $shop_zh), "win_zh" => str_replace($en_url, "", $win_zh), "office_zh" => str_replace($en_url, "", $office_zh),
        "account_zh" => str_replace($en_url, "", $account_zh), "cart_zh" => str_replace($en_url, "", $cart_zh),
        "shop_es" => str_replace($en_url, "", $shop_es), "win_es" => str_replace($en_url, "", $win_es), "office_es" => str_replace($en_url, "", $office_es),
        "account_es" => str_replace($en_url, "", $account_es), "cart_es" => str_replace($en_url, "", $cart_es)
    )) . ";
</script>";
    echo '<script>
document.addEventListener("DOMContentLoaded",function(){
var p=window.location.pathname;
var lang=p.indexOf("/zh/")===0?"zh":p.indexOf("/es/")===0?"es":"en";
var nav=document.querySelector("#ast-desktop-header .main-header-menu");
if(!nav)return;
var url=msUrls;
var items={
en:[["All Products",url.shop_en,[["-- Windows --",""],["Windows Home",url.shop_en+"&s=Windows+Home"],["Windows Pro",url.shop_en+"&s=Windows+Pro"],["Windows Enterprise",url.shop_en+"&s=Windows+Enterprise"],["Windows IoT Enterprise",url.shop_en+"&s=Windows+IoT+Enterprise"],["-- Office --",""],["Office Pro Plus 2019",url.shop_en+"&s=Office+Pro+Plus+2019"],["Office Pro Plus 2021",url.shop_en+"&s=Office+Pro+Plus+2021"],["Office Pro Plus 2024",url.shop_en+"&s=Office+Pro+Plus+2024"]]],["Win-Keys",url.win_en,[["Windows Home",url.shop_en+"&s=Windows+Home"],["Windows Pro",url.shop_en+"&s=Windows+Pro"],["Windows Enterprise",url.shop_en+"&s=Windows+Enterprise"],["Windows IoT Enterprise",url.shop_en+"&s=Windows+IoT+Enterprise"]]],["Office-Keys",url.office_en,[["Office Pro Plus 2019",url.shop_en+"&s=Office+Pro+Plus+2019"],["Office Pro Plus 2021",url.shop_en+"&s=Office+Pro+Plus+2021"],["Office Pro Plus 2024",url.shop_en+"&s=Office+Pro+Plus+2024"]]],["Linux",url.shop_en+"&product_cat=linux",[["Ubuntu",url.shop_en+"&s=Ubuntu"]]],["Others",url.shop_en+"&product_cat=others",[["Acronis",url.shop_en+"&s=Acronis"],["Trellix",url.shop_en+"&s=Trellix"],["McAfee",url.shop_en+"&s=McAfee"],["Kaspersky",url.shop_en+"&s=Kaspersky"],["Parallels",url.shop_en+"&s=Parallels"],["AnyDesk",url.shop_en+"&s=AnyDesk"]]],["My Account",url.account_en],["Cart",url.cart_en]],
zh:[["\u5168\u90e8\u4ea7\u54c1",url.shop_zh,[["-- Windows --",""],["Windows Home",url.shop_zh+"&s=Windows+Home"],["Windows Pro",url.shop_zh+"&s=Windows+Pro"],["Windows Enterprise",url.shop_zh+"&s=Windows+Enterprise"],["Windows IoT Enterprise",url.shop_zh+"&s=Windows+IoT+Enterprise"],["-- Office --",""],["Office Pro Plus 2019",url.shop_zh+"&s=Office+Pro+Plus+2019"],["Office Pro Plus 2021",url.shop_zh+"&s=Office+Pro+Plus+2021"],["Office Pro Plus 2024",url.shop_zh+"&s=Office+Pro+Plus+2024"]]],["Windows\u5bc6\u94a5",url.win_zh,[["Windows Home",url.shop_zh+"&s=Windows+Home"],["Windows Pro",url.shop_zh+"&s=Windows+Pro"],["Windows Enterprise",url.shop_zh+"&s=Windows+Enterprise"],["Windows IoT Enterprise",url.shop_zh+"&s=Windows+IoT+Enterprise"]]],["Office\u5bc6\u94a5",url.office_zh,[["Office Pro Plus 2019",url.shop_zh+"&s=Office+Pro+Plus+2019"],["Office Pro Plus 2021",url.shop_zh+"&s=Office+Pro+Plus+2021"],["Office Pro Plus 2024",url.shop_zh+"&s=Office+Pro+Plus+2024"]]],["Linux",url.shop_zh+"&product_cat=linux",[["Ubuntu",url.shop_zh+"&s=Ubuntu"]]],["\u5176\u4ed6",url.shop_zh+"&product_cat=others",[["Acronis",url.shop_zh+"&s=Acronis"],["Trellix",url.shop_zh+"&s=Trellix"],["McAfee",url.shop_zh+"&s=McAfee"],["Kaspersky",url.shop_zh+"&s=Kaspersky"],["Parallels",url.shop_zh+"&s=Parallels"],["AnyDesk",url.shop_zh+"&s=AnyDesk"]]],["\u6211\u7684\u8d26\u6237",url.account_zh],["\u8d2d\u7269\u8f66",url.cart_zh]],
es:[["Todos los productos",url.shop_es,[["-- Windows --",""],["Windows Home",url.shop_es+"&s=Windows+Home"],["Windows Pro",url.shop_es+"&s=Windows+Pro"],["Windows Enterprise",url.shop_es+"&s=Windows+Enterprise"],["Windows IoT Enterprise",url.shop_es+"&s=Windows+IoT+Enterprise"],["-- Office --",""],["Office Pro Plus 2019",url.shop_es+"&s=Office+Pro+Plus+2019"],["Office Pro Plus 2021",url.shop_es+"&s=Office+Pro+Plus+2021"],["Office Pro Plus 2024",url.shop_es+"&s=Office+Pro+Plus+2024"]]],["Claves Windows",url.win_es,[["Windows Home",url.shop_es+"&s=Windows+Home"],["Windows Pro",url.shop_es+"&s=Windows+Pro"],["Windows Enterprise",url.shop_es+"&s=Windows+Enterprise"],["Windows IoT Enterprise",url.shop_es+"&s=Windows+IoT+Enterprise"]]],["Claves Office",url.office_es,[["Office Pro Plus 2019",url.shop_es+"&s=Office+Pro+Plus+2019"],["Office Pro Plus 2021",url.shop_es+"&s=Office+Pro+Plus+2021"],["Office Pro Plus 2024",url.shop_es+"&s=Office+Pro+Plus+2024"]]],["Linux",url.shop_es+"&product_cat=linux",[["Ubuntu",url.shop_es+"&s=Ubuntu"]]],["Otros",url.shop_es+"&product_cat=others",[["Acronis",url.shop_es+"&s=Acronis"],["Trellix",url.shop_es+"&s=Trellix"],["McAfee",url.shop_es+"&s=McAfee"],["Kaspersky",url.shop_es+"&s=Kaspersky"],["Parallels",url.shop_es+"&s=Parallels"],["AnyDesk",url.shop_es+"&s=AnyDesk"]]],["Mi Cuenta",url.account_es],["Carrito",url.cart_es]]
};
nav.innerHTML="";
items[lang].forEach(function(x){
var li=document.createElement("li");li.className="page_item menu-item";
if(x[2]){
li.classList.add("menu-item-has-children");
var a=document.createElement("a");a.href=x[1];a.className="menu-link";a.textContent=x[0];
li.appendChild(a);
var ul=document.createElement("ul");ul.className="sub-menu";
x[2].forEach(function(s){
var sli=document.createElement("li");sli.className="menu-item";
var sa=document.createElement("a");sa.href=s[1];sa.className="menu-link";sa.textContent=s[0];
sli.appendChild(sa);ul.appendChild(sli);
});
li.appendChild(ul);
}else{
var a=document.createElement("a");a.href=x[1];a.className="menu-link";a.textContent=x[0];
li.appendChild(a);
}
nav.appendChild(li);
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

// ===== BTN FIX JS =====
add_action("wp_enqueue_scripts", function() {
    wp_enqueue_script("btn-fix", get_stylesheet_directory_uri() . "/assets/js/btn-fix.js", array(), "1.0", true);
}, 100);
