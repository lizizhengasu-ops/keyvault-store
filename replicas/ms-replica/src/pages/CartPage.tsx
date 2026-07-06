import { useCart } from "../CartContext"
import { Link } from "react-router-dom"

export default function CartPage() {
  const { items, remove, updateQty, total } = useCart()
  const tax = total * 0.08
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff",padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
      <h1 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#000",margin:"0 0 32px 0"}}>Shopping Cart</h1>
      {items.length === 0 ? (
        <div style={{textAlign:"center",padding:"64px 0"}}>
          <div style={{fontSize:18,color:"rgb(97,97,97)",marginBottom:16}}>Your cart is empty</div>
          <Link to="/products" style={{background:"#0078D4",color:"#fff",display:"inline-block",padding:"10px 24px",fontSize:14,textDecoration:"none",borderRadius:2}}>Start Shopping</Link>
        </div>
      ) : (
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:32}}>
        <div>
          <div style={{display:"grid",gridTemplateColumns:"2fr 80px 100px 60px",gap:12,padding:"12px 0",fontSize:13,fontWeight:600,color:"rgb(97,97,97)",borderBottom:"1px solid rgb(220,220,220)"}}>
            <span>Product</span><span>Price</span><span>Qty</span><span></span>
          </div>
          {items.map((it,i)=>(
            <div key={i} style={{display:"grid",gridTemplateColumns:"2fr 80px 100px 60px",gap:12,padding:"16px 0",borderBottom:"1px solid rgb(220,220,220)",alignItems:"center"}}>
              <div style={{display:"flex",gap:12,alignItems:"center"}}>
                <img src={"https://picsum.photos/seed/"+it.slug+"/80/80"} alt={it.name} style={{width:80,height:80,objectFit:"cover",borderRadius:4}} />
                <div><div style={{fontSize:14,fontWeight:600,color:"#000"}}>{it.name}</div><button onClick={()=>remove(it.slug)} style={{background:"none",border:"none",fontSize:12,color:"rgb(97,97,97)",cursor:"pointer",padding:0}}>Remove</button></div>
              </div>
              <span style={{fontSize:14,color:"#000"}}>${it.price.toFixed(2)}</span>
              <select value={it.qty} onChange={e=>updateQty(it.slug,Number(e.target.value))} style={{padding:"4px 8px",border:"1px solid rgb(220,220,220)",borderRadius:2,fontSize:13}}>
                {[1,2,3,4,5].map(n=><option key={n} value={n}>{n}</option>)}
              </select>
              <span style={{fontSize:14,fontWeight:600,color:"#000"}}>${(it.price*it.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div style={{background:"rgb(242,242,242)",padding:24,borderRadius:2,height:"fit-content"}}>
          <div style={{fontSize:18,fontWeight:600,color:"#000",marginBottom:16}}>Order Summary</div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#000",marginBottom:8}}><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#000",marginBottom:8}}><span>Shipping</span><span style={{color:"#107C10"}}>Free</span></div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#000",marginBottom:8}}><span>Estimated Tax</span><span>${tax.toFixed(2)}</span></div>
          <div style={{borderTop:"1px solid rgb(220,220,220)",margin:"12px 0",paddingTop:12,display:"flex",justifyContent:"space-between",fontSize:18,fontWeight:700,color:"#000"}}><span>Total</span><span>${(total+tax).toFixed(2)}</span></div>
          <Link to="/" style={{display:"block",background:"#0078D4",color:"#fff",textAlign:"center",padding:"10px 0",fontSize:14,textDecoration:"none",borderRadius:2,marginTop:16}}>Checkout</Link>
          <Link to="/products" style={{display:"block",textAlign:"center",padding:"10px 0",fontSize:13,color:"#0067b8",textDecoration:"none",marginTop:8}}>Continue shopping</Link>
        </div>
      </div>
      )}
    </div>
  )
}
