import os, subprocess

path = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-v3.js'
with open(path, encoding='utf-8') as f:
    c = f.read()

hs = 'fontSize:"11px",fontWeight:700,color:"#a1a1aa",marginBottom:"16px",letterSpacing:"1.5px",textTransform:"uppercase"'
ls = 'display:"block",fontSize:"13px",color:"#52525b",textDecoration:"none",padding:"5px 0"'

def link(text):
    return 'e("a",{href:"#",style:{' + ls + '}},"' + text + '")'

def col(title, items):
    joins = ",".join([link(t) for t in items])
    return 'e("div",null,e("h4",s({' + hs + '}),"' + title + '"),' + joins + ')'

cols_data = [
    ("Products",["Windows 11 Pro","Windows Server 2025","Office 2024 Pro","SQL Server 2022","Exchange Online","Visual Studio","Azure Credits"]),
    ("Solutions",["Volume Licensing","API Bulk Keys","Enterprise SLA","GDPR Compliance","ISO 27001","Partner Program","Reseller Portal"]),
    ("Resources",["Knowledge Base","API Documentation","System Status","Sales Team","Support Tickets","Community Forum","Video Tutorials"]),
    ("Company",["About Us","Partners","Careers","Press Kit","Privacy Policy","Terms of Service","Contact Sales"]),
]

cols_js = ",".join([col(t, items) for t, items in cols_data])

matrix = 'e("div",{style:{width:"100%",background:"#07090e",borderTop:"1px solid rgba(255,255,255,0.05)",padding:"64px 24px 48px",marginTop:"64px"}},e("div",{style:{width:"100%",maxWidth:"1280px",margin:"0 auto"}},e("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"40px",paddingBottom:"40px"}},' + cols_js + '),e("div",{style:{width:"100%",borderTop:"1px solid rgba(255,255,255,0.04)",paddingTop:"24px",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"11px",color:"#3f3f46"}},e("span",null,"(c) 2026 Keys-Starter Inc. All rights reserved."),e("div",{style:{display:"flex",gap:"16px"}},e("a",{href:"#",style:{color:"#3f3f46",textDecoration:"none"}},"Privacy"),e("a",{href:"#",style:{color:"#3f3f46",textDecoration:"none"}},"Terms"),e("a",{href:"#",style:{color:"#3f3f46",textDecoration:"none"}},"SLA"),e("a",{href:"#",style:{color:"#3f3f46",textDecoration:"none"}},"Cookies"))))'

# Insert matrix after certBlock
c = c.replace('certBlock))', 'certBlock),\n' + matrix + '\n')

# Remove footerSection from App return
c = c.replace(',footerSection', '')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

r = subprocess.run(['node', '--check', path], capture_output=True, text=True)
print('JS:', 'PASS' if r.returncode == 0 else 'FAIL')
if r.returncode != 0:
    print(r.stderr[:300])
print('Size:', os.path.getsize(path))
