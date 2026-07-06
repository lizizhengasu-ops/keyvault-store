import os, subprocess

path = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-v3.js'
with open(path, encoding='utf-8') as f:
    c = f.read()

# Find the current footer hide code in the ue function
old_footer = """['#colophon','.site-footer','.ast-small-footer','.ast-footer-overlay','.ast-footer-copyright','.site-below-footer-wrap','.ast-site-footer'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
if(el&&!el.querySelector('.b2b-exclusive-layout')){
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
});};"""

new_footer = """['footer','#colophon','.site-footer','.ast-small-footer','.ast-footer-overlay','.ast-footer-copyright','.site-below-footer-wrap','.ast-site-footer','[class*="footer"]','[id*="footer"]'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
if(el&&!el.closest('#ms-b2b-v3-root')){
el.style.setProperty('display','none','important');
el.style.setProperty('height','0','important');
el.style.setProperty('overflow','hidden','important');
}});
});
return function(){
['footer','#colophon','.site-footer','.ast-small-footer','.ast-footer-overlay','.ast-footer-copyright','.site-below-footer-wrap','.ast-site-footer','[class*="footer"]','[id*="footer"]'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
if(!el.closest('#ms-b2b-v3-root')){
el.style.removeProperty('display');
el.style.removeProperty('height');
el.style.removeProperty('overflow');
}});
});
['.site-content','#content','.content-area','#primary','main.site-main','.ast-container'].forEach(function(s){
document.querySelectorAll(s).forEach(function(el){
el.style.removeProperty('padding-top');
el.style.removeProperty('margin-top');
el.style.removeProperty('padding-bottom');
el.style.removeProperty('margin-bottom');
});
});};"""

if old_footer in c:
    c = c.replace(old_footer, new_footer)
    print("Footer ue updated")
else:
    print("Pattern not found - checking position")
    pos = c.find('[' + chr(39) + '#colophon')
    if pos >= 0:
        print(f"Found at position {pos}")
        print(c[pos:pos+200])
    else:
        print("Pattern not found at all")

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

r = subprocess.run(['node', '--check', path], capture_output=True, text=True)
print('JS:', 'PASS' if r.returncode == 0 else 'FAIL')
if r.returncode != 0:
    print(r.stderr[:300])
