import {useState} from "react";
export default function SupportPage() {
  const [search, setSearch] = useState("");
  const products = [
    {t:"mPhone 11 Pro",d:"Specs, features, troubleshooting, and repairs.",h:"mphone-11-pro"},
    {t:"mPhone X",d:"Display, camera, battery, and performance issues.",h:"mphone-x"},
    {t:"mPhone 6",d:"iOS updates, Touch ID, and hardware support.",h:"mphone-6"},
    {t:"mPhone 5S",d:"Legacy device support, upgrades, and trade-in.",h:"mphone-5s"}
  ];
  const topics = [
    {t:"Billing & Subscriptions",d:"Manage payments, view invoices, update plans."},
    {t:"Returns & Refunds",d:"Start a return, track refund status, check policy."},
    {t:"Shipping & Delivery",d:"Track orders, check estimates, manage addresses."},
    {t:"Warranty & Repairs",d:"Check coverage, schedule repair, request replacement."},
    {t:"Security & Privacy",d:"Report issues, manage settings, review policies."},
    {t:"Account Recovery",d:"Reset password, recover account, update security."}
  ];
  const filteredTopics = search.length > 0
    ? topics.filter(h =>
        h.t.toLowerCase().includes(search.toLowerCase()) ||
        h.d.toLowerCase().includes(search.toLowerCase())
      )
    : topics;

  return (
    <>
      
      <section style={{padding:"0 20px",maxWidth:700,margin:"0 auto"}}>
        <div style={{position:"relative",marginBottom:32,marginTop:32}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" strokeWidth="1.5" style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search support" style={{width:"100%",padding:"18px 18px 18px 52px",borderRadius:16,border:"2px solid #d2d2d7",background:"#fff",fontSize:17,color:"#1d1d1f",outline:"none",fontFamily:"inherit",boxSizing:"border-box",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"}} />
        </div>
      </section>

<section style={{padding:"48px 20px 0",maxWidth:1068,margin:"0 auto"}}>
        
      <section style={{padding:"0 20px",maxWidth:700,margin:"0 auto 24px"}}>
        <p style={{fontSize:13,fontWeight:600,color:"#6e6e73",marginBottom:12,textTransform:"uppercase",letterSpacing:".05em"}}>Popular Topics</p>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          <span style={{fontSize:13,background:"#f5f5f7",padding:"8px 16px",borderRadius:980,color:"#1d1d1f",cursor:"pointer"}}>iOS update</span>
          <span style={{fontSize:13,background:"#f5f5f7",padding:"8px 16px",borderRadius:980,color:"#1d1d1f",cursor:"pointer"}}>Battery replacement</span>
          <span style={{fontSize:13,background:"#f5f5f7",padding:"8px 16px",borderRadius:980,color:"#1d1d1f",cursor:"pointer"}}>Device setup</span>
          <span style={{fontSize:13,background:"#f5f5f7",padding:"8px 16px",borderRadius:980,color:"#1d1d1f",cursor:"pointer"}}>Trade-in</span>
          <span style={{fontSize:13,background:"#f5f5f7",padding:"8px 16px",borderRadius:980,color:"#1d1d1f",cursor:"pointer"}}>Warranty check</span>
        </div>
      </section>

<h1 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,marginBottom:4,color:"#1d1d1f"}}>Support.</h1>
        <p style={{fontSize:21,fontWeight:300,color:"#1d1d1f",marginBottom:40,lineHeight:1.19048,letterSpacing:".011em"}}>Get help with your mifan products and services.</p>
      </section>

      <section className="section-in" style={{padding:"0 20px 32px",maxWidth:1068,margin:"0 auto"}}>
        <div style={{display:"flex",gap:12,marginBottom:32,flexWrap:"wrap"}}>
          {[
            {t:"Call us",d:"1-800-MY-MIFAN",icon:"*"},
            {t:"Chat online",d:"Start a live chat with our team.",icon:"*"},
            {t:"Email us",d:"We respond within 24 hours.",icon:"*"}
          ].map((x,i) => (
            <div key={i} className="card-hover" style={{flex:1,background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",minWidth:180,textAlign:"center"}}>
              <p style={{fontSize:28,fontWeight:600,color:"#0071e3",marginBottom:4}}>{x.icon}</p>
              <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>{x.t}</h3>
              <p style={{fontSize:14,color:"#6e6e73",lineHeight:1.47059}}>{x.d}</p>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:16,lineHeight:1.16667}}>Product Support</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginBottom:32}}>
          {products.map((x,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
              <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>{x.t}</h3>
              <p style={{fontSize:14,color:"#6e6e73",marginBottom:12,lineHeight:1.47059}}>{x.d}</p>
              <a className="btn-link" style={{fontSize:15}} href={"/product/"+x.h}>Get support &gt;</a>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:16,lineHeight:1.16667}}>Help Topics</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:32}}>
          {filteredTopics.map((h,i) => (
            <div key={i} className="card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"20px",border:"1px solid #e6e6ea"}}>
              <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>{h.t}</h3>
              <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059}}>{h.d}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="section-in" style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:24,lineHeight:1.16667,textAlign:"center"}}>Knowledge Base</h2>
        <div style={{maxWidth:800,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          <div className="card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
            <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>Setup</p>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Set up your new mPhone</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059,marginBottom:8}}>Step-by-step guide to activate and configure your device.</p>
            <a className="btn-link" style={{fontSize:13}}>Read more &gt;</a>
          </div>
          <div className="card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
            <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>Troubleshooting</p>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Battery and charging issues</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059,marginBottom:8}}>Diagnose and resolve common battery problems.</p>
            <a className="btn-link" style={{fontSize:13}}>Read more &gt;</a>
          </div>
          <div className="card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
            <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>Software</p>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>iOS update guide</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059,marginBottom:8}}>How to update your mPhone to the latest iOS version.</p>
            <a className="btn-link" style={{fontSize:13}}>Read more &gt;</a>
          </div>
          <div className="card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
            <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>Service</p>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Schedule a repair</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059,marginBottom:8}}>Book a repair appointment at your nearest service center.</p>
            <a className="btn-link" style={{fontSize:13}}>Read more &gt;</a>
          </div>
        </div>
      </section>

<section className="section-in" style={{padding:"48px 20px",background:"#000",textAlign:"center"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#f5f5f7",marginBottom:8,lineHeight:1.16667}}>Still need help?</h2>
        <p style={{fontSize:14,color:"#86868b",marginBottom:16,lineHeight:1.47059}}>Our support team is available 24/7.</p>
        <a className="hero-link-large" style={{color:"#2997ff",fontSize:24,fontWeight:600}}>Contact support &gt;</a>
      </section>
    </>
  );
}
