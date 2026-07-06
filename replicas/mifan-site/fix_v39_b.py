import os
base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
product_path = os.path.join(base, 'Product.tsx')
with open(product_path, 'rb') as f:
    prod = f.read()
# Check what the end looks like
end_bytes = prod[-200:]
print(end_bytes.decode('utf-8', errors='replace'))