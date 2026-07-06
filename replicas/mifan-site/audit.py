import os, sys

def readf(path):
    with open(path, 'rb') as f:
        raw = f.read()
    if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
    return raw.decode('utf-8')

skill = r'C:\Users\31961\.codex\skills\copycat-auto'
issues = []

# ===== 1) build.py audit =====
b = readf(os.path.join(skill, 'pipeline', 'build.py'))

# Check 1: Methodology reference reads files on every run (can fail if project not at skill root)
if 'skill_dir = os.path.dirname(os.path.dirname(__file__))' in b:
    issues.append(('build.py', 'MEDIUM', 
        'Methodology reference uses __file__ which works at pipeline startup, '
        'but skill_dir assumes the skill is at .codex/skills/copycat-auto. '
        'If the project is in a different location, this path fails silently '
        'because the if os.path.exists check guards it.'))

# Check 2: Backup creates timestamped dirs but never cleans up
if 'shutil.copytree' in b:
    issues.append(('build.py', 'LOW', 
        'Backup creates timestamped directories in codex-backup/ but never deletes old ones. '
        'After 10 versions, there will be 10 copies of src/. '
        'This is fine for safety but wastes disk space.'))

# Check 3: Gate functions return booleans but build.py uses them differently
if "if not check_fn(proj):" in b:
    issues.append(('build.py', 'LOW',
        'V1-V3 gates use lambda functions that return bool. '
        'If a gate raises an exception (e.g., FileNotFoundError), '
        'it crashes instead of failing gracefully.'))

# Check 4: similarity_gate uses global tracker file, not version-specific
if "save_json(TRACKER_PATH, tracker)" in b:
    issues.append(('build.py', 'MEDIUM',
        'progress-tracker.json is global. If two projects share the same directory, '
        'tracker data corrupts. Should use project-local path.'))

# Check 5: The version budget check allows V11 if current_version gets corrupted
if "if ver > budget['max_versions']:" in b:
    issues.append(('build.py', 'LOW',
        'Version check uses > not >=. If current_version is somehow 10, '
        'V11 would not be blocked. Should be >=.'))

# ===== 2) similarity-check.py audit =====
s = readf(os.path.join(skill, 'scripts', 'similarity-check.py'))

# Check 1: Apple's iPhone page URL vs ours
if "'/iphone-17-pro'" in s:
    issues.append(('similarity-check.py', 'BUG',
        'PAGE_MAP maps product page to /iphone-17-pro but this URL changes '
        'every year when Apple releases new models. When it 404s, '
        'the entire similarity check fails silently (returns None -> score 0).'))

# Check 2: The "ref" URL is constructed by concatenating base_url + mapping path
if "if url.startswith('/'): url = base_url.rstrip('/') + url" in s:
    issues.append(('similarity-check.py', 'MEDIUM',
        'Apple.com/store is an SPA. When Playwright navigates to /store, '
        'the actual content is rendered by JavaScript after page load. '
        'The wait_for_timeout(2000) may not be enough for complex pages. '
        'Should use wait_until=networkidle.'))

# Check 3: Color normalization may return incorrect values for rgba
if "if c.startswith('rgba('):" in s:
    issues.append(('similarity-check.py', 'BUG',
        'normalize_color() strips alpha from rgba() but does NOT normalize '
        'the resulting color. For example, rgba(0,0,0,0.5) becomes #000000 '
        'which matches black text vs transparent text. Should check alpha.'))

# Check 4: Dimension weights don't sum to 1.0
if "DIM_WEIGHTS = {'layout': 0.25, 'typography': 0.25, 'color': 0.20, 'spacing': 0.15, 'content': 0.15}" in s:
    w = {'layout': 0.25, 'typography': 0.25, 'color': 0.20, 'spacing': 0.15, 'content': 0.15}
    total = sum(w.values())
    if total > 1.0:
        issues.append(('similarity-check.py', 'BUG',
            f'Dimension weights sum to {total} (should be 1.0). '
            'This means overall score can be higher than 100%.'))

# Check 5: async function uses evaluate() but page may not be fully loaded
if "await page.goto(url, wait_until='domcontentloaded', timeout=15000)" in s:
    issues.append(('similarity-check.py', 'MEDIUM',
        'Uses domcontentloaded instead of networkidle. '
        'For JS-heavy sites like Apple.com, this may extract CSS before '
        'lazy-loaded styles are applied. Should use networkidle with longer timeout.'))

