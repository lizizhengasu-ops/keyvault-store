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
    echo '<script>
document.addEventListener("DOMContentLoaded", function() {
    var f = document.querySelector(".site-footer") || document.querySelector(".footer");
    if(f && !f.querySelector(".ms-links")) {
        var d = document.createElement("div");
        d.className = "ms-links";
        d.style.cssText = "text-align:center;padding:16px 0;border-top:1px solid #e6e6e6;margin-top:16px;";
        d.innerHTML = "<a href="/contact/" style="margin:0 12px;color:#616161;text-decoration:none;">Contact Us</a>" +
            "<a href="/terms/" style="margin:0 12px;color:#616161;text-decoration:none;">Terms of Service</a>" +
            "<a href="/privacy/" style="margin:0 12px;color:#616161;text-decoration:none;">Privacy Policy</a>" +
            "<div style="margin-top:12px;color:#616161;font-size:12px;">&copy; 2026 Keys-Starter</div>";
        f.appendChild(d);
    }
});
</script>';
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
        .main-navigation li.menu-item a[href*="windows"]::before { content: "\01F4BB"; margin-right: 4px; }
        .main-navigation li.menu-item a[href*="office"]::before { content: "\01F4C4"; margin-right: 4px; }
        .main-navigation li.menu-item a[href*="product-category/keys"]::before { content: "\01F511"; margin-right: 4px; }
    </style>';
});

// ========== Hero Banner Slider on Shop Pages ==========
add_action("woocommerce_before_main_content", function() {
    if (!is_shop() && !is_product_category() && !is_product_tag()) return;
    echo '<div class="ms-hero" style="position:relative;overflow:hidden;border-radius:8px;margin:0 0 24px 0;box-sizing:border-box;background:linear-gradient(135deg,#0078d4,#004578);padding:clamp(24px, 5vw, 60px) clamp(16px, 4vw, 40px);text-align:center;">';
    echo '<div style="max-width:1200px;margin:0 auto;">';
    echo '<h2 class="ms-hero-title" style="font-size:clamp(20px, 4vw, 32px);color:#fff;margin:0 auto clamp(4px, 1vw, 8px) auto;font-weight:600;line-height:1.3;">Windows & Office Keys</h2>';
    echo '<p class="ms-hero-desc" style="font-size:clamp(13px, 2vw, 16px);color:rgba(255,255,255,0.9);margin:0 auto clamp(12px, 3vw, 24px) auto;max-width:600px;line-height:1.5;">Genuine licenses at unbeatable prices. Instant delivery guaranteed.</p>';
    echo '<a href="/shop/" class="ms-hero-btn" style="display:inline-block;background:#fff;color:#0078d4;padding:clamp(8px, 1.5vw, 12px) clamp(20px, 4vw, 36px);border-radius:4px;text-decoration:none;font-weight:600;font-size:clamp(13px, 2vw, 16px);">Shop All Products</a>';
    echo '</div></div>';
}, 1);

