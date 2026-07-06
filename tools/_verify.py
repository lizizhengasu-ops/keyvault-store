import os
js_path = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-v3.js'
with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()
checks = {
    'responsive display (flex-mobile/grid-desktop)': 'display:mb?"flex":"grid"' in content,
    'flexDirection column on mobile': 'flexDirection:mb?"column":"row"' in content,
    'useEffect cleanup return function': 'return function()' in content,
    'b2b-isolated-canvas isolation': 'b2b-isolated-canvas' in content,
    'overflow:hidden on pricing section': 'overflow:"hidden"' in content,
    'mobile pricing padding': 'padding:mb?"48px 16px":"80px 24px"' in content,
    'viewport width tracking': 'window.innerWidth' in content,
    'grid columns responsive': 'gridTemplateColumns:mb?"1fr":"1.2fr 1fr"' in content,
}
all_pass = True
for label, result in checks.items():
    status = 'PASS' if result else 'FAIL'
    if not result: all_pass = False
    print(f'[{status}] {label}')
print(f'\nFile: {os.path.getsize(js_path)} bytes')
print(f'Overall: {"ALL PASSED" if all_pass else "SOME FAILED"}')
