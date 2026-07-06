import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import BlurText from './reactbits/blur-text';
import ScrollFloat from './reactbits/scroll-float';
import Aurora from './reactbits/aurora';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import CartPage from './pages/Cart';
import AccountPage from './pages/Account';
import SupportPage from './pages/Support';
import B2bPage from './pages/B2b';
import AnimInit from './animations';

function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50,
      background: 'rgba(255,255,255,0.72)', backdropFilter: 'saturate(180%) blur(20px)',
      borderBottom: '1px solid #e6e6ea', height: 44
    }}>
      <div style={{ maxWidth: 1068, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', padding: '0 20px' }}>
        <Link to="/" style={{ fontSize: 20, fontWeight: 700, color: '#1d1d1f', textDecoration: 'none', letterSpacing: '-0.02em' }}>mifan</Link>
        <div style={{ display: 'flex', gap: 28, fontSize: 11, color: '#1d1d1f', fontWeight: 500, letterSpacing: '0.01em' }}>
          <Link to="/" style={{ color: '#1d1d1f', textDecoration: 'none' }}>Home</Link>
          <Link to="/product/mphone-10-pro" style={{ color: '#1d1d1f', textDecoration: 'none' }}>mPhone</Link>
          <Link to="/cart" style={{ color: '#1d1d1f', textDecoration: 'none' }}>Cart</Link>
          <Link to="/account" style={{ color: '#1d1d1f', textDecoration: 'none' }}>Account</Link>
          <Link to="/support" style={{ color: '#1d1d1f', textDecoration: 'none' }}>Support</Link>
          <Link to="/b2b" style={{ color: '#1d1d1f', textDecoration: 'none' }}>B2B</Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#f5f5f7', color: '#6e6e73', fontSize: 11, padding: '36px 0', borderTop: '1px solid #d2d2d7' }}>
      <div style={{ maxWidth: 1068, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, marginBottom: 32 }}>
          <div><h5 style={{ fontWeight: 600, color: '#1d1d1f', marginBottom: 12 }}>Products</h5><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>mPhone 10 Pro</a><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>mPhone 10</a><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>mPhone SE</a></div>
          <div><h5 style={{ fontWeight: 600, color: '#1d1d1f', marginBottom: 12 }}>Support</h5><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>Contact</a><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>FAQ</a><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>Returns</a></div>
          <div><h5 style={{ fontWeight: 600, color: '#1d1d1f', marginBottom: 12 }}>Company</h5><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>About</a><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>Careers</a><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>Press</a></div>
          <div><h5 style={{ fontWeight: 600, color: '#1d1d1f', marginBottom: 12 }}>Connect</h5><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>Facebook</a><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>Twitter</a><a className="footer-link" style={{ display: 'block', color: '#6e6e73', textDecoration: 'none', marginBottom: 6 }}>Instagram</a></div>
        </div>
        <p style={{ borderTop: '1px solid #d2d2d7', paddingTop: 16, textAlign: 'center' }}>Copyright 2026 mifan.com. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif", background: '#fff', color: '#1d1d1f' }}>
      <Nav />
      <AnimInit />
      <main style={{ paddingTop: 44 }}>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/b2b" element={<B2bPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}