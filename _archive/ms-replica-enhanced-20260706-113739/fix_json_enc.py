p = r'C:\Users\31961\.codex\skills\copycat-auto\pipeline\build.py'
with open(p, encoding='utf-8') as f:
    lines = f.readlines()
for i, line in enumerate(lines):
    if line.strip().startswith('with open(p) as f:') and 'json.load' in line:
        lines[i] = line.replace('open(p) as f:', 'open(p, encoding="utf-8-sig") as f:')
        print(f'Fixed load_json read at line {i+1}')
    if 'def save_json(p, d):' in line:
        lines[i+1] = line[:len(line)-len(line.lstrip())] + 'with open(p, "w", encoding="utf-8-sig") as f: json.dump(d, f, indent=2)\n'
        print(f'Fixed save_json at line {i+1}')
with open(p, 'w', encoding='utf-8') as f:
    f.writelines(lines)
print('Done')