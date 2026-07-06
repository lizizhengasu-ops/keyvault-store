import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
}