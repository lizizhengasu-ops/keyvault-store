path = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Support.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# Fix: unterminated string - the "> sequence in JSX text
c = c.replace('"Battery and charging issues"', 'Battery and charging issues')
c = c.replace('"Diagnose and resolve common battery problems."', 'Diagnose and resolve common battery problems.')
c = c.replace('"How to update your mPhone to the latest iOS version."', 'How to update your mPhone to the latest iOS version.')
c = c.replace('"Book a repair appointment at your nearest service center."', 'Book a repair appointment at your nearest service center.')
c = c.replace('"Step-by-step guide to activate and configure your device."', 'Step-by-step guide to activate and configure your device.')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed Support.tsx')