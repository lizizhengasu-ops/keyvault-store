import os
build = r"C:\Users\31961\.codex\skills\copycat-auto\pipeline\build.py"
with open(build, 'r', encoding='utf-8') as f:
    content = f.read()

marker_start = 'print(f"  Engine: {eng.strip(\"# \")}")'
marker_end = '    budget = load_json(BUDGET_PATH)'

if marker_start in content and marker_end in content:
    # Find the end of methodology block
    start_idx = content.index(marker_start) + len(marker_start)
    end_idx = content.index(marker_end)
    
    insert = (
        '\n'
        '    # PC4: Auto-backup src/\n'
        '    import shutil, datetime\n'
        '    bdir = os.path.join(proj, "codex-backup")\n'
        '    os.makedirs(bdir, exist_ok=True)\n'
        '    stamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")\n'
        '    if os.path.exists(os.path.join(proj, "src")):\n'
        '        shutil.copytree(os.path.join(proj, "src"), os.path.join(bdir, f"src_{stamp}"))\n'
        '        print("  [BACKUP] src/ backed up")\n'
        '\n'
        '    # Step 0: Preflight check\n'
        '    pf = os.path.join(os.path.dirname(os.path.dirname(__file__)), "scripts", "preflight-check.py")\n'
        '    if os.path.exists(pf):\n'
        '        r = subprocess.run([sys.executable, pf], cwd=proj)\n'
        '        if r.returncode != 0:\n'
        '            print("  [FAIL] Preflight failed")\n'
        '            sys.exit(1)\n'
        '        print("  [PASS] Preflight checks")\n'
    )
    
    content = content[:start_idx] + insert + content[start_idx:]
    with open(build, 'w', encoding='utf-8') as f:
        f.write(content)
    print("build.py: backup + preflight added")
else:
    print("Markers not found")
    # Debug
    if marker_start not in content:
        print("  missing: marker_start")
    if marker_end not in content:
        print("  missing: marker_end")
