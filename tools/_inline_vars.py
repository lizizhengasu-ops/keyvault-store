import os
path = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-v3.js'
with open(path, encoding='utf-8') as f:
    c = f.read()

# Step 1: Find the trust section element (the expression after 'return ')
# The trust element starts at "e("section",s({width:"100%"...)"
trust_start = c.find('e("section",s({width:"100%"')
trust_end = c.find('certBlock))', trust_start) + len('certBlock))')
trust_expr = c[trust_start:trust_end]

# Replace the raw expression with a variable assignment
var_decl = 'var trustSection=' + trust_expr + ';'
c = c[:trust_start] + 'trustSection' + c[trust_end:]

# Insert the var declaration before where the trust code starts
c = c.replace('// Trust inlined', '// Trust inlined\n' + var_decl, 1)

# Step 2: Find the footer section element
footer_start = c.find('e("footer",s({background:"rgba(9,9,11,0.95)"')
footer_end = c.find('cols,bottom)', footer_start) + len('cols,bottom)')
footer_expr = c[footer_start:footer_end]

var_decl2 = 'var footerSection=' + footer_expr + ';'
c = c[:footer_start] + 'footerSection' + c[footer_end:]
c = c.replace('// Footer inlined', '// Footer inlined\n' + var_decl2, 1)

# Step 3: Replace e(Trust),e(Footer)
c = c.replace('e(Trust),e(Footer)', 'trustSection,footerSection')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

import subprocess
r = subprocess.run(['node', '--check', path], capture_output=True, text=True)
print('JS:', 'PASS' if r.returncode == 0 else 'FAIL')
if r.returncode != 0:
    print(r.stderr[:400])
print('Size:', os.path.getsize(path))
