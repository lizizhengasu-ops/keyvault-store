import mysql.connector
import re
import os, sys

# Fix all issues via Python
conn = mysql.connector.connect(host="127.0.0.1", port=10006, user="root", password="", database="local")
c = conn.cursor()

# 1. Update custom CSS post
c.execute("SELECT ID, post_content FROM wp_posts WHERE post_type='custom_css' LIMIT 1")
row = c.fetchone()
if row:
    css_id, css_content = row
    # Remove old Navigation fix section
    css_content = re.sub(r'/\* Navigation fix \*/.*$', '', css_content, flags=re.DOTALL)
    
    new_css = css_content + """

/* FIX */
@media (min-width: 922px) {
  #ast-mobile-header { display: none !important; }
  .ast-mobile-popup-drawer { display: none !important; }
}
.wp-block-column .wp-block-button__link {
  padding: 8px 20px !important; border-radius: 4px !important;
  font-size: 14px !important; line-height: 1.4 !important; min-height: 36px !important;
}
"""
    c.execute("UPDATE wp_posts SET post_content=%s WHERE ID=%s", (new_css, css_id))
    conn.commit()
    print("CSS post updated")

# 2. Fix functions.php
func_file = "C:\\Users\\31961\\Local Sites\\keysavings\\app\\public\\wp-content\\themes\\astra\\functions.php"
with open(func_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove broken wp_head code
content = re.sub(r'// CSS fixes for duplicate nav.*?wp_head.*?</style>\';\n\}\);\n', '', content, flags=re.DOTALL)
# Remove test code
content = re.sub(r'// TEST.*?wp_head.*?</style>.*?\);\n', '', content, flags=re.DOTALL)
# Add remove_action for mobile header
if 'remove_action.*astra_mobile_header' not in content:
    content += "\n// Remove mobile header to prevent duplicate nav\nadd_action('wp_loaded', function() {\n    remove_action('astra_mobile_header', 'astra_mobile_header_construct');\n});\n"

with open(func_file, 'w', encoding='utf-8') as f:
    f.write(content)
print("functions.php fixed")

conn.close()
print("ALL DONE")
