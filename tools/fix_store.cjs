const fs = require('fs');
let ctx = fs.readFileSync('src/CartContext.tsx', 'utf-8');

// Add updateQty to CartContext
ctx = ctx.replace(
  'const remove = (slug:string) => set(p => p.filter(x=>x.slug!==slug));',
  'const remove = (slug:string) => set(p => p.filter(x=>x.slug!==slug));\n  const updateQty = (slug:string, qty:number) => set(p => p.map(x=>x.slug===slug?{...x,qty}:x));'
);
ctx = ctx.replace(
  'return <C.Provider value={{items,add,remove,addToCart:add,removeFromCart:remove,total,count}}>{children}</C.Provider>;',
  'return <C.Provider value={{items,add,remove,updateQty,addToCart:add,removeFromCart:remove,total,count}}>{children}</C.Provider>;'
);
fs.writeFileSync('src/CartContext.tsx', ctx, 'utf-8');
console.log('FIXED CartContext: added updateQty');