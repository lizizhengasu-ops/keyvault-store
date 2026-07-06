import os
build = r"C:\Users\31961\.codex\skills\copycat-auto\pipeline\build.py"
with open(build, 'r', encoding='utf-8') as f:
    content = f.read()

# Find methodology block end
idx = content.find('Engine: {eng.strip')
if idx >= 0:
    # Find end of this print line
    eol = content.find('\n', idx)
    # Insert backup + preflight AFTER this line
    block = []
    block.append('\n')
    block.append('    # PC4: Auto-backup src/\n')
    block.append('    import shutil, datetime\n')
    block.append('    bdir = os.path.join(proj, "codex-backup")\n')
    block.append('    os.makedirs(bdir, exist_ok=True)\n')
    block.append('    stamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")\n')
    block.append('    if os.path.exists(os.path.join(proj, "src")):\n')
    block.append('        shutil.copytree(os.path.join(proj, "src"), os.path.join(bdir, f"src_{stamp}"))\n')
    block.append('        print("  [BACKUP] src/ backed up")\n')
    block.append('\n')
    block.append('    # Step 0: Preflight check\n')
    block.append('    pf = os.path.join(os.path.dirname(os.path.dirname(__file__)), "scripts", "preflight-check.py")\n')
    block.append('    if os.path.exists(pf):\n')
    block.append('        r = subprocess.run([sys.executable, pf], cwd=proj)\n')
    block.append('        if r.returncode != 0:\n')
    block.append('            print("  [FAIL] Preflight failed")\n')
    block.append('            sys.exit(1)\n')
    block.append('        print("  [PASS] Preflight checks")\n')
    
    content = content[:eol+1] + ''.join(block) + content[eol+1:]
    with open(build, 'w', encoding='utf-8') as f:
        f.write(content)
    print('build.py: backup + preflight added')
else:
    print('Engine marker not found')
