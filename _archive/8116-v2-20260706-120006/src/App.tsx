import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import { CartProvider, useCart } from "./CartContext"
import HomePage from "./pages/Home"
import StorePage from "./pages/StorePage"
import SurfacePage from "./pages/SurfacePage"
import WindowsPage from "./pages/WindowsPage"
import SupportPage from "./pages/SupportPage"
import B2BPage from "./pages/B2BPage"
import CartPage from "./pages/CartPage"
import AccountPage from "./pages/AccountPage"
import ProductsPage from "./pages/ProductsPage"

const NAV_ITEMS = [
  {label:"Microsoft 365",to:"/"},{label:"Windows",to:"/product/windows"},
  {label:"Surface",to:"/product/surface"},{label:"Store",to:"/store"},
  {label:"Products",to:"/products"},{label:"Cart",to:"/cart"},
  {label:"Account",to:"/account"},{label:"Business",to:"/b2b"},{label:"Support",to:"/support"},
]

const FOOTER_SECTIONS = [
  {title:"What is new",links:["Surface Pro","Surface Laptop","Surface Laptop Ultra","Copilot","Windows 11","Microsoft 365"]},
  {title:"Microsoft Store",links:["Account Profile","Download Center","Microsoft Store Support","Returns","Order tracking","Store locations","Gift cards","Student discounts"]},
  {title:"Education",links:["Microsoft in Education","Devices for Education","Microsoft Teams for Education","Microsoft 365 Education","Office Education","Educator training","Deals for students"]},
  {title:"Business",links:["Microsoft Cloud","Azure","Dynamics 365","Microsoft 365","Microsoft Power Platform","Microsoft Advertising","Copilot for Business"]},
  {title:"Developer & IT",links:["Visual Studio",".NET","Windows Server","Azure DevOps","Microsoft 365 Dev Center","Learn","Documentation"]},
  {title:"Company",links:["Careers","About Microsoft","Company News","Privacy at Microsoft","Investors","Diversity and inclusion","Sustainability"]},
]

function NavBar() {
  const loc = useLocation()
  const p = loc.pathname
  const isWin = p === "/product/windows"
  const isSurf = p === "/product/surface"
  const isStore = p === "/store"
  return (
    <nav style={{
      height:54, background:"transparent", display:"flex", alignItems:"center",
      padding:"0 48px", position:"fixed", top:0, left:0, right:0, zIndex:100,
      fontSize: isWin || isSurf || isStore ? 13 : 16,
      fontWeight: isSurf ? 350 : 400,
      lineHeight: isWin || isSurf ? "19.5px" : "normal",
      color: isWin ? "#ffffff" : isSurf ? "#000000" : isStore ? "#000000" : "#262626"
    }}>
      <svg width="108" height="23" viewBox="0 0 108 23" fill="none"><rect x="0" y="0" width="23" height="23" fill="#F25022"/><rect x="28" y="0" width="23" height="23" fill="#7FBA00"/><rect x="56" y="0" width="23" height="23" fill="#00A4EF"/><rect x="84" y="0" width="23" height="23" fill="#FFB900"/></svg>
      <div style={{display:"flex",marginLeft:24,gap:0}}>
        {NAV_ITEMS.map((n,i)=>(
          <Link key={i} to={n.to} style={{
            color: isWin ? "#ffffff" : isSurf ? "#000000" : isStore ? "#000000" : "#262626",
            textDecoration:"none",
            fontSize: isWin || isSurf ? 16 : (isStore ? 13 : 16),
            fontWeight: isSurf ? 350 : 400,
            lineHeight: isWin || isSurf ? "24px" : "normal",
            padding:"0 16px"
          }}>{n.label}</Link>
        ))}
      </div>
    </nav>
  )
}

function AppFooter() {
  const loc = useLocation()
  const p = loc.pathname
  const isWin = p === "/product/windows"
  const isSurf = p === "/product/surface"
  const isStore = p === "/store"
  return (
    <footer style={{
      background: isWin ? "#000000" : "#F2F2F2",
      color: isWin ? "#ffffff" : isSurf ? "#000000" : isStore ? "#000000" : "#616161",
      fontSize: isStore ? 15 : isSurf ? 15 : isWin ? 15 : 11, lineHeight: isStore ? "normal" : isSurf ? "22.5px" : isWin ? "22.5px" : "24px",
      fontWeight: isSurf ? 350 : 400
    }}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"36px 72px 0",display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:24}}>
        {FOOTER_SECTIONS.map((s,i)=>(
          <div key={i}>
            <div style={{fontSize:15,fontWeight:600,color: isWin ? "#ffffff" : isSurf ? "#000000" : isStore ? "#000000" : "#616161",margin:"0 0 4px 0",lineHeight:"20px"}}>{s.title}</div>
            {s.links.map((l,j)=>(<a key={j} href="#" style={{
              display:"block",fontSize:11,
              color: isWin ? "#ffffff" : isSurf ? "#000000" : isStore ? "#000000" : "#616161",
              lineHeight:"20px",textDecoration:"none",
              fontWeight: isSurf ? 350 : 400
            }}>{l}</a>))}
          </div>
        ))}
      </div>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"16px 72px",borderTop:"1px solid #e6e6e6",display:"flex",justifyContent:"space-between",fontSize:11,lineHeight:"20px"}}>
        <span>English (United States)</span>
        <div style={{display:"flex",gap:16,fontSize:11,lineHeight:"20px",color: isWin ? "#ffffff" : isSurf ? "#000000" : isStore ? "#000000" : "#616161"}}>
          <a href="#" style={{fontSize:11,color: isWin ? "#ffffff" : isSurf ? "#000000" : isStore ? "#000000" : "#616161",lineHeight:"20px",textDecoration:"none",fontWeight: isSurf ? 350 : 400}}>Your Privacy Choices</a>
          <a href="#" style={{fontSize:11,color: isWin ? "#ffffff" : isSurf ? "#000000" : isStore ? "#000000" : "#616161",lineHeight:"20px",textDecoration:"none",fontWeight: isSurf ? 350 : 400}}>Consumer Health Privacy</a>
          <a href="#" style={{fontSize:11,color: isWin ? "#ffffff" : isSurf ? "#000000" : isStore ? "#000000" : "#616161",lineHeight:"20px",textDecoration:"none",fontWeight: isSurf ? 350 : 400}}>Sitemap</a>
          <a href="#" style={{fontSize:11,color: isWin ? "#ffffff" : isSurf ? "#000000" : isStore ? "#000000" : "#616161",lineHeight:"20px",textDecoration:"none",fontWeight: isSurf ? 350 : 400}}>Contact Microsoft</a>
          <span>&copy; Microsoft 2026</span>
        </div>
      </div>
    </footer>
  )
}

function AppContent() {
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff",minHeight:"100vh"}}>
      <NavBar />
      <main style={{paddingTop:54}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/product/surface" element={<SurfacePage />} />
          <Route path="/product/windows" element={<WindowsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/b2b" element={<B2BPage />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  )
}
