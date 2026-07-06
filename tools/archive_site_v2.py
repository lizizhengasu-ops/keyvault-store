import os, shutil, time

src = r'C:\Users\31961\Documents\microsoft web\mifan-site'
dst = r'C:\Users\31961\Documents\mifan-template-archive-' + time.strftime('%Y%m%d_%H%M%S')
skip = {'node_modules', 'dist', '.git', '__pycache__'}
count = 0
os.makedirs(dst, exist_ok=True)

for root, dirs, files in os.walk(src):
    rel = os.path.relpath(root, src)
    # Skip if parent contains skipped dir
    if any(s in rel.split(os.sep) for s in skip):
        dirs[:] = []  # Don't recurse further
        continue
    for f in files:
        src_file = os.path.join(root, f)
        dst_file = os.path.join(dst, rel, f)
        os.makedirs(os.path.dirname(dst_file), exist_ok=True)
        shutil.copy2(src_file, dst_file)
        count += 1

print(f'Archived to: {dst}')
print(f'Files: {count}')
print(f'Size: {sum(os.path.getsize(os.path.join(dp, f)) for dp, dn, fns in os.walk(dst) for f in fns) / 1024:.0f} KB')