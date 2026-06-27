# -*- coding: utf-8 -*-
import sys
with open("C:\\Users\\31961\\Local Sites\\keysavings\\app\\public\\wp-content\\themes\\astra\\assets\\js\\b2b-component-v2.js", "rb") as f:
    data = f.read()
text = data.decode("utf-8")
text = text.replace("ms-b2b-v2-root", "ms-b2b-stable-root")
old = 'function initB2B(){if(typeof React==="undefined"||typeof ReactDOM==="undefined")return;var root=document.getElementById("ms-b2b-stable-root");if(root){root.style.display="block";ReactDOM.createRoot(root).render(e(B2BApp));}}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",initB2B)}else{initB2B()}})();'
new = 'function initB2B(){if(window.location.pathname.includes("b2b-wholesale2")){var r=document.getElementById("ms-b2b-stable-root");if(r)r.style.display="none";return;}if(typeof React==="undefined"||typeof ReactDOM==="undefined")return;var root=document.getElementById("ms-b2b-stable-root");if(root){root.style.display="block";ReactDOM.createRoot(root).render(e(B2BApp))}}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",initB2B)}else{initB2B()}})();'
if old in text:
    text = text.replace(old, new)
    with open("C:\\Users\\31961\\Local Sites\\keysavings\\app\\public\\wp-content\\themes\\astra\\assets\\js\\b2b-stable.js", "wb") as f:
        f.write(text.encode("utf-8"))
    print("OK")
else:
    print("FAIL")
