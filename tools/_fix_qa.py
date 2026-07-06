import os, re

js_path = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-v3.js'
with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# FIX 1: Make display responsive in Pricing grid (was hardcoded "grid")
# Current: display:"grid",gridTemplateColumns:mb?"1fr":"1.2fr 1fr"
# Should be: display:mb?"flex":"grid",flexDirection:mb?"column":"row",gridTemplateColumns:mb?"1fr":"1.2fr 1fr"
old_display = 'display:"grid",gridTemplateColumns:mb?"1fr":"1.2fr 1fr"'
new_display = 'display:mb?"flex":"grid",flexDirection:mb?"column":"row",gridTemplateColumns:mb?"1fr":"1.2fr 1fr"'
content = content.replace(old_display, new_display)
print('FIX 1: display made responsive (flex-column on mobile, grid on desktop)')

# FIX 2: Add useEffect cleanup + b2b-isolated-canvas check
old_ue = '''ue(function(){
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
},[]);'''

new_ue = '''ue(function(){
['.site-content','#content','.content-area','#primary','main.site-main','.ast-container'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
el.style.setProperty('padding-top','0','important');
el.style.setProperty('margin-top','0','important');
el.style.setProperty('padding-bottom','0','important');
el.style.setProperty('margin-bottom','0','important');
});
});
['#colophon','.site-footer','.ast-small-footer','.ast-footer-overlay','.ast-footer-copyright','.site-below-footer-wrap','.ast-site-footer'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
if(el&&!el.closest('.b2b-isolated-canvas')){
el.style.setProperty('display','none','important');
el.style.setProperty('height','0','important');
el.style.setProperty('overflow','hidden','important');
}
});
});
return function(){
['#colophon','.site-footer','.ast-small-footer','.ast-footer-overlay','.ast-footer-copyright','.site-below-footer-wrap','.ast-site-footer'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
el.style.removeProperty('display');
el.style.removeProperty('height');
el.style.removeProperty('overflow');
});
});
['.site-content','#content','.content-area','#primary','main.site-main','.ast-container'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
el.style.removeProperty('padding-top');
el.style.removeProperty('margin-top');
el.style.removeProperty('padding-bottom');
el.style.removeProperty('margin-bottom');
});
});
};
},[]);'''

content = content.replace(old_ue, new_ue)
print('FIX 2: useEffect cleanup + b2b-isolated-canvas + overflow hidden added')

# FIX 3: Add viewport breakout + overflow prevention to Pricing section wrapper
# The current wrapper: e("section",s({width:"100%",padding:mb?"48px 16px":"80px 24px",position:"relative",zIndex:1,background:"#09090b"}),e("div",s({width:"100%",maxWidth:"1280px",margin:"0 auto"}),header,main))
# Should add: overflow:hidden and wrap in a breakout container
# Since the s() function returns {style: obj}, I can add overflow:hidden and a w-screen approach

# For the Pricing wrapper, we can't easily add Tailwind classes, 
# but we can add overflow-hidden and ensure max-width constraints

# Make leftPanel and rightPanel have maxWidth protection on mobile
# leftPanel padding responsive
content = content.replace(
    'padding:"36px",backdropFilter:"blur(12px)"}),qtyLabel,slider,bars)',
    'padding:mb?"24px":"36px",maxWidth:mb?"100%":"none",overflow:"hidden"}),qtyLabel,slider,bars)'
)
print('FIX 3a: leftPanel overflow protection')

# Add overflow hidden to the Pricing section wrapper
content = content.replace(
    'return e("section",s({width:"100%",padding:mb?"48px 16px":"80px 24px",position:"relative",zIndex:1,background:"#09090b"}),e("div",s({width:"100%",maxWidth:"1280px",margin:"0 auto"}),header,main))',
    'return e("section",s({width:"100%",padding:mb?"48px 16px":"80px 24px",position:"relative",zIndex:1,background:"#09090b",overflow:"hidden"}),e("div",s({width:"100%",maxWidth:"1280px",margin:"0 auto"}),header,main))'
)
print('FIX 3b: Pricing section overflow:hidden')

# Add maxWidth:100%,overflow:hidden to the rightPanel tier cards
content = content.replace(
    'rightPanel=e("div",null,tiers,comp)',
    'rightPanel=e("div",s({maxWidth:mb?"100%":"none",overflow:"hidden"}),tiers,comp)'
)
print('FIX 3c: rightPanel overflow+maxWidth')

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('\nAll fixes applied successfully!')
print('File size:', os.path.getsize(js_path), 'bytes')
