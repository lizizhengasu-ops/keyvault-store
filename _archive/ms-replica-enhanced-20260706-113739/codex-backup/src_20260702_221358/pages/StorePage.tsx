export default function StorePage() {
  const products = [
    {name:"Surface Pro, 13-inch (12th Edition)",price:"From $1,299.99",img:"surface"},
    {name:"Surface Laptop, 13.8-inch (8th Edition)",price:"From $999.99",img:"s_laptop"},
    {name:"Surface Laptop, 15-inch (8th Edition)",price:"From $1,299.99",img:"s_laptop15"},
    {name:"Surface for Business Essentials Bundles",price:"From $1,499.99",img:"s_biz"},
    {name:"Surface Pro, 12-inch",price:"From $799.99",img:"s_pro12"},
    {name:"Surface Laptop, 13-inch",price:"From $899.99",img:"s_lap13"},
    {name:"Get the ultimate student bundle",price:"From $1,199.99",img:"student"},
    {name:"Surface Laptop, 15-inch (7th Edition)",price:"From $1,199.99",img:"s_lap7"},
    {name:"Surface Laptop, 13.8-inch (7th Edition)",price:"From $999.99",img:"s_lap7_13"},
    {name:"Surface Pro, 13-inch (11th Edition)",price:"From $999.99",img:"s_pro11"},
    {name:"Certified Refurbished Surface devices",price:"From $499.99",img:"refurb"},
    {name:"Students save 50% on Microsoft 365 Personal",price:"From $3.49/mo",img:"m365"},
  ]
  const features = [
    {title:"Trade in and get cash back",desc:"Get up to $600 for your eligible device."},
    {title:"Get cash for your used console",desc:"Trade in your old Xbox for credit."},
    {title:"Free 2-3 day shipping",desc:"On thousands of products."},
    {title:"Buy now, pay later",desc:"As low as 0% APR."},
    {title:"Microsoft Complete",desc:"Extended warranty and support."},
    {title:"Free 60-day returns",desc:"No questions asked."},
  ]
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff",padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
      <h2 style={{fontSize:34,fontWeight:100,lineHeight:"40px",color:"#000",margin:"0 0 16px 0"}}>Microsoft Store Deals</h2>
      <p style={{fontSize:16,fontWeight:200,lineHeight:"24px",color:"#000",margin:"0 0 32px 0"}}>Save big on Surface, Xbox, and more.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
        {products.slice(0,8).map((p,i)=>(
          <div key={i} style={{background:"#f2f2f2",padding:16,borderRadius:2}}>
            <img src={"https://picsum.photos/seed/"+p.img+"/400/300"} alt={p.name} style={{width:"100%",height:140,objectFit:"cover",marginBottom:12,borderRadius:2}} />
            <h2 style={{fontSize:24,fontWeight:700,color:"#000",margin:"0 0 4px 0",lineHeight:"28px"}}>{p.name}</h2>
            <p style={{fontSize:14,fontWeight:400,color:"#000",lineHeight:"18px",margin:"0 0 12px 0"}}>{p.price}</p>
            <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Shop now</a>
          </div>
        ))}
      </div>
      <div style={{marginTop:48,display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
        {products.slice(8,12).map((p,i)=>(
          <div key={i} style={{background:"#f2f2f2",padding:16,borderRadius:2}}>
            <img src={"https://picsum.photos/seed/"+p.img+"/400/300"} alt={p.name} style={{width:"100%",height:140,objectFit:"cover",marginBottom:12,borderRadius:2}} />
            <h2 style={{fontSize:24,fontWeight:700,color:"#000",margin:"0 0 4px 0",lineHeight:"28px"}}>{p.name}</h2>
            <p style={{fontSize:14,fontWeight:400,color:"#000",lineHeight:"18px",margin:"0 0 12px 0"}}>{p.price}</p>
            <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Shop now</a>
          </div>
        ))}
      </div>
      <h2 style={{fontSize:32,fontWeight:600,color:"#0e1726",lineHeight:"38px",margin:"48px 0 24px 0"}}>Why buy from Microsoft Store</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
        {features.map((f,i)=>(
          <div key={i} style={{padding:16,background:"#fff",border:"1px solid #e6e6e6",borderRadius:2,display:"flex",flexDirection:"column"}}>
            <img src={"https://picsum.photos/seed/ft"+i+"/400/200"} alt={f.title} style={{width:"100%",height:80,objectFit:"cover",marginBottom:8,borderRadius:2}} />
            <h3 style={{fontSize:18.72,fontWeight:700,color:"#000",margin:"0 0 4px 0",lineHeight:"22px"}}>{f.title}</h3>
            <p style={{fontSize:13,fontWeight:400,color:"#000",lineHeight:"20px",margin:"0 0 8px 0"}}>{f.desc}</p>
            <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Learn more</a>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:12,marginTop:32}}>
        {["Trade in and save","Why buy from MS Store","FAQ","Student discounts","Military discounts","Business pricing"].map((e,i)=>(
          <div key={i} style={{padding:12,background:"#f2f2f2",borderRadius:2}}>
            <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>{e}</a>
          </div>
        ))}
      </div>
    </div>
  )
}