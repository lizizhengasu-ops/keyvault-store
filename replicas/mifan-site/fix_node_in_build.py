import os
build = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\pipeline', 'build.py')
with open(build, 'r', encoding='utf-8') as f:
    text = f.read()

# Add PATH fix before the preflight check
old_pf = '''    # Step 0: Preflight check
    pf = os.path.join(os.path.dirname(os.path.dirname(__file__)), "scripts", "preflight-check.py")
    if os.path.exists(pf):
        r = subprocess.run([sys.executable, pf], cwd=proj)'''

new_pf = '''    # Step 0: Preflight check
    pf = os.path.join(os.path.dirname(os.path.dirname(__file__)), "scripts", "preflight-check.py")
    if os.path.exists(pf):
        # Ensure node is in PATH for subprocess
        try:
            nd = subprocess.run('where node', capture_output=True, text=True, shell=True).stdout.strip()
            if nd:
                os.environ["PATH"] = os.path.dirname(nd) + os.pathsep + os.environ.get("PATH", "")
        except:
            pass
        r = subprocess.run([sys.executable, pf], cwd=proj)'''

text = text.replace(old_pf, new_pf)

with open(build, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, build, 'exec')
print('build.py: node PATH fix added')
