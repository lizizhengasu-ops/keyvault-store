import os, json

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Written: {os.path.basename(path)} ({len(content)} chars)')

# First test simple file
wp = r'C:\Users\31961\Documents\microsoft web\mifan-site\test_write.txt'
write_file(wp, 'test ok')
print('Write test succeeded')