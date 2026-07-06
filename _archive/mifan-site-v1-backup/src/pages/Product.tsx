import {useParams, Link} from 'react-router-dom';

const products = [
  {id:1,n:"mPhone",p:"100",d:"The one that started it all.",slug:"mphone",specs:"2G - 3.5in LCD - 2MP camera - 128MB RAM"},
  {id:2,n:"mPhone 2G",p:"149",d:"3G + App Store. A new platform.",slug:"mphone-2g",specs:"3G - 3.5in LCD - 2MP camera - 256MB RAM"},
  {id:3,n:"mPhone 3G",p:"199",d:"Video. GPS. Faster 3G.",slug:"mphone-3g",specs:"3G - 3.5in LCD - 3MP camera - GPS"},
  {id:4,n:"mPhone 3GS",p:"249",d:"Speed. Camera. Voice Control.",slug:"mphone-3gs",specs:"3G - 3.5in LCD - 5MP camera - Voice Control"},
  {id:5,n:"mPhone 4",p:"299",d:"Retina. FaceTime. All-new design.",slug:"mphone-4",specs:"3G - Retina 3.5in - 5MP - FaceTime - A4"},
  {id:6,n:"mPhone 4S",p:"399",d:"Siri. iCloud. Dual-core A5.",slug:"mphone-4s",specs:"3G - Retina 3.5in - 8MP - Siri - A5"},
  {id:7,n:"mPhone 5",p:"499",d:"4-inch. Lightning. LTE.",slug:"mphone-5",specs:"4G LTE - 4in Retina - 8MP - Lightning - A6"},
  {id:8,n:"mPhone 5S",p:"599",d:"Touch ID. A7 64-bit. Gold.",slug:"mphone-5s",specs:"4G LTE - 4in Retina - 8MP - Touch ID - A7"},
  {id:9,n:"mPhone 10",p:"799",d:"Full-screen OLED. Face ID.",slug:"mphone-10",specs:"4G LTE - 5.8in OLED - 12MP - Face ID - A11"},
  {id:10,n:"mPhone 10 Pro",p:"999",d:"Triple camera. ProMotion XDR.",slug:"mphone-10-pro",specs:"5G - 6.1in XDR - Triple 12MP - LiDAR - A13"}
];

export default function ProductPage() {
  const {slug} = useParams();
  const p = products.find(x => x.slug === slug) || products[9];
  return (
    <>
      <section style={{background:"#f5f5f7",padding:"80px 20px 40px",textAlign:"center"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <p style={{fontSize:12,color:"#6e6e73",marginBottom:4,letterSpacing:"0.05em",textTransform:"uppercase"}}>New</p>
          <h1 className="hero-title" style={{fontSize:48,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>{p.n}</h1>
          <p style={{fontSize:22,fontWeight:300,color:"#1d1d1f",marginBottom:12}}>{p.d}</p>
          <p style={{fontSize:20,color:"#6e6e73",marginBottom:20}}>From ${p.p}</p>
          <div className="hero-cta" style={{display:"flex",gap:16,justifyContent:"center"}}>
            <Link to="/cart" style={{background:"#0071e3",color:"#fff",fontSize:14,fontWeight:600,padding:"10px 24px",borderRadius:980,textDecoration:"none"}}>Add to Cart</Link>
            <a style={{color:"#0071e3",fontSize:14,fontWeight:600,textDecoration:"none",cursor:"pointer"}}>Learn more {">"}</a>
          </div>
        </div>
      </section>

      <section style={{padding:"60px 20px",background:"#fff"}}>
        <h2 style={{fontSize:32,fontWeight:600,textAlign:"center",color:"#1d1d1f",marginBottom:32}}>Tech Specs</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16,maxWidth:600,margin:"0 auto"}}>
          {[{label:"Network",value:p.specs.split(" - ")[0]||"5G"},{label:"Display",value:p.specs.split(" - ")[1]||"6.1in OLED"},{label:"Camera",value:p.specs.split(" - ")[2]||"12MP"},{label:"Chip",value:p.specs.split(" - ")[4]||"A13"}].map((s,i) => (
            <div key={i} style={{background:"#f5f5f7",borderRadius:14,padding:"20px 16px",textAlign:"center"}}>
              <p style={{fontSize:11,color:"#6e6e73",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.03em"}}>{s.label}</p>
              <p style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"60px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:32,fontWeight:600,textAlign:"center",color:"#1d1d1f",marginBottom:32}}>Compare Models</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:12,maxWidth:900,margin:"0 auto"}}>
          {products.map((x,i) => (
            <Link key={i} to={"/product/"+x.slug} style={{background:"#fff",borderRadius:14,padding:"16px 12px",textAlign:"center",textDecoration:"none",color:"inherit",border:"1px solid #e6e6ea",display:"block"}}>
              <p style={{fontSize:13,fontWeight:600,color:x.slug===slug?"#0071e3":"#1d1d1f"}}>{x.n}</p>
              <p style={{fontSize:11,color:"#6e6e73",marginTop:4}}>${x.p}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}