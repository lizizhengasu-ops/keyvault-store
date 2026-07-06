import os

proj = r'C:\Users\31961\Documents\microsoft web\ms-replica'
src = os.path.join(proj, 'src')
pages = os.path.join(src, 'pages')
os.makedirs(pages, exist_ok=True)

def w(name, content):
    p = os.path.join(proj if name.startswith('.') else src if os.path.dirname(name) == '' else proj, name)
    # Handle nested paths
    if '/' in name:
        parts = name.split('/')
        if parts[0] == 'src':
            p = os.path.join(src, *parts[1:])
        else:
            p = os.path.join(proj, *parts)
    d = os.path.dirname(p)
    os.makedirs(d, exist_ok=True)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  {os.path.basename(p)} ({len(content)} chars)')

# ===== App.tsx =====
w('App.tsx', r"""import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
export default function App() {
  return (
    <BrowserRouter>
      <div style={{fontFamily:'"Segoe UI",system-ui,sans-serif',color:'#000',background:'#fff',minHeight:'100vh'}}>
        <nav style={{height:48,background:'#fff',borderBottom:'1px solid #e6e6e6',display:'flex',alignItems:'center',padding:'0 24px',position:'fixed',top:0,left:0,right:0,zIndex:100}}>
          <svg width="108" height="23" viewBox="0 0 108 23" fill="#000"><rect x="0" y="0" width="23" height="23" fill="#F25022"/><rect x="28" y="0" width="23" height="23" fill="#7FBA00"/><rect x="56" y="0" width="23" height="23" fill="#00A4EF"/><rect x="84" y="0" width="23" height="23" fill="#FFB900"/></svg>
          <div style={{display:'flex',gap:16,marginLeft:24,fontSize:13}}>
            <Link to="/" style={{color:'#262626',textDecoration:'none'}}>Microsoft 365</Link>
            <Link to="/store" style={{color:'#262626',textDecoration:'none'}}>Store</Link>
            <Link to="/product/surface" style={{color:'#262626',textDecoration:'none'}}>Surface</Link>
            <Link to="/product/windows" style={{color:'#262626',textDecoration:'none'}}>Windows</Link>
            <Link to="/support" style={{color:'#262626',textDecoration:'none'}}>Support</Link>
          </div>
        </nav>
        <main style={{paddingTop:48}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <footer style={{background:'#f2f2f2',padding:'24px 20px',fontSize:12,color:'#616161'}}>
          <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24}}>
            <div><h5 style={{fontSize:15,fontWeight:600,color:'#616161',marginBottom:8}}>What's new</h5><p style={{marginBottom:4}}>Surface Pro</p><p style={{marginBottom:4}}>Windows 11</p></div>
            <div><h5 style={{fontSize:15,fontWeight:600,color:'#616161',marginBottom:8}}>Store</h5><p style={{marginBottom:4}}>Account profile</p><p style={{marginBottom:4}}>Returns</p></div>
            <div><h5 style={{fontSize:15,fontWeight:600,color:'#616161',marginBottom:8}}>Education</h5><p style={{marginBottom:4}}>Microsoft Learn</p><p style={{marginBottom:4}}>Dev Center</p></div>
            <div><h5 style={{fontSize:15,fontWeight:600,color:'#616161',marginBottom:8}}>Company</h5><p style={{marginBottom:4}}>Careers</p><p style={{marginBottom:4}}>About</p></div>
          </div>
          <p style={{textAlign:'center',marginTop:16,borderTop:'1px solid #e6e6e6',paddingTop:16}}>Copyright Microsoft Replica. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}""")

# ===== CartContext.tsx =====
w('CartContext.tsx', r"""import { createContext, useContext, useState } from 'react';
type Item = { slug: string; name: string; price: number; qty: number };
type Ctx = { items: Item[]; add: (i:Omit<Item,'qty'>)=>void; remove: (s:string)=>void; total: number; count: number };
const C = createContext<Ctx>(null!);
export function CartProvider({children}:{children:React.ReactNode}) {
  const [items,set] = useState<Item[]>([]);
  const add = (item:Omit<Item,'qty'>) => set(p => { const e=p.find(x=>x.slug===item.slug); if(e) return p.map(x=>x.slug===item.slug?{...x,qty:x.qty+1}:x); return [...p,{...item,qty:1}]; });
  const remove = (slug:string) => set(p => p.filter(x=>x.slug!==slug));
  const total = items.reduce((s,x)=>s+x.price*x.qty,0);
  const count = items.reduce((s,x)=>s+x.qty,0);
  return <C.Provider value={{items,add,remove,total,count}}>{children}</C.Provider>;
}
export const useCart = () => useContext(C);""")

# ===== Home.tsx =====
w('pages/Home.tsx', r"""export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{background:'linear-gradient(135deg,#0078D4,#106EBE)',color:'#fff',padding:'80px 20px',textAlign:'center'}}>
        <h1 style={{fontSize:46,fontWeight:600,lineHeight:1.2,marginBottom:16}}>Microsoft 365</h1>
        <p style={{fontSize:20,marginBottom:24,maxWidth:600,margin:'0 auto 24px',opacity:0.9}}>Premium Microsoft apps, extra cloud storage, advanced security, and more.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <div style={{background:'#fff',color:'#0078D4',padding:'8px 24px',borderRadius:2,fontWeight:600,cursor:'pointer',fontSize:15}}>Buy now</div>
          <div style={{background:'transparent',color:'#fff',padding:'8px 24px',borderRadius:2,fontWeight:400,cursor:'pointer',fontSize:15,border:'1px solid #fff'}}>Learn more</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{padding:'48px 20px',background:'#f2f2f2'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
          {[
            {t:'Surface Pro',d:'Exceptional versatility with laptop power, tablet portability.',c:'#0078D4'},
            {t:'Windows 11',d:'The most secure Windows ever with new productivity features.',c:'#0078D4'},
            {t:'Xbox Series X',d:'Fastest, most powerful Xbox ever with 12 teraflops.',c:'#0078D4'},
          ].map((p,i) => (
            <div key={i} style={{background:'#fff',padding:'24px',borderRadius:2,boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>
              <div style={{width:40,height:40,borderRadius:2,background:p.c,marginBottom:12}}></div>
              <h3 style={{fontSize:20,fontWeight:600,marginBottom:8}}>{p.t}</h3>
              <p style={{fontSize:14,color:'#616161',lineHeight:1.6,marginBottom:12}}>{p.d}</p>
              <a style={{color:'#0078D4',fontWeight:600,fontSize:14,cursor:'pointer'}}>Learn more &gt;</a>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{padding:'48px 20px',background:'#fff'}}>
        <h2 style={{fontSize:34,fontWeight:600,textAlign:'center',marginBottom:32}}>Designed for life today</h2>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}}>
          <div style={{background:'#f2f2f2',padding:'32px',borderRadius:2}}>
            <h3 style={{fontSize:24,fontWeight:600,marginBottom:8}}>Microsoft Teams</h3>
            <p style={{fontSize:14,color:'#616161',marginBottom:12}}>Chat, meet, and collaborate with anyone from anywhere.</p>
            <a style={{color:'#0078D4',fontWeight:600,fontSize:14}}>Learn more &gt;</a>
          </div>
          <div style={{background:'#f2f2f2',padding:'32px',borderRadius:2}}>
            <h3 style={{fontSize:24,fontWeight:600,marginBottom:8}}>Microsoft Edge</h3>
            <p style={{fontSize:14,color:'#616161',marginBottom:12}}>World-class performance with built-in privacy and productivity.</p>
            <a style={{color:'#0078D4',fontWeight:600,fontSize:14}}>Learn more &gt;</a>
          </div>
        </div>
      </section>
    </>
  );
}""")

# ===== index.css =====
w('index.css', r""":root {
  --primary: #0078D4;
  --secondary: #106EBE;
  --text: #000000;
  --text-secondary: #616161;
  --bg: #FFFFFF;
  --bg-section: #F2F2F2;
  --bg-dark: #2D2D2D;
  --font: "Segoe UI", system-ui, sans-serif;
  --radius: 2px;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: var(--font); color: var(--text); background: var(--bg); -webkit-font-smoothing: antialiased; }
""")

# Verify build
import subprocess
build = subprocess.run(['npx', 'vite', 'build'], capture_output=True, text=True, timeout=30, cwd=proj)
if build.returncode == 0:
    print('\nBuild: OK')
else:
    print(f'\nBuild FAILED: {build.stderr[:300]}')
