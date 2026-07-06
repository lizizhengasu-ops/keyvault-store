import os

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
B2B = os.path.join(base, 'B2b.tsx')
SUPPORT = os.path.join(base, 'Support.tsx')
HOME = os.path.join(base, 'Home.tsx')
CART = os.path.join(base, 'Cart.tsx')

# ===== FIX 1: B2B - wrap in fragment =====
with open(B2B, 'rb') as f:
    b = f.read()
# Before: return (\n    <section>...  After inserting hero, it's multiple sections without fragment
# Fix: change return ( to return (<>
first_ret = b.find(b'return (')
if first_ret > 0:
    b = b[:first_ret+7] + b'<>\n      ' + b[first_ret+7:]
# At the end: change ); to </>);
b = b.replace(b');\n}\n', b'</>\n  );\n}\n')
with open(B2B, 'wb') as f:
    f.write(b)
print('1/4 B2B fixed: wrapped in fragment')

# ===== FIX 2: Support - define filteredTopics =====
with open(SUPPORT, 'rb') as f:
    s = f.read()

# The code has {filteredTopics.map(...)} but filteredTopics is not defined
# Add: const filteredTopics = allTopics.filter(...)
# Find the return statement and add before it
ret_idx = s.find(b'return (')
if ret_idx > 0:
    # Find where features/topics are defined and add filteredTopics after
    topic_def = s.find(b'const allTopics')
    if topic_def > 0:
        # Find the end of allTopics definition (the ]; line)
        end_all = s.find(b'];\n', topic_def)
        if end_all > 0:
            filter_def = b'\n  const filteredTopics = search.length > 0 ? allTopics.filter(h => h.t.toLowerCase().includes(search.toLowerCase()) || h.d.toLowerCase().includes(search.toLowerCase())) : allTopics;\n'
            s = s[:end_all+2] + filter_def + s[end_all+2:]
            # Also replace {filteredTopics.map with a proper expression
            # First, check what the current map looks like
            s = s.replace(b'{filteredTopics.map((h,i) => (', b'{filteredTopics.map((h,i) => (')
            with open(SUPPORT, 'wb') as f:
                f.write(s)
            print('2/4 Support fixed: filteredTopics defined')
    else:
        print('allTopics not found')

# ===== FIX 3: Home - check fragment closing =====
with open(HOME, 'rb') as f:
    h = f.read()
end_count = h.count(b'</>')
if end_count == 0:
    # Add </> before the last )
    last_paren = h.rfind(b'  );\n')
    if last_paren > 0:
        h = h[:last_paren] + b'    </>\n  ' + h[last_paren:]
        with open(HOME, 'wb') as f:
            f.write(h)
        print('3/4 Home fixed: </> fragment added')
else:
    print(f'3/4 Home OK: {end_count} </> fragments')

# ===== FIX 4: Cart - check malformed empty state =====
with open(CART, 'rb') as f:
    c = f.read()
# Check the empty state section
if b'<p style={{fontSize:15' in c:
    # The replacement might have duplicated or malformed text
    # Let's check if there's a broken structure
    print('4/4 Cart: checking structure...')
    # Fix by removing the duplicate
    c = c.replace(b'<p style={{fontSize:15,color:"#6e6e73",marginBottom:24,lineHeight:1.6}}>Your bag is empty. Browse our latest products and find something you love.</p>\n        <p style={{fontSize:12,color:"#6e6e73",marginBottom:24}}>Free delivery &amp; free returns. No-contact shipping available.</p>',
                  b'<p style={{fontSize:15,color:"#6e6e73",marginBottom:24}}>Your bag is empty. Browse our latest products and find something you love.</p>\n        <p style={{fontSize:12,color:"#6e6e73",marginBottom:24}}>Free delivery &amp; free returns.</p>')
    with open(CART, 'wb') as f:
        f.write(c)
    print('4/4 Cart fixed')

print('\nV48 fixes applied')