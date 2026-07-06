p = r'C:\Users\31961\.codex\skills\copycat-auto\pipeline\build.py'
with open(p, encoding='utf-8') as f:
    c = f.read()
c = c.replace("open(ril_path).read()", "open(ril_path, encoding='utf-8').read()")
c = c.replace("open(eng_path).read()", "open(eng_path, encoding='utf-8').read()")
with open(p, 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed encoding for ril_path and eng_path')