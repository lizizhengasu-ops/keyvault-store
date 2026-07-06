import os
p = r'C:\Users\31961\Documents\microsoft web\ms-replica\extract_all.py'
with open(p, encoding='utf-8') as f:
    lines = f.readlines()
for i, line in enumerate(lines):
    if 'sections' in line and 'h1s' in line:
        lines[i] = '        s_cnt = cnt.get(\"section\",\"?\")\n'
        lines[i+0] = '        h_cnt = cnt.get(\"h1\",\"?\")\n'
        lines[i+1] = '        print(f\"  {pname}: {s_cnt} sections, {h_cnt} h1s\")\n'
        break
with open(p, 'w', encoding='utf-8') as f:
    f.writelines(lines)
print('Fixed')