p = r'C:\Users\31961\.codex\skills\copycat-auto\pipeline\build.py'
with open(p, encoding='utf-8') as f:
    lines = f.readlines()

# 1. Fix [OK] -> [FAIL] on the FAIL branch
for i in range(len(lines)):
    if 'Improvement' in lines[i] and 'target' in lines[i]:
        if i+1 < len(lines) and 'not meaningfully' in lines[i+1]:
            lines[i] = lines[i].replace('[OK]', '[FAIL]')

# 2. Fix sys.executable -> py -3 for similarity check
for i, line in enumerate(lines):
    if 'sys.executable' in line and 'sim_script' in line:
        indent = line[:len(line) - len(line.lstrip())]
        lines.insert(i, indent + 'if os.path.exists(report_path): os.remove(report_path)\n')
        lines[i+1] = indent + 'result = run([\"py\", \"-3\", sim_script, \"--output\", report_path], cwd=proj)\n'
        print(f'Fixed line {i+1}: py -3 similarity check')

# 3. Fix TARGET ACHIEVED line
for i, line in enumerate(lines):
    if 'TARGET ACHIEVED' in line:
        lines[i] = '                print(f\"\\nTARGET ACHIEVED: {score*100:.1f}% similarity in {ver} versions.\")\n'
        print(f'Fixed line {i+1}: TARGET ACHIEVED')

with open(p, 'w', encoding='utf-8') as f:
    f.writelines(lines)
print('All fixes applied')