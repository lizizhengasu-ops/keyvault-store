import pathlib
p = pathlib.Path('C:/Users/31961/Documents/microsoft web/reactbits-test/src/App.tsx')
c = p.read_text(encoding='utf-8')
print(len(c))
