import os
build = r'C:\Users\31961\.codex\skills\copycat-auto\pipeline\build.py'
with open(build, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find insertion point: after the line "    print(f'Copycat-Auto Pipeline v{ver}/10: {gate_name}')"
insert_after = -1
for i, line in enumerate(lines):
    if 'Copycat-Auto Pipeline v{ver}/10' in line:
        insert_after = i
        break

if insert_after >= 0:
    backup_code = [
        '\n',
        '    # PC4: Auto-backup src/\n',
        '    import shutil, datetime\n',
        '    bdir = os.path.join(proj, "codex-backup")\n',
        '    os.makedirs(bdir, exist_ok=True)\n',
        '    stamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")\n',
        '    if os.path.exists(os.path.join(proj, "src")):\n',
        '        shutil.copytree(os.path.join(proj, "src"), os.path.join(bdir, f"src_{stamp}"))\n',
        '        print(f"  [BACKUP] src/ backed up")\n',
        '\n',
        '    # Step 0: Preflight check\n',
        '    pf = os.path.join(os.path.dirname(os.path.dirname(__file__)), "scripts", "preflight-check.py")\n',
        '    if os.path.exists(pf):\n',
        '        r = subprocess.run([sys.executable, pf], cwd=proj)\n',
        '        if r.returncode != 0:\n',
        '            print("  [FAIL] Preflight failed")\n',
        '            sys.exit(1)\n',
        '        print("  [PASS] Preflight checks")\n',
        '\n',
    ]
    # Insert after the matching line
    for j, code_line in enumerate(backup_code):
        lines.insert(insert_after + 1 + j, code_line)
    
    with open(build, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('build.py: backup + preflight added')
else:
    print('Insertion point not found')
    # Print first 20 lines for debugging
    print('First 30 lines:')
    for i, line in enumerate(lines[:30]):
        print(f'{i}: {repr(line[:80])}')
