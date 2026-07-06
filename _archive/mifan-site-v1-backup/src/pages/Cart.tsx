import {Link} from 'react-router-dom';
const cartItems = [{n:"mPhone 10 Pro",p:999,qty:1,slug:"mphone-10-pro"},{n:"mPhone 10",p:799,qty:2,slug:"mphone-10"}];
const total = cartItems.reduce((s,x) => s + x.p * x.qty, 0);
export default function CartPage() {
  return (
    <section style={{padding:"80px 20px",maxWidth:800,margin:"0 auto"}}>
      <h1 className="hero-title" style={{fontSize:40,fontWeight:600,marginBottom:32}}>Shopping Cart</h1>
      <div style={{borderTop:"1px solid #d2d2d7"}}>
        {cartItems.map((x,i) => (
          <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 0",borderBottom:"1px solid #d2d2d7"}}>
            <div><p style={{fontSize:16,fontWeight:600}}>{x.n}</p><p style={{fontSize:12,color:"#6e6e73"}}>Qty: {x.qty}</p></div>
            <p style={{fontSize:16,fontWeight:600,color:"#0071e3"}}>${x.p * x.qty}</p>
          </div>
        ))}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",padding:"20px 0",fontSize:18,fontWeight:600}}>
        <span>Total</span><span style={{color:"#0071e3"}}>${total}</span>
      </div>
      <Link to="/product/mphone-10-pro" style={{display:"inline-block",background:"#0071e3",color:"#fff",fontSize:14,fontWeight:600,padding:"12px 28px",borderRadius:980,textDecoration:"none",marginTop:16}}>Continue Shopping</Link>
    </section>
  );
}