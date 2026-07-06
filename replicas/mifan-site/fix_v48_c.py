import os

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
SUPPORT = os.path.join(base, 'Support.tsx')

with open(SUPPORT, 'rb') as f:
    s = f.read()

# Add filteredTopics definition before return statement
ret_idx = s.find(b'\n  return (')
if ret_idx > 0:
    filter_def = b'\n  const filteredTopics = search.length > 0\n    ? topics.filter(h =>\n        h.t.toLowerCase().includes(search.toLowerCase()) ||\n        h.d.toLowerCase().includes(search.toLowerCase())\n      )\n    : topics;\n'
    s = s[:ret_idx] + filter_def + s[ret_idx:]
    with open(SUPPORT, 'wb') as f:
        f.write(s)
    print('Support: filteredTopics defined')
else:
    print('Support: return not found')
    # Print the last 200 bytes for debugging
    print(s[-200:].decode('utf-8', errors='replace'))