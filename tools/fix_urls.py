import re

with open(r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\functions.php', 'r', encoding='utf-8', errors='replace') as f:
    c = f.read()

# Find the msUrls generation section in Language-Specific Nav
old = """    echo \"<script>
var msUrls=\" . json_encode(array(
        \"shop_en\" => \, \"win_en\" => \, \"office_en\" => \,
        \"account_en\" => \, \"cart_en\" => \,
        \"shop_zh\" => \, \"win_zh\" => \, \"office_zh\" => \,
        \"account_zh\" => \, \"cart_zh\" => \,
        \"shop_es\" => \, \"win_es\" => \, \"office_es\" => \,
        \"account_es\" => \, \"cart_es\" => \
    )) . \";
</script>\";"""

new = """    echo \"<script>
var msUrls=\" . json_encode(array(
        \"shop_en\" => str_replace(\, '', \),
        \"win_en\" => str_replace(\, '', \),
        \"office_en\" => str_replace(\, '', \),
        \"account_en\" => str_replace(\, '', \),
        \"cart_en\" => str_replace(\, '', \),
        \"shop_zh\" => str_replace(\, '', \),
        \"win_zh\" => str_replace(\, '', \),
        \"office_zh\" => str_replace(\, '', \),
        \"account_zh\" => str_replace(\, '', \),
        \"cart_zh\" => str_replace(\, '', \),
        \"shop_es\" => str_replace(\, '', \),
        \"win_es\" => str_replace(\, '', \),
        \"office_es\" => str_replace(\, '', \),
        \"account_es\" => str_replace(\, '', \),
        \"cart_es\" => str_replace(\, '', \)
    )) . \";
</script>\";"""

if old in c:
    c = c.replace(old, new)
    print('msUrls updated to use relative paths')

with open(r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\functions.php', 'w', encoding='utf-8') as f:
    f.write(c)
print('File saved')
