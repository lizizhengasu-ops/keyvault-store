import os, re

js_path = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-v3.js'
with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# FIX 1: Reduce Hero padding
content = content.replace("padding:'140px 24px 80px'", "padding:'94px 24px 60px'")
print('FIX 1: Hero padding reduced (140px -> 94px)')

# FIX 2: Remove old setTimeout footer killer
content = re.sub(r'\(function\(\)\{[^}]*setTimeout\(arguments\.callee,500\)\}\)\(\);\s*\n', '', content)
print('FIX 2: Old setTimeout footer killer removed')

# FIX 3: Add useEffect to App for WP gap clear + footer hide
old = 'function App(){return e("div",s({minHeight:"100vh",width:"100%",background:"#09090b",fontFamily:"Inter,system-ui,sans-serif",color:"#fafafa",position:"relative"}),'
new = '''function App(){
ue(function(){
['.site-content','#content','.content-area','#primary','main.site-main','.ast-container'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
el.style.setProperty('padding-top','0','important');
el.style.setProperty('margin-top','0','important');
el.style.setProperty('padding-bottom','0','important');
});
});
['#colophon','.site-footer','.ast-small-footer','.ast-footer-overlay','.ast-footer-copyright','.site-below-footer-wrap','.ast-site-footer'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
el.style.setProperty('display','none','important');
el.style.setProperty('height','0','important');
});
});
},[]);
return e("div",s({minHeight:"100vh",width:"100%",background:"#09090b",fontFamily:"Inter,system-ui,sans-serif",color:"#fafafa",position:"relative"}),'''
content = content.replace(old, new)
print('FIX 3: App useEffect added (WP gap clear + footer hide)')

# FIX 4: Add viewport tracking to Pricing function
# Find: var at=q<=100?TIERS[0]
# Replace with viewport vars before it
old_pricing_start = 'var at=q<=100?TIERS[0]:q<=500?TIERS[1]'
new_pricing_start = '''var _w=React.useState(window.innerWidth),vw=_w[0],setVw=_w[1];
ue(function(){var h=function(){setVw(window.innerWidth)};window.addEventListener('resize',h);return function(){window.removeEventListener('resize',h)}},[]);
var mb=vw<768;
var at=q<=100?TIERS[0]:q<=500?TIERS[1]'''
content = content.replace(old_pricing_start, new_pricing_start)
print('FIX 4: Responsive viewport tracking added to Pricing')

# FIX 5: Make Pricing grid responsive
content = content.replace(
    'gridTemplateColumns:"1.2fr 1fr",gap:"32px",alignItems:"start"',
    'gridTemplateColumns:mb?"1fr":"1.2fr 1fr",gap:mb?"24px":"32px",alignItems:"start"'
)
content = content.replace(
    'display:"grid",gridTemplateColumns:"1.2fr 1fr"',
    'display:mb?"flex":"grid",flexDirection:mb?"column":"row",gridTemplateColumns:mb?"1fr":"1.2fr 1fr"'
)
print('FIX 5: Pricing grid made responsive')

# FIX 6: Mobile padding for Pricing section
content = content.replace(
    'return e("section",s({width:"100%",padding:"80px 24px",position:"relative",zIndex:1,background:"#09090b"}),e("div",s({width:"100%",maxWidth:"1280px",margin:"0 auto"}),header,main))}',
    'return e("section",s({width:"100%",padding:mb?"48px 16px":"80px 24px",position:"relative",zIndex:1,background:"#09090b"}),e("div",s({width:"100%",maxWidth:"1280px",margin:"0 auto"}),header,main))}'
)
print('FIX 6: Mobile padding for Pricing section')

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('\nAll 6 fixes applied successfully!')
print('Output size:', os.path.getsize(js_path), 'bytes')
