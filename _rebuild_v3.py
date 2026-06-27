import sys, re
sys.stdout.reconfigure(encoding="utf-8")

path = r"C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-plain.js"
c = open(path, encoding="utf-8-sig").read()

# Extract each function body using robust brace counting (handles JSX)
functions = ["HeaderSearch", "HeroCarousel", "QuickEntryMatrix", "CostPerformanceVisual", 
             "FastResponseVisual", "testApi", "QualityValidationVisual", "runScan",
             "FeatureCards", "TrustSection", "MegaFooter", "B2BApp"]

bodies = {}
for fn in functions:
    idx = c.find("function " + fn + "()")
    if idx < 0:
        print(f"{fn}: NOT FOUND")
        continue
    brace_start = c.find("{", idx)
    if brace_start < 0:
        print(f"{fn}: no opening brace")
        continue
    
    # Robust brace counting - handle strings
    in_string = False
    bc = 1
    i = brace_start + 1
    while i < len(c) and bc > 0:
        ch = c[i]
        if ch == '"' and (i == 0 or c[i-1] != "\\"):
            in_string = not in_string
        elif not in_string:
            if ch == "{": bc += 1
            elif ch == "}": bc -= 1
        i += 1
    
    # Full function body from "function" to matching "}"
    fn_text = c[idx:i]
    bodies[fn] = fn_text
    print(f"{fn}: extracted ({len(fn_text)} chars)")

# Rebuild file with all functions at 2-space indent
result = '''(function() {
  if (typeof React === "undefined" || typeof ReactDOM === "undefined") return;
  var e = React.createElement, F = React.Fragment, useState = React.useState, useEffect = React.useEffect;

'''

# Add each function body with 2-space indent
for fn in functions:
    if fn in bodies:
        fn_text = bodies[fn]
        # Fix indentation: strip existing whitespace from function definition
        fn_text = re.sub(r'^[ \t]*function', '  function', fn_text)
        result += fn_text + "\n\n"

# Add the load handler and close IIFE
idx = c.find('window.addEventListener("load"')
if idx > 0:
    load_handler = c[idx:]
    # Clean up the load handler indentation
    result += load_handler
else:
    # Default load handler
    result += '''  window.addEventListener("load", function() {
    if (typeof React === "undefined" || typeof ReactDOM === "undefined") return;
    var root = document.getElementById("ms-b2b-interactive-root");
    if (root) ReactDOM.createRoot(root).render(e(B2BApp));
  });
})();
'''

open(path, "w", encoding="utf-8").write(result)
print(f"\nFile rebuilt: {len(result)} chars")
