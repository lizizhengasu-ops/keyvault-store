import { useCart } from "../CartContext"
import { Link } from "react-router-dom"

export default function CartPage() {
  const { items, removeFromCart, updateQty, total } = useCart()
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff",padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
      <h1 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#000",margin:"0 0 32px 0"}} className="anim-fade-up">Shopping Cart</h1>
      {items.length === 0 ? (
        <div style={{textAlign:"center",padding:"60px 0"}} className="anim-fade">
          <div style={{fontSize:24,fontWeight:600,color:"#000",marginBottom:16}}>Your cart is empty</div>
          <p style={{fontSize:16,color:"rgb(97,97,97)",marginBottom:24}}>Browse our products and add items to your cart.</p>
          <Link to="/products" style={{background:"#0078D4",color:"#fff",padding:"10px 24px",fontSize:14,textDecoration:"none",borderRadius:2}}>Browse Products</Link>
        </div>
      ) : (
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:32}}>
          <div className="anim-stagger">
            <div style={{display:"grid",gridTemplateColumns:"2fr 80px 100px 80px 60px",gap:12,padding:"12px 0",fontSize:13,fontWeight:600,color:"rgb(97,97,97)",borderBottom:"1px solid rgb(220,220,220)"}}>
              <span>Product</span><span>Price</span><span>Qty</span><span>Total</span><span></span>
            </div>
            {items.map((it,i)=>(
              <div key={it.id} style={{display:"grid",gridTemplateColumns:"2fr 80px 100px 80px 60px",gap:12,padding:"16px 0",borderBottom:"1px solid rgb(220,220,220)",alignItems:"center"}} className="hover-lift">
                <div style={{display:"flex",gap:12,alignItems:"center"}}>
                  <img src={"https://picsum.photos/seed/"+it.img+"/80/80"} alt={it.name} style={{width:80,height:80,objectFit:"cover",borderRadius:4}} />
                  <div><div style={{fontSize:14,fontWeight:600,color:"#000"}}>{it.name}</div><button onClick={() => removeFromCart(it.id)} style={{background:"none",border:"none",fontSize:12,color:"rgb(97,97,97)",cursor:"pointer",padding:0,marginTop:4}}>Remove</button></div>
                </div>
                <span style={{fontSize:14,color:"#000"}}>${it.price.toFixed(2)}</span>
                <div style={{display:"flex",gap:4,alignItems:"center"}}>
                  <button onClick={() => updateQty(it.id, it.qty - 1)} style={{width:24,height:24,background:"rgb(242,242,242)",border:"1px solid rgb(220,220,220)",borderRadius:2,cursor:"pointer",fontSize:14}}>-</button>
                  <span style={{minWidth:20,textAlign:"center",fontSize:13}}>{it.qty}</span>
                  <button onClick={() => updateQty(it.id, it.qty + 1)} style={{width:24,height:24,background:"rgb(242,242,242)",border:"1px solid rgb(220,220,220)",borderRadius:2,cursor:"pointer",fontSize:14}}>+</button>
                </div>
                <span style={{fontSize:14,fontWeight:600,color:"#000"}}>${(it.price*it.qty).toFixed(2)}</span>
                <button onClick={() => removeFromCart(it.id)} style={{background:"none",border:"none",fontSize:16,color:"rgb(200,200,200)",cursor:"pointer"}}>X</button>
              </div>
            ))}
          </div>
          <div style={{background:"rgb(242,242,242)",padding:24,borderRadius:2,height:"fit-content"}} className="anim-fade-up">
            <div style={{fontSize:18,fontWeight:600,color:"#000",marginBottom:16}}>Order Summary</div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#000",marginBottom:8}}><span>Items ({items.reduce((s,i) => s + i.qty, 0)})</span><span>${total.toFixed(2)}</span></div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#000",marginBottom:8}}><span>Shipping</span><span style={{color:"#107C10"}}>Free</span></div>
            <div style={{borderTop:"1px solid rgb(220,220,220)",margin:"12px 0",paddingTop:12,display:"flex",justifyContent:"space-between",fontSize:18,fontWeight:700,color:"#000"}}><span>Total</span><span>${total.toFixed(2)}</span></div>
            <Link to="/" style={{display:"block",background:"#0078D4",color:"#fff",textAlign:"center",padding:"10px 0",fontSize:14,textDecoration:"none",borderRadius:2,marginTop:16}}>Checkout</Link>
            <Link to="/products" style={{display:"block",textAlign:"center",padding:"10px 0",fontSize:13,color:"#0067b8",textDecoration:"none",marginTop:8}}>Continue shopping</Link>
          </div>
        </div>
      )}
    </div>
  )
}
