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
    return "\u{8D2D}\u{4E70}";
}, 999 );

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
