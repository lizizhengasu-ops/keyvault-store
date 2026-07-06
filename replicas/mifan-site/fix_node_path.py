import os

pf = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\scripts', 'preflight-check.py')
with open(pf, 'r', encoding='utf-8') as f:
    text = f.read()

# Add find_node function before main()
func = """
def find_node():
    import shutil
    n = shutil.which('node')
    if n: return n
    for p in [r'C:\\Program Files\\nodejs\\node.exe', r'C:\\Program Files (x86)\\nodejs\\node.exe',
              os.path.expandvars(r'%LOCALAPPDATA%\\fnm\\node-versions\\latest\\node.exe')]:
        if os.path.exists(p): return p
    return 'node'
"""
text = text.replace('def main():', func + '\ndef main():')

# Replace the node command with full path
text = text.replace(
    "['node', 'node_modules/vite/bin/vite.js', 'build']",
    "[find_node(), os.path.join(proj, 'node_modules', 'vite', 'bin', 'vite.js'), 'build']"
)

with open(pf, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, pf, 'exec')
print('preflight-check.py: node path fix applied')
