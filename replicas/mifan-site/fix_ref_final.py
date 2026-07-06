import os

sim = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\scripts', 'similarity-check.py')
with open(sim, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Apple ref with Microsoft
content = content.replace("ref = 'https://www.apple.com'", "ref = 'https://www.microsoft.com/en-us'")
content = content.replace("local = 'http://127.0.0.1:8118'", "local = 'http://127.0.0.1:8119'")

with open(sim, 'w', encoding='utf-8') as f:
    f.write(content)
compile(content, sim, 'exec')
print('Default ref/local updated to Microsoft/8119')
