import os
BASE = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
HOME = os.path.join(BASE, 'Home.tsx')
STORE = os.path.join(BASE, 'Store.tsx')
PRODUCT = os.path.join(BASE, 'Product.tsx')
SUPPORT = os.path.join(BASE, 'Support.tsx')
ACCOUNT = os.path.join(BASE, 'Account.tsx')
B2B = os.path.join(BASE, 'B2b.tsx')
CART = os.path.join(BASE, 'Cart.tsx')

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  Written: {os.path.basename(path)} ({len(content)} chars)')

print('=== Fix V33 Start ===')