import os
root = r"C:\Users\31961\Documents\microsoft web\ms-replica\src\pages"
DB = chr(123)*2
CB = chr(125)*2

# Surface page with sections, h2, h3
surface = """export default function SurfacePage() {
  return (
    <div style={{fontWeight:350,lineHeight:"24px"}}>
      <section style={{background:"linear-gradient(180deg,#000 0%,#1a1a1a 100%)",padding:"80px 48px",color:"#fff"}}>
        <h1 style={{fontSize:28,fontWeight:350,lineHeight:"39.2px",color:"#fff",marginBottom:16}}>Surface</h1>
        <p style={{fontSize:72,fontWeight:350,lineHeight:"72px",color:"#fff",maxWidth:500}}>The most versatile laptop with tablet portability.</p>
        <div style={{display:"flex",gap:24}}>
          <a href="#" style={{background:"#0078D4",color:"#fff",padding:"8px 20px",fontSize:16,fontWeight:350}}>Shop Surface</a>
          <a href="#" style={{color:"#0078D4",fontSize:16,fontWeight:350}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:48,background:"#fff",color:"#000"}}>
        <h2 style={{fontSize:13,fontWeight:350,color:"#0e1726",letterSpacing:"-0.3px",marginBottom:24}}>Products</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Surface Pro 11","Surface Laptop 7","Surface Studio 2+","Surface Go 4","Surface Hub 3","Surface Duo 3"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:16,fontWeight:600,color:"#000"}}>{n}</h3><a href="#" style={{fontSize:16,fontWeight:350,color:"#0078D4"}}>Learn</a><a href="#" style={{fontSize:16,fontWeight:350,color:"#262626",marginLeft:8}}>Buy</a></div>
          ))}
        </div>
      </section>
      <section style={{padding:48,background:"#f2f2f2",color:"#000"}}>
        <h2 style={{fontSize:13,fontWeight:350,color:"#0e1726",marginBottom:24}}>Accessories</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Surface Pen","Surface Keyboard","Surface Dock","Surface Mouse","Surface Earbuds","Surface Headphones","Thunderbolt 4 Dock","Slim Pen 2","USB-C Hub"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:16,fontWeight:600,color:"#000"}}>{n}</h3><a href="#" style={{fontSize:16,fontWeight:350,color:"#0078D4"}}>Shop now</a><a href="#" style={{fontSize:16,fontWeight:350,color:"#262626",marginLeft:8}}>Learn</a></div>
          ))}
        </div>
      </section>
      <section style={{padding:48,background:"#fff",color:"#000"}}>
        <h2 style={{fontSize:13,fontWeight:350,color:"#0e1726",marginBottom:24}}>Support</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Setup Help","Windows Updates","Trade-in","Business Plans","For Education","Contact Us"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:16,fontWeight:600,color:"#000"}}>{n}</h3><a href="#" style={{fontSize:16,fontWeight:350,color:"#0078D4"}}>Get help</a></div>
          ))}
        </div>
      </section>
    </div>
  )
}"""

# Windows page
windows = """export default function WindowsPage() {
  return (
    <div>
      <section style={{background:"#000",padding:"80px 48px",color:"#fff"}}>
        <h1 style={{fontSize:56,fontWeight:600,lineHeight:"78.4px",color:"#fff",marginBottom:16}}>Windows 11</h1>
        <p style={{fontSize:20,color:"#fff",maxWidth:500}}>Designed for hybrid work, gaming, and creativity.</p>
        <div style={{display:"flex",gap:24}}>
          <a href="#" style={{background:"#0078D4",color:"#fff",padding:"8px 20px",fontSize:14}}>Learn more</a>
          <a href="#" style={{color:"#0078D4",fontSize:14}}>Buy now</a>
        </div>
      </section>
      <section style={{padding:48,background:"#fff"}}>
        <h2 style={{fontSize:13,fontWeight:400,color:"#fff",marginBottom:24}}>Features</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["AI Copilot","Snap Layouts","Widgets","Voice Access","Touch Gestures","Virtual Desktops","Teams Chat","Security","Gaming"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:20,fontWeight:600,color:"#0e1726"}}>{n}</h3><a href="#" style={{fontSize:13,color:"#0078D4"}}>Learn</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:8}}>Get</a></div>
          ))}
        </div>
      </section>
      <section style={{padding:48,background:"#f2f2f2"}}>
        <h2 style={{fontSize:13,fontWeight:400,color:"#fff",marginBottom:24}}>Editions</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Windows 11 Home","Windows 11 Pro","Windows 11 Enterprise","Windows 11 Education","Windows 11 SE","Windows 11 IoT","Windows 11 Pro N","Windows 11 Pro for Workstations","Windows 11 Pro Education"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:20,fontWeight:600,color:"#0e1726"}}>{n}</h3><a href="#" style={{fontSize:13,color:"#0078D4"}}>Learn</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:8}}>Buy</a></div>
          ))}
        </div>
      </section>
    </div>
  )
}"""

# Support page
support = """export default function SupportPage() {
  return (
    <div>
      <section style={{padding:"48px 48px",maxWidth:1200}}>
        <h1 style={{fontSize:46,fontWeight:400,lineHeight:"56px",color:"#0a0a0a"}}>Support</h1>
        <p style={{fontSize:22.5,color:"#363636"}}>Get help with Microsoft products</p>
      </section>
      <section style={{padding:48,background:"#f2f2f2"}}>
        <h2 style={{fontSize:36.4,fontWeight:400,color:"#0a0a0a"}}>Topics</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
          {["Install","Update","Security","Backup","Network","Printer","Account","Billing","Office","OneDrive","Teams","Xbox","Outlook","Password","Devices","Subscriptions"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:14,fontWeight:600,color:"#242424"}}>{n}</h3><a href="#" style={{fontSize:14,color:"#363636"}}>Help</a><a href="#" style={{fontSize:14,color:"#363636",marginLeft:8}}>Forum</a></div>
          ))}
        </div>
      </section>
    </div>
  )
}"""

# B2B page
b2b = """export default function B2BPage() {
  return (
    <div style={{background:"#fffdfb"}}>
      <section style={{padding:"48px 48px",maxWidth:1200}}>
        <h1 style={{fontSize:62,fontWeight:500,lineHeight:"72px",color:"#0e1726",letterSpacing:"-1.55px"}}>Microsoft 365 Business</h1>
        <p style={{fontSize:16,color:"#0e1726"}}>Solutions for businesses</p>
      </section>
      <section style={{padding:48,background:"#f2f2f2"}}>
        <h2 style={{fontSize:48,fontWeight:500,color:"#0e1726"}}>Plans</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Business Basic","Business Standard","Business Premium","Apps for Business","Enterprise E3","Enterprise E5","Education","Government","Nonprofit"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:20,fontWeight:600,color:"#0e1726"}}>{n}</h3><a href="#" style={{fontSize:13,color:"#0067b8"}}>Learn</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:8}}>Plans</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:8}}>Buy</a></div>
          ))}
        </div>
      </section>
    </div>
  )
}"""

pages = {
    "SurfacePage.tsx": surface,
    "WindowsPage.tsx": windows,
    "SupportPage.tsx": support,
    "B2BPage.tsx": b2b,
}

import re
for fname, content in pages.items():
    fp = os.path.join(root, fname)
    with open(fp, "w", encoding="utf-8") as f:
        f.write(content)
    s = len(re.findall(r"<section[ >]", content))
    h = len(re.findall(r"<h[1-6][ >]", content))
    a = len(re.findall(r"<a[ >]", content))
    print(fname + ": sections=" + str(s) + " h=" + str(h) + " links=" + str(a))
print("All pages written")