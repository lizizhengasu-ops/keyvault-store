import os
path = os.path.join(r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages', 'Store.tsx')
with open(path, 'rb') as f:
    store = f.read()

# Add product navigation cards (horizontal scrolling) after the "The latest" section  
# Apple Store has a row of product nav cards: Mac, iPad, iPhone, Watch, etc.
nav_marker = b'The latest'
if nav_marker in store:
    idx = store.find(nav_marker)
    sec_end = store.find(b'</section>', idx) + len(b'</section>')
    nav_section = b'''
      <section style={{padding:"0 20px 32px",maxWidth:1068,margin:"0 auto"}}>
        <div style={{display:"flex",gap:16,overflowX:"auto",paddingBottom:8,scrollSnapType:"x mandatory",WebkitOverflowScrolling:"touch"}}>
          <a href="/store" style={{flex:"0 0 90",textDecoration:"none",color:"inherit",textAlign:"center",scrollSnapAlign:"start"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:"#f5f5f7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px",fontSize:24}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="6" x2="12" y2="10"/><line x1="8" y1="8" x2="16" y2="8"/></svg>
            </div>
            <p style={{fontSize:11,color:"#1d1d1f"}}>Mac</p>
          </a>
          <a href="/store" style={{flex:"0 0 90",textDecoration:"none",color:"inherit",textAlign:"center",scrollSnapAlign:"start"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:"#f5f5f7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px",fontSize:24}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
            </div>
            <p style={{fontSize:11,color:"#1d1d1f"}}>mPhone</p>
          </a>
          <a href="/store" style={{flex:"0 0 90",textDecoration:"none",color:"inherit",textAlign:"center",scrollSnapAlign:"start"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:"#f5f5f7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px",fontSize:24}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 14h20"/></svg>
            </div>
            <p style={{fontSize:11,color:"#1d1d1f"}}>iPad</p>
          </a>
          <a href="/store" style={{flex:"0 0 90",textDecoration:"none",color:"inherit",textAlign:"center",scrollSnapAlign:"start"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:"#f5f5f7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px",fontSize:24}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <p style={{fontSize:11,color:"#1d1d1f"}}>Watch</p>
          </a>
          <a href="/store" style={{flex:"0 0 90",textDecoration:"none",color:"inherit",textAlign:"center",scrollSnapAlign:"start"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:"#f5f5f7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px",fontSize:24}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
            </div>
            <p style={{fontSize:11,color:"#1d1d1f"}}>AirPods</p>
          </a>
          <a href="/support" style={{flex:"0 0 90",textDecoration:"none",color:"inherit",textAlign:"center",scrollSnapAlign:"start"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:"#f5f5f7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px",fontSize:24}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><circle cx="12" cy="8" r="0.5" fill="#0071e3"/></svg>
            </div>
            <p style={{fontSize:11,color:"#1d1d1f"}}>Support</p>
          </a>
          <a href="/account" style={{flex:"0 0 90",textDecoration:"none",color:"inherit",textAlign:"center",scrollSnapAlign:"start"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:"#f5f5f7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px",fontSize:24}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <p style={{fontSize:11,color:"#1d1d1f"}}>Account</p>
          </a>
        </div>
      </section>

'''
    if sec_end > 0:
        store = store[:sec_end] + nav_section + store[sec_end:]
        with open(path, 'wb') as f:
            f.write(store)
        print('Store: product nav cards added')
    else:
        print('sec_end not found')
else:
    print('marker not found')