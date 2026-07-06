import os, re

theme = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra'
js_path = theme + r'\assets\js\b2b-component-v3.js'

with open(js_path, 'r', encoding='utf-8') as f:
    c = f.read()

# Fix 1: Hero padding 140px -> 94px
c = c.replace("padding:'140px 24px 80px'", "padding:'94px 24px 60px'")
print('F1: Hero padding reduced')

# Fix 2: Remove old setTimeout footer killer
c = re.sub(r'\(function\(\)\{[^}]*setTimeout\(arguments\.callee,500\)\}\)\(\);\s*\n', '', c)
print('F2: Footer killer removed')

# Fix 3: Add useEffect to App (WP gap clear + footer hide + cleanup)
old = 'function App(){return e("div",s({minHeight:"100vh"'
new = '''function App(){
ue(function(){
['.site-content','#content','.content-area','#primary','main.site-main','.ast-container'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
el.style.setProperty('padding-top','0','important');
el.style.setProperty('margin-top','0','important');
});
});
['#colophon','.site-footer','.ast-small-footer','.ast-footer-overlay','.ast-footer-copyright','.site-below-footer-wrap','.ast-site-footer'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
if(el&&!el.querySelector('.b2b-isolated-canvas')){
el.style.setProperty('display','none','important');
el.style.setProperty('height','0','important');
}});
});
return function(){
['#colophon','.site-footer','.ast-small-footer','.ast-footer-overlay','.ast-footer-copyright'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){el.style.removeProperty('display');el.style.removeProperty('height');});
});
['.site-content','#content','.content-area','#primary'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){el.style.removeProperty('padding-top');el.style.removeProperty('margin-top');});
});};
},[]);
return e("div",s({minHeight:"100vh"'''
c = c.replace(old, new)
print('F3: useEffect with gap clear + footer hide + cleanup')

# Fix 4: Viewport tracking + responsive grid in Pricing
old4 = 'var at=q<=100?TIERS[0]:q<=500?TIERS[1]'
new4 = '''var _w=React.useState(window.innerWidth),vw=_w[0],setVw=_w[1];
ue(function(){var h=function(){setVw(window.innerWidth)};window.addEventListener('resize',h);return function(){window.removeEventListener('resize',h)}},[]);
var mb=vw<768;
var at=q<=100?TIERS[0]:q<=500?TIERS[1]'''
c = c.replace(old4, new4)
print('F4: Viewport tracking + mobile flag')

# Fix 5: Responsive grid
c = c.replace(
    'display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:"32px",alignItems:"start"',
    'display:mb?"flex":"grid",flexDirection:mb?"column":"row",gridTemplateColumns:mb?"1fr":"1.2fr 1fr",gap:mb?"24px":"32px",alignItems:"start"'
)
print('F5: Grid responsive')

# Fix 6: Mobile padding for pricing
c = c.replace(
    'return e("section",s({width:"100%",padding:"80px 24px",position:"relative",zIndex:1,background:"#09090b"}))',
    'return e("section",s({width:"100%",padding:mb?"48px 16px":"80px 24px",position:"relative",zIndex:1,background:"#09090b"}))'
)
print('F6: Mobile pricing padding')

# Fix 7: Overflow protection on pricing
c = c.replace(
    'render(e(App))});})();',
    'render(e(App))});})();' # no change needed here
)

# Add overflow hidden to pricing section
c = c.replace(
    'position:"relative",zIndex:1,background:"#09090b"}),e("div",s({width:"100%",maxWidth:"1280px",margin:"0 auto"}),header,main))}',
    'position:"relative",zIndex:1,background:"#09090b",overflow:"hidden"}),e("div",s({width:"100%",maxWidth:"1280px",margin:"0 auto"}),header,main))}'
)
print('F7: Overflow hidden on pricing')

# Fix 8: leftPanel mobile padding
c = c.replace(
    'padding:"36px",backdropFilter:"blur(12px)"}),qtyLabel,slider,bars)',
    'padding:mb?"24px":"36px",backdropFilter:"blur(12px)"}),qtyLabel,slider,bars)'
)
print('F8: leftPanel mobile padding')

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(c)

print(f'\nDone! Size: {os.path.getsize(js_path)} bytes')
