import {Link} from 'react-router-dom';
import Aurora from '../reactbits/aurora';
import BlurText from '../reactbits/blur-text';
import ScrollFloat from '../reactbits/scroll-float';
import CountUp from '../reactbits/count-up';

const items = [
  {id:1,n:"mPhone",p:"100",d:"The one that started it all.",slug:"mphone"},
  {id:2,n:"mPhone 2G",p:"149",d:"3G + App Store. A new platform.",slug:"mphone-2g"},
  {id:3,n:"mPhone 3G",p:"199",d:"Video. GPS. Faster 3G.",slug:"mphone-3g"},
  {id:4,n:"mPhone 3GS",p:"249",d:"Speed. Camera. Voice Control.",slug:"mphone-3gs"},
  {id:5,n:"mPhone 4",p:"299",d:"Retina. FaceTime. All-new design.",slug:"mphone-4"},
  {id:6,n:"mPhone 4S",p:"399",d:"Siri. iCloud. Dual-core A5.",slug:"mphone-4s"},
  {id:7,n:"mPhone 5",p:"499",d:"4-inch. Lightning. LTE.",slug:"mphone-5"},
  {id:8,n:"mPhone 5S",p:"599",d:"Touch ID. A7 64-bit. Gold.",slug:"mphone-5s"},
  {id:9,n:"mPhone 10",p:"799",d:"Full-screen OLED. Face ID.",slug:"mphone-10"},
  {id:10,n:"mPhone 10 Pro",p:"999",d:"Triple camera. ProMotion XDR.",slug:"mphone-10-pro"}
];

const stats = [
  {v:250,label:"Countries Reached"},
  {v:2.4,label:"Billion Devices Sold"},
  {v:98,label:"% Satisfaction Rate"}
];

export default function HomePage() {
  return (
    <>
      <section style={{background:"#f5f5f7",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",padding:"120px 20px 60px"}}>
        <div style={{position:"absolute",inset:0,opacity:0.06,pointerEvents:"none"}}>
          <Aurora colorStops={["#0071e3","#2997ff","#f5f5f7"]} speed={0.5} />
        </div>
        <div style={{position:"relative",zIndex:1,maxWidth:800,textAlign:"center"}}>
          <BlurText text="mPhone 10 Pro" delay={3} className="hero-title" style={{fontSize:56,fontWeight:600,letterSpacing:"-0.005em",color:"#1d1d1f",marginBottom:8}} />
          <p className="hero-subtitle" style={{fontSize:28,fontWeight:300,color:"#1d1d1f",marginBottom:8}}>Ten generations of innovation.</p>
          <p style={{fontSize:16,color:"#6e6e73",maxWidth:500,margin:"0 auto 28px",lineHeight:1.5}}>From the original to the Pro. Every mPhone redefined what a phone could be.</p>
          <div className="hero-cta" style={{display:"flex",gap:24,justifyContent:"center"}}>
            <Link to="/product/mphone-10-pro" style={{background:"#0071e3",color:"#fff",fontSize:14,fontWeight:600,padding:"10px 24px",borderRadius:980,textDecoration:"none"}}>Shop mPhone</Link>
            <a style={{color:"#0071e3",fontSize:14,fontWeight:600,textDecoration:"none",cursor:"pointer"}}>Learn more {">"}</a>
          </div>
        </div>
      </section>

      <section style={{padding:"72px 20px",background:"#fff"}}>
        <ScrollFloat style={{fontSize:40,fontWeight:600,textAlign:"center",color:"#1d1d1f",marginBottom:8}}>Explore the mPhone lineup</ScrollFloat>
        <p style={{textAlign:"center",fontSize:18,color:"#6e6e73",marginBottom:48}}>Ten phones. Ten moments in history.</p>
        <div className="product-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:16,maxWidth:1068,margin:"0 auto"}}>
          {items.map((p,i) => (
            <Link key={i} to={`/product/${p.slug}`} className="product-card" style={{background:"#f5f5f7",borderRadius:18,padding:"24px 16px",textAlign:"center",textDecoration:"none",color:"inherit",cursor:"pointer",display:"block",border:"1px solid rgba(0,0,0,0.04)"}}>
              <div style={{fontSize:40,fontWeight:700,color:"rgba(0,0,0,0.06)",marginBottom:8}}>{p.id}</div>
              <h3 style={{fontSize:16,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>{p.n}</h3>
              <p style={{fontSize:12,color:"#6e6e73",marginBottom:8,lineHeight:1.4}}>{p.d}</p>
              <p style={{fontSize:14,color:"#0071e3",fontWeight:600}}>${p.p}</p>
            </Link>
          ))}
        </div>
      </section>

      <section style={{padding:"72px 20px",background:"#f5f5f7"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <h2 style={{fontSize:40,fontWeight:600,color:"#1d1d1f",marginBottom:8}}>Why mPhone</h2>
          <p style={{fontSize:18,color:"#6e6e73"}}>Built differently. Built for you.</p>
        </div>
        <div className="counter-section" style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16,maxWidth:1068,margin:"0 auto"}}>
          {stats.map((s,i) => (
            <div key={i} style={{background:"#fff",borderRadius:18,padding:"32px 20px",textAlign:"center",border:"1px solid #e6e6ea"}}>
              <div style={{fontSize:48,fontWeight:700,color:"#0071e3"}}><CountUp from={0} to={s.v} duration={2} separator="," decimal="." /></div>
              <p style={{fontSize:14,color:"#6e6e73",marginTop:4}}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}