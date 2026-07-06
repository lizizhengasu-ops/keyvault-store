p = r'C:\Users\31961\.codex\skills\copycat-auto\pipeline\build.py'
with open(p, encoding='utf-8') as f:
    c = f.read()
# Fix encoding on the open() inside enforce_no_inline too
c = c.replace("open(os.path.join(pages_dir, f)).read()", "open(os.path.join(pages_dir, f), encoding='utf-8').read()")
with open(p, 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed all open() calls')