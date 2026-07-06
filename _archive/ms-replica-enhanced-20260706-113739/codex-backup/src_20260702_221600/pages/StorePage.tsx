export default function StorePage() {
  const products = ["Surface Pro, 13-inch","Surface Laptop, 13.8-inch","Surface Laptop, 15-inch","Surface for Business","Surface Pro, 12-inch","Surface Laptop, 13-inch","Student bundle","Surface Laptop 15 (7th)","Surface Laptop 13.8 (7th)","Surface Pro 13 (11th)","Refurbished Surface","Microsoft 365 Personal"]
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff",padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
      <h2 style={{fontSize:34,fontWeight:100,lineHeight:"40px",color:"#000",margin:"0 0 16px 0"}}>Microsoft Store Deals</h2>
      <p style={{fontSize:20,fontWeight:200,lineHeight:"24px",color:"#000",margin:"0 0 32px 0"}}>Save big on Surface, Xbox, and more.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
        {products.slice(0,12).map((p,i)=>(
          <div key={i} style={{background:"#f2f2f2",padding:16,borderRadius:2}}>
            <img src={"https://picsum.photos/seed/store_"+i+"/400/300"} alt={p} style={{width:"100%",height:140,objectFit:"cover",marginBottom:12,borderRadius:2}} />
            <div style={{fontSize:20,fontWeight:600,color:"#000",margin:"0 0 4px 0"}}>{p}</div>
            <p style={{fontSize:14,fontWeight:400,color:"#000",lineHeight:"18px",margin:"0 0 12px 0"}}>From $799.99</p>
            <a href="#" style={{fontSize:13,color:"#000",fontWeight:400,textDecoration:"none"}}>Shop now</a>
          </div>
        ))}
      </div>
      <div style={{marginTop:48,display:"flex",flexWrap:"wrap",gap:8}}>
        {["Trade in","Student discount","Military discount","Business pricing","FAQ","Free shipping","60-day returns","Microsoft Complete"].map((e,i)=>(
          <div key={i} style={{padding:12,background:"#f2f2f2",borderRadius:2}}>
            <a href="#" style={{fontSize:13,color:"#000",fontWeight:400,textDecoration:"none"}}>{e}</a>
          </div>
        ))}
      </div>
    </div>
  )
}