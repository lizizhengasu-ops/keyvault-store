import os, shutil

src = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Support.tsx.bak'
dst = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Support.tsx'

# Check if backup exists
if os.path.exists(src):
    # Read backup and write as fresh file (no binary corruption)
    with open(src, 'r', encoding='utf-8') as f:
        content = f.read()
    # Fix: remove stray quotes and >< issues
    # The problematic pattern: }">{">text -> }>text
    content = content.replace('"}">{">', '}>')
    # More general fix: any }}"> pattern -> }}>
    import re
    content = re.sub(r'}}">([A-Z])', r'}}>\1', content)
    with open(dst, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Restored from backup + fixed: {len(content)} chars')
else:
    print(f'No backup found at {src}, trying alternative fix')
    # Read the corrupted file
    with open(dst, 'rb') as f:
        raw = f.read()
    # Write with proper encoding
    text = raw.decode('utf-8', errors='replace')
    text = text.replace('{">"}', '')
    text = text.replace('{">', '')
    with open(dst, 'w', encoding='utf-8') as f:
        f.write(text)
    print(f'Inline fix applied')