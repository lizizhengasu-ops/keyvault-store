const fs = require('fs');
let cartPage = fs.readFileSync('src/pages/CartPage.tsx', 'utf-8');
cartPage = 'import { useCart } from "../CartContext"\n\n' + cartPage;
cartPage = cartPage.replace(
  'export default function CartPage() {',
  'export default function CartPage() {\n  const { items, remove, updateQty, total } = useCart()'
);
// Replace static items with dynamic
cartPage = cartPage.replace(
  "const items = [\n    {name:\"Surface Pro 13-inch (12th Edition)\",price:1299.99,qty:1,img:\"cart_0\"},\n    {name:\"Surface Pen - Platinum\",price:129.99,qty:2,img:\"cart_1\"},\n    {name:\"Microsoft 365 Personal (1-Year)\",price:69.99,qty:1,img:\"cart_2\"},\n    {name:\"Surface Dock 2\",price:259.99,qty:1,img:\"cart_3\"},\n  ]\n  const sub = items.reduce((s,i)=>s+i.price*i.qty,0)\n  const tax = sub*0.08",
  "  const sub = items.reduce((s,i)=>s+i.price*i.qty,0)\n  const tax = sub*0.08"
);
// Replace Remove link to use removeFromCart
cartPage = cartPage.replace(
  '<a href="#" style={{fontSize:12,color:"rgb(97,97,97)",textDecoration:"none"}}>Remove</a>',
  '<a href="#" style={{fontSize:12,color:"rgb(97,97,97)",textDecoration:"none"}} onClick={(e)=>{e.preventDefault();remove(it.slug)}}>Remove</a>'
);
// Replace quantity select to use updateQty
cartPage = cartPage.replace(
  '<select defaultValue={it.qty} style={{padding:"4px 8px",border:"1px solid rgb(220,220,220)",borderRadius:2,fontSize:13}}>\n                {[1,2,3,4,5].map(n=><option key={n} value={n}>{n}</option>)}\n              </select>',
  '<select value={it.qty} style={{padding:"4px 8px",border:"1px solid rgb(220,220,220)",borderRadius:2,fontSize:13}} onChange={(e)=>updateQty(it.slug,parseInt(e.target.value))}>\n                {[1,2,3,4,5].map(n=><option key={n} value={n}>{n}</option>)}\n              </select>'
);
// Update sub/tax to use dynamic items
cartPage = cartPage.replace('const sub', 'const activeItems = items;\n  const sub');
fs.writeFileSync('src/pages/CartPage.tsx', cartPage, 'utf-8');
console.log('FIXED CartPage: using CartContext');