import os, subprocess

root = r'C:\Users\31961\Documents\microsoft web\ms-replica'

# 1. Fix index.html with EVERY possible body bg method
index_html = '''<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Microsoft Replica</title>
  <style>
    html, body, #root { background: #ffffff !important; color: #000000 !important; margin: 0; }
  </style>
</head>
<body style="background:#ffffff;color:#000000;margin:0">
<div id="root" style="background:#ffffff;min-height:100vh"></div>
<script type="module" src="/src/main.tsx"></script>
</body>
</html>'''
with open(os.path.join(root, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_html)
print('index.html fixed')

# 2. Fix main.tsx - remove body style (it's in HTML now)
main_tsx = r'''import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
'''
with open(os.path.join(root, 'src', 'main.tsx'), 'w', encoding='utf-8') as f:
    f.write(main_tsx)
print('main.tsx fixed')

# 3. Fix CSS - remove redundant body bg
css = ''':root {
  --primary: #0078D4;
  --text: #000000;
  --text-secondary: #616161;
  --bg: #FFFFFF;
  --bg-section: #F2F2F2;
  --font: 'Segoe UI', system-ui, sans-serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: var(--font);
  color: #000000;
  background: #FFFFFF;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
}
h1 { font-size: 46px; font-weight: 600; line-height: 1.1; color: #000000; }
h2 { font-size: 34px; font-weight: 100; line-height: 40px; color: #000000; }
h3 { font-size: 24px; font-weight: 600; line-height: 28px; color: #000000; }
p  { font-size: 16px; font-weight: 400; line-height: 24px; color: #000000; padding: 24px 0 4px; }
a, a:link { color: #000000; font-weight: 400; line-height: inherit; text-decoration: none; }
a:hover { text-decoration: underline; }
nav { background: #000000; color: #FFFFFF; font-size: 13px; line-height: normal; }
nav a { color: #FFFFFF; padding: 0; }
footer { background: #F2F2F2; color: #000000; padding: 0; }
section { padding: 48px 20px; }
'''
with open(os.path.join(root, 'src', 'index.css'), 'w', encoding='utf-8') as f:
    f.write(css)
print('index.css fixed')

print('All files fixed')