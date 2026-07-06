import {Link} from "react-router-dom";
import {useCart} from "../CartContext";

export default function CartPage() {
  const cart = useCart();

  if (cart.items.length === 0) {
    return (
      <section style={{padding:"80px 20px",maxWidth:500,margin:"0 auto",textAlign:"center"}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" strokeWidth="1" style={{marginBottom:16}}>
          <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <h1 style={{fontSize:28,fontWeight:600,lineHeight:1.1,marginBottom:8,color:"#1d1d1f"}}>Your bag is empty.</h1>
        <p style={{fontSize:15,color:"#6e6e73",marginBottom:24}}>Browse our latest products and find something you love.</p>
        <Link to="/store" style={{display:"inline-block",fontSize:14,background:"#0071e3",color:"#fff",padding:"10px 22px",borderRadius:980,textDecoration:"none"}}>Continue Shopping</Link>
      </section>
    );
  }

  return (
    <section style={{padding:"48px 20px 56px",maxWidth:800,margin:"0 auto"}}>
      <h1 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,marginBottom:8,color:"#1d1d1f"}}>Cart.</h1>
      <p style={{fontSize:17,color:"#6e6e73",marginBottom:32}}>Review your items before checkout.</p>
      <div style={{borderTop:"1px solid #d2d2d7"}}>
        {cart.items.map((x,i) => (
          <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 0",borderBottom:"1px solid #d2d2d7"}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:12}}><img src={"/products/"+x.slug+".jpg"} alt={x.name} style={{width:48,height:48,borderRadius:10,objectFit:"contain",background:"#f5f5f7",flexShrink:0}} /><p style={{fontSize:17,fontWeight:600,color:"#1d1d1f"}}>{x.name}</p></div>
              <div style={{display:"flex",alignItems:"center",gap:8,marginTop:4}}><div onClick={() => cart.updateQty(x.slug,-1)} style={{width:28,height:28,borderRadius:"50%",border:"1px solid #d2d2d7",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:15,userSelect:"none",lineHeight:1,color:"#6e6e73"}}>-</div><span style={{fontSize:14,fontWeight:600,minWidth:20,textAlign:"center",color:"#1d1d1f"}}>{x.qty}</span><div onClick={() => cart.updateQty(x.slug,1)} style={{width:28,height:28,borderRadius:"50%",border:"1px solid #0071e3",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:15,color:"#0071e3",userSelect:"none",lineHeight:1}}>+</div></div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:16}}>
              <p style={{fontSize:17,color:"#1d1d1f"}}>${x.price * x.qty}</p>
              <div onClick={() => cart.remove(x.slug)} style={{cursor:"pointer",color:"#6e6e73",display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,borderRadius:"50%",transition:"all 0.2s"}} role="button" aria-label="Remove" tabIndex={0} onKeyDown={e=>e.key==="Enter"&&cart.remove(x.slug)}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#6e6e73" strokeWidth="1.2"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",padding:"20px 0",fontSize:20,fontWeight:600}}>
        <span>Total</span><span>${cart.total}</span>
      </div>
      <div style={{background:"#f5f5f7",borderRadius:14,padding:"16px 20px",marginTop:16,border:"1px solid #e6e6ea"}}>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#6e6e73",marginBottom:6}}><span>Subtotal</span><span>${cart.total}</span></div>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#6e6e73",marginBottom:6}}><span>Shipping</span><span style={{color:"#34c759"}}>Free</span></div>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#6e6e73",marginBottom:6}}><span>Estimated Tax</span><span>Calculated at checkout</span></div>
        <div style={{height:1,background:"#d2d2d7",margin:"8px 0"}}></div>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:15,fontWeight:600,color:"#1d1d1f"}}><span>Total</span><span>${cart.total}</span></div>
      </div>
    </section>
  );
}
