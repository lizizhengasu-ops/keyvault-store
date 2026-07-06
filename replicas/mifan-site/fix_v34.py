import os, re

BASE = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
CART = os.path.join(BASE, 'Cart.tsx')
HOME = os.path.join(BASE, 'Home.tsx')
STORE = os.path.join(BASE, 'Store.tsx')
SUPPORT = os.path.join(BASE, 'Support.tsx')
ACCOUNT = os.path.join(BASE, 'Account.tsx')
B2B = os.path.join(BASE, 'B2b.tsx')
PRODUCT = os.path.join(BASE, 'Product.tsx')

def readf(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def writef(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# ===== 1) FIX CART - replace mojibake with SVG icons =====
cart = readf(CART)

# Find the recs section and rewrite it
rec_marker = 'You might also like'
if rec_marker in cart:
    rec_start = cart.find(rec_marker) - 20  # go back to <section
    section_start = cart.rfind('<section', 0, rec_start)
    section_end = cart.find('</section>', section_start) + len('</section>')
    
    new_recs = '''      <section style={{padding:"32px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:20,fontWeight:600,color:"#1d1d1f",marginBottom:16,lineHeight:1.16667}}>You might also like</h2>
        <div style={{display:"flex",gap:12,overflowX:"auto",paddingBottom:8}}>
          <div className="card-hover" style={{flex:"0 0 150",background:"#fff",borderRadius:14,padding:"16px",border:"1px solid #e6e6ea",cursor:"pointer",flexShrink:0}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" style={{margin:"0 auto 8px",display:"block"}}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
            <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f",marginBottom:2,textAlign:"center"}}>mifan AirPods</p>
            <p style={{fontSize:12,color:"#0071e3",textAlign:"center"}}>$179</p>
          </div>
          <div className="card-hover" style={{flex:"0 0 150",background:"#fff",borderRadius:14,padding:"16px",border:"1px solid #e6e6ea",cursor:"pointer",flexShrink:0}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" style={{margin:"0 auto 8px",display:"block"}}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
            <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f",marginBottom:2,textAlign:"center"}}>Leather Case</p>
            <p style={{fontSize:12,color:"#0071e3",textAlign:"center"}}>$49</p>
          </div>
          <div className="card-hover" style={{flex:"0 0 150",background:"#fff",borderRadius:14,padding:"16px",border:"1px solid #e6e6ea",cursor:"pointer",flexShrink:0}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" style={{margin:"0 auto 8px",display:"block"}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f",marginBottom:2,textAlign:"center"}}>20W Charger</p>
            <p style={{fontSize:12,color:"#0071e3",textAlign:"center"}}>$29</p>
          </div>
        </div>
      </section>'''
    
    cart = cart[:section_start] + new_recs + cart[section_end:]

writef(CART, cart)
print('1/7 Cart fixed')

# ===== 2) FIX STORE =====
store = readf(STORE)
# Remove leading whitespace before first section
store = store.replace('return (\n    <>\n      \n<section', 'return (\n    <>\n      <section')
writef(STORE, store)
print('2/7 Store fixed')

# ===== 3) FIX SUPPORT =====
support = readf(SUPPORT)
support = support.replace('return (\n    <>\n      \n<section', 'return (\n    <>\n      <section')
writef(SUPPORT, support)
print('3/7 Support fixed')

# ===== 4) FIX HOME - add video + trim =====
home = readf(HOME)

# Add video section before reviews
vid_marker = 'What Our Customers Say'
if vid_marker in home:
    vid_section = '''      {/* VIDEO */}
      <section className="section-in" style={{padding:"48px 20px",background:"#000",textAlign:"center"}}>
        <h2 style={{fontSize:34,fontWeight:600,color:"#f5f5f7",marginBottom:8,lineHeight:1.47059}}>See mPhone 11 Pro in action</h2>
        <p style={{fontSize:17,fontWeight:300,color:"#86868b",marginBottom:24}}>Watch the product film.</p>
        <div className="card-hover" style={{maxWidth:700,margin:"0 auto",background:"#1c1c1e",borderRadius:18,padding:"80px 20px",border:"1px solid #38383a",cursor:"pointer"}} role="button" tabIndex={0} aria-label="Play product film">
          <div style={{width:60,height:60,borderRadius:"50%",background:"#0071e3",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <p style={{fontSize:14,color:"#86868b"}}>Play film</p>
        </div>
      </section>

'''
    vid_pos = home.find(vid_marker)
    prev_sec = home.rfind('<section', 0, vid_pos)
    home = home[:prev_sec] + vid_section + home[prev_sec:]

writef(HOME, home)
print('4/7 Home fixed')

# ===== 5) FIX ACCOUNT =====
acct = readf(ACCOUNT)
# Add sign out
last_section = acct.rfind('</section>')
if last_section > 0:
    signout = '\n      <section style={{padding:"24px 20px 48px",maxWidth:900,margin:"0 auto",textAlign:"center"}}>\n        <div style={{fontSize:14,color:"#6e6e73",cursor:"pointer",textDecoration:"underline",display:"inline-block"}} role="button" tabIndex={0}>Sign Out</div>\n      </section>'
    acct = acct[:last_section] + signout + acct[last_section:]
writef(ACCOUNT, acct)
print('5/7 Account fixed')

# ===== 6) FIX B2B =====
b2b = readf(B2B)
# Fix broken case study quotes  
b2b = b2b.replace('{fontStyle:"italic"}">Switching', '{fontStyle:"italic"}}>Switching')
b2b = b2b.replace('{fontStyle:"italic"}">The volume', '{fontStyle:"italic"}}>The volume')
writef(B2B, b2b)
print('6/7 B2B fixed')

# ===== 7) FIX PRODUCT =====
prod = readf(PRODUCT)
# Add accessories with SVG icons
acc_marker = 'Compare with other models'
if acc_marker in prod:
    acc_section = '''      <section style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:24,fontWeight:600,textAlign:"center",marginBottom:24,color:"#1d1d1f",lineHeight:1.16667}}>Accessories</h2>
        <div className="stagger-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,maxWidth:700,margin:"0 auto"}}>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" style={{margin:"0 auto 8px",display:"block"}}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>mifan EarPods</h3>
            <p style={{fontSize:13,color:"#0071e3"}}>$19</p>
          </div>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" style={{margin:"0 auto 8px",display:"block"}}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Leather Case</h3>
            <p style={{fontSize:13,color:"#0071e3"}}>$49</p>
          </div>
          <div className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" style={{margin:"0 auto 8px",display:"block"}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>20W Charger</h3>
            <p style={{fontSize:13,color:"#0071e3"}}>$29</p>
          </div>
        </div>
      </section>

'''
    acc_pos = prod.find(acc_marker)
    prev_section = prod.rfind('<section', 0, acc_pos)
    prod = prod[:prev_section] + acc_section + prod[prev_section:]

writef(PRODUCT, prod)
print('7/7 Product fixed')

print('\nAll V34 fixes applied')