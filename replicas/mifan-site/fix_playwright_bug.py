import os

sim = os.path.join(r'C:\Users\31961\.codex\skills\copycat-auto\scripts', 'similarity-check.py')
with open(sim, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix: don't close browser on page failure - let caller close it
old = """        except:
            print(f'  [WARN] {page_name}: timeout loading {url}')
            await browser.close()
            return None"""

new = """        except:
            print(f'  [WARN] {page_name}: timeout loading {url}')
            return None"""

if old in content:
    content = content.replace(old, new)
    with open(sim, 'w', encoding='utf-8') as f:
        f.write(content)
    compile(content, sim, 'exec')
    print('Fixed: browser not closed on page failure')
else:
    print('Pattern not found')
    # Debug
    idx = content.find('WARN')
    if idx >= 0:
        print(repr(content[idx:idx+150]))
