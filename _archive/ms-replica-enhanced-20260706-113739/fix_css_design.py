import os
root = r'C:\Users\31961\Documents\microsoft web\ms-replica'

# 1. Fix index.css with REAL Microsoft values from extraction
css = """:root {
  --primary: #0078D4;
  --text: #000000;
  --text-secondary: #616161;
  --bg: #FFFFFF;
  --bg-section: #F2F2F2;
  --font: 'Segoe UI Variable Text', 'Segoe UI', system-ui, sans-serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body, #root { background: #ffffff !important; color: #000000 !important; }
body {
  font-family: var(--font);
  color: #000000;
  background: #FFFFFF;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
}
h1 { font-size: 48px; font-weight: 500; line-height: 56px; color: #f4fafd; letter-spacing: -1.2px; }
h2 { font-size: 62px; font-weight: 500; line-height: 72px; color: #0e1726; letter-spacing: -1.55px; }
h3 { font-size: 20px; font-weight: 600; line-height: 28px; color: #0e1726; letter-spacing: -0.3px; }
p  { font-size: 16px; font-weight: 400; line-height: 24px; color: #000000; padding: 24px 0 4px; }
a, a:link { color: #0078D4; font-weight: 400; font-size: 14px; text-decoration: none; }
a:hover { text-decoration: underline; }
nav { height: 54px; background: transparent; color: #000; font-size: 13px; line-height: 54px; }
nav a { color: #262626; padding: 0 16px; font-weight: 400; font-size: 13px; text-decoration: none; }
footer { background: #F2F2F2; color: #616161; padding: 36px 72px; font-size: 12px; line-height: 20px; }
footer a { color: #616161; font-size: 12px; }
section { padding: 48px 20px; }
"""
with open(os.path.join(root, 'src', 'index.css'), 'w', encoding='utf-8') as f:
    f.write(css)
print('index.css updated with real MS values')