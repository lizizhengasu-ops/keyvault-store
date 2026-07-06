import os
root = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages'

# Store page: Microsoft has h2=34px/100, no h1, nav=13px/400
store = '''export default function StorePage() {
  const items = ['Surface','Xbox','Windows','Accessories','Software','Deals','Education','Business','Developer','Gaming']
  return (
    <div style={{padding:'48px 48px',maxWidth:1200,margin:'0 auto'}}>
      <h2 style={{fontSize:34,fontWeight:100,lineHeight:'40px',color:'#000',marginBottom:32}}>Store</h2>
      <p style={{fontSize:15,color:'#000',marginBottom:24}}>Browse our full product lineup</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
        {items.map((n,i)=>(
          <div key={i} style={{padding:24,background:'#f2f2f2',borderRadius:2}}>
            <div style={{width:40,height:40,background:['#0078D4','#107C10','#0078D4','#D83B01','#0078D4','#FFB900','#0078D4','#107C10','#4B53BC','#0078D4'][i],borderRadius:2,marginBottom:12}}></div>
            <h3 style={{fontSize:20,fontWeight:600,color:'#0e1726',marginBottom:4}}>{n}</h3>
            <a href='/store' style={{color:'#0078D4',fontSize:13,fontWeight:600}}>Shop now ></a>
          </div>
        ))}
      </div>
      <div style={{display:'flex',gap:24,marginTop:48,justifyContent:'center',flexWrap:'wrap'}}>
        {['Microsoft 365','Teams','Copilot','Windows','Surface','Xbox','Deals','Small Business','Support'].map((n,i)=>(
          <a key={i} href='/' style={{color:'#262626',fontSize:13}}>{n}</a>
        ))}
      </div>
    </div>
  )
}
'''
with open(os.path.join(root, 'StorePage.tsx'), 'w', encoding='utf-8') as f:
    f.write(store)

# Surface page: h1=28px/350, h2=13px/350
surface = '''export default function SurfacePage() {
  return (
    <div style={{background:'linear-gradient(180deg,#000 0%,#1a1a1a 100%)',padding:'80px 48px',color:'#fff'}}>
      <h1 style={{fontSize:28,fontWeight:350,lineHeight:'39.2px',color:'#fff',marginBottom:16}}>Surface</h1>
      <p style={{fontSize:16,color:'#fff',maxWidth:500,lineHeight:1.6}}>The most versatile laptop with tablet portability, touchscreen, and Surface Pen support.</p>
      <div style={{display:'flex',gap:24,marginTop:32}}>
        <a href='/store' style={{background:'#0078D4',color:'#fff',padding:'8px 20px',fontSize:14,borderRadius:2}}>Shop Surface</a>
        <a href='/store' style={{color:'#0078D4',fontSize:14,border:'1px solid #0078D4',padding:'8px 20px',borderRadius:2}}>Learn more</a>
      </div>
    </div>
  )
}
'''
with open(os.path.join(root, 'SurfacePage.tsx'), 'w', encoding='utf-8') as f:
    f.write(surface)

# Windows page: h1=56px/600, h2=13px/400, white text, black footer
windows = '''export default function WindowsPage() {
  return (
    <div style={{background:'#000',padding:'80px 48px',color:'#fff'}}>
      <h1 style={{fontSize:56,fontWeight:600,lineHeight:'78.4px',color:'#fff',marginBottom:16}}>Windows</h1>
      <p style={{fontSize:20,color:'#fff',maxWidth:500}}>Designed for hybrid work, gaming, and creativity. The most secure Windows ever.</p>
      <div style={{display:'flex',gap:24,marginTop:32}}>
        <a href='/store' style={{background:'#0078D4',color:'#fff',padding:'8px 20px',fontSize:14,borderRadius:2}}>Learn more</a>
        <a href='/store' style={{color:'#0078D4',fontSize:14,border:'1px solid #0078D4',padding:'8px 20px',borderRadius:2}}>Buy now</a>
      </div>
    </div>
  )
}
'''
with open(os.path.join(root, 'WindowsPage.tsx'), 'w', encoding='utf-8') as f:
    f.write(windows)

# Support page: simple clean layout
support = '''export default function SupportPage() {
  const topics = ['Surface','Windows','Microsoft 365','Xbox','Teams','Billing','Account','Outlook']
  return (
    <div style={{padding:'48px 48px',maxWidth:1200,margin:'0 auto'}}>
      <h1 style={{fontSize:46,fontWeight:400,lineHeight:'56px',color:'#0a0a0a',marginBottom:8}}>Support</h1>
      <p style={{fontSize:22,fontWeight:400,color:'#363636',marginBottom:48}}>Get help with Microsoft products and services.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
        {topics.map((n,i)=>(
          <div key={i} style={{padding:24,background:'#f2f2f2',borderRadius:2}}>
            <h3 style={{fontSize:14,fontWeight:600,color:'#242424',marginBottom:4}}>{n}</h3>
            <a href='#' style={{color:'#363636',fontSize:14}}>Get help ></a>
          </div>
        ))}
      </div>
    </div>
  )
}
'''
with open(os.path.join(root, 'SupportPage.tsx'), 'w', encoding='utf-8') as f:
    f.write(support)

# B2B page: h1=62px/500, h2=48px/500, body=rgb(255,253,251)
b2b = '''export default function B2BPage() {
  const plans = [
    {t:'Business Basic',d:'Web and mobile versions of Office apps',c:'#0078D4'},
    {t:'Business Standard',d:'Full Office apps + cloud services',c:'#107C10'},
    {t:'Business Premium',d:'Full security + device management',c:'#D83B01'},
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
            <a href='#' style={{color:'#0067b8',fontSize:13,fontWeight:600}}>See plans ></a>
          </div>
        ))}
      </div>
    </div>
  )
}
'''
with open(os.path.join(root, 'B2BPage.tsx'), 'w', encoding='utf-8') as f:
    f.write(b2b)

print('All pages rebuilt with MS real values')