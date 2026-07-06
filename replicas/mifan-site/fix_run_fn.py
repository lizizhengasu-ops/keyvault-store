import os
build = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\pipeline', 'build.py')
with open(build, 'r', encoding='utf-8') as f:
    text = f.read()
# Remove shell=True from run() - breaks paths with spaces
text = text.replace("shell=True, encoding='utf-8'", "encoding='utf-8'")
with open(build, 'w', encoding='utf-8') as f:
    f.write(text)
compile(text, build, 'exec')
print('build.py: shell=True removed from run()')

# Also check if similarity_gate.run needs fixing
with open(build, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f.readlines()):
        if 'encoding' in line and i > 0:
            print(f'  line {i+1}: {line.strip()[:80]}')
