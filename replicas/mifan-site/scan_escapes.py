import os

skill = r"C:\Users\31961\.codex\skills\copycat-auto"
issues = []

# Scan all Python files for escaping issues
for root, dirs, files in os.walk(skill):
    for f in files:
        if not f.endswith('.py'): continue
        fp = os.path.join(root, f)
        with open(fp, 'rb') as fh:
            raw = fh.read()
        if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
        
        # Check for \\'' pattern
        if b"\\''" in raw:
            issues.append((f, 'ESCAPE: contains backslash-double-quote'))
        
        # Check for missing shutil
        text = raw.decode('utf-8')
        if 'shutil.' in text and 'import shutil' not in text and 'import os' in text:
            issues.append((f, 'BUG: shutil used but not imported'))
        
        # Try compile
        try:
            compile(text, fp, 'exec')
        except SyntaxError as e:
            issues.append((f, f'SYNTAX ERROR: {e}'))
        
        print(f'  {f}: OK')

if issues:
    print()
    for f, issue in issues:
        print(f'  [{f}] {issue}')
else:
    print('  No issues found')
