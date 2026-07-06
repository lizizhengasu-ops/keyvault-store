import os

# Fix build.py run() function
build = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\pipeline', 'build.py')
with open(build, 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace(
    "return subprocess.run(cmd, capture_output=True, text=True, timeout=timeout, cwd=cwd or os.getcwd())",
    "return subprocess.run(cmd, capture_output=True, text=True, timeout=timeout, cwd=cwd or os.getcwd(), shell=True, encoding='utf-8', errors='replace')"
)
with open(build, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, build, 'exec')
print('build.py: subprocess encoding fixed')

# Fix preflight-check.py
pf = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\scripts', 'preflight-check.py')
with open(pf, 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace(
    "subprocess.run(['npx','vite','build'], capture_output=True, text=True, timeout=60, cwd=proj)",
    "subprocess.run('npx vite build', capture_output=True, text=True, timeout=60, cwd=proj, shell=True, encoding='utf-8', errors='replace')"
)
with open(pf, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, pf, 'exec')
print('preflight-check.py: subprocess encoding fixed')
