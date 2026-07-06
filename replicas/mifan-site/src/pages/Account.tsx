import {useState} from "react";
function AccountPage() {
  const [showSignIn, setShowSignIn] = useState(false);
  const sections = [
    {t:"Profile & Settings",d:"Name, email, password, and security settings."},
    {t:"My Devices",d:"Manage registered mPhones and accessories."},
    {t:"Purchase History",d:"View all orders, invoices, and receipts."},
    {t:"Payment & Billing",d:"Manage credit cards, PayPal, and billing address."},
    {t:"iCloud & Storage",d:"Manage iCloud storage, backups, and sync."},
    {t:"Privacy & Security",d:"Review app permissions and data sharing."}
  ];
  return (
    <>
      
      <section style={{padding:"0 20px 24px",maxWidth:900,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32,padding:"24px",background:"#f5f5f7",borderRadius:18,border:"1px solid #e6e6ea"}}>
          <div style={{width:60,height:60,borderRadius:"50%",background:"#0071e3",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-7 0-11 2-11 6v2h22v-2c0-4-4-6-11-6z"/></svg>
          </div>
          <div style={{flex:1}}>
            <p style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>Guest User</p>
            <p style={{fontSize:13,color:"#6e6e73"}}>Sign in to manage your devices and purchases.</p>
          </div>
          <div style={{fontSize:13,background:"#0071e3",color:"#fff",padding:"6px 16px",borderRadius:980,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0}}>Sign In</div>
        </div>
      </section>
<section style={{padding:"48px 20px 0",maxWidth:900,margin:"0 auto"}}>
        <h1 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,marginBottom:4,color:"#1d1d1f"}}>Account.</h1>
        <p style={{fontSize:21,fontWeight:300,color:"#1d1d1f",marginBottom:32,lineHeight:1.19048,letterSpacing:".011em"}}>Manage your devices, purchases, and settings.</p>
      </section>

      <section className="section-in" style={{padding:"0 20px 40px",maxWidth:900,margin:"0 auto"}}>
        <div className="card-hover" style={{background:"linear-gradient(135deg,#0071e3,#0077ed)",borderRadius:18,padding:"32px 28px",textAlign:"center",marginBottom:24,cursor:"pointer",boxShadow:"0 4px 20px rgba(0,113,227,0.3)"}}>
          <p style={{fontSize:21,fontWeight:600,color:"#fff",marginBottom:4}}>Sign in with your mifan ID</p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.85)"}}>One account for all mifan services.</p>
        </div>
        <div className="stagger-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          {sections.map((s,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"28px 24px",border:"1px solid #e6e6ea"}}>
              <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:6}}>{s.t}</h3>
              <p style={{fontSize:14,color:"#6e6e73",lineHeight:1.47059}}>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:24}}>
          <a className="btn-link" style={{fontSize:17}}>Manage your mifan ID &gt;</a>
        </div>
      </section>

      
      <section style={{padding:"0 20px 40px",maxWidth:900,margin:"0 auto"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:16,lineHeight:1.16667}}>My Devices</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:32}}>
          <div className="card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"20px",border:"1px solid #e6e6ea",textAlign:"center",cursor:"pointer"}}>
            <p style={{fontSize:28,marginBottom:8}}>馃摫</p>
            <p style={{fontSize:14,fontWeight:600,color:"#1d1d1f"}}>mPhone 11 Pro</p>
            <p style={{fontSize:11,color:"#6e6e73"}}>iOS 18.2 | 256GB | 256GB</p>
          </div>
          <div className="card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"20px",border:"1px solid #e6e6ea",textAlign:"center",cursor:"pointer"}}>
            <p style={{fontSize:28,marginBottom:8}}>馃帶</p>
            <p style={{fontSize:14,fontWeight:600,color:"#1d1d1f"}}>mifan AirPods Pro</p>
            <p style={{fontSize:11,color:"#6e6e73"}}>Firmware 6B34 | Connected</p>
          </div>
          <div className="card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"20px",border:"1px solid #e6e6ea",textAlign:"center",cursor:"pointer"}}>
            <p style={{fontSize:28,marginBottom:8}}>⌚</p>
            <p style={{fontSize:14,fontWeight:600,color:"#1d1d1f"}}>mifan Watch</p>
            <p style={{fontSize:11,color:"#6e6e73"}}>watchOS 11.0 | Active</p>
          </div>
        </div>
      </section>

      <section style={{padding:"0 20px 40px",maxWidth:900,margin:"0 auto"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:16,lineHeight:1.16667}}>Current Orders</h2>
        <div className="stagger-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginBottom:32}}>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:14,padding:"20px",border:"1px solid #d2d2d7",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <p style={{fontSize:14,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>mPhone 11 Pro - Space Black</p>
              <p style={{fontSize:11,color:"#6e6e73"}}>Order #MF-28491</p>
            </div>
            <div style={{fontSize:11,background:"#0071e3",color:"#fff",padding:"4px 10px",borderRadius:980,whiteSpace:"nowrap"}}>Shipped</div>
          </div>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:14,padding:"20px",border:"1px solid #d2d2d7",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <p style={{fontSize:14,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>Leather Case - Deep Purple</p>
              <p style={{fontSize:11,color:"#6e6e73"}}>Order #MF-28490</p>
            </div>
            <div style={{fontSize:11,background:"#34c759",color:"#fff",padding:"4px 10px",borderRadius:980,whiteSpace:"nowrap"}}>Delivered</div>
          </div>
        </div>
      </section>
<section className="section-in" style={{padding:"40px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:24,fontWeight:600,lineHeight:1.16667,textAlign:"center",marginBottom:24,color:"#1d1d1f"}}>Recent Activity</h2>
        <div className="stagger-grid" style={{maxWidth:700,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
          {[
            {t:"Order #MF-28491",d:"mPhone 11 Pro - Shipped",date:"Jun 28"},
            {t:"Order #MF-28490",d:"mifan Leather Case - Delivered",date:"Jun 25"},
            {t:"Subscription",d:"iCloud+ 200GB - Active",date:"Monthly"},
            {t:"Repair Request",d:"Battery service - In Progress",date:"Jun 22"}
          ].map((a,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#fff",borderRadius:14,padding:"16px 20px",border:"1px solid #e6e6ea",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div><p style={{fontSize:14,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>{a.t}</p><p style={{fontSize:12,color:"#6e6e73"}}>{a.d}</p></div>
              <p style={{fontSize:11,color:"#0071e3",fontWeight:600}}>{a.date}</p>
            </div>
          ))}
        </div>
      
      <section style={{padding:"24px 20px 48px",maxWidth:900,margin:"0 auto",textAlign:"center"}}>
        <div style={{fontSize:14,color:"#6e6e73",cursor:"pointer",textDecoration:"underline",display:"inline-block"}} role="button" tabIndex={0}>Sign Out</div>
      </section></section>
    
      {/* SIGN IN MODAL */}
      {showSignIn && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}} onClick={() => setShowSignIn(false)}>
          <div style={{background:"#fff",borderRadius:18,padding:"32px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.2)"}} onClick={e => e.stopPropagation()}>
            <p style={{fontSize:21,fontWeight:600,color:"#1d1d1f",marginBottom:24,textAlign:"center"}}>Sign in with your mifan ID</p>
            <input type="email" placeholder="Email" style={{width:"100%",padding:"12px 16px",borderRadius:12,border:"1px solid #d2d2d7",fontSize:15,color:"#1d1d1f",outline:"none",fontFamily:"inherit",marginBottom:12,boxSizing:"border-box"}} />
            <input type="password" placeholder="Password" style={{width:"100%",padding:"12px 16px",borderRadius:12,border:"1px solid #d2d2d7",fontSize:15,color:"#1d1d1f",outline:"none",fontFamily:"inherit",marginBottom:20,boxSizing:"border-box"}} />
            <div onClick={() => {setShowSignIn(false);alert("Demo: Signed in!")}} style={{background:"#0071e3",color:"#fff",padding:"12px",borderRadius:980,textAlign:"center",fontSize:15,fontWeight:600,cursor:"pointer",marginBottom:12}}>Sign In</div>
            <div onClick={() => setShowSignIn(false)} style={{fontSize:13,color:"#6e6e73",textAlign:"center",cursor:"pointer"}}>Cancel</div>
          </div>
        </div>
      )}
</>
  );
}
export default AccountPage;
