# KEYS-STARTER BUTTON SIZE FIX - PERMANENT MEMORY
# Created: 2026-06-23
# Issue: After restoring functions.php from backup, wp-block buttons on homepages
#        revert to oversized padding (10px 28px inline style from WP block editor)
# This happens EVERY TIME functions.php is restored from the old backup.

## ROOT CAUSE
WordPress block editor saves button inline styles as padding:10px 28px;font-weight:600 
in post_content. When functions.php is restored from unctions_final_locked_backup.php,
the CSS that constrains these styles is lost because the backup predates the fix.

CSS via wp_head/wp_footer/post_content <style> does NOT reliably override inline 
styles due to CSS cascade priority (inline styles have specificity 1,0,0,0 which 
beats any selector-based rule, even with !important in some browser implementations).

## FIX (run this Python script)
python -c "
import mysql.connector
conn = mysql.connector.connect(host='127.0.0.1', port=10006, user='root', password='', database='local', charset='utf8mb4')
cur = conn.cursor()
# Fix ALL pages
padding_fixes = {
    'padding:10px 28px': 'padding:6px 14px',
    'padding:10px 24px': 'padding:6px 14px',
    'padding:12px 32px': 'padding:6px 14px',
    'padding:14px 28px': 'padding:6px 14px',
    'padding:8px 24px': 'padding:6px 14px',
    'padding: 10px 28px': 'padding: 6px 14px',
}
cur.execute(\"SELECT ID FROM wp_posts WHERE post_type IN ('page','post') AND post_status='publish'\")
for (pid,) in cur.fetchall():
    cur.execute('SELECT post_content FROM wp_posts WHERE ID=%s', (pid,))
    content = cur.fetchone()[0]
    for old, new in padding_fixes.items():
        content = content.replace(old, new)
    cur.execute('UPDATE wp_posts SET post_content=%s WHERE ID=%s', (content, pid))
conn.commit()
print('Button sizes fixed on all pages')
"

## AFFECTED PAGES
- ID=35: English homepage (Home)
- ID=111: Spanish homepage (Inicio)
- ID=61: Chinese homepage (button-free, uses different layout)

## PREVENTION
- DO NOT restore functions.php from functions_final_locked_backup.php without 
  re-running this fix
- The backup is MISSING button constraint CSS
- Before restoring: backup current functions.php first
- After restoring: run the Python fix above

## KEY FILES
- functions.php: C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\functions.php
- Backup: C:\Users\31961\Documents\microsoft web\functions_final_locked_backup.php
- DB: local, root@127.0.0.1:10006
## UPDATE 2026-06-23: The REAL issue
Turns out inline padding fixes in DB were NOT the problem. The buttons were VERTICALLY too tall
(overflowing container borders), not horizontally too wide.

The WordPress block library CSS sets:
- min-height on .wp-block-button__link
- line-height via calc()
- padding via calc(0.667em + 2px)

These create tall buttons that CSS can't reliably override because of cascade order
(wp-block-library.css loads AFTER wp_head CSS).

## FINAL FIX (JS runtime)
Added to functions.php: JavaScript that runs on DOMContentLoaded and uses
style.setProperty() with "important" flag to create inline styles with !important
priority. This is the only method that definitively overrides WordPress block styles.

JS is in functions.php under '// ========== ULTIMATE BUTTON FIX =========='

Key CSS values set by JS:
- padding: 4px 12px !important
- font-size: 11px !important  
- min-height: auto !important
- line-height: 1.2 !important
- display: inline-block !important
- width: auto !important

## DEBUGGING NOTES
- DB inline padding fix IS working (6px 14px confirmed in DB and server response)
- CSS via wp_head/wp_footer/post_content <style> does NOT reliably override 
  WordPress block library CSS due to loading order
- Only JS style.setProperty() with "important" parameter works reliably