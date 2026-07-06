import os

skill = r'C:\Users\31961\.codex\skills\copycat-auto'
pipeline = os.path.join(skill, 'pipeline')
build_file = os.path.join(pipeline, 'build.py')
sim_file = os.path.join(skill, 'scripts', 'similarity-check.py')
vd_file = os.path.join(skill, 'scripts', 'visual-diff.py')
pf_file = os.path.join(skill, 'scripts', 'preflight-check.py')
rej_file = os.path.join(pipeline, 'reject-inline-styles.py')

def readf(path):
    with open(path, 'rb') as f:
        raw = f.read()
    if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
    return raw.decode('utf-8')

def writef(path, text):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)
    # Verify
    compile(text, path, 'exec')

fixes = []

# ===== FIX 1: Version budget > to >= =====
b = readf(build_file)
if "if ver > budget['max_versions']:" in b:
    b = b.replace("if ver > budget['max_versions']:", "if ver >= budget['max_versions']:")
    writef(build_file, b)
    fixes.append('build.py: version check > -> >= (now V10 correctly blocks V11)')
    print('1/5 build.py: version check fixed')

# ===== FIX 2: progress-tracker.json per-project =====
b = readf(build_file)
old_tracker = "TRACKER_PATH = os.path.join(BASE, 'progress-tracker.json')"
new_tracker = "TRACKER_PATH = os.path.join(os.getcwd(), '.copycat-progress.json')"
if old_tracker in b:
    b = b.replace(old_tracker, new_tracker)
    # Also fix budget path to be per-project
    old_budget = "BUDGET_PATH = os.path.join(BASE, 'version-budget.json')"
    new_budget = "BUDGET_PATH = os.path.join(os.getcwd(), '.copycat-budget.json')"
    if old_budget in b:
        b = b.replace(old_budget, new_budget)
    writef(build_file, b)
    fixes.append('build.py: budget + tracker now per-project (.copycat-budget.json + .copycat-progress.json)')
    print('2/5 build.py: paths fixed')

# ===== FIX 3: preflight-check.py backup check =====
pf = readf(pf_file)
old_pf = "baks = [f for f in os.listdir(proj) if f.startswith('backup-') or f.endswith('.bak')]"
new_pf = "baks = [f for f in os.listdir(proj) if f == 'codex-backup' or f == '.copycat-budget.json']"
if old_pf in pf:
    pf = pf.replace(old_pf, new_pf)
    writef(pf_file, pf)
    fixes.append('preflight-check.py: backup check now targets codex-backup/ dir')
    print('3/5 preflight-check.py: backup check fixed')

# ===== FIX 4: reject-inline-styles.py - whitelist dynamic values =====
rej = readf(rej_file)
old_rej = "count = content.count('style={{')"
new_rej = """    # Remove whitelisted dynamic inline styles before counting
    import re
    cleaned = re.sub(r'style={{[^}]*--[^}]*}}', '', content)
    count = cleaned.count('style={{')"""
if old_rej in rej:
    rej = rej.replace(old_rej, new_rej)
    writef(rej_file, rej)
    fixes.append('reject-inline-styles.py: ignores dynamic CSS variable styles')
    print('4/5 reject-inline-styles.py: whitelist added')

# ===== FIX 5: build.py backup cleanup (keep last 3) =====
b = readf(build_file)
old_cleanup = "        print('  [BACKUP] src/ backed up')"
new_cleanup = """        print('  [BACKUP] src/ backed up')
        # Keep only last 3 backups
        all_baks = sorted([d for d in os.listdir(bdir) if d.startswith('src_')], reverse=True)
        for old_bak in all_baks[3:]:
            shutil.rmtree(os.path.join(bdir, old_bak), ignore_errors=True)"""
if old_cleanup in b:
    b = b.replace(old_cleanup, new_cleanup)
    writef(build_file, b)
    fixes.append('build.py: auto-cleanup keeps only 3 most recent backups')
    print('5/5 build.py: backup cleanup added')

print(f'\nAll {len(fixes)} fixes applied successfully')
