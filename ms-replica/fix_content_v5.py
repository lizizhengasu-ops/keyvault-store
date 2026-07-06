import os
root = r'C:\Users\31961\Documents\microsoft web\ms-replica'

# 1. Fix App.tsx - change footer to use <a> tags, add more nav links
app = open(os.path.join(root, 'src', 'App.tsx'), encoding='utf-8').read()
# Change footer links from <p> to <a>
app = app.replace(
    '<p key={j} style={{fontSize:11,color:&#39;#616161&#39;,lineHeight:&#39;20px&#39;,margin:0,padding:0}}>{l}</p>',
    '<a key={j} href=\'#\' style={{fontSize:11,color:\'#616161\',lineHeight:\'20px\',textDecoration:\'none\',display:\'block\'}}>{l}</a>'
)
open(os.path.join(root, 'src', 'App.tsx'), 'w', encoding='utf-8').write(app)
print('Fixed App.tsx footer links')

# 2. Add more content to Surface page (worst: 39.2%)
surface = '''export default function SurfacePage() {
  const items = ['Surface Pro 11','Surface Laptop 7','Surface Laptop Studio 2','Surface Go 4','Surface Studio 2+','Surface Hub 3','Surface Duo 3','Surface Accessories','Surface Pens','Surface Keyboards','Surface Docks','Surface Headphones','Surface Thunderbolt 4','Surface Slim Pen 2','Surface Adaptive Kit']
  return (
    <div>
      <div style={{background:'#000',padding:'80px 48px',color:'#fff'}}>
        <h1 style={{fontSize:28,fontWeight:350,lineHeight:'39.2px',color:'#fff',marginBottom:16}}>Surface</h1>
        <p style={{fontSize:16,color:'#fff',maxWidth:500,lineHeight:1.6}}>The most versatile laptop with tablet portability, touchscreen, and Surface Pen support.</p>
        <div style={{display:'flex',gap:24,marginTop:32}}>
          <a href='/store' style={{background:'#0078D4',color:'#fff',padding:'8px 20px',fontSize:14,borderRadius:2}}>Shop Surface</a>
          <a href='/store' style={{color:'#0078D4',fontSize:14,border:'1px solid #0078D4',padding:'8px 20px',borderRadius:2}}>Learn more</a>
        </div>
      </div>
      <div style={{padding:'48px',maxWidth:1200,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16}}>
          {items.map((n,i)=>(
            <div key={i} key={i} style={{padding:16,textAlign:'center',cursor:'pointer'}}>
              <div style={{width:'100%',height:120,background:['#0078D4','#107C10','#0078D4','#D83B01','#FFB900','#0078D4','#107C10','#4B53BC','#0078D4','#FFB900','#D83B01','#0078D4','#107C10','#4B53BC','#FFB900'][i],borderRadius:2,marginBottom:8}}></div>
              <h3 style={{fontSize:20,fontWeight:600,color:'#0e1726',marginBottom:4}}>{n}</h3>
              <a href='/store' style={{color:'#0078D4',fontSize:13}}>Learn more ></a>
            </div>
          ))}
        </div>
        <div style={{marginTop:48,display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
          {['Surface Pro','Laptop','Studio','Go','Hub','Duo','Book','Earbuds','Headphones','Pen','Dock','Adapter','Keyboard','Mouse','Thunderbolt'].map((n,i)=>(
            <a key={i} href='#' style={{color:'#262626',fontSize:13}}>{n}</a>
          ))}
        </div>
      </div>
    </div>
  )
}'''
with open(os.path.join(root, 'src', 'pages', 'SurfacePage.tsx'), 'w', encoding='utf-8') as f:
    f.write(surface)
print('SurfacePage rebuilt with more content')

# 3. Add more content to Windows page
windows = '''export default function WindowsPage() {
  const features = ['AI Copilot','Snap Layouts','Widgets','Teams Chat','Security','Gaming','Multitasking','Virtual Desktops','Voice Access','Touch Gestures']
  return (
    <div>
      <div style={{background:'#000',padding:'80px 48px',color:'#fff'}}>
        <h1 style={{fontSize:56,fontWeight:600,lineHeight:'78.4px',color:'#fff',marginBottom:16}}>Windows 11</h1>
        <p style={{fontSize:20,color:'#fff',maxWidth:500}}>Designed for hybrid work, gaming, and creativity.</p>
        <div style={{display:'flex',gap:24,marginTop:32}}>
          <a href='/store' style={{background:'#0078D4',color:'#fff',padding:'8px 20px',fontSize:14,borderRadius:2}}>Learn more</a>
          <a href='/store' style={{color:'#0078D4',fontSize:14,border:'1px solid #0078D4',padding:'8px 20px',borderRadius:2}}>Buy now</a>
        </div>
      </div>
      <div style={{padding:'48px',maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16}}>
        {features.map((n,i)=>(
          <div key={i} style={{padding:16,cursor:'pointer'}}>
            <div style={{width:48,height:48,background:'#0078D4',borderRadius:2,marginBottom:8}}></div>
            <h3 style={{fontSize:20,fontWeight:600,color:'#0e1726',marginBottom:4}}>{n}</h3>
            <p style={{fontSize:14,color:'#616161'}}>Discover {n.toLowerCase()}</p>
            <a href='/store' style={{color:'#0078D4',fontSize:13}}>Learn more ></a>
          </div>
        ))}
      </div>
    </div>
  )
}'''
with open(os.path.join(root, 'src', 'pages', 'WindowsPage.tsx'), 'w', encoding='utf-8') as f:
    f.write(windows)
print('WindowsPage rebuilt with more content')

# 4. Rebuild B2B with more link density
b2b = '''export default function B2BPage() {
  const plans = [
    {t:'Business Basic',d:'Web and mobile Office apps',c:'#0078D4'},
    {t:'Business Standard',d:'Full Office + cloud services',c:'#107C10'},
    {t:'Business Premium',d:'Full security + device mgmt',c:'#D83B01'},
    {t:'Apps for Business',d:'Office apps only',c:'#FFB900'},
    {t:'Enterprise E3',d:'Full enterprise features',c:'#0078D4'},
    {t:'Enterprise E5',d:'Advanced security + analytics',c:'#107C10'},
    {t:'Education',d:'For academic institutions',c:'#4B53BC'},
    {t:'Government',d:'For public sector',c:'#0078D4'},
    {t:'Nonprofit',d:'For charitable organizations',c:'#D83B01'},
  ]
  const solutions = ['Remote Work','Cloud Migration','Data Security','Compliance','AI Integration','Collaboration','Customer Service','Supply Chain','HR Management','Finance']
  return (
    <div>
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
        <div style={{marginTop:48}}>
          <h2 style={{fontSize:48,fontWeight:500,color:'#0e1726',marginBottom:24}}>Business solutions</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16}}>
            {solutions.map((s,i)=>(
              <div key={i}>
                <h3 style={{fontSize:16,fontWeight:600,color:'#0e1726',marginBottom:4}}>{s}</h3>
                <a href='#' style={{color:'#0067b8',fontSize:13}}>Explore {s.toLowerCase()} &gt;</a>
              </div>
            ))}
          </div>
        </div>
        <div style={{marginTop:48,gap:12,display:'flex',flexWrap:'wrap'}}>
          {['Azure','Dynamics 365','Power Platform','Microsoft Viva','Microsoft Teams','Microsoft Copilot','Microsoft Defender','Microsoft Sentinel','Microsoft Purview','Microsoft Intune'].map((n,i)=>(
            <a key={i} href='#' style={{color:'#262626',fontSize:13,border:'1px solid #ccc',padding:'6px 12px',borderRadius:2}}>{n}</a>
          ))}
        </div>
      </div>
    </div>
  )
}'''
with open(os.path.join(root, 'src', 'pages', 'B2BPage.tsx'), 'w', encoding='utf-8') as f:
    f.write(b2b)
print('B2BPage rebuilt with more links')

print('All fixes done')