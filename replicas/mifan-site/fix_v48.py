import os

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
SUPPORT = os.path.join(base, 'Support.tsx')
ACCOUNT = os.path.join(base, 'Account.tsx')
B2B = os.path.join(base, 'B2b.tsx')
CART = os.path.join(base, 'Cart.tsx')

# ===== 1) SUPPORT: Add search functionality + Popular Topics =====
with open(SUPPORT, 'rb') as f:
    s = f.read()

# Convert from functional component to stateful for search
# Inject useState for search term and filtered topics layer
old_import = b'export default function SupportPage()'
new_import = b'import {useState} from "react";\nexport default function SupportPage()'

s = s.replace(old_import, new_import)

# Add search state and filtered topics 
old_return = b'const topics = [\n    {t:"Billing & Subscriptions",d:"Manage payments, view invoices, update plans."},'
new_state = b'const [search, setSearch] = useState("");\n  const allTopics = [\n    {t:"Billing & Subscriptions",d:"Manage payments, view invoices, update plans."},'
s = s.replace(old_return, new_state)

# Replace topics references with filtered version
s = s.replace(b'{topics.map((h,i) => (', b'{allTopics.filter(h => h.t.toLowerCase().includes(search.toLowerCase()) || h.d.toLowerCase().includes(search.toLowerCase())).map((h,i) => (')

# Make search input functional
old_input = b'placeholder="Search support topics" style={{width:"100%",padding:"18px 18px 18px 52px",borderRadius:16,border:"2px solid #d2d2d7",background:"#fff",fontSize:17,color:"#1d1d1f",outline:"none",fontFamily:"inherit",boxSizing:"border-box",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"}}'
new_input = b'value={search} onChange={e => setSearch(e.target.value)} placeholder="Search support" style={{width:"100%",padding:"18px 18px 18px 52px",borderRadius:16,border:"2px solid #d2d2d7",background:"#fff",fontSize:17,color:"#1d1d1f",outline:"none",fontFamily:"inherit",boxSizing:"border-box",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"}}'
s = s.replace(old_input, new_input)

# Add Popular Topics section after search
pop_section = b'''
      <section style={{padding:"0 20px",maxWidth:700,margin:"0 auto 24px"}}>
        <p style={{fontSize:13,fontWeight:600,color:"#6e6e73",marginBottom:12,textTransform:"uppercase",letterSpacing:".05em"}}>Popular Topics</p>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          <span style={{fontSize:13,background:"#f5f5f7",padding:"8px 16px",borderRadius:980,color:"#1d1d1f",cursor:"pointer"}}>iOS update</span>
          <span style={{fontSize:13,background:"#f5f5f7",padding:"8px 16px",borderRadius:980,color:"#1d1d1f",cursor:"pointer"}}>Battery replacement</span>
          <span style={{fontSize:13,background:"#f5f5f7",padding:"8px 16px",borderRadius:980,color:"#1d1d1f",cursor:"pointer"}}>Device setup</span>
          <span style={{fontSize:13,background:"#f5f5f7",padding:"8px 16px",borderRadius:980,color:"#1d1d1f",cursor:"pointer"}}>Trade-in</span>
          <span style={{fontSize:13,background:"#f5f5f7",padding:"8px 16px",borderRadius:980,color:"#1d1d1f",cursor:"pointer"}}>Warranty check</span>
        </div>
      </section>

'''

insert_point = s.find(b'<h1 style={{fontSize:34')
if insert_point > 0:
    s = s[:insert_point] + pop_section + s[insert_point:]

# Also add a "no results" message in help topics section
old_topics_end = b'allTopics.filter(h => h.t.toLowerCase().includes(search.toLowerCase()) || h.d.toLowerCase().includes(search.toLowerCase())).map((h,i) => ('
# Add the no results message  
new_filter_line = b'const filteredTopics = allTopics.filter(h => h.t.toLowerCase().includes(search.toLowerCase()) || h.d.toLowerCase().includes(search.toLowerCase()));\n  const topicSection = filteredTopics.length > 0 ? filteredTopics.map((h,i) => ('
s = s.replace(old_topics_end, b'{filteredTopics.map((h,i) => (')
# Can't easily add no-results without full rewrite. Skip for now.

with open(SUPPORT, 'wb') as f:
    f.write(s)
print('1/4 Support: search filter + popular topics added')

# ===== 2) ACCOUNT: Add mock sign-in modal =====
with open(ACCOUNT, 'rb') as f:
    a = f.read()

# Add useState for sign-in modal
a = a.replace(b'function AccountPage()', b'import {useState} from "react";\nfunction AccountPage()')
old_acct = b'export default function AccountPage();'
if old_acct in a:
    a = a.replace(old_acct, b'')
# Add state
a = a.replace(b'function AccountPage() {', b'function AccountPage() {\n  const [showSignIn, setShowSignIn] = useState(false);')

# Add Sign In modal before the closing </> 
modal = b'\n      {/* SIGN IN MODAL */}\n      {showSignIn && (\n        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}} onClick={() => setShowSignIn(false)}>\n          <div style={{background:"#fff",borderRadius:18,padding:"32px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.2)"}} onClick={e => e.stopPropagation()}>\n            <p style={{fontSize:21,fontWeight:600,color:"#1d1d1f",marginBottom:24,textAlign:"center"}}>Sign in with your mifan ID</p>\n            <input type="email" placeholder="Email" style={{width:"100%",padding:"12px 16px",borderRadius:12,border:"1px solid #d2d2d7",fontSize:15,color:"#1d1d1f",outline:"none",fontFamily:"inherit",marginBottom:12,boxSizing:"border-box"}} />\n            <input type="password" placeholder="Password" style={{width:"100%",padding:"12px 16px",borderRadius:12,border:"1px solid #d2d2d7",fontSize:15,color:"#1d1d1f",outline:"none",fontFamily:"inherit",marginBottom:20,boxSizing:"border-box"}} />\n            <div onClick={() => {setShowSignIn(false);alert("Demo: Signed in!")}} style={{background:"#0071e3",color:"#fff",padding:"12px",borderRadius:980,textAlign:"center",fontSize:15,fontWeight:600,cursor:"pointer",marginBottom:12}}>Sign In</div>\n            <div onClick={() => setShowSignIn(false)} style={{fontSize:13,color:"#6e6e73",textAlign:"center",cursor:"pointer"}}>Cancel</div>\n          </div>\n        </div>\n      )}\n'
close_idx = a.rfind(b'</>\r\n')
if close_idx > 0:
    a = a[:close_idx] + modal + a[close_idx:]

# Make Sign In button functional
a = a.replace(b'cursor:"pointer",whiteSpace:"nowrap"}}>Sign In', b'cursor:"pointer",whiteSpace:"nowrap"}} onClick={() => setShowSignIn(true)}>Sign In')

with open(ACCOUNT, 'wb') as f:
    f.write(a)
print('2/4 Account: sign-in modal')

# ===== 3) B2B: Add hero + improve CTAs =====
with open(B2B, 'rb') as f:
    b = f.read()

# Add hero section at the top (before the features section)
hero = b'\n      {/* HERO */}\n      <section style={{background:"#000",padding:"60px 20px",textAlign:"center"}}>\n        <h1 style={{fontSize:48,fontWeight:700,color:"#f5f5f7",lineHeight:1.08365,marginBottom:8,letterSpacing:"-0.003em"}}>mifan for Business.</h1>\n        <p style={{fontSize:21,fontWeight:300,color:"#86868b",lineHeight:1.19048,marginBottom:24,maxWidth:600,margin:"0 auto 24px"}}>Empower your entire organization with the devices your people love. From deployment to support, we make enterprise work.</p>\n        <a href="#" className="btn-primary" style={{fontSize:17,padding:"12px 24px",display:"inline-block",textDecoration:"none"}} onClick={e=>{e.preventDefault();alert("Contact sales coming soon")}}>Contact Sales</a>\n        <a href="#" className="btn-link" style={{fontSize:17,color:"#2997ff",marginLeft:16,display:"inline-block"}} onClick={e=>e.preventDefault()}>Watch the film &gt;</a>\n      </section>\n\n'

first_section = b.find(b'<section')
if first_section > 0:
    b = b[:first_section] + hero + b[first_section:]
    
with open(B2B, 'wb') as f:
    f.write(b)
print('3/4 B2B: hero added')

# ===== 4) CART: Polish =====
with open(CART, 'rb') as f:
    c = f.read()

# Update empty cart state to be more polished
c = c.replace(
    b'<p style={{fontSize:15,color:"#6e6e73",marginBottom:24}}>Browse our latest products and find something you love.</p>\n        <p style={{fontSize:12,color:"#6e6e73",marginBottom:24}}>Free delivery &amp; free returns. No-contact shipping available.</p>',
    b'<p style={{fontSize:15,color:"#6e6e73",marginBottom:24,lineHeight:1.6}}>Your bag is empty. Browse our latest products and find something you love.</p>\n        <p style={{fontSize:12,color:"#6e6e73",marginBottom:24}}>Free delivery &amp; free returns. No-contact shipping available.</p>'
)

with open(CART, 'wb') as f:
    f.write(c)
print('4/4 Cart: polished')

print('\nV48 fixes applied')