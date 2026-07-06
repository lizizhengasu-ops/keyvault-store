import os
path = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-v3.js'
with open(path, encoding='utf-8') as f:
    c = f.read()

# EXPAND 1: Footer columns - replace [{...}].map(function(c,i{...links.map...}) with explicit columns
hStyle = '{fontSize:"11px",fontWeight:700,color:"#a1a1aa",marginBottom:"16px",letterSpacing:"1.5px",textTransform:"uppercase"}'
lStyle_s = '{display:"block",fontSize:"13px",color:"#52525b",textDecoration:"none",padding:"5px 0",transition:"color 0.2s"}'
links_m = 'onMouseEnter:function(ev){ev.target.style.color="#818cf8"},onMouseLeave:function(ev){ev.target.style.color="#52525b"}'

cols = [
    ("Products", ["Windows 11 Pro","Windows Server 2025","Office 2024 Pro","SQL Server 2022","Exchange Online","Visual Studio","Azure Credits"]),
    ("Solutions", ["Volume Licensing","API Bulk Keys","Enterprise SLA","GDPR Compliance","ISO 27001","Partner Program","Reseller Portal"]),
    ("Resources", ["Knowledge Base","API Documentation","System Status","Sales Team","Support Tickets","Community Forum","Video Tutorials"]),
    ("Company", ["About Us","Partners","Careers","Press Kit","Privacy Policy","Terms of Service","Contact Sales"]),
]

# Build the expanded Footer code
lines = []
lines.append('var mainCol=e("div",s({' + hStyle + '}),"DUMMY");')  # placeholder
lines.append('var hStyle={' + hStyle[1:-1] + '};')
lines.append('var lStyle={' + lStyle_s[1:-1] + '};')
lines.append('function lhE(e){e.target.style.color="#818cf8"}')
lines.append('function lhL(e){e.target.style.color="#52525b"}')

for col_title, links in cols:
    link_calls = ','.join(['e("a",{href:"#",style:lStyle,onMouseEnter:lhE,onMouseLeave:lhL},"' + l + '")' for l in links])
    lines.append('var c_' + col_title.lower() + '=e("div",null,e("h4",s(hStyle),"' + col_title + '"),' + link_calls + ');')

lines.append('var cols=e("div",s({width:"100%",maxWidth:"1280px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"40px"}),c_products,c_solutions,c_resources,c_company);')
expanded_footer = '\n'.join(lines)

# Find and replace the FCOLS map pattern
old_fcols = c.find('[].map(function(c,i)')
if old_fcols < 0:
    old_fcols = c.find('[{title:"Products"')
outer_start = old_fcols
outer_end = c.find('));', outer_start) + 3

# Get the full outer map expression
outer_expr = c[outer_start:outer_end]
# Remove it
c = c[:outer_start-4] + expanded_footer + c[outer_end:]  # -4 for 'var '

print("Footer expanded")

# EXPAND 2: STATS cards - replace the [{...}].map(function(st,i){...}) with explicit cards
stat_items = [("10K+","Enterprise Clients"),("99.9%","Uptime SLA"),("50M+","Keys Delivered"),("ISO 27001","Certified")]
stat_card_style = '{textAlign:"center",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"16px",padding:"24px 16px"}'
stat_val_style = '{fontSize:"clamp(24px,2.5vw,36px)",fontWeight:900,fontFamily:"monospace",background:"linear-gradient(135deg,#fafafa,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"4px"}'
stat_lbl_style = '{fontSize:"13px",color:"#71717a",fontWeight:500}'

stat_cards = []
for val, label in stat_items:
    stat_cards.append('e("div",{style:' + stat_card_style + '},e("div",s(' + stat_val_style + '),"' + val + '"),e("div",s(' + stat_lbl_style + '),"' + label + '"))')
stat_expanded = 'var statCards=e("div",s({display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px",marginBottom:"40px"}),' + ','.join(stat_cards) + ');'

old_stat = c.find('[].map(function(st,i)')
if old_stat < 0:
    old_stat = c.find('[{val:"10K+"')
stat_start = old_stat
stat_end = c.find('));', stat_start) + 3
stat_expr = c[stat_start:stat_end]
c = c[:stat_start-4] + stat_expanded + c[stat_end:]

print("STATS expanded")

# EXPAND 3: BADGES cards - replace the [{...}].map(function(b,i){...}) with explicit cards
badge_items = [
    ("Microsoft Partner","Gold Verified","#6366f1"),
    ("ISO 27001","Security Certified","#10b981"),
    ("99.9% Uptime","SLA Guarantee","#f59e0b"),
    ("SSL Secure","256-bit Encryption","#8b5cf6"),
]

bcard_style_base = 'background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"16px",padding:"20px",textAlign:"center",cursor:"default",transition:"all 0.3s"'
bicon_style_base = 'width:"44px",height:"44px",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"'
btitle_style = '{fontSize:"15px",fontWeight:700,color:"#fafafa",marginBottom:"3px"}'
bdesc_style = '{fontSize:"12px",color:"#71717a"}'

badge_cards = []
for title, desc, clr in badge_items:
    card = 'e("div",{style:{' + bcard_style_base + '},onMouseEnter:function(ev){ev.currentTarget.style.transform="translateY(-3px)";ev.currentTarget.style.borderColor="' + clr + '"+"40";ev.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.15)"},onMouseLeave:function(ev){ev.currentTarget.style.transform="none";ev.currentTarget.style.borderColor="rgba(255,255,255,0.06)";ev.currentTarget.style.boxShadow="none"}},'
    card += 'e("div",{style:{' + bicon_style_base + ',background:"' + clr + '"+"15"}},e("span",{style:{fontSize:"20px",color:"' + clr + '"}},"check")),'
    card += 'e("div",s(' + btitle_style + '),"' + title + '"),'
    card += 'e("div",s(' + bdesc_style + '),"' + desc + '"))'
    badge_cards.append(card)

badge_expanded = 'var badgeCards=e("div",s({display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px",marginBottom:"40px"}),' + ','.join(badge_cards) + ');'

old_badge = c.find('[].map(function(b,i)')
if old_badge < 0:
    old_badge = c.find('[{title:"Microsoft Partner"')
if old_badge >= 0:
    badge_start = old_badge
    badge_end = c.find('));', badge_start) + 3
    badge_expr = c[badge_start:badge_end]
    c = c[:badge_start-4] + badge_expanded + c[badge_end:]
    print("BADGES expanded")
else:
    print("BADGES pattern not found")

# Clean up the mainCol placeholder
c = c.replace('var mainCol=e("div",s({' + hStyle + '}),"DUMMY");\n', '')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

import subprocess
r = subprocess.run(['node', '--check', path], capture_output=True, text=True)
print("JS:", 'PASS' if r.returncode == 0 else 'FAIL')
if r.returncode != 0:
    print(r.stderr[:300])
print('Size:', os.path.getsize(path))
