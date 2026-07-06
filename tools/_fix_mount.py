import sys
sys.stdout.reconfigure(encoding="utf-8")

header = r"C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\header.php"
footer = r"C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\footer.php"

# Step 1: Add mount point to header.php right after <body> tag
with open(header, "r", encoding="utf-8") as f:
    c = f.read()

insert = '\n\n<?php if (is_page("b2b-wholesale") || is_page(163)): ?>\n<div id="ms-b2b-interactive-root" style="position:fixed;top:0;left:0;width:100%;height:100vh;z-index:99999;background:#fafafa;overflow:auto;"></div>\n<?php endif; ?>\n'

target = 'class="skip-link screen-reader-text"'
if target in c:
    c = c.replace(target, insert + target)
    with open(header, "w", encoding="utf-8") as f:
        f.write(c)
    print("STEP 1: Mount point added to header.php")
else:
    print("ERROR: target not found in header.php")
    sys.exit(1)

# Step 2: Remove mount point from footer.php
with open(footer, "r", encoding="utf-8") as f:
    c = f.read()

lines = c.split("\n")
new_lines = []
skip_next = False
for line in lines:
    if "// B2B wholesale React app mount point" in line:
        skip_next = True
        continue
    if skip_next:
        if '<div id="ms-b2b-interactive-root"' in line or '<div id="b2b-root"' in line:
            skip_next = False
            continue
        skip_next = False
    new_lines.append(line)

result = "\n".join(new_lines)
with open(footer, "w", encoding="utf-8") as f:
    f.write(result)
print("STEP 2: Mount point removed from footer.php")

# Verify
for path, name in [(header, "header.php"), (footer, "footer.php")]:
    with open(path, "r", encoding="utf-8") as f:
        c = f.read()
    mount_count = c.count("ms-b2b-interactive-root")
    b2b_root_count = c.count('b2b-root')
    print(f"  {name}: ms-b2b-interactive-root found {mount_count} times, b2b-root found {b2b_root_count} times")

print("DONE")