# ===== 3) extract-design.py audit =====
e = readf(os.path.join(skill, 'scripts', 'extract-design.py'))

if 'wait_until=' in e and 'networkidle' not in e:
    issues.append(('extract-design.py', 'BUG',
        'Uses default wait (domcontentloaded). '
        'Same issue as similarity-check: Apple SPA may not have loaded all CSS.'))

if 'playwright.sync_api' not in e and 'async_api' in e:
    issues.append(('extract-design.py', 'LOW',
        'Uses async API but the script is simple enough for sync. '
        'Not a bug, but async adds complexity without benefit here.'))

# ===== 4) visual-diff.py audit =====
v = readf(os.path.join(skill, 'scripts', 'visual-diff.py'))

if 'get = (sel) => { const e=document.querySelector(sel)' in v:
    issues.append(('visual-diff.py', 'BUG',
        'Uses querySelector("body") and querySelector("h1") which finds the FIRST '
        'element matching each tag. If the reference site has multiple h1s '
        '(unlikely) or a different DOM structure, the comparison is wrong. '
        'Should compare ALL elements of each type, not just the first.'))

if 'for attr in [\'color\',\'bg\',\'size\',\'weight\']:' in v:
    issues.append(('visual-diff.py', 'LOW',
        'Compares JSON string values directly. "48px" vs "48.00px" or '
        '"rgb(0,0,0)" vs "#000000" would be flagged as different. '
        'Should normalize before comparison.'))

# ===== 5) preflight-check.py audit =====
p = readf(os.path.join(skill, 'scripts', 'preflight-check.py'))

if "r.append(check('PC4 Backup', len(baks)>0" in p:
    issues.append(('preflight-check.py', 'LOW',
        'Backup check looks for any file starting with "backup-" or ending with ".bak". '
        'This is fragile and may find unrelated files. '
        'Should check for the specific codex-backup/ directory.'))

if "'npx' in [buses" not in p and 'vite' in p:
    # Just check if build uses npx
    if "subprocess.run(['npx','vite','build']" in p:
        issues.append(('preflight-check.py', 'LOW',
            'Build check runs npx vite build with 30s timeout. '
            'For large projects this may timeout. Should use longer timeout.'))

# ===== 6) reject-inline-styles.py audit =====
r = readf(os.path.join(skill, 'pipeline', 'reject-inline-styles.py'))

if 'count > 5' in r:
    issues.append(('reject-inline-styles.py', 'LOW',
        'Allows up to 5 inline styles per file. '
        'But some dynamic values (e.g., progress bar width based on scroll position) '
        'REQUIRE inline styles. Should whitelist --x etc.'))

# ===== 7) check-regression.py audit =====
c = readf(os.path.join(skill, 'pipeline', 'check-regression.py'))

if "shutil.copy(report_path, baseline_path)" in c:
    issues.append(('check-regression.py', 'BUG',
        'shutil is imported via "import os, sys, json, subprocess" but shutil '
        'is not in the import list. This will cause NameError at runtime.'))

if "current_set = set((d['element'], d['attribute'], d['local'])" in c:
    issues.append(('check-regression.py', 'MEDIUM',
        'Uses hardcoded string keys like \\'element\\' but visual-diff.py '
        'outputs different key names (e.g. \\'element\\' vs \\'attribute\\'). '
        'If the key name format differs, the diff extraction silently returns empty.'))

# ===== Summary =====
print('=' * 70)
print('COPYCAT-AUTO AUDIT REPORT')
print('=' * 70)

by_severity = {'BUG': [], 'MEDIUM': [], 'LOW': []}
for file, sev, desc in issues:
    by_severity[sev].append((file, sev, desc))

for sev in ['BUG', 'MEDIUM', 'LOW']:
    items = by_severity[sev]
    if not items: continue
    print(f'\n--- {sev} ({len(items)} issues) ---')
    for file, sev, desc in items:
        print(f'  [{file}] {desc}')

print(f'\nTotal: {len(issues)} issues (BUG={len(by_severity["BUG"])}, MEDIUM={len(by_severity["MEDIUM"])}, LOW={len(by_severity["LOW"])})')
