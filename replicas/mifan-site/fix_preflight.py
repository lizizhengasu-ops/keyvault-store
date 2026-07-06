import os
pf = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\scripts', 'preflight-check.py')
with open(pf, 'r', encoding='utf-8') as f:
    c = f.read()
# Just increase timeout
c = c.replace('timeout=30', 'timeout=60')
with open(pf, 'w', encoding='utf-8') as f:
    f.write(c)
compile(c, pf, 'exec')
print('preflight-check.py: timeout 30 -> 60s')
