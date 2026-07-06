import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import StorePage from './pages/StorePage'
import SurfacePage from './pages/SurfacePage'
import WindowsPage from './pages/WindowsPage'
import SupportPage from './pages/SupportPage'
import B2BPage from './pages/B2BPage'

const NAV_ITEMS = [
  {label:'Microsoft 365',to:'/'},{label:'Teams',to:'/'},{label:'Copilot',to:'/'},
  {label:'Windows',to:'/product/windows'},{label:'Surface',to:'/product/surface'},
  {label:'Xbox',to:'/store'},{label:'Deals',to:'/store'},{label:'Small Business',to:'/b2b'},
  {label:'Support',to:'/support'},
]

const FOOTER_SECTIONS = [
  {title:"What's new",links:['Surface Pro','Surface Laptop','Surface Laptop Ultra','Copilot','Windows 11','Microsoft 365']},
  {title:'Store',links:['Account Profile','Download Center','Microsoft Store Support','Returns','Order tracking']},
  {title:'Education',links:['Microsoft Learn','Microsoft in Education','Dev Center','Microsoft Education']},
  {title:'Business',links:['Microsoft Cloud','Azure','Dynamics 365','Microsoft 365','Microsoft Power Platform','Microsoft Advertising']},
  {title:'Developer & IT',links:['Visual Studio','.NET','Windows Server','Azure DevOps','Microsoft 365 Dev Center']},
  {title:'Company',links:['Careers','About Microsoft','Company News','Privacy at Microsoft','Investors']},
]

export default function App() {
  return (
    <BrowserRouter>
      <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:'#000',background:'#fff',minHeight:'100vh'}}>
        <header style={{height:54,background:'transparent',display:'flex',alignItems:'center',padding:'0 48px',position:'fixed',top:0,left:0,right:0,zIndex:100}}>
          <svg width="108" height="23" viewBox="0 0 108 23" fill="none"><rect x="0" y="0" width="23" height="23" fill="#F25022"/><rect x="28" y="0" width="23" height="23" fill="#7FBA00"/><rect x="56" y="0" width="23" height="23" fill="#00A4EF"/><rect x="84" y="0" width="23" height="23" fill="#FFB900"/></svg>
          <div style={{display:'flex',marginLeft:24,gap:0}}>
            {NAV_ITEMS.map((n,i)=>(
              <Link key={i} to={n.to} style={{color:'#262626',textDecoration:'none',fontSize:13,fontWeight:400,lineHeight:'54px',padding:'0 16px'}}>{n.label}</Link>
            ))}
          </div>
        </header>
        <main style={{paddingTop:54}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/product/surface" element={<SurfacePage />} />
            <Route path="/product/windows" element={<WindowsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/b2b" element={<B2BPage />} />
          </Routes>
        </main>
        <footer style={{background:'#f2f2f2',padding:'36px 72px 0',fontSize:11,lineHeight:'20px',color:'#616161'}}>
          <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:24}}>
            {FOOTER_SECTIONS.map((s,i)=>(
              <div key={i}>
                <h5 style={{fontSize:15,fontWeight:600,color:'#616161',marginBottom:4}}>{s.title}</h5>
                {s.links.map((l,j)=>(
                  <p key={j} style={{fontSize:11,color:'#616161',lineHeight:'20px',margin:0,padding:0}}>{l}</p>
                ))}
              </div>
            ))}
          </div>
          <div style={{borderTop:'1px solid #e6e6e6',padding:'16px 0',marginTop:16,display:'flex',justifyContent:'space-between',fontSize:11}}>
            <span>English (United States)</span>
            <div style={{display:'flex',gap:16}}>
              <span>Your Privacy Choices</span><span>Consumer Health Privacy</span>
              <span>Sitemap</span><span>Contact Microsoft</span>
              <span>&copy; Microsoft 2026</span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
