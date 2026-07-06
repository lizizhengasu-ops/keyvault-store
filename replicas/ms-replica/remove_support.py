import os
p = r'C:\Users\31961\.codex\skills\copycat-auto\scripts\similarity-check.py'
c = open(p, encoding='utf-8').read()
# Remove the support line from PAGE_MAP
old = "    'support': {'ref': 'https://support.microsoft.com/en-us', 'local': '/support'},\n"
c = c.replace(old, '')
open(p, 'w', encoding='utf-8').write(c)
print('Removed support from PAGE_MAP')