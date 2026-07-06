import { Link } from "react-router-dom"
export default function AccountPage() {
  const orders = [{id:"ORD-2026-001",date:"Jun 15, 2026",status:"Delivered",total:1299.99,items:2},{id:"ORD-2026-002",date:"Jun 20, 2026",status:"Shipped",total:189.98,items:3},{id:"ORD-2026-003",date:"Jun 25, 2026",status:"Processing",total:69.99,items:1}]
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff"}}>
      <div style={{background:"linear-gradient(135deg,#0078D4,#106EBE)",color:"#fff",padding:"60px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h1 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#fff",margin:"0 0 8px 0"}}>My Account</h1>
          <p style={{fontSize:16,fontWeight:400,color:"rgba(255,255,255,0.8)",margin:0}}>Manage your Microsoft profile, orders, and payments.</p>
        </div>
      </div>
      <div style={{padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16,marginBottom:32}}>
          {[{icon:"U",title:"Account Info",desc:"Name, email, password"},{icon:"P",title:"Payment",desc:"Cards, addresses"},{icon:"D",title:"Devices",desc:"Registered devices"}].map((c,i)=>(
            <div key={i} style={{background:"rgb(242,242,242)",padding:24,borderRadius:2}}>
              <div style={{width:40,height:40,background:["#0078D4","#107C10","#5C2E91"][i],borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:18,fontWeight:700,marginBottom:12}}>{c.icon}</div>
              <div style={{fontSize:16,fontWeight:600,color:"#000",marginBottom:4}}>{c.title}</div>
              <div style={{fontSize:13,color:"rgb(97,97,97)",marginBottom:12}}>{c.desc}</div>
              <Link to="/account" style={{fontSize:13,color:"#0067b8",textDecoration:"none"}}>Manage &gt;</Link>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:24,fontWeight:600,color:"#000",lineHeight:"28px",margin:"0 0 16px 0"}}>Order History</h2>
        <div style={{overflow:"hidden",borderRadius:2,border:"1px solid rgb(220,220,220)"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 60px",gap:12,padding:"12px 16px",background:"rgb(242,242,242)",fontSize:13,fontWeight:600,color:"rgb(97,97,97)"}}>
            <span>Order</span><span>Date</span><span>Status</span><span>Total</span><span></span>
          </div>
          {orders.map((o,i)=>(
            <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 60px",gap:12,padding:"12px 16px",borderBottom:i<2?"1px solid rgb(220,220,220)":"none",fontSize:13,alignItems:"center"}}>
              <span style={{color:"#0067b8"}}>{o.id}</span>
              <span>{o.date}</span>
              <span style={{color:o.status==="Delivered"?"#107C10":"#0078D4"}}>{o.status}</span>
              <span>${o.total.toFixed(2)}</span>
              <Link to="/account" style={{fontSize:12,color:"#0067b8",textDecoration:"none"}}>View</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
