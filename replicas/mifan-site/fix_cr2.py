import os
cr = r"C:\Users\31961\.codex\skills\copycat-auto\pipeline\check-regression.py"
with open(cr, 'rb') as f:
    raw = f.read()
if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
text = raw.decode('utf-8')
# Show original problematic bytes
for i, ch in enumerate(raw):
    if raw[i:i+3] == b"\\''" or raw[i:i+2] == b"\\'":
        ctx = raw[max(0,i-5):i+15].decode('utf-8', errors='replace')
        print(f'  Found at byte {i}: ...{ctx}...')
        break

# Correct fix: replace backslash-2x-singlequote with single-quote
count = text.count("\\''")
print(f'Found {count} instances of backslash-double-quote')
text = text.replace("\\''", "'")
print(f'After fix: {text.count(chr(39))} single quotes')

try:
    compile(text, cr, 'exec')
    print('Syntax OK')
    with open(cr, 'w', encoding='utf-8') as f:
        f.write(text)
except SyntaxError as e:
    print(f'Syntax error remains: {e}')
    if e.lineno:
        lines = text.split('\n')
        print(f'  Line {e.lineno}: {lines[e.lineno-1][:120]}')
