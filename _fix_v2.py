import sys
sys.stdout.reconfigure(encoding="utf-8")
import re

f = r"C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-plain.js"
c = open(f, encoding="utf-8").read()

# Find all }nction patterns (} + nction - f was replaced by })
count = 0
while True:
    m = re.search(r'\}nction', c)
    if not m:
        break
    count += 1
    pos = m.start()
    # Get the function name
    end_of_name = c.find("(", pos)
    func_name = c[pos+8:end_of_name]
    print(f"#{count}: Fixing {func_name} at position {pos}")
    
    # Find the closing { of this old function
    brace_start = c.find("{", pos)
    if brace_start < 0:
        print(f"  Can't find opening brace")
        break
    
    # Simple brace matching
    bc = 1
    i = brace_start + 1
    while i < len(c) and bc > 0:
        if c[i] == "{": bc += 1
        elif c[i] == "}": bc -= 1
        i += 1
    
    # Delete from the }}nction position + 1 (keep the first } which closes the new func)
    # through the matching } of the old function
    c = c[:pos+1] + c[i:]
    print(f"  Deleted {i - (pos+1)} chars")

# Clean up multiple blank lines
c = re.sub(r'\n{3,}', '\n\n', c)

open(f, "w", encoding="utf-8").write(c)
print(f"\nFixed {count} issues. New file size: {len(c)} chars")
