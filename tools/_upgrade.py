
import os

path = r"C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-plain.js"

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# === GLOBAL DESIGN UPGRADES ===

# 1. Add Inter font family globally
old_font = 'fontFamily:"Segoe UI",system-ui,sans-serif'
new_font = 'fontFamily:"Inter","system-ui","sans-serif"'
content = content.replace(old_font, new_font)

# 2. Upgrade background to zinc-50 (light) and slate-950 (dark)
old_bg_white = 'background:"#fff"'
new_bg_white = 'background:"#fafafa"'
content = content.replace(old_bg_white, new_bg_white)

# 3. Upgrade Hero backgrounds to deep slate
old_hero_bg = 'bg:\"linear-gradient(135deg,#0a1628,#1a3360)\"'
new_hero_bg = 'bg:\"linear-gradient(135deg,#0c1222,#1e293b)\"'
content = content.replace(old_hero_bg, new_hero_bg)

# 4. Upgrade border radius 
content = content.replace('borderRadius:4', 'borderRadius:16')
content = content.replace('borderRadius:2', 'borderRadius:12')
content = content.replace('borderRadius:6', 'borderRadius:12')
content = content.replace('borderRadius:8', 'borderRadius:16')

# 5. Upgrade color scheme for better visual hierarchy
content = content.replace('color:"#0e1726"', 'color:"#0f172a"')
content = content.replace('color:"#616161"', 'color:"#64748b"')
content = content.replace('color:"#262626"', 'color:"#334155"')
content = content.replace('color:"#999"', 'color:"#94a3b8"')
content = content.replace('color:"#0078D4"', 'color:"#6366f1"')

# 6. Upgrade box shadows to more premium ones
content = content.replace('boxShadow:"0 1.6px 3.6px rgba(0,0,0,0.1)"', 
                          'boxShadow:"0 4px 24px rgba(0,0,0,0.06),0 1px 4px rgba(0,0,0,0.04)"')
content = content.replace('boxShadow:"0 1px 3px rgba(0,0,0,0.06)"',
                          'boxShadow:"0 8px 32px rgba(0,0,0,0.08)"')

# 7. Upgrade border colors
content = content.replace('border:"1px solid #e0e0e0"', 'border:"1px solid rgba(100,116,139,0.15)"')
content = content.replace('border:"1px solid #e8e8e8"', 'border:"1px solid rgba(100,116,139,0.12)"')
content = content.replace('border:"1px solid #d1d1d1"', 'border:"1px solid rgba(100,116,139,0.2)"')
content = content.replace('borderBottom:"1px solid #e6e6e6"', 'borderBottom:"1px solid rgba(100,116,139,0.1)"')

# 8. Update CTA colors and styles
content = content.replace('background:"#0078D4"', 'background:"#6366f1"')
content = content.replace('background:"#f2f2f2"', 'background:"#f1f5f9"')
content = content.replace('background:"#f5f5f7"', 'background:"rgba(99,102,241,0.04)"')

# 9. Update button hover from white text to proper
# CTA hover effects are inline, keep as-is mostly

# 10. Make the header glassmorphism
old_header = 'background:"#fff",borderBottom:"1px solid rgba(100,116,139,0.1)",position:"sticky",top:0,zIndex:100'
new_header = 'background:"rgba(255,255,255,0.75)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid rgba(100,116,139,0.08)",position:"sticky",top:0,zIndex:100'
content = content.replace(old_header, new_header)

# 11. Upgrade Hero section styles
old_hero_padding = 'padding:"80px 24px"'
new_hero_padding = 'padding:"120px 24px 100px"'
content = content.replace(old_hero_padding, new_hero_padding)

# 12. Upgrade MegaFooter background and padding
content = content.replace('background:"#f1f5f9",padding:"48px 24px 24px",marginTop:64',
                          'background:"#f8fafc",padding:"64px 24px 32px",marginTop:64')

# 13. Enhance spacing on section containers
content = content.replace('margin:"48px auto"', 'margin:"72px auto"')
content = content.replace('margin:"32px auto"', 'margin:"64px auto"')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Design upgrades applied successfully")