// ========== Style Related Products ==========
add_action("wp_head", function() {
    echo '<style>
        .related.products h2 { font-size:20px; font-weight:600; color:#1a1a1a; margin:40px 0 16px; }
        .woocommerce ul.products li.product .add_to_cart_button, 
        .woocommerce ul.products li.product .button { background:#0078d4 !important; color:#fff !important; border-radius:4px !important; font-size:12px !important; padding:4px 10px !important; display:inline-block !important; }
        .ms-breadcrumb { font-size:12px; color:#666; margin-bottom:16px; padding:0; }
        .ms-breadcrumb a { color:#0078d4; text-decoration:none; }
        .ms-breadcrumb a:hover { text-decoration:underline; }
    </style>';
});


// ========== Responsive CSS for Hero & Layout ==========
add_action("wp_head", function() {
    echo '<style>
        .ms-hero { width:100% !important; max-width:100% !important; box-sizing:border-box !important; }
        @media (min-width: 922px) {
            .ast-container { display:block !important; }
        }
        @media (max-width: 768px) {
            .ms-hero { padding: 24px 16px !important; border-radius: 6px !important; margin-bottom: 16px !important; }
            .ms-hero-title { font-size: 20px !important; }
            .ms-hero-desc { font-size: 13px !important; margin-bottom: 16px !important; }
            .ms-hero-btn { display:block !important; padding: 10px 20px !important; font-size: 13px !important; width: 100% !important; max-width: 280px !important; margin-left:auto !important; margin-right:auto !important; text-align: center !important; box-sizing: border-box !important; }
            .ms-why-choose > div { grid-template-columns: repeat(2, 1fr) !important; }
            .ms-shop-topbar { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
            .ms-hero { padding: 20px 12px !important; }
            .ms-hero-title { font-size: 18px !important; }
            .ms-hero-desc { font-size: 12px !important; }
            .ms-why-choose > div { grid-template-columns: 1fr !important; }
        }
    </style>';
});

add_action("wp_head", function() {
    echo '<style>
        @media (max-width: 768px) {
            .ms-hero { padding: 24px 16px !important; border-radius: 6px !important; margin-bottom: 16px !important; margin-left:auto !important; margin-right:auto !important; }
            .ms-hero-title { font-size: 20px !important; }
            .ms-hero-desc { font-size: 13px !important; margin-bottom: 16px !important; }
            .ms-hero-btn { display:block !important; padding: 10px 20px !important; font-size: 13px !important; width: 100% !important; max-width: 280px !important; margin-left:auto !important; margin-right:auto !important; text-align: center !important; box-sizing: border-box !important; }
            .ms-why-choose > div { grid-template-columns: repeat(2, 1fr) !important; }
            .ms-filter-sidebar { width: 100% !important; }
            .ms-shop-topbar { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
            .ms-hero { padding: 20px 12px !important; }
            .ms-hero-title { font-size: 18px !important; }
            .ms-hero-desc { font-size: 12px !important; }
            .ms-why-choose > div { grid-template-columns: 1fr !important; }
        }
    </style>';
});


// ========== Language Switcher ==========
add_action("wp_footer", function() {
    echo '
<script>
(function(){
    var sel = document.createElement("select");
    sel.id = "ms-lang-sel";
    sel.style.cssText = "margin:0;padding:4px 6px;border:1px solid #e6e6e6;border-radius:4px;font-size:12px;background:#fff;cursor:pointer;";
    sel.onchange = function(){ if(this.value) window.location.href = this.value; };
    var langs = [
        {url:"/",name:"EN",current: window.location.pathname==="/" || window.location.pathname.indexOf("/en/")===0},
        {url:"/zh/",name:"\u4e2d",current: window.location.pathname.indexOf("/zh/")===0},
        {url:"/es/",name:"ES",current: window.location.pathname.indexOf("/es/")===0}
    ];
    langs.forEach(function(l){
        var opt = document.createElement("option");
        opt.value = l.url;
        opt.selected = l.current;
        opt.textContent = l.name;
        sel.appendChild(opt);
    });
    var ul = document.querySelector(".main-header-menu");
    if(ul){
        var li = document.createElement("li");
        li.className = "menu-item ms-lang-item";
        li.style.cssText = "display:flex;align-items:center;";
        li.appendChild(sel);
        ul.appendChild(li);
    }
})();
</script>
';
});

// ========== Basic SEO ==========
add_action("wp_head", function() {
    if (is_single() && function_exists("get_the_excerpt")) {
        $desc = wp_trim_words(get_the_excerpt() ?: get_the_title(), 20);
        echo "<meta name=\"description\" content=\"$desc\" />";
    } elseif (is_shop() || is_product_category()) {
        echo "<meta name=\"description\" content=\"Buy genuine Windows, Office and Microsoft 365 license keys at unbeatable prices. Instant digital delivery.\" />";
    } elseif (is_front_page()) {
        echo "<meta name=\"description\" content=\"Keys-Starter - Genuine Windows, Office & Microsoft 365 keys. Instant digital delivery, unbeatable prices.\" />";
    }
}, 1);
// Add Open Graph tags
add_action("wp_head", function() {
    echo "<meta property=\"og:site_name\" content=\"Keys-Starter\" />";
    echo "<meta property=\"og:type\" content=\"website\" />";
    echo "<meta property=\"og:locale\" content=\"en_US\" />";
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
