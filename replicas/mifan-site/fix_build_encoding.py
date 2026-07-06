import os
build = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\pipeline', 'build.py')

with open(build, 'rb') as f:
    raw = f.read()
if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
text = raw.decode('utf-8').replace('\r\n', '\n').replace('\r', '')

# Fix: open(ril_path).read() -> open(ril_path, encoding='utf-8').read()
text = text.replace("open(ril_path).read()", "open(ril_path, encoding='utf-8').read()")
text = text.replace("open(eng_path).read()", "open(eng_path, encoding='utf-8').read()")

# Fix: load_json and save_json to use utf-8
text = text.replace("with open(p) as f: return json.load(f)", "with open(p, encoding='utf-8') as f: return json.load(f)")
text = text.replace("with open(p, 'w') as f: json.dump(", "with open(p, 'w', encoding='utf-8') as f: json.dump(")
text = text.replace("with open(path, 'w') as f: json.dump(", "with open(path, 'w', encoding='utf-8') as f: json.dump(")

# Fix: build check and other opens
text = text.replace("open(pages_dir, f)).read()", "open(pages_dir, f), encoding='utf-8').read()")
# Actually that's wrong. Let me fix the inline style check
text = text.replace("c = open(os.path.join(pages_dir, f)).read()", "with open(os.path.join(pages_dir, f), encoding='utf-8') as fh: c = fh.read()")

with open(build, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, build, 'exec')
print('build.py: UTF-8 encoding fixes applied')
