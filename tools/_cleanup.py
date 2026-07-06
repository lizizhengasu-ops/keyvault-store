import os, subprocess

path = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-v3.js'
with open(path, encoding='utf-8') as f:
    c = f.read()

# Fix all remaining issues
# 1. Remove any "var foot=footerSection)" with extra closing
find1 = 'var foot=footerSection);'
if find1 in c:
    c = c.replace(find1, '')
    print('Removed foot= line with extra paren')

# 2. Remove "var foot=e("footer"," lines
if 'var foot=e(' in c:
    # Find the exact line
    start = c.find('var foot=e(')
    end = c.find('\n', start)
    if start >= 0:
        c = c[:start] + c[end+1:]
        print('Removed foot= line')

# 3. Clean up any "footerSection)" without semicolon
c = c.replace('footerSection)', 'footerSection;')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

# Check syntax
r = subprocess.run(['node', '--check', path], capture_output=True, text=True)
print('JS:', 'PASS' if r.returncode == 0 else 'FAIL')
if r.returncode != 0:
    print(r.stderr[:300])
    
# Check key patterns
with open(path, encoding='utf-8') as f:
    c2 = f.read()

checks = {
    'function Trust(): ': 'function Trust()' not in c2,
    'function Footer(): ': 'function Footer()' not in c2,
    'e(Trust),e(Footer): ': 'e(Trust),e(Footer)' not in c2,
    'FCOLS: ': 'FCOLS' not in c2,
    'STATS: ': 'STATS' not in c2,
    'BADGES: ': 'BADGES' not in c2,
}
for label, result in checks.items():
    print(f'  {\"REMOVED\" if result else \"PRESENT\"} {label}')
print(f'Size: {os.path.getsize(path)} bytes')
