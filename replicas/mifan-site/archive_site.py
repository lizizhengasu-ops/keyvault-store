import os, shutil, time

src = r'C:\Users\31961\Documents\microsoft web\mifan-site'
tpl = os.path.join(src, '.codex', 'skills', 'frontend-kit', 'references', 'templates')
os.makedirs(tpl, exist_ok=True)
stamp = time.strftime('%Y%m%d_%H%M%S')
dst = os.path.join(tpl, f'mifan-apple-style-v43-{stamp}')

skip = {'node_modules', 'dist', '.git'}
count = 0

for root, dirs, files in os.walk(src):
    dirs[:] = [d for d in dirs if d not in skip]
    for f in files:
        src_file = os.path.join(root, f)
        rel = os.path.relpath(src_file, src)
        dst_file = os.path.join(dst, rel)
        os.makedirs(os.path.dirname(dst_file), exist_ok=True)
        shutil.copy2(src_file, dst_file)
        count += 1

print(f'Archived: {dst}')
print(f'Files: {count}')