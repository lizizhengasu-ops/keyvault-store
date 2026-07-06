path = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\B2b.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix: Replace literal "> with curly quotes to avoid JSX parsing errors
content = content.replace('"Switching to mifan saved us 40% on IT management costs. The MDM integration was seamless."',
                          '\u201cSwitching to mifan saved us 40% on IT management costs. The MDM integration was seamless.\u201d')
content = content.replace('"The volume pricing and dedicated support made mifan the obvious choice for our 5000+ employee rollout."',
                          '\u201cThe volume pricing and dedicated support made mifan the obvious choice for our 5000+ employee rollout.\u201d')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed B2b.tsx')