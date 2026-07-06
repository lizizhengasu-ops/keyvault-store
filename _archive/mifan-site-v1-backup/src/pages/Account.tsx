export default function AccountPage() {
  return (
    <section style={{padding:"80px 20px",maxWidth:640,margin:"0 auto"}}>
      <h1 className="hero-title" style={{fontSize:40,fontWeight:600,marginBottom:8}}>Your Account</h1>
      <p style={{color:"#6e6e73",marginBottom:32}}>Manage your devices, purchases, and settings.</p>
      <div style={{display:"grid",gap:12}}>
        {[{t:"My Devices",d:"Manage your registered mPhones and accessories."},{t:"Purchase History",d:"View all past orders and receipts."},{t:"Payment Methods",d:"Update billing and payment information."},{t:"iCloud Settings",d:"Manage your storage, backup, and sync preferences."}].map((s,i) => (
          <div key={i} style={{background:"#f5f5f7",borderRadius:14,padding:"20px 24px",cursor:"pointer",border:"1px solid #e6e6ea"}}>
            <h3 style={{fontSize:16,fontWeight:600,marginBottom:4}}>{s.t}</h3>
            <p style={{fontSize:12,color:"#6e6e73"}}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}