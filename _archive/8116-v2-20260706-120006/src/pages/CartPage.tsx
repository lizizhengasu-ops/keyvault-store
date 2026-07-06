import { useCart } from "../CartContext"

export default function CartPage() {
  const items = [
    {name:"Surface Pro 13-inch (12th Edition)",price:1299.99,qty:1,img:"cart_0"},
    {name:"Surface Pen - Platinum",price:129.99,qty:2,img:"cart_1"},
    {name:"Microsoft 365 Personal (1-Year)",price:69.99,qty:1,img:"cart_2"},
    {name:"Surface Dock 2",price:259.99,qty:1,img:"cart_3"},
  ]
  const activeItems = items;
  const sub = items.reduce((s,i)=>s+i.price*i.qty,0)
  const cartItems = items;
  const tax = sub * 0.08
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff",padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
      <h1 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#000",margin:"0 0 32px 0"}}>Shopping Cart</h1>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:32}}>
        <div>
          <div style={{display:"grid",gridTemplateColumns:"2fr 80px 100px 60px",gap:12,padding:"12px 0",fontSize:13,fontWeight:600,color:"rgb(97,97,97)",borderBottom:"1px solid rgb(220,220,220)"}}>
            <span>Product</span><span>Price</span><span>Qty</span><span></span>
          </div>
          {items.map((it,i)=>(
            <div key={i} style={{display:"grid",gridTemplateColumns:"2fr 80px 100px 60px",gap:12,padding:"16px 0",borderBottom:"1px solid rgb(220,220,220)",alignItems:"center"}}>
              <div style={{display:"flex",gap:12,alignItems:"center"}}>
                <img src={"https://picsum.photos/seed/"+it.img+"/80/80"} alt={it.name} style={{width:80,height:80,objectFit:"cover",borderRadius:4}} />
                <div><div style={{fontSize:14,fontWeight:600,color:"#000"}}>{it.name}</div><button onClick={()=>remove(it.slug)} style={{background:"none",border:"none",fontSize:12,color:"rgb(97,97,97)",cursor:"pointer",padding:0}}>Remove</button></div>
              </div>
              <span style={{fontSize:14,color:"#000"}}>${it.price.toFixed(2)}</span>
              <select defaultValue={it.qty} style={{padding:"4px 8px",border:"1px solid rgb(220,220,220)",borderRadius:2,fontSize:13}}>
                {[1,2,3,4,5].map(n=><option key={n} value={n}>{n}</option>)}
              </select>
              <span style={{fontSize:14,fontWeight:600,color:"#000"}}>${(it.price*it.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div style={{background:"rgb(242,242,242)",padding:24,borderRadius:2,height:"fit-content"}}>
          <div style={{fontSize:18,fontWeight:600,color:"#000",marginBottom:16}}>Order Summary</div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#000",marginBottom:8}}><span>Subtotal</span><span>${sub.toFixed(2)}</span></div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#000",marginBottom:8}}><span>Shipping</span><span style={{color:"#107C10"}}>Free</span></div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#000",marginBottom:8}}><span>Estimated Tax</span><span>${tax.toFixed(2)}</span></div>
          <div style={{borderTop:"1px solid rgb(220,220,220)",margin:"12px 0",paddingTop:12,display:"flex",justifyContent:"space-between",fontSize:18,fontWeight:700,color:"#000"}}><span>Total</span><span>${(sub+tax).toFixed(2)}</span></div>
          <a href="/" style={{display:"block",background:"#0078D4",color:"#fff",textAlign:"center",padding:"10px 0",fontSize:14,textDecoration:"none",borderRadius:2,marginTop:16}}>Checkout</a>
          <a href="/products" style={{display:"block",textAlign:"center",padding:"10px 0",fontSize:13,color:"#0067b8",textDecoration:"none",marginTop:8}}>Continue shopping</a>
        </div>
      </div>
    </div>
  )
}
