import os
HOME = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Home.tsx'
STORE = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Store.tsx'
CART = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Cart.tsx'
SUPPORT = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Support.tsx'
ACCT = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Account.tsx'
B2B = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\B2b.tsx'
PROD = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Product.tsx'

def write(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# ===== HOME - Complete rewrite to 10 sections (Apple-style) =====
home = r'''import {Link} from "react-router-dom";
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
      <section className="section-in" style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:34,fontWeight:600,textAlign:"center",marginBottom:40,lineHeight:1.47059}}>Why mPhone</h2>
        <div className="stagger-grid" style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
          {[{t:"Custom Silicon",d:"A-series chips designed for mPhone. Up to 40% faster performance per generation."},{t:"Privacy by Design",d:"Your data stays yours. On-device processing keeps your personal information private."},{t:"Seamless Ecosystem",d:"Works perfectly with mifan Watch, iPad, and Mac. Handoff, AirDrop, and Continuity Camera."}].map((f,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"32px 24px",border:"1px solid #e6e6ea"}}>
              <p style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:8}}>{f.t}</p>
              <p style={{fontSize:14,color:"#6e6e73",lineHeight:1.47059}}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

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
      <section className="section-in" style={{padding:"48px 20px",background:"#000",textAlign:"center"}}>
        <h2 style={{fontSize:34,fontWeight:600,color:"#f5f5f7",marginBottom:8,lineHeight:1.47059}}>See mPhone 11 Pro in action</h2>
        <p style={{fontSize:17,fontWeight:300,color:"#86868b",marginBottom:24}}>Watch the product film.</p>
        <div className="card-hover" style={{maxWidth:700,margin:"0 auto",background:"#1c1c1e",borderRadius:18,padding:"80px 20px",border:"1px solid #38383a",cursor:"pointer"}} role="button" tabIndex={0} aria-label="Play product film">
          <div style={{width:60,height:60,borderRadius:"50%",background:"#0071e3",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <p style={{fontSize:14,color:"#86868b"}}>Play film</p>
        </div>
      </section>

      {/* 9. REVIEWS */}
      <section className="section-in" style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,textAlign:"center",marginBottom:32}}>What Our Customers Say</h2>
        <div className="stagger-grid" style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {[{n:"Sarah M.",t:"mPhone 11 Pro",c:"The camera is incredible and the battery lasts all day."},{n:"James K.",t:"mPhone X",c:"Face ID works flawlessly and the OLED display is stunning."},{n:"Lisa C.",t:"mPhone 6",c:"Great value for the price. Solid performance."}].map((r,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"28px 24px",border:"1px solid #e6e6ea"}}>
              <p style={{fontSize:14,color:"#6e6e73",lineHeight:1.47059,marginBottom:12,fontStyle:"italic"}}>"{r.c}"</p>
              <p style={{fontSize:13,color:"#1d1d1f",fontWeight:600}}>{r.n}</p>
              <p style={{fontSize:12,color:"#0071e3"}}>{r.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section-in" style={{padding:"48px 20px",background:"#fff"}}>
        <h2 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,textAlign:"center",marginBottom:32}}>Frequently Asked Questions</h2>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          {[{q:"What is mPhone 11 Pro?",a:"mPhone 11 Pro features a triple-camera system, ProMotion XDR display, and the A13 Bionic chip."},{q:"How does trade-in work?",a:"You can trade in your current phone for credit toward a new mPhone. Get $200-$650 depending on condition."},{q:"Is financing available?",a:"Yes, 0% APR financing available. Payments as low as $41.62 per month."},{q:"What is the return policy?",a:"14-day return policy for a full refund. Items must be in original condition."}].map((f,i) => (
            <details key={i} className="card-hover" style={{borderTop:"1px solid #d2d2d7",padding:"16px 0",cursor:"pointer"}}>
              <summary style={{fontSize:15,fontWeight:600,color:"#1d1d1f",outline:"none"}}>{f.q}</summary>
              <p style={{fontSize:14,color:"#6e6e73",lineHeight:1.47059,marginTop:8,paddingRight:20}}>{f.a}</p>
            </details>
          ))}
        </div>
        <div style={{borderBottom:"1px solid #d2d2d7"}} />
      </section>
    </>
  );
}'''

write(HOME, home)
print(f'Home: written ({len(home)} chars, {home.count("<section")} sections)')

# ===== STORE - add accessories section =====
store = open(STORE, 'r', encoding='utf-8').read()
# Add accessories section before closing
last_sec = store.rfind('</section>')
if last_sec > 0:
    acc = '''
      <section className="section-in" style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:24,fontWeight:600,textAlign:"center",marginBottom:24,color:"#1d1d1f",lineHeight:1.16667}}>Accessories</h2>
        <div className="stagger-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,maxWidth:700,margin:"0 auto"}}>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" style={{margin:"0 auto 8px",display:"block"}}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>mifan AirPods</h3>
            <p style={{fontSize:13,color:"#0071e3"}}>$179</p>
          </div>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" style={{margin:"0 auto 8px",display:"block"}}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Leather Case</h3>
            <p style={{fontSize:13,color:"#0071e3"}}>$49</p>
          </div>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" style={{margin:"0 auto 8px",display:"block"}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>20W Charger</h3>
            <p style={{fontSize:13,color:"#0071e3"}}>$29</p>
          </div>
        </div>
      </section>

'''
    store = store[:last_sec] + acc + store[last_sec:]
write(STORE, store)
print(f'Store: {len(store)} chars')

print('\nV35 fixes applied')