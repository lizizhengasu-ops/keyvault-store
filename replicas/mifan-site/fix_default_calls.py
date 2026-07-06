import os
build = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\pipeline', 'build.py')

with open(build, 'rb') as f:
    raw = f.read()
if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
text = raw.decode('utf-8')
text = text.replace('\r\n', '\n').replace('\r', '')

BUDGET_DEFAULT = "{'max_versions': 10, 'current_version': 0, 'gates': {}, 'retries_per_gate': 3}"
TRACKER_DEFAULT = "{'versions': [], 'score_history': [], 'target_score': 0.9}"

# Fix budget call
if "budget = load_json(BUDGET_PATH)" in text:
    text = text.replace("budget = load_json(BUDGET_PATH)", f"budget = load_json(BUDGET_PATH, {BUDGET_DEFAULT})")
    
# Fix tracker calls (2 instances)
count = 0
while "tracker = load_json(TRACKER_PATH)" in text:
    text = text.replace("tracker = load_json(TRACKER_PATH)", f"tracker = load_json(TRACKER_PATH, {TRACKER_DEFAULT})", 1)
    count += 1

with open(build, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, build, 'exec')
print(f'OK: {count} tracker call(s) fixed, budget call fixed')
