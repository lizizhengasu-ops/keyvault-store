import os, re, json, subprocess, sys

proj = r'C:\Users\31961\Documents\microsoft web\ms-replica'
skill = r'C:\Users\31961\.codex\skills\copycat-auto'

# ===== 1) Normalize similarity-check.py =====
sim = os.path.join(skill, 'scripts', 'similarity-check.py')
with open(sim, 'rb') as f:
    raw = f.read()
if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
text = raw.decode('utf-8')
text = text.replace('\r\n', '\n').replace('\r', '')

# Replace PAGE_MAP
old_map = "PAGE_MAP = {\n"
new_map = "PAGE_MAP = {\n    'home':    {'ref': 'https://www.microsoft.com/en-us/', 'local': '/'},\n    'store':   {'ref': 'https://www.microsoft.com/en-us/store/browse', 'local': '/store'},\n    'surface': {'ref': 'https://www.microsoft.com/en-us/surface', 'local': '/product/surface'},\n    'windows': {'ref': 'https://www.microsoft.com/en-us/windows', 'local': '/product/windows'},\n    'support': {'ref': 'https://support.microsoft.com/en-us', 'local': '/support'},\n    'b2b':     {'ref': 'https://www.microsoft.com/en-us/microsoft-365/business', 'local': '/b2b'},\n}"
text = re.sub(r'PAGE_MAP = \{\n.*?\n\}', new_map, text, flags=re.DOTALL)

with open(sim, 'w', encoding='utf-8') as f:
    f.write(text)
print('1/3 PAGE_MAP updated')

# ===== 2) Create comprehensive design-tokens.json =====
tokens = {
    'body': {'fontFamily': '"Segoe UI", system-ui, sans-serif', 'fontSize': '15px', 'color': '#000000', 'bg': '#FFFFFF', 'lineHeight': '1.6'},
    'h1': {'fontSize': '46px', 'fontWeight': '600', 'color': '#000000', 'lineHeight': '1.2'},
    'h2': {'fontSize': '34px', 'fontWeight': '600', 'color': '#000000', 'lineHeight': '1.3'},
    'h3': {'fontSize': '24px', 'fontWeight': '600', 'color': '#000000', 'lineHeight': '1.3'},
    'h4': {'fontSize': '20px', 'fontWeight': '600', 'color': '#000000', 'lineHeight': '1.4'},
    'p': {'fontSize': '15px', 'color': '#000000', 'lineHeight': '1.6'},
    'a': {'color': '#0078D4', 'fontWeight': '400', 'textDecoration': 'none'},
    'button': {'bg': '#0078D4', 'color': '#FFFFFF', 'fontSize': '15px', 'fontWeight': '600', 'borderRadius': '2px', 'padding': '8px 20px'},
    'nav': {'bg': '#FFFFFF', 'color': '#000000', 'height': '48px', 'borderBottom': '1px solid #E6E6E6'},
    'header': {'bg': '#FFFFFF', 'color': '#000000'},
    'footer': {'bg': '#F2F2F2', 'color': '#616161', 'fontSize': '12px'},
    'section': {'padding': '48px 20px'},
    'hero': {'bg': '#0078D4', 'color': '#FFFFFF', 'padding': '60px 20px', 'textAlign': 'center'},
    'card': {'bg': '#FFFFFF', 'borderRadius': '2px', 'boxShadow': '0 2px 8px rgba(0,0,0,0.08)', 'padding': '24px'},
    'colorPrimary': '#0078D4',
    'colorSecondary': '#106EBE',
    'colorAccent': '#1B1B1B',
    'colorBg': '#FFFFFF',
    'colorBgSection': '#F2F2F2',
    'colorBgDark': '#2D2D2D',
    'colorText': '#000000',
    'colorTextSecondary': '#616161',
    'colorLink': '#0078D4',
    'colorWhite': '#FFFFFF',
    'spacingXs': '4px',
    'spacingSm': '8px',
    'spacingMd': '16px',
    'spacingLg': '24px',
    'spacingXl': '32px',
    'spacingXxl': '48px',
    'fontSans': '"Segoe UI", system-ui, sans-serif',
    'fontMono': 'Consolas, monospace',
    'fontSizeSm': '12px',
    'fontSizeMd': '15px',
    'fontSizeLg': '20px',
    'fontSizeXl': '24px',
    'radiusSm': '2px',
    'radiusMd': '4px',
    'radiusLg': '8px',
}

with open(os.path.join(proj, 'design-tokens.json'), 'w') as f:
    json.dump(tokens, f, indent=2)
print(f'2/3 design-tokens.json: {len(tokens)} entries')

# ===== 3) Verify =====
# Check PAGE_MAP
with open(sim, 'r', encoding='utf-8') as f:
    content = f.read()
if 'microsoft' in content.lower():
    print('3/3 PAGE_MAP verified: Microsoft URLs set')
else:
    print('3/3 PAGE_MAP VERIFICATION FAILED')
    sys.exit(1)
