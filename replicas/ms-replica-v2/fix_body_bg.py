import os

# 1. Fix normalize_color: handle rgba(...,0) -> transparent
p = r'C:\Users\31961\.codex\skills\copycat-auto\scripts\similarity-check.py'
with open(p, encoding='utf-8') as f:
    c = f.read()
# Replace the rgba handler to check alpha
old = '''    if c.startswith('rgba('):
        parts = c.replace('rgba(', '').replace(')', '').split(',')
        try:
            r, g, b = [int(x.strip()) for x in parts[:3]]
            return f'#{r:02x}{g:02x}{b:02x}'
        except: return c'''
new = '''    if c.startswith('rgba('):
        parts = c.replace('rgba(', '').replace(')', '').split(',')
        try:
            vals = [int(x.strip()) for x in parts[:3]]
            if len(parts) >= 4:
                alpha = float(parts[3].strip())
                if alpha == 0.0:
                    return 'transparent'
            r, g, b = vals
            return f'#{r:02x}{g:02x}{b:02x}'
        except: return c'''
c = c.replace(old, new)
with open(p, 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed rgba alpha=0 -> transparent')

# 2. Fix index.html: add early script to set body bg
root = r'C:\Users\31961\Documents\microsoft web\ms-replica'
html = '''<!doctype html>
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
<script>document.body.style.backgroundColor='#ffffff';document.documentElement.style.backgroundColor='#ffffff';</script>
<div id="root" style="background:#ffffff;min-height:100vh"></div>
<script type="module" src="/src/main.tsx"></script>
</body>
</html>'''
with open(os.path.join(root, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(html)
print('Fixed index.html with early script')

print('Done')