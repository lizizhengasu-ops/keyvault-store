import {useParams, Link} from 'react-router-dom';
import {useState} from 'react';
import {useCart} from '../CartContext';
import PhoneSVG from '../components/PhoneSVG';

const products = [{"id":1,"n":"mPhone","p":199,"slug":"mphone","c":"#8e8e93","img":"/products/mphone.jpg"},{"id":2,"n":"mPhone 3G","p":299,"slug":"mphone-3g","c":"#636366","img":"/products/mphone-3g.jpg"},{"id":3,"n":"mPhone 3GS","p":349,"slug":"mphone-3gs","c":"#48484a","img":"/products/mphone-3gs.jpg"},{"id":4,"n":"mPhone 4","p":399,"slug":"mphone-4","c":"#1c1c1e","img":"/products/mphone-4.jpg"},{"id":5,"n":"mPhone 4S","p":449,"slug":"mphone-4s","c":"#2c2c2e","img":"/products/mphone-4s.jpg"},{"id":6,"n":"mPhone 5","p":499,"slug":"mphone-5","c":"#007aff","img":"/products/mphone-5.jpg"},{"id":7,"n":"mPhone 5S","p":599,"slug":"mphone-5s","c":"#ffd60a","img":"/products/mphone-5s.jpg"},{"id":8,"n":"mPhone 6","p":699,"slug":"mphone-6","c":"#ff9500","img":"/products/mphone-6.jpg"},{"id":9,"n":"mPhone X","p":899,"slug":"mphone-x","c":"#000","img":"/products/mphone-x.jpg"},{"id":10,"n":"mPhone 11 Pro","p":999,"slug":"mphone-11-pro","c":"#1d1d1f","img":"/products/mphone-11-pro.jpg"}];

const colorOptions = [
  {hex:"#1d1d1f",name:"Space Black"},{hex:"#f5f5f7",name:"Silver"},
  {hex:"#5856d6",name:"Deep Purple"},{hex:"#34c759",name:"Green"},
  {hex:"#ff9500",name:"Gold"},{hex:"#ff2d55",name:"Product Red"}
];

const features = [
  ["Display","6.1in ProMotion XDR"],["Resolution","2532x1170 pixels"],["Refresh Rate","120Hz ProMotion"],
  ["Chip","A13 Bionic"],["CPU","6-core (2P+4E)"],["GPU","4-core Apple GPU"],
  ["Camera","Triple 12MP"],["Wide","12MP f/1.6"],["Telephoto","12MP f/2.0"],
  ["Ultra Wide","12MP f/2.4"],["LiDAR","Scanner"],["Face ID","Enabled"],
  ["5G","sub-6GHz + mmWave"],["WiFi","WiFi 6"],["Bluetooth","5.0"],
  ["Battery","20hr video"],["Storage","128-512GB"],["RAM","6GB"],
  ["Water Resistance","IP68"],["Dimensions","146.7x71.5x7.4mm"]
];

