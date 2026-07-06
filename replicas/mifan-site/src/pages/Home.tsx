import {Link} from "react-router-dom";
import PhoneSVG from "../components/PhoneSVG";
import {useCart} from "../CartContext";

export default function HomePage() {
  const cart = useCart();
  const buy = (p) => cart.add(p);
  return (
    <>
      {/* 1. HERO - Apple iPhone 17 Pro style */}
      <section className="section section-hero" style={{background:"linear-gradient(180deg,#f5f5f7 0%,#fff 100%)",display:"flex",justifyContent:"center",padding:"44px 0 0",overflow:"clip"}}>
        <div className="tile-wrapper" style={{display:"flex",justifyContent:"center",width:"100%",minHeight:560}}>
          <div className="tile-content" style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"0 20px"}}>
            <div className="tile-image-wrapper"><div className="hero-image"><PhoneSVG color="#1d1d1f" large={true} image="/products/mphone-11-pro.jpg" /></div></div>
            <div className="tile-copy-wrapper" style={{marginTop:0,paddingBottom:40}}>
              <h2 className="hero-title" style={{fontSize:48,fontWeight:700,color:"#1d1d1f",lineHeight:1.08365,letterSpacing:"-0.003em",marginBottom:8}}>mPhone 11 Pro</h2>
              <p className="hero-subtitle" style={{fontSize:24,fontWeight:600,color:"#1d1d1f",lineHeight:1.16667,marginBottom:12,letterSpacing:"0.216px"}}>Pro cameras. Pro performance. ProMotion display.</p>
              <p style={{fontSize:17,color:"#6e6e73",lineHeight:1.47059,marginBottom:16}}>From $999</p>
              <div className="hero-cta" style={{display:"flex",gap:18,justifyContent:"center"}}>
                <div onClick={() => buy({slug:"mphone-11-pro",name:"mPhone 11 Pro",price:999})} className="btn-primary" tabIndex={0} role="button" onKeyDown={e=>e.key==="Enter"&&buy({slug:"mphone-11-pro",name:"mPhone 11 Pro",price:999})}>Buy</div>
                <Link to="/product/mphone-11-pro" className="hero-link-large">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MACBOOK - full-bleed dark tile */}
      <section className="section-in" style={{background:"#000",padding:"60px 20px",textAlign:"center"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",minHeight:360,justifyContent:"center"}}>
          <h2 style={{fontSize:40,fontWeight:700,color:"#f5f5f7",lineHeight:1.08365,letterSpacing:"-0.003em",marginBottom:8}}>mifan ProBook</h2>
          <p style={{fontSize:21,fontWeight:300,color:"#86868b",lineHeight:1.19048,marginBottom:16}}>Now supercharged by M-series chips.</p>
          <div style={{display:"flex",gap:18,justifyContent:"center"}}>
            <Link to="/store" className="hero-link-large" style={{color:"#2997ff",fontSize:17,fontWeight:400}}>Learn more &gt;</Link>
            <Link to="/store" className="hero-link-large" style={{color:"#2997ff",fontSize:17,fontWeight:400}}>Buy &gt;</Link>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="section-in" style={{padding:"48px 20px 56px",background:"#fff"}}>
        <h2 style={{fontSize:34,fontWeight:600,textAlign:"center",marginBottom:32,lineHeight:1.47059}}>The mPhone lineup</h2>
        <div className="card-grid" style={{maxWidth:1068,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {[{n:"mPhone 11 Pro",p:999,s:"mphone-11-pro",c:"#1d1d1f",d:"Pro cameras.",img:"/products/mphone-11-pro.jpg"},{n:"mPhone X",p:899,s:"mphone-x",c:"#000",d:"All-screen OLED.",img:"/products/mphone-x.jpg"},{n:"mPhone 6",p:699,s:"mphone-6",c:"#ff9500",d:"Bigger than bigger.",img:"/products/mphone-6.jpg"},{n:"mPhone 5S",p:599,s:"mphone-5s",c:"#ffd60a",d:"Touch ID.",img:"/products/mphone-5s.jpg"}].map((x,i) => (
            <Link key={i} to={"/product/"+x.s} className="card-item card-hover" style={{background:"#f5f5f7",borderRadius:18,overflow:"hidden",textDecoration:"none",color:"inherit",border:"1px solid #e6e6ea",display:"block",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
              <div style={{padding:20,textAlign:"center",minHeight:170,display:"flex",alignItems:"center",justifyContent:"center"}}><PhoneSVG color={x.c} image={x.img} /></div>
              <div style={{padding:"16px 14px",textAlign:"center",background:"#fff"}}>
                <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>{x.n}</h3>
                <p style={{fontSize:11,color:"#6e6e73",marginBottom:4}}>{x.d}</p>
                <p style={{fontSize:15,color:"#0071e3",fontWeight:400,marginTop:4}}>From ${x.p}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. 2x2 PROMO GRID - Apple style */}
      <section className="section section-promo" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,maxWidth:1200,margin:"0 auto",padding:"0 14px 14px"}}>
        <div className="section-in" style={{background:"#f5f5f7",borderRadius:24,textAlign:"center",padding:"36px 20px",minHeight:420,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h3 style={{fontSize:28,fontWeight:600,color:"#1d1d1f",marginBottom:6}}>mifan iPad</h3>
          <p style={{fontSize:15,fontWeight:400,color:"#6e6e73",marginBottom:16}}>Supercharged by M-series.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center"}}>
            <Link to="/store" className="btn-link" style={{fontSize:15}}>Learn more &gt;</Link>
            <Link to="/store" className="btn-link" style={{fontSize:15}}>Buy &gt;</Link>
          </div>
        </div>
        <div className="section-in" style={{background:"#1c1c1e",borderRadius:24,textAlign:"center",padding:"36px 20px",minHeight:420,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h3 style={{fontSize:28,fontWeight:600,color:"#f5f5f7",marginBottom:6}}>mifan AirPods</h3>
          <p style={{fontSize:15,fontWeight:400,color:"#86868b",marginBottom:16}}>Active Noise Cancellation.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center"}}>
            <Link to="/store" className="btn-link" style={{fontSize:15,color:"#2997ff"}}>Learn more &gt;</Link>
            <Link to="/store" className="btn-link" style={{fontSize:15,color:"#2997ff"}}>Buy &gt;</Link>
          </div>
        </div>
        <div className="section-in" style={{background:"#1c1c1e",borderRadius:24,textAlign:"center",padding:"36px 20px",minHeight:420,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h3 style={{fontSize:28,fontWeight:600,color:"#f5f5f7",marginBottom:6}}>mifan ProBook 16</h3>
          <p style={{fontSize:15,fontWeight:400,color:"#86868b",marginBottom:16}}>M5 Pro and M5 Max.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center"}}>
            <Link to="/store" className="btn-link" style={{fontSize:15,color:"#2997ff"}}>Learn more &gt;</Link>
            <Link to="/store" className="btn-link" style={{fontSize:15,color:"#2997ff"}}>Buy &gt;</Link>
          </div>
        </div>
        <div className="section-in" style={{background:"#f5f5f7",borderRadius:24,textAlign:"center",padding:"36px 20px",minHeight:420,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h3 style={{fontSize:28,fontWeight:600,color:"#1d1d1f",marginBottom:6}}>mifan Watch</h3>
          <p style={{fontSize:15,fontWeight:400,color:"#6e6e73",marginBottom:16}}>Advanced health sensors.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center"}}>
            <Link to="/store" className="btn-link" style={{fontSize:15}}>Learn more &gt;</Link>
            <Link to="/store" className="btn-link" style={{fontSize:15}}>Buy &gt;</Link>
          </div>
        </div>
      </section>

      {/* 5. WHY MPHONE */}
      

      {/* 6. TRADE IN */}
      <section className="section-in" style={{background:"#000",padding:"60px 20px",textAlign:"center"}}>
        <h2 style={{fontSize:34,fontWeight:600,color:"#f5f5f7",lineHeight:1.47059,marginBottom:8}}>Trade in your current phone.</h2>
        <p style={{fontSize:24,fontWeight:600,color:"#86868b",lineHeight:1.17648,marginBottom:16,letterSpacing:"0.216px"}}>Get $200-$650 credit toward a new mPhone.</p>
        <a className="hero-link-large" style={{color:"#2997ff",fontSize:24,fontWeight:600}}>Get your estimate</a>
      </section>

      {/* 7. COMPARE */}
      <section className="section-in" style={{padding:"48px 20px",background:"#fff",textAlign:"center"}}>
        <h2 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,marginBottom:12}}>Which mPhone is right for you?</h2>
        <p style={{fontSize:17,color:"#6e6e73",marginBottom:20}}>Compare specs across every generation.</p>
        <Link to="/store" className="btn-link" style={{fontSize:17}}>Compare all models &gt;</Link>
      </section>

      {/* 8. VIDEO */}
      

      {/* 9. REVIEWS */}
      <section className="section-in" style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,textAlign:"center",marginBottom:32}}>What Our Customers Say</h2>
        <div className="stagger-grid" style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {[{n:"Sarah M.",t:"mPhone 11 Pro",c:"The camera is incredible and the battery lasts all day."},{n:"James K.",t:"mPhone X",c:"Face ID works flawlessly and the OLED display is stunning."},{n:"Lisa C.",t:"mPhone 6",c:"Great value for the price. Solid performance."}].map((r,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"28px 24px",border:"1px solid #e6e6ea"}}>
              <p style={{fontSize:14,color:"#6e6e73",lineHeight:1.47059,marginBottom:12,fontStyle:"italic"}}>"{r.c}"</p>
              <p style={{fontSize:13,color:"#1d1d1f",fontWeight:600}}>{r.n}</p>
              <p style={{fontSize:12,color:"#0071e3",cursor:"pointer"}}>{r.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ */}
      
    
      <div style={{textAlign:"center",padding:"20px 20px 32px",background:"#f5f5f7",fontSize:13,color:"#6e6e73",lineHeight:1.6}}>
        <p style={{marginBottom:4}}>Get $200-$650 for your current phone. From $41.62/mo. at 0% APR. Free delivery.</p>
      </div>

</>
  );
}
