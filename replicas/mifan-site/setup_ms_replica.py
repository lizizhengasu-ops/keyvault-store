import os, subprocess, sys

proj = r'C:\Users\31961\Documents\microsoft web\ms-replica'
skill = r'C:\Users\31961\.codex\skills\copycat-auto'

# Step 1: Update PAGE_MAP
sim = os.path.join(skill, 'scripts', 'similarity-check.py')
with open(sim, 'r', encoding='utf-8') as f:
    text = f.read()

old = "PAGE_MAP = {\n    'home':    {'ref': '/', 'local': '/'},\n    'store':   {'ref': '/store', 'local': '/store'},\n    'product': {'ref': '/iphone-17-pro', 'local': '/product/mphone-11-pro'},\n    'support': {'ref': 'https://support.apple.com', 'local': '/support'},\n    'account': {'ref': '/account', 'local': '/account'},\n    'b2b':     {'ref': '/business', 'local': '/b2b'},\n    'cart':    {'ref': '/shop/bag', 'local': '/cart'},\n}"

new = "PAGE_MAP = {\n    'home':    {'ref': 'https://www.microsoft.com/en-us/', 'local': '/'},\n    'store':   {'ref': 'https://www.microsoft.com/en-us/store/browse', 'local': '/store'},\n    'surface': {'ref': 'https://www.microsoft.com/en-us/surface', 'local': '/product/surface'},\n    'windows': {'ref': 'https://www.microsoft.com/en-us/windows', 'local': '/product/windows'},\n    'support': {'ref': 'https://support.microsoft.com/en-us', 'local': '/support'},\n    'b2b':     {'ref': 'https://www.microsoft.com/en-us/microsoft-365/business', 'local': '/b2b'},\n}"

if old in text:
    text = text.replace(old, new)
    with open(sim, 'w', encoding='utf-8') as f:
        f.write(text)
    print('PAGE_MAP updated')
else:
    print('Old PAGE_MAP not found - checking current content...')
    idx = text.find('PAGE_MAP')
    if idx >= 0:
        print(text[idx:idx+300])
    sys.exit(1)

# Step 2: Run extract-design.py
extract = os.path.join(skill, 'scripts', 'extract-design.py')
result = subprocess.run([sys.executable, extract, '--url', 'https://www.microsoft.com/en-us', '--output', os.path.join(proj, 'design-tokens.json')], capture_output=True, text=True, timeout=30, cwd=proj)
print(result.stdout.strip())
if result.stderr:
    print('STDERR:', result.stderr[:200])

# Step 3: Verify build
build = subprocess.run(['npx', 'vite', 'build'], capture_output=True, text=True, timeout=30, cwd=proj)
if build.returncode == 0:
    print('Build: OK')
else:
    print('Build FAILED:', build.stderr[:200])