export default function ProductPage() {
  const {slug} = useParams();
  const cart = useCart();
  const p = products.find(x => x.slug === slug) || products[9];
  const [selColor, setSelColor] = useState(p.c);
  
  return (
    <>
      <section className="section-in" style={{background:"#f5f5f7",padding:"48px 0 56px",textAlign:"center"}}>
        <div style={{maxWidth:640,margin:"0 auto",padding:"0 20px"}}>
          <PhoneSVG color={selColor} image={p.img} />
          <div style={{marginTop:20}}>
            <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>New</p>
            <h1 className="hero-title" style={{fontSize:40,fontWeight:600,lineHeight:1.1,color:"#1d1d1f",marginBottom:4}}>{p.n}</h1>
            <p className="hero-subtitle" style={{fontSize:21,fontWeight:300,color:"#1d1d1f",marginBottom:16}}>From ${p.p}</p>
            <div className="hero-cta" style={{display:"flex",gap:18,justifyContent:"center"}}>
              <div onClick={() => cart.add({slug:p.slug,name:p.n,price:p.p})} className="btn-primary">Add to Bag</div>
              <Link to="/store" className="btn-link">Compare models {">"}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Color selection - WORKING */}
      <section className="section-in" style={{padding:"48px 20px",background:"#fff",textAlign:"center"}}>
        <h2 style={{fontSize:28,fontWeight:600,marginBottom:20}}>Finish. Pick your favorite.</h2>
        <div style={{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap"}}>
          {colorOptions.map((c,i) => {
            const isSel = selColor === c.hex;
            return (
              <div key={i} onClick={() => setSelColor(c.hex)} style={{textAlign:"center",cursor:"pointer"}}>
                <div style={{
                  width:48,height:48,borderRadius:"50%",background:c.hex,margin:"0 auto 6px",
                  border: isSel ? "3px solid #0071e3" : "2px solid #d2d2d7",
                  transition:"all 0.2s",boxShadow: isSel ? "0 0 0 1px #0071e3" : "none"
                }} />
                <p style={{fontSize:11,color: isSel ? "#1d1d1f" : "#6e6e73",fontWeight: isSel ? 600 : 400}}>{c.name}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Specs */}
      <section className="section-in" style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:28,fontWeight:600,textAlign:"center",marginBottom:24}}>Tech Specs</h2>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{marginBottom:24}}>
            <p style={{fontSize:11,fontWeight:600,color:"#0071e3",textTransform:"uppercase",letterSpacing:".05em",marginBottom:8}}>Display</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Type</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>6.1in Super Retina XDR</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Resolution</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>2532x1170 pixels</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Refresh Rate</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>120Hz ProMotion</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Brightness</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>1200 nits peak</p>
              </div>
            </div>
          </div>
          <div style={{marginBottom:24}}>
            <p style={{fontSize:11,fontWeight:600,color:"#0071e3",textTransform:"uppercase",letterSpacing:".05em",marginBottom:8}}>Chip</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>SoC</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>A13 Bionic</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>CPU</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>6-core (2P + 4E)</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>GPU</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>4-core Apple GPU</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Neural Engine</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>16-core, 5 TOPS</p>
              </div>
            </div>
          </div>
          <div style={{marginBottom:24}}>
            <p style={{fontSize:11,fontWeight:600,color:"#0071e3",textTransform:"uppercase",letterSpacing:".05em",marginBottom:8}}>Camera</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Wide</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>12MP f/1.6</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Telephoto</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>12MP f/2.0</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Ultra Wide</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>12MP f/2.4</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>LiDAR</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>Scanner</p>
              </div>
            </div>
          </div>
        </div>
</section>

      {/* What's in the Box */}
      <section className="section-in" style={{padding:"48px 20px",background:"#fff",textAlign:"center"}}>
        <h2 style={{fontSize:28,fontWeight:600,marginBottom:20}}>What's in the Box</h2>
        <p style={{fontSize:14,color:"#6e6e73",lineHeight:1.8}}>mPhone 路 USB-C Cable 路 Power Adapter 路 Documentation</p>
      </section>

      {/* Financing */}
      <section className="section-in" style={{padding:"32px 20px",background:"#f5f5f7",textAlign:"center"}}>
        <p style={{fontSize:14,color:"#6e6e73",marginBottom:4}}>Get $200-$650 for your current phone with trade-in.</p>
        <p style={{fontSize:14,color:"#6e6e73"}}>From $41.62/mo. at 0% APR. Free delivery.</p>
      </section>

      {/* ACCESSORIES */}
      <section className="section-in" style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:24,fontWeight:600,lineHeight:1.16667,textAlign:"center",marginBottom:24,color:"#1d1d1f"}}>Accessories for {p.n}</h2>
        <div className="stagger-grid" style={{maxWidth:700,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["mifan Leather Case - $49","20W USB-C Charger - $29","mifan EarPods - $19"].map((a,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
              <p style={{fontSize:28,marginBottom:4,color:"#0071e3",fontWeight:600}}>**</p>
              <p style={{fontSize:14,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>{a.split(" - ")[0]}</p>
              <p style={{fontSize:13,color:"#0071e3"}}>{a.split(" - ")[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-in" style={{padding:"48px 20px",background:"#fff"}}>
        <h2 style={{fontSize:24,fontWeight:600,lineHeight:1.16667,textAlign:"center",marginBottom:24,color:"#1d1d1f"}}>Customer Reviews</h2>
        <div className="stagger-grid" style={{maxWidth:700,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          {[{n:"Alex R.",c:"Best phone upgrade ever, the camera is amazing and battery lasts all day."},{n:"Maria L.",c:"Fast shipping, incredible device. Worth every penny and more."}].map((r,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
              <p style={{fontSize:14,color:"#6e6e73",fontStyle:"italic",marginBottom:8,lineHeight:1.47059}}>"{r.c}"</p>
              <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f"}}>{r.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE */}
      
      <section style={{padding:"48px 20px",background:"#fff"}}>
        <h2 style={{fontSize:24,fontWeight:600,textAlign:"center",marginBottom:24,color:"#1d1d1f",lineHeight:1.16667}}>Why mPhone</h2>
        <div className="stagger-grid" style={{maxWidth:700,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          <div className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <p style={{fontSize:28,marginBottom:8}}>馃敩</p>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>A13 Bionic</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059}}>Industry-leading performance with 6-core CPU and 4-core GPU.</p>
          </div>
          <div className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <p style={{fontSize:28,marginBottom:8}}>馃摲</p>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Triple Camera</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059}}>Ultra Wide, Wide, Telephoto. Night mode on all cameras.</p>
          </div>
        </div>
      </section>
      <section style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:24,fontWeight:600,textAlign:"center",marginBottom:24,color:"#1d1d1f",lineHeight:1.16667}}>Accessories</h2>
        <div className="stagger-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,maxWidth:700,margin:"0 auto"}}>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" style={{margin:"0 auto 8px",display:"block"}}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>mifan EarPods</h3>
            <p style={{fontSize:13,color:"#0071e3"}}>$19</p>
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

<section style={{padding:"32px 20px",background:"#f5f5f7",textAlign:"center"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:8,lineHeight:1.16667}}>Compare with other models</h2>
        <p style={{fontSize:14,color:"#6e6e73",marginBottom:16}}>See how {p.n} stacks up against the competition.</p>
        <a href="/store" className="btn-link" style={{fontSize:17}}>Compare all models &gt;</a>
      </section>
    
      <section style={{padding:"32px 20px",background:"#f5f5f7",textAlign:"center",borderTop:"1px solid #e6e6ea"}}>
        <p style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Buy now - 0% APR financing available.</p>
        <p style={{fontSize:14,color:"#6e6e73",marginBottom:12}}>Free delivery. No-contact setup.</p>
        <a href="/store" className="btn-link" style={{fontSize:15}}>Shop all models &gt;</a>
      </section>
</>
  );
}
