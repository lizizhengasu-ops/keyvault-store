import os
vd = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\scripts', 'visual-diff.py')
with open(vd, 'rb') as f:
    raw = f.read()
if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
text = raw.decode('utf-8')

old = """        for attr in ['color','bg','size','weight']:
                if rv.get(attr) != lv.get(attr):
                    diffs.append({
                        'element': k,
                        'attribute': attr,
                        'ref': rv.get(attr,'MISSING'),
                        'local': lv.get(attr,'MISSING')
                    })"""

new = """        for attr in ['color','bg','size','weight']:
                r_val = rv.get(attr, '')
                l_val = lv.get(attr, '')
                if attr in ('color', 'bg'):
                    r_val = normalize_color(r_val)
                    l_val = normalize_color(l_val)
                elif attr == 'size':
                    r_val = normalize_size(r_val)
                    l_val = normalize_size(l_val)
                if r_val != l_val:
                    diffs.append({
                        'element': k,
                        'attribute': attr,
                        'ref': rv.get(attr,'MISSING'),
                        'local': lv.get(attr,'MISSING')
                    })"""

if old in text:
    text = text.replace(old, new)
    with open(vd, 'w', encoding='utf-8') as f:
        f.write(text)
    compile(text, vd, 'exec')
    print('visual-diff.py: normalization logic applied - syntax valid')
else:
    print('PATTERN NOT FOUND')
    print(repr(text[text.find('for attr in'):text.find('for attr in')+400]))
