import os
p = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages\B2BPage.tsx'

# Rewrite B2BPage entirely with correct double-braces
b2b = '''export default function B2BPage() {
  const plans = [
    {t:'Business Basic',d:'Web and mobile Office apps',c:'#0078D4'},
    {t:'Business Standard',d:'Full Office + cloud services',c:'#107C10'},
    {t:'Business Premium',d:'Full security + device mgmt',c:'#D83B01'},
    {t:'Apps for Business',d:'Office apps only',c:'#FFB900'},
    {t:'Enterprise E3',d:'Full enterprise features',c:'#0078D4'},
    {t:'Enterprise E5',d:'Advanced security + analytics',c:'#107C10'},
  ]
  return (
    <div style={{padding:'48px 48px',maxWidth:1200,margin:'0 auto',background:'#fffdfb'}}>
      <h1 style={{fontSize:62,fontWeight:500,lineHeight:'72px',color:'#0e1726',letterSpacing:'-1.55px',marginBottom:8}}>Microsoft 365 Business</h1>
      <p style={{fontSize:16,color:'#0e1726',marginBottom:48}}>Solutions for small and medium-sized businesses</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {plans.map((p,i)=>(
          <div key={i} style={{padding:32,background:'#f2f2f2',borderRadius:2}}>
            <div style={{width:48,height:48,background:p.c,borderRadius:2,marginBottom:12}}></div>
            <h3 style={{fontSize:20,fontWeight:600,color:'#0e1726',marginBottom:8}}>{p.t}</h3>
            <p style={{fontSize:14,color:'#0e1726',marginBottom:12}}>{p.d}</p>
            <a href='#' style={{color:'#0067b8',fontSize:13,fontWeight:600}}>See plans &gt;</a>
          </div>
        ))}
      </div>
      <section style={{padding:48,background:'#fffdfb'}}>
        <h2 style={{fontSize:48,fontWeight:500,color:'#0e1726',marginBottom:24}}>Business solutions</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
          <div><h3 style={{fontSize:16,fontWeight:600,color:'#0e1726'}}>Azure Cloud</h3><p style={{fontSize:13,color:'#616161'}}>Cloud computing platform</p><a href=\'#\' style={{fontSize:13,color:\'#0067b8\',fontWeight:600}}>Learn more</a></div>
          <div><h3 style={{fontSize:16,fontWeight:600,color:'#0e1726'}}>Microsoft 365</h3><p style={{fontSize:13,color:'#616161'}}>Productivity cloud</p><a href=\'#\' style={{fontSize:13,color:\'#0067b8\',fontWeight:600}}>Learn more</a></div>
          <div><h3 style={{fontSize:16,fontWeight:600,color:'#0e1726'}}>Dynamics 365</h3><p style={{fontSize:13,color:'#616161'}}>Business apps</p><a href=\'#\' style={{fontSize:13,color:\'#0067b8\',fontWeight:600}}>Learn more</a></div>
          <div><h3 style={{fontSize:16,fontWeight:600,color:'#0e1726'}}>Power Platform</h3><p style={{fontSize:13,color:'#616161'}}>Low-code platform</p><a href=\'#\' style={{fontSize:13,color:\'#0067b8\',fontWeight:600}}>Learn more</a></div>
          <div><h3 style={{fontSize:16,fontWeight:600,color:'#0e1726'}}>Microsoft Copilot</h3><p style={{fontSize:13,color:'#616161'}}>AI assistant</p><a href=\'#\' style={{fontSize:13,color:\'#0067b8\',fontWeight:600}}>Learn more</a></div>
          <div><h3 style={{fontSize:16,fontWeight:600,color:'#0e1726'}}>Microsoft Teams</h3><p style={{fontSize:13,color:'#616161'}}>Hybrid collaboration</p><a href=\'#\' style={{fontSize:13,color:\'#0067b8\',fontWeight:600}}>Learn more</a></div>
        </div>
      </section>
    </div>
  )
}
'''
with open(p, 'w', encoding='utf-8') as f:
    f.write(b2b)
print('B2BPage rewritten')