import os
p = r'C:\Users\31961\Documents\microsoft web\ms-replica\extract_all.py'
with open(p, encoding='utf-8') as f:
    c = f.read()
# Replace the broken print lines
old = '        h_cnt = cnt.get(\"h1\",\"?\")\n        print(f\"  {pname}: {s_cnt} sections, {h_cnt} h1s\")'
new = '        cnt = results[pname].get(\"counts\",{})\n        print(str(pname) + \": \" + str(cnt.get(\"section\",\"?\")) + \" sections, \" + str(cnt.get(\"h1\",\"?\")) + \" h1s\")'
c = c.replace(old, new)
with open(p, 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed')