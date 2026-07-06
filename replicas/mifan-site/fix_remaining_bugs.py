import os

skill = r"C:\Users\31961\.codex\skills\copycat-auto"

def readf(path):
    with open(path, 'rb') as f:
        raw = f.read()
    if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
    return raw.decode('utf-8')

def writef(path, text):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)

# Fix 1: similarity-check.py - networkidle + longer timeout
sc = os.path.join(skill, 'scripts', 'similarity-check.py')
text = readf(sc)
text = text.replace("wait_until='domcontentloaded', timeout=15000", "wait_until='networkidle', timeout=30000")
writef(sc, text)
print('1/3 similarity-check.py: networkidle + 30s timeout')

# Fix 2: similarity-check.py - domcontentloaded in extract_page
text = readf(sc)  # re-read
text = text.replace("await page.goto(url, wait_until='domcontentloaded', timeout=15000)", "await page.goto(url, wait_until='networkidle', timeout=30000)")
writef(sc, text)
print('   similarity-check.py: fixed 2nd goto call')

# Fix 3: visual-diff.py - add normalize functions + use them
vd = os.path.join(skill, 'scripts', 'visual-diff.py')
text = readf(vd)

# Add normalize functions before the async diff function
normalize_code = '''
def normalize_color(c):
    if not c or c == 'none' or c == 'transparent': return 'transparent'
    c = c.strip()
    if c.startswith('#'): return c[:7].lower()
    if c.startswith('rgb('):
        parts = c.replace('rgb(','').replace(')','').split(',')
        try:
            r,g,b = [int(x.strip()) for x in parts[:3]]
            return f'#{r:02x}{g:02x}{b:02x}'
        except: return c
    return c

def normalize_size(s):
    if not s: return 0
    s = s.strip()
    if s.endswith('px'): return float(s.replace('px',''))
    if s.endswith('rem'): return float(s.replace('rem','')) * 16
    return 0
'''

# Insert after imports
import_section = text.find('\nimport sys')
insert_pos = text.index('\n', import_section) if import_section >= 0 else 0
text = text[:insert_pos+1] + normalize_code + text[insert_pos+1:]
writef(vd, text)
print('3/3 visual-diff.py: normalize functions added')

# Verify syntax for all fixed files
for name, path in [('similarity-check.py', sc), ('visual-diff.py', vd)]:
    t = readf(path)
    try:
        compile(t, path, 'exec')
        print(f'  {name}: syntax valid')
    except SyntaxError as e:
        print(f'  {name}: SYNTAX ERROR - {e}')
