import os
p = r'C:\Users\31961\.codex\skills\copycat-auto\pipeline\build.py'
with open(p, encoding='utf-8') as f:
    c = f.read()
# Fix BUDGET_PATH to use cwd
c = c.replace("BUDGET_PATH = os.path.join(BASE, 'version-budget.json')", "BUDGET_PATH = os.path.join(os.getcwd(), '.copycat-budget.json')")
c = c.replace("TRACKER_PATH = os.path.join(BASE, 'progress-tracker.json')", "TRACKER_PATH = os.path.join(os.getcwd(), '.copycat-progress.json')")
# Remove debug prints
c = c.replace("    print(f'  [DEBUG] BUDGET_PATH={BUDGET_PATH}')\n", "")
c = c.replace("    print(f'  [DEBUG] budget={budget}')\n", "")
c = c.replace("    print(f'  [DEBUG] ver={ver}')\n", "")
c = c.replace("    print(f'  [DEBUG] proj={proj}')\n", "")
with open(p, 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed paths and removed debug')