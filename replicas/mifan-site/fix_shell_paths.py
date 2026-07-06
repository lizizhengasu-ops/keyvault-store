import os
build = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\pipeline', 'build.py')
with open(build, 'rb') as f:
    raw = f.read()
if raw[:3] == b'\xef\xbb\xbf': raw = raw[3:]
text = raw.decode('utf-8').replace('\r\n', '\n').replace('\r', '')

# Add shell=True back to run() with proper encoding
old_run = "return subprocess.run(cmd, capture_output=True, text=True, timeout=timeout, cwd=cwd or os.getcwd(), encoding='utf-8', errors='replace')"
new_run = "return subprocess.run(cmd, capture_output=True, text=True, timeout=timeout, cwd=cwd or os.getcwd(), shell=True, encoding='utf-8', errors='replace')"
text = text.replace(old_run, new_run)

# Fix similarity_gate to use quoted paths
old_sim = "result = run([sys.executable, sim_script, '--output', report_path], cwd=proj)"
new_sim = "result = run(f'\"{sys.executable}\" \"{sim_script}\" --output \"{report_path}\"', cwd=proj)"
text = text.replace(old_sim, new_sim)

with open(build, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, build, 'exec')
print('build.py: shell=True + quoted paths')
