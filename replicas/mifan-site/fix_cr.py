import os
cr = r"C:\Users\31961\.codex\skills\copycat-auto\pipeline\check-regression.py"
with open(cr, 'rb') as f:
    raw = f.read()
if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
text = raw.decode('utf-8')
# Fix all extra backslashes before single quotes
import re
text = re.sub(r"\\(?=')", '', text)
text = text.replace("\\\'", "'")
text = text.replace("\\\\'", "'")
text = text.replace("\\\\'", "'")
try:
    compile(text, cr, 'exec')
    print('Syntax OK after fix')
    with open(cr, 'w', encoding='utf-8') as f:
        f.write(text)
except SyntaxError as e:
    print(f'Still broken: {e}')
    lines = text.split('\n')
    if e.lineno:
        print(f'  Line {e.lineno}: {lines[e.lineno-1][:100]}')
