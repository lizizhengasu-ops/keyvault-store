import os

BASE = r'C:\Users\31961\Documents\microsoft web\mifan-site\src'
CTX = os.path.join(BASE, 'CartContext.tsx')

# Read the file
with open(CTX, 'r', encoding='utf-8') as f:
    ctx = f.read()

# Fix 1: Update the Ctx type to include updateQty
old_type = 'remove: (s:string)=>void; total: number; count: number; toast: string'
new_type = 'remove: (s:string)=>void; updateQty: (slug:string, delta:number)=>void; total: number; count: number; toast: string'
ctx = ctx.replace(old_type, new_type)

# Fix 2: Add updateQty function after remove
old_func = 'const remove = (slug:string) => set(p => p.filter(x=>x.slug!==slug));'
new_func = 'const remove = (slug:string) => set(p => p.filter(x=>x.slug!==slug));\n  const updateQty = (slug:string, delta:number) => set(p => p.map(x=>x.slug===slug?{...x,qty:Math.max(0,x.qty+delta)}:x).filter(x=>x.qty>0));'
ctx = ctx.replace(old_func, new_func)

# Fix 3: Add updateQty to provider value
ctx = ctx.replace('items,add,remove,total,count,toast', 'items,add,remove,updateQty,total,count,toast')

with open(CTX, 'w', encoding='utf-8') as f:
    f.write(ctx)
print('CartContext updated')