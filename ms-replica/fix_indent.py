p = r'C:\Users\31961\.codex\skills\copycat-auto\pipeline\build.py'
with open(p, encoding='utf-8') as f:
    c = f.read()
# Fix save_json indentation
old = '''def save_json(p, d):
with open(p, "w", encoding="utf-8-sig") as f: json.dump(d, f, indent=2)'''
new = '''def save_json(p, d):
    with open(p, "w", encoding="utf-8-sig") as f: json.dump(d, f, indent=2)'''
c = c.replace(old, new)
with open(p, 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed indentation for save_json')