import os

BASE = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
CSS_PATH = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\index.css'
APP_PATH = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\App.tsx'

PHONE_CHAR = chr(0x1F4F1)
HEADPHONE_CHAR = chr(0x1F3A7)
WATCH_CHAR = chr(0x231A)
LIGHTNING_CHAR = chr(0x26A1)
MICROSCOPE_CHAR = chr(0x1F52C)
CAMERA_CHAR = chr(0x1F4F7)
CASE_CHAR = chr(0x1F4F1)

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    return len(content)

# ==========================
# 1) HOME - V33 clean
# ==========================
HOME = open(os.path.join(BASE, 'Home.tsx'), 'r', encoding='utf-8').read()

# Remove duplicate/far sections after FAQ
faq_idx = HOME.rfind('Frequently Asked Questions')
if faq_idx > 0:
    # Find last section close after FAQ
    last_close = HOME.rfind('</section>', faq_idx)
    # Keep everything up to last FAQ close + some padding
    end_div = HOME.find('borderBottom', last_close)
    if end_div > 0:
        end_line = HOME.find('\n', end_div)
        # Find any remaining sections
        after = HOME[end_line:]
        next_sec = after.find('<section')
        if next_sec > 0:
            HOME = HOME[:end_line + next_sec]

# Fix hero title font  
HOME = HOME.replace(
    'fontSize:34,lineHeight:1.47059,fontWeight:600,color:"#1d1d1f",marginBottom:4',
    'fontSize:48,fontWeight:700,color:"#1d1d1f",lineHeight:1.08365,letterSpacing:"-0.003em",marginBottom:8'
)

# Add 2x2 promo grid before Why mPhone
why_idx = HOME.find('Why mPhone')
if why_idx > 0:
    why_section = HOME.rfind('<section', 0, why_idx)
    promo = '''
      {/* 2x2 PROMO GRID */}
      <section className="section section-promo" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,maxWidth:1200,margin:"0 auto",padding:"0 14px 14px"}}>
        <div className="tile-wrapper section-in" style={{background:"#f5f5f7",borderRadius:24,textAlign:"center",padding:"36px 20px",minHeight:420,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h3 style={{fontSize:28,fontWeight:600,color:"#1d1d1f",marginBottom:6}}>mifan iPad</h3>
          <p style={{fontSize:15,fontWeight:400,color:"#6e6e73",marginBottom:16}}>Supercharged by M-series.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center"}}>
            <a className="btn-link" style={{fontSize:15}} href="/store">Learn more &gt;</a>
            <a className="btn-link" style={{fontSize:15}} href="/store">Buy &gt;</a>
          </div>
        </div>
        <div className="tile-wrapper theme-dark section-in" style={{background:"#1c1c1e",borderRadius:24,textAlign:"center",padding:"36px 20px",minHeight:420,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h3 style={{fontSize:28,fontWeight:600,color:"#f5f5f7",marginBottom:6}}>mifan AirPods</h3>
          <p style={{fontSize:15,fontWeight:400,color:"#86868b",marginBottom:16}}>Active Noise Cancellation.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center"}}>
            <a className="btn-link" style={{fontSize:15,color:"#2997ff"}} href="/store">Learn more &gt;</a>
            <a className="btn-link" style={{fontSize:15,color:"#2997ff"}} href="/store">Buy &gt;</a>
          </div>
        </div>
        <div className="tile-wrapper theme-dark section-in" style={{background:"#1c1c1e",borderRadius:24,textAlign:"center",padding:"36px 20px",minHeight:420,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h3 style={{fontSize:28,fontWeight:600,color:"#f5f5f7",marginBottom:6}}>mifan ProBook 16</h3>
          <p style={{fontSize:15,fontWeight:400,color:"#86868b",marginBottom:16}}>M5 Pro and M5 Max.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center"}}>
            <a className="btn-link" style={{fontSize:15,color:"#2997ff"}} href="/store">Learn more &gt;</a>
            <a className="btn-link" style={{fontSize:15,color:"#2997ff"}} href="/store">Buy &gt;</a>
          </div>
        </div>
        <div className="tile-wrapper section-in" style={{background:"#f5f5f7",borderRadius:24,textAlign:"center",padding:"36px 20px",minHeight:420,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h3 style={{fontSize:28,fontWeight:600,color:"#1d1d1f",marginBottom:6}}>mifan Watch</h3>
          <p style={{fontSize:15,fontWeight:400,color:"#6e6e73",marginBottom:16}}>Advanced health sensors.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center"}}>
            <a className="btn-link" style={{fontSize:15}} href="/store">Learn more &gt;</a>
            <a className="btn-link" style={{fontSize:15}} href="/store">Buy &gt;</a>
          </div>
        </div>
      </section>

'''
    if why_section > 0:
        HOME = HOME[:why_section] + promo + HOME[why_section:]

print(f'Home.tsx: {write_file(os.path.join(BASE, "Home.tsx"), HOME)} chars')

# ==========================
# 2) STORE - add latest section
# ==========================
STORE = open(os.path.join(BASE, 'Store.tsx'), 'r', encoding='utf-8').read()
first_sec = STORE.find('<section')
if first_sec > 0:
    latest = '''
      <section style={{padding:"0 20px",maxWidth:1068,margin:"0 auto 24px"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:16,lineHeight:1.16667}}>The latest.</h2>
        <div className="card-hover" style={{background:"#000",borderRadius:24,overflow:"hidden",display:"flex",flexDirection:"column",cursor:"pointer"}}>
          <div style={{padding:"40px 32px",textAlign:"center"}}>
            <p style={{fontSize:12,color:"#2997ff",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>New</p>
            <h3 style={{fontSize:24,fontWeight:600,color:"#f5f5f7",marginBottom:4}}>mPhone 11 Pro</h3>
            <p style={{fontSize:14,color:"#86868b",marginBottom:16}}>Triple-camera system. ProMotion XDR display. A13 Bionic. From $999.</p>
            <div style={{display:"flex",gap:14,justifyContent:"center"}}>
              <a className="btn-primary" style={{fontSize:14,padding:"8px 16px"}} href="/product/mphone-11-pro">Buy</a>
              <a className="btn-link" style={{fontSize:14,color:"#2997ff"}} href="/product/mphone-11-pro">Learn more &gt;</a>
            </div>
          </div>
        </div>
      </section>
'''
    STORE = STORE[:first_sec] + latest + STORE[first_sec:]
print(f'Store.tsx: {write_file(os.path.join(BASE, "Store.tsx"), STORE)} chars')

# ==========================
# 3) SUPPORT - add search, more topics
# ==========================
SUPPORT = open(os.path.join(BASE, 'Support.tsx'), 'r', encoding='utf-8').read()
first_sec = SUPPORT.find('<section')
if first_sec > 0:
    search_bar = '''
      <section style={{padding:"0 20px",maxWidth:700,margin:"0 auto"}}>
        <div style={{position:"relative",marginBottom:32,marginTop:32}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" strokeWidth="1.5" style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" placeholder="Search support topics" style={{width:"100%",padding:"14px 14px 14px 48px",borderRadius:14,border:"1px solid #d2d2d7",background:"#f5f5f7",fontSize:15,color:"#1d1d1f",outline:"none",fontFamily:"inherit",boxSizing:"border-box"}} />
        </div>
      </section>
'''
    SUPPORT = SUPPORT[:first_sec] + search_bar + SUPPORT[first_sec:]
print(f'Support.tsx: {write_file(os.path.join(BASE, "Support.tsx"), SUPPORT)} chars')

# ==========================
# 4) ACCOUNT - profile header + devices
# ==========================
ACCOUNT = open(os.path.join(BASE, 'Account.tsx'), 'r', encoding='utf-8').read()
first_sec = ACCOUNT.find('<section')
if first_sec > 0:
    profile_header = '''
      <section style={{padding:"0 20px 24px",maxWidth:900,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32,padding:"24px",background:"#f5f5f7",borderRadius:18,border:"1px solid #e6e6ea"}}>
          <div style={{width:60,height:60,borderRadius:"50%",background:"#0071e3",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-7 0-11 2-11 6v2h22v-2c0-4-4-6-11-6z"/></svg>
          </div>
          <div style={{flex:1}}>
            <p style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>Guest User</p>
            <p style={{fontSize:13,color:"#6e6e73"}}>Sign in to manage your devices and purchases.</p>
          </div>
          <div style={{fontSize:13,background:"#0071e3",color:"#fff",padding:"6px 16px",borderRadius:980,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0}}>Sign In</div>
        </div>
      </section>
'''
    ACCOUNT = ACCOUNT[:first_sec] + profile_header + ACCOUNT[first_sec:]

# Add devices section before Recent Activity
act_idx = ACCOUNT.find('Recent Activity')
if act_idx > 0:
    act_sec = ACCOUNT.rfind('<section', 0, act_idx)
    devices = '''
      <section style={{padding:"0 20px 40px",maxWidth:900,margin:"0 auto"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:16,lineHeight:1.16667}}>My Devices</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:32}}>
          <div className="card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"20px",border:"1px solid #e6e6ea",textAlign:"center",cursor:"pointer"}}>
            <p style={{fontSize:28,marginBottom:8}}>''' + PHONE_CHAR + '''</p>
            <p style={{fontSize:14,fontWeight:600,color:"#1d1d1f"}}>mPhone 11 Pro</p>
            <p style={{fontSize:11,color:"#6e6e73"}}>iOS 18.2 | 256GB</p>
          </div>
          <div className="card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"20px",border:"1px solid #e6e6ea",textAlign:"center",cursor:"pointer"}}>
            <p style={{fontSize:28,marginBottom:8}}>''' + HEADPHONE_CHAR + '''</p>
            <p style={{fontSize:14,fontWeight:600,color:"#1d1d1f"}}>mifan AirPods Pro</p>
            <p style={{fontSize:11,color:"#6e6e73"}}>Firmware 6B34</p>
          </div>
          <div className="card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"20px",border:"1px solid #e6e6ea",textAlign:"center",cursor:"pointer"}}>
            <p style={{fontSize:28,marginBottom:8}}>''' + WATCH_CHAR + '''</p>
            <p style={{fontSize:14,fontWeight:600,color:"#1d1d1f"}}>mifan Watch</p>
            <p style={{fontSize:11,color:"#6e6e73"}}>watchOS 11.0</p>
          </div>
        </div>
      </section>
'''
    if act_sec > 0:
        ACCOUNT = ACCOUNT[:act_sec] + devices + ACCOUNT[act_sec:]
print(f'Account.tsx: {write_file(os.path.join(BASE, "Account.tsx"), ACCOUNT)} chars')

# ==========================
# 5) B2B - case studies + pricing
# ==========================
B2B_CONTENT = open(os.path.join(BASE, 'B2b.tsx'), 'r', encoding='utf-8').read()

closing_sec = B2B_CONTENT.rfind('</section>')
if closing_sec > 0:
    case_study = '''
      <section style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:24,fontWeight:600,lineHeight:1.16667,textAlign:"center",marginBottom:24,color:"#1d1d1f"}}>Trusted by Leading Companies</h2>
        <div className="stagger-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16,maxWidth:800,margin:"0 auto"}}>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"28px 24px",border:"1px solid #e6e6ea"}}>
            <p style={{fontSize:14,color:"#6e6e73",fontStyle:"italic",marginBottom:12,lineHeight:1.6}}>"Switching to mifan saved us 40% on IT management costs. The MDM integration was seamless."</p>
            <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f"}}>CTO, TechCorp Global</p>
          </div>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"28px 24px",border:"1px solid #e6e6ea"}}>
            <p style={{fontSize:14,color:"#6e6e73",fontStyle:"italic",marginBottom:12,lineHeight:1.6}}"The volume pricing and dedicated support made mifan the obvious choice for our 5000+ employee rollout."</p>
            <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f"}}>VP of IT, FinServe Inc.</p>
          </div>
        </div>
      </section>
'''
    B2B_CONTENT = B2B_CONTENT[:closing_sec] + case_study + B2B_CONTENT[closing_sec:]

closing_sec2 = B2B_CONTENT.rfind('</section>')
if closing_sec2 > 0:
    pricing = '''
      <section style={{padding:"48px 20px",background:"#fff"}}>
        <h2 style={{fontSize:24,fontWeight:600,lineHeight:1.16667,textAlign:"center",marginBottom:24,color:"#1d1d1f"}}>Enterprise Pricing</h2>
        <div className="stagger-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,maxWidth:900,margin:"0 auto"}}>
          <div className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Starter</h3>
            <p style={{fontSize:28,fontWeight:600,color:"#0071e3",marginBottom:4}}>50-249</p>
            <p style={{fontSize:12,color:"#6e6e73",marginBottom:12}}>Units</p>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059}}>Volume pricing, basic MDM, email support</p>
          </div>
          <div className="stagger-item card-hover" style={{background:"#0071e3",borderRadius:18,padding:"24px",textAlign:"center",color:"#fff",boxShadow:"0 4px 20px rgba(0,113,227,0.3)"}}>
            <h3 style={{fontSize:17,fontWeight:600,marginBottom:4}}>Business</h3>
            <p style={{fontSize:28,fontWeight:600,marginBottom:4}}>250-999</p>
            <p style={{fontSize:12,opacity:0.8,marginBottom:12}}>Units</p>
            <p style={{fontSize:13,opacity:0.9,lineHeight:1.47059}}>Advanced MDM, priority support, custom config</p>
          </div>
          <div className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Enterprise</h3>
            <p style={{fontSize:28,fontWeight:600,color:"#0071e3",marginBottom:4}}>1000+</p>
            <p style={{fontSize:12,color:"#6e6e73",marginBottom:12}}>Units</p>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059}}>Dedicated AM, API access, custom integration</p>
          </div>
        </div>
      </section>
'''
    B2B_CONTENT = B2B_CONTENT[:closing_sec2] + pricing + B2B_CONTENT[closing_sec2:]
print(f'B2B.tsx: {write_file(os.path.join(BASE, "B2b.tsx"), B2B_CONTENT)} chars')

# ==========================
# 6) CART - product images + recs
# ==========================
CART_CONTENT = open(os.path.join(BASE, 'Cart.tsx'), 'r', encoding='utf-8').read()

# Add product image to cart items
CART_CONTENT = CART_CONTENT.replace(
    '<p style={{fontSize:17,fontWeight:600,color:"#1d1d1f"}}>{x.name}</p>',
    '<div style={{display:"flex",alignItems:"center",gap:12}}><img src={"/products/"+x.slug+".jpg"} alt={x.name} style={{width:48,height:48,borderRadius:10,objectFit:"contain",background:"#f5f5f7",flexShrink:0}} /><p style={{fontSize:17,fontWeight:600,color:"#1d1d1f"}}>{x.name}</p></div>'
)

# Add recs section
cart_end = CART_CONTENT.rfind('</section>')
if cart_end > 0:
    recs = '''
      <section style={{padding:"32px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:20,fontWeight:600,color:"#1d1d1f",marginBottom:16,lineHeight:1.16667}}>You might also like</h2>
        <div style={{display:"flex",gap:12,overflowX:"auto",paddingBottom:8}}>
          <div className="card-hover" style={{flex:"0 0 150",background:"#fff",borderRadius:14,padding:"16px",border:"1px solid #e6e6ea",cursor:"pointer"}}>
            <p style={{fontSize:24,textAlign:"center",marginBottom:8}}>''' + HEADPHONE_CHAR + '''</p>
            <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>mifan AirPods</p>
            <p style={{fontSize:12,color:"#0071e3"}}>$179</p>
          </div>
          <div className="card-hover" style={{flex:"0 0 150",background:"#fff",borderRadius:14,padding:"16px",border:"1px solid #e6e6ea",cursor:"pointer"}}>
            <p style={{fontSize:24,textAlign:"center",marginBottom:8}}>''' + CASE_CHAR + '''</p>
            <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>Leather Case</p>
            <p style={{fontSize:12,color:"#0071e3"}}>$49</p>
          </div>
          <div className="card-hover" style={{flex:"0 0 150",background:"#fff",borderRadius:14,padding:"16px",border:"1px solid #e6e6ea",cursor:"pointer"}}>
            <p style={{fontSize:24,textAlign:"center",marginBottom:8}}>''' + LIGHTNING_CHAR + '''</p>
            <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>20W Charger</p>
            <p style={{fontSize:12,color:"#0071e3"}}>$29</p>
          </div>
        </div>
      </section>
'''
    CART_CONTENT = CART_CONTENT[:cart_end] + recs + CART_CONTENT[cart_end:]
print(f'Cart.tsx: {write_file(os.path.join(BASE, "Cart.tsx"), CART_CONTENT)} chars')

# ==========================
# 7) PRODUCT - add "Why mPhone" comparison
# ==========================
PROD = open(os.path.join(BASE, 'Product.tsx'), 'r', encoding='utf-8').read()
compare_idx = PROD.find('Compare with other models')
if compare_idx > 0:
    prev_sec = PROD.rfind('<section', 0, compare_idx)
    why_section = '''
      <section style={{padding:"48px 20px",background:"#fff"}}>
        <h2 style={{fontSize:24,fontWeight:600,textAlign:"center",marginBottom:24,color:"#1d1d1f",lineHeight:1.16667}}>Why mPhone</h2>
        <div className="stagger-grid" style={{maxWidth:700,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          <div className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <p style={{fontSize:28,marginBottom:8}}>''' + MICROSCOPE_CHAR + '''</p>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>A13 Bionic</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059}}>Industry-leading performance with 6-core CPU and 4-core GPU.</p>
          </div>
          <div className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <p style={{fontSize:28,marginBottom:8}}>''' + CAMERA_CHAR + '''</p>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Triple Camera</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059}}>Ultra Wide, Wide, Telephoto. Night mode on all cameras.</p>
          </div>
        </div>
      </section>
'''
    if prev_sec > 0:
        PROD = PROD[:prev_sec] + why_section + PROD[prev_sec:]
print(f'Product.tsx: {write_file(os.path.join(BASE, "Product.tsx"), PROD)} chars')

# ==========================
# 8) CSS - back to top
# ==========================
CSS = open(CSS_PATH, 'r', encoding='utf-8').read()
CSS += '''

/* Back to top button */
.back-top{position:fixed;bottom:30px;right:30px;width:44px;height:44px;border-radius:50%;background:rgba(0,113,227,0.9);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity 0.3s,transform 0.3s;z-index:100;border:none;box-shadow:0 4px 12px rgba(0,113,227,0.3)}
.back-top.visible{opacity:1}
.back-top:hover{transform:translateY(-3px);background:#0071e3}
.back-top:active{transform:scale(0.95)}
@keyframes pageEnter{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.page-enter{animation:pageEnter 0.4s ease-out}
'''
print(f'index.css: {write_file(CSS_PATH, CSS)} chars')

# ==========================
# 9) APP - back to top button
# ==========================
APP = open(APP_PATH, 'r', encoding='utf-8').read()
footer_close_idx = APP.find('</footer>')
if footer_close_idx > 0:
    back_top_html = '''
      {/* Back to top */}
      <div className="back-top" id="back-top" onClick={() => window.scrollTo({top:0,behavior:"smooth"})} role="button" aria-label="Back to top" tabIndex={0} onKeyDown={e=>e.key==="Enter"&&window.scrollTo({top:0,behavior:"smooth"})}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"/></svg>
      </div>
'''
    APP = APP[:footer_close_idx] + back_top_html + APP[footer_close_idx:]

# Add scroll listener for back-top visibility
scroll_pos = APP.find('setScrollPct')
if scroll_pos > 0:
    line_end = APP.find('\n', scroll_pos)
    vis_line = '\n    const bt = document.getElementById("back-top"); if(bt){bt.classList.toggle("visible",window.scrollY>300);}'
    APP = APP[:line_end] + vis_line + APP[line_end:]
print(f'App.tsx: {write_file(APP_PATH, APP)} chars')

print('\n=== V33 Fix Complete ===')
print('All pages updated with Apple-style improvements')