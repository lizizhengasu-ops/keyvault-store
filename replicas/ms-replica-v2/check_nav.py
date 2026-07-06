import json
d = json.load(open(r'C:\Users\31961\Documents\microsoft web\ms-replica\ms-full-extract.json', encoding='utf-8'))
for p in ['home','store','surface','windows','b2b']:
    c = d[p].get('content',{})
    nav = c.get('navLinks',[])
    ntext = ' '.join([n['text'] for n in nav[:10]])
    print(f'{p} ({len(nav)} links): {ntext[:200]}')
    footer = c.get('footerLinks',[])
    ftext = ' '.join([n['text'] for n in footer[:10]])
    print(f'  footer ({len(footer)}): {ftext[:200]}')
    tok = d[p].get('tokens',{})
    for tag in ['body','h1','h2','h3','nav','footer']:
        t = tok.get(tag,{})
        if t:
            print(f'  {tag}: size={t.get(\"fontSize\",\"?\")} fw={t.get(\"fontWeight\",\"?\")} color={t.get(\"color\",\"?\")} bg={t.get(\"backgroundColor\",\"?\")}')
    print()