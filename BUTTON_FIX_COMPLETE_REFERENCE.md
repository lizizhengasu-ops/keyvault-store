# KEYS-STARTER: COMPLETE BUTTON/CARD FIX REFERENCE
# Last updated: 2026-06-23

## THE 3 PLACES THAT ACTUALLY WORK

### 1. custom_css post (ID=33) - PRIMARY CSS FIX
Path: wp_posts ID=33, post_type='custom_css'
This is WordPress "Appearance > Customize > Additional CSS".
Astra loads it via wp_add_inline_style, which ATTACHES to the theme
stylesheet and loads AFTER wp-block-library.css. This is the ONLY
reliable CSS injection method.

### 2. btn-fix.js - JS FALLBACK
Path: wp-content/themes/astra/assets/js/btn-fix.js
Enqueued in functions.php via wp_enqueue_scripts with priority 100.
Uses style.setProperty("prop", "val", "important") which creates
inline styles with !important that CANNOT be overridden.

### 3. functions.php - MINIMAL MODIFICATIONS ONLY
Path: wp-content/themes/astra/functions.php
ONLY add wp_enqueue_script calls here. DO NOT add inline echo CSS/JS
via wp_head/wp_footer - they don't load reliably (OPcache, priority issues).
Keep a clean backup at: functions_final_locked_backup.php

## APPROACHES THAT FAILED (do not repeat)

| Method | Why Failed |
|--------|-----------|
| CSS in functions.php wp_head | OPcache prevented loading |
| CSS in functions.php wp_footer | OPcache prevented loading |
| CSS in post_content <style> | wpautop filter broke the tags |
| DB inline style replacement | Server served cached content |
| wp_footer wp_add_action echo '<style>' | Never appeared in page output |
| wp_enqueue_scripts priority 99999 | Too late, scripts already output |

## HOW TO FIX BUTTON ISSUES IN 2 STEPS

### Step 1: CSS in custom_css
```python
import mysql.connector
conn = mysql.connector.connect(host="127.0.0.1", port=10006, user="root", password="", database="local")
cur = conn.cursor()
css = """
.wp-block-cover__inner-container{display:flex!important;flex-direction:column!important;justify-content:space-between!important;height:100%!important}
.wp-block-cover .wp-block-buttons,.wp-block-cover .wp-block-button{margin-top:auto!important}
.wp-block-button__link,.add_to_cart_button,.button{padding:6px 14px!important;font-size:12px!important;min-height:auto!important;line-height:1.3!important;white-space:nowrap!important}
.wp-block-cover .wp-block-button__link{position:relative!important;top:auto!important;bottom:auto!important}
.wp-block-cover{height:auto!important;min-height:380px!important;overflow:hidden!important}
"""
cur.execute("UPDATE wp_posts SET post_content=CONCAT(%s, '\n', post_content) WHERE ID=33", (css,))
conn.commit()
```

### Step 2: Verify + Kill PHP OPcache
```powershell
Get-Process -Name "php*" -ErrorAction SilentlyContinue | Stop-Process -Force
# Wait 3 seconds, then open: http://127.0.0.1:10005/
```

## KEY LEARNINGS

1. PHP OPcache caches compiled bytecode - must kill PHP processes after
   modifying functions.php
2. custom_css post type is the ONLY reliable CSS injection for Astra
3. JS style.setProperty("prop", "val", "important") > any CSS cascade
4. Never clear theme_mods_astra - it breaks custom_css_post_id reference
5. WordPress wpautop filter corrupts <script>/<style> in post_content
6. Inline styles in WP block editor CANNOT be overridden by CSS !important
   in some browsers - only JS style.setProperty with "important" flag works

## CREDENTIALS
- DB: local, root@127.0.0.1:10006
- Site: http://127.0.0.1:10005/
- Functions.php: C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\functions.php
- Clean backup: C:\Users\31961\Documents\microsoft web\functions_final_locked_backup.php
- btn-fix.js: C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\btn-fix.js