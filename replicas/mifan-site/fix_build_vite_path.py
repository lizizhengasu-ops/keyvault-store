import os

# Fix preflight-check.py - use node directly instead of npx
pf = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\scripts', 'preflight-check.py')
with open(pf, 'r', encoding='utf-8') as f:
    text = f.read()
old = "subprocess.run('npx vite build', capture_output=True, text=True, timeout=60, cwd=proj, shell=True, encoding='utf-8', errors='replace')"
new = "subprocess.run(['node', 'node_modules/vite/bin/vite.js', 'build'], capture_output=True, text=True, timeout=60, cwd=proj, encoding='utf-8', errors='replace')"
text = text.replace(old, new)
with open(pf, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, pf, 'exec')
print('preflight-check.py: npx -> node')

# Fix build.py run() - remove shell=True
build = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\pipeline', 'build.py')
with open(build, 'r', encoding='utf-8') as f:
    text = f.read()
old = "return subprocess.run(cmd, capture_output=True, text=True, timeout=timeout, cwd=cwd or os.getcwd(), shell=True, encoding='utf-8', errors='replace')"
new = "return subprocess.run(cmd, capture_output=True, text=True, timeout=timeout, cwd=cwd or os.getcwd(), encoding='utf-8', errors='replace')"
text = text.replace(old, new)
# Also fix the post-flight build check
text = text.replace("run(['npx', 'vite', 'build'], cwd=proj)", "run(['node', os.path.join(proj, 'node_modules', 'vite', 'bin', 'vite.js'), 'build'], cwd=proj)")
with open(build, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, build, 'exec')
print('build.py: npx removed, shell=True removed')
