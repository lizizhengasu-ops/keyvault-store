import os

pf = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\scripts', 'preflight-check.py')
with open(pf, 'r', encoding='utf-8') as f:
    text = f.read()

# Find exact PC0 lines
lines = text.split('\n')
for i, line in enumerate(lines):
    if 'PC0 Build' in line:
        print(f'  Line {i}: {line.strip()[:80]}')
        print(f'  Line {i+1}: {lines[i+1].strip()[:80]}' if i+1 < len(lines) else '')
