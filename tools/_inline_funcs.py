import os

path = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-v3.js'
with open(path, encoding='utf-8') as f:
    c = f.read()

# Step 1: Remove the function Trust() wrapper
# From "function Trust(){" to the closing } before "// FOOTER"
c = c.replace('function Trust(){', '')
# Find the closing brace of Trust function (right before // FOOTER)
trust_close = c.rfind('}', 0, c.find('// FOOTER'))
# Remove that closing brace
c = c[:trust_close] + c[trust_close+1:]

# Step 2: Remove the function Footer() wrapper  
c = c.replace('function Footer(){', '')
# Find the closing brace of Footer function (right before // APP)  
footer_close = c.rfind('}', 0, c.find('// APP'))
c = c[:footer_close] + c[footer_close+1:]

# Step 3: In App return, replace e(Trust),e(Footer) with inline values
# The Trust function returns the section element
# We need to find the return statements and extract the elements

# Extract Trust return value
trust_ret_start = c.find('return e("section",s({width:"100%"')
trust_ret_end = c.find('certBlock))', trust_ret_start) + len('certBlock))')
trust_return = c[trust_ret_start:trust_ret_end]
# Remove 'return ' prefix
trust_element = trust_return.replace('return ', '', 1)

# Replace the return statement in the body with just the element
c = c.replace(trust_return, trust_element)

# Extract Footer return value
footer_ret_start = c.find('return e("footer",s({')
footer_ret_end = c.find('cols,bottom)', footer_ret_start) + len('cols,bottom)')
footer_return = c[footer_ret_start:footer_ret_end]
footer_element = footer_return.replace('return ', '', 1)

# Remove the old return + trailing }
c = c.replace(footer_return, footer_element)

# Step 4: Remove unused var foot line
c = c.replace('var foot=e("footer",s({background:"rgba(9,9,11,0.95)",borderTop:"1px solid rgba(255,255,255,0.05)",padding:"64px 24px 32px",width:"100%"}));\n', '')

# Step 5: Replace e(Trust),e(Footer) in App return
# These are already resolved because the functions now just define variables inline
# The return values are now available as variables
# Actually, e(Trust) references the function Trust which is now gone
# But the code inside still defines the same variables
# So e(Trust),e(Footer) needs to become Trust_element_var,Footer_element_var

# Actually wait - the functions are GONE. e(Trust) will throw ReferenceError.
# I need to replace e(Trust),e(Footer) with just the element variables
# But since I removed the function wrappers, the variables defined by the functions
# (header, statCards, badgeCards, certBlock, cols, bottom) are now at module level

# The Trust return was: e("section",...header,statCards,badgeCards,certBlock)
# The Footer return was: e("footer",...cols,bottom)

# Replace e(Trust),e(Footer) with the element variables  
# But these are inline expressions, not single variables
# I need to find the exact text of e(Trust),e(Footer) and replace it

render_idx = c.find('e(Trust),e(Footer)')
if render_idx >= 0:
    # Replace with the trust element (already stripped of 'return') and footer element
    # trust_element is: e("section",...)
    # footer_element is: e("footer",...)
    inline = trust_element + ',' + footer_element
    c = c[:render_idx] + inline + c[render_idx+len('e(Trust),e(Footer)'):]

# Write
with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

import subprocess
r = subprocess.run(['node', '--check', path], capture_output=True, text=True)
print('JS:', 'PASS' if r.returncode == 0 else 'FAIL')
if r.returncode != 0:
    print(r.stderr[:300])
print('Size:', os.path.getsize(path))
