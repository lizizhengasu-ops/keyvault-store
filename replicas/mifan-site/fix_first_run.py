import os
build = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\pipeline', 'build.py')

with open(build, 'rb') as f:
    raw = f.read()
if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
text = raw.decode('utf-8')

# Add safe_load function that creates default files
safe_load = """
def load_or_create(path, default):
    \"\"\"Load JSON file or create with default if not exists.\"\"\"
    if not os.path.exists(path):
        with open(path, 'w') as f:
            json.dump(default, f, indent=2)
        return default
    with open(path) as f:
        return json.load(f)
"""

# Insert after load_json function
insert_after = "def save_json(p, d):"
idx = text.index(insert_after) + len(insert_after)
# Find end of save_json function
eol = text.index('\n', idx)
next_def = text.index('\n\n', eol)
text = text[:next_def+1] + safe_load + text[next_def+1:]

# Replace load_json calls for budget and tracker with load_or_create
text = text.replace(
    "budget = load_json(BUDGET_PATH)",
    "budget = load_or_create(BUDGET_PATH, {'max_versions': 10, 'current_version': 0, 'gates': {}, 'retries_per_gate': 3})"
)
text = text.replace(
    "tracker = load_json(TRACKER_PATH)",
    "tracker = load_or_create(TRACKER_PATH, {'versions': [], 'score_history': [], 'target_score': 0.9})"
)

with open(build, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, build, 'exec')
print('build.py: first-run safe loading added')
