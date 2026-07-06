# Rebuild Account page
with open("src/pages/Account.tsx","w",encoding="utf-8") as f:
    f.write("""export default function AccountPage() {
  const sections = [
    {t:"Profile & Settings",d:"Name, email, password, and security settings. Update your contact info and manage your device list."},
    {t:"My Devices",d:"Manage registered mPhones and accessories. View warranty status, coverage, and support options."},
    {t:"Purchase History",d:"View all orders, invoices, and receipts. Track shipping, request returns, and manage subscriptions."},
    {t:"Payment & Billing",d:"Manage credit cards, PayPal, and billing address. View payment methods and transaction history."},
    {t:"iCloud & Storage",d:"Manage iCloud storage, backups, sync settings, and account recovery options for all your devices."},
    {t:"Privacy & Security",d:"Review app permissions, tracking preferences, data sharing settings, and security recommendations."}
  ];
  return (
    <section style={{padding:"48px 20px 56px",maxWidth:900,margin:"0 auto"}}>
      <h1 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,marginBottom:8,color:"#1d1d1f"}}>Account.</h1>
      <p style={{fontSize:21,fontWeight:300,color:"#1d1d1f",marginBottom:32,lineHeight:1.19048,letterSpacing:".011em"}}>Sign in to manage your devices, purchases, and settings.</p>
      <div className="card-hover" style={{background:"linear-gradient(135deg,#0071e3,#0077ed)",borderRadius:18,padding:"32px 28px",textAlign:"center",marginBottom:24,cursor:"pointer",boxShadow:"0 4px 20px rgba(0,113,227,0.3)"}}>
        <p style={{fontSize:21,fontWeight:600,color:"#fff",marginBottom:4,letterSpacing:".011em"}}>Sign in with your mifan ID</p>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.47059}}>One account for all mifan services.</p>
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
  );
}""")

# Rebuild B2B page  
with open("src/pages/B2b.tsx","w",encoding="utf-8") as f:
    f.write("""export default function B2b() {
  const features = [
    {t:"Volume Pricing",d:"Save on purchases of 50+ units. Custom configurations available for your organization."},
    {t:"Device Management",d:"MDM, DEP, and zero-touch deployment for your entire fleet."},
    {t:"Security & Compliance",d:"Enterprise-grade encryption. SOC 2 certified. GDPR compliant."},
    {t:"Dedicated Support",d:"24/7 priority support with a dedicated account manager."},
    {t:"Flexible Financing",d:"Leasing and payment plans tailored to your business needs."},
    {t:"Custom Integration",d:"API access, custom configurations, and white-glove setup."}
  ];
  return (
    <section style={{padding:"48px 20px 56px",maxWidth:900,margin:"0 auto"}}>
      <h1 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,textAlign:"center",marginBottom:8,color:"#1d1d1f"}}>B2B & Enterprise.</h1>
      <p style={{fontSize:21,fontWeight:300,color:"#1d1d1f",textAlign:"center",lineHeight:1.19048,letterSpacing:".011em",marginBottom:40}}>Empower your business with mifan technology.</p>
      <div className="stagger-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16,marginBottom:32}}>
        {features.map((s,i) => (
          <div key={i} className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"28px 24px",border:"1px solid #e6e6ea"}}>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:6}}>{s.t}</h3>
            <p style={{fontSize:14,color:"#6e6e73",lineHeight:1.47059}}>{s.d}</p>
          </div>
        ))}
      </div>
      <div className="card-hover" style={{background:"#0071e3",borderRadius:18,padding:"36px 28px",textAlign:"center",boxShadow:"0 4px 20px rgba(0,113,227,0.3)"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#fff",marginBottom:8,lineHeight:1.16667}}>Get started with Enterprise</h2>
        <p style={{fontSize:14,color:"#fff",opacity:0.9,marginBottom:16}}>Talk to our B2B team for custom pricing.</p>
        <a className="btn-primary" style={{display:"inline-block",background:"#fff",color:"#0071e3",padding:"12px 22px",borderRadius:980,textDecoration:"none",fontSize:17,fontWeight:400}}>Contact Sales</a>
      </div>
    </section>
  );
}""")
print("Account + B2B rebuilt")