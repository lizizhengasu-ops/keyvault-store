import os
build = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\pipeline', 'build.py')

with open(build, 'rb') as f:
    raw = f.read()
if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
text = raw.decode('utf-8')
text = text.replace('\r\n', '\n').replace('\r', '')

old = "def load_json(p):\n    if not os.path.exists(p): return {}\n    with open(p) as f: return json.load(f)"
new = "def load_json(p, default=None):\n    if not os.path.exists(p):\n        with open(p, 'w') as f: json.dump(default or {}, f, indent=2)\n        return default or {}\n    with open(p) as f: return json.load(f)"

if old in text:
    text = text.replace(old, new)
    with open(build, 'w', encoding='utf-8') as f:
        f.write(text)
    compile(text, build, 'exec')
    print('OK: load_json with defaults added')
else:
    print('Pattern not found')
    import re
    m = re.search(r'def load_json.*?\n\}', text, re.DOTALL)
    if m: print(repr(m.group()))
