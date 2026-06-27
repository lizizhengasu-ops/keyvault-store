# ?? ??????? Hero ????????

## 1. ?????????????

```
[Header - keys-starter ??? (sticky)]
[????? ???? HERO ?? ? astra_content_before ?? ?????]
  [????: ms-hero-inner (max-width:1240px)]
    [h2] Windows & Office Keys [/h2]
    [p] Genuine licenses... [/p]
    [a.ms-hero-btn] Shop All Products [/a]
[????????????????????????????????????????]
[???: #content > .ast-container]
  [.ms-shop-wrap display:flex]
    [aside.ms-filter-sidebar] Platforms (220px) [/aside]
    [div.ms-shop-content]
      [nav.ms-breadcrumb] Home / Shop [/nav]
      [????...]
```

## 2. PHP ???????????

```php
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
```

## 3. CSS ???????????

```css
.ms-hero-fullwidth {
    background: linear-gradient(135deg, #0078d4, #004578);
    padding: clamp(20px, 4vw, 40px) 0;
    text-align: center;
    margin: 0 0 24px 0;
    width: 100%;
    display: block;
    clear: both;
}
.ms-hero-fullwidth .ms-hero-inner {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
}
.ms-hero-fullwidth h2 {
    font-size: clamp(20px, 2.5vw, 28px);
    color: #fff;
    margin: 0 0 8px 0;
    font-weight: 600;
}
.ms-hero-fullwidth p {
    font-size: clamp(13px, 1.5vw, 16px);
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 clamp(12px, 2vw, 20px) 0;
}
.ms-hero-fullwidth .ms-hero-btn {
    display: inline-block;
    background: #fff;
    color: #0078d4;
    padding: clamp(6px, 1vw, 10px) clamp(16px, 2.5vw, 28px);
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    font-size: clamp(12px, 1.4vw, 15px);
    white-space: nowrap;
}
.ms-hero-fullwidth .ms-hero-btn:hover {
    background: #f0f0f0;
}
@media (max-width: 768px) {
    .ms-hero-fullwidth { padding: 16px 0; }
    .ms-hero-fullwidth h2 { font-size: 18px; }
    .ms-hero-fullwidth p { font-size: 12px; margin-bottom: 10px; }
    .ms-hero-fullwidth .ms-hero-btn { font-size: 11px; padding: 6px 14px; }
}
```

## 4. ?????CONTRAINTS ? ??????????

1. Hero ???? `astra_content_before` ????
2. Hero ???? `ms-hero-fullwidth` class??? div?
3. ?????? `ms-hero-inner` class ???max-width:1240px?
4. ?????? `ms-hero-btn` class
5. ?????All Products (`/?post_type=product`)?Win-Keys (`/product-category/windowskey/`)?Office-Keys (`/product-category/keys/`)
6. ?????????`if (!is_shop() && !is_product_category() && !is_product_tag()) return;`
7. ?????? `135deg, #0078d4, #004578` ????
8. **??**? hero ?? `woocommerce_before_main_content` ?????
9. **??**? hero ?? `ast-container` ??
10. **??**?? `display: block; width: 100%; clear: both;` ??
