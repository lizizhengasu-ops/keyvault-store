p = r'C:\Users\31961\.codex\skills\copycat-auto\pipeline\build.py'
c = open(p, encoding='utf-8').read()
c = c.replace("['npx', 'vite', 'build']", "['node', 'node_modules/vite/bin/vite.js', 'build']")
open(p, 'w', encoding='utf-8').write(c)
print('Fixed npx -> node path')