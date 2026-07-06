const mysql = require('mysql2/promise');
async function main() {
  const c = await mysql.createConnection({host:'localhost',user:'root',password:'root',database:'local',connectTimeout:3000});
  const [rows] = await c.execute("SELECT option_value FROM wp_options WHERE option_name='theme_mods_astra'");
  if (rows.length > 0) {
    let mods = JSON.parse(rows[0].option_value);
    mods.custom_logo = 8920;
    await c.execute("UPDATE wp_options SET option_value=? WHERE option_name='theme_mods_astra'", [JSON.stringify(mods)]);
  }
  // Also set site_icon
  await c.execute("INSERT INTO wp_options (option_name,option_value,autoload) VALUES ('site_icon',8920,'yes') ON DUPLICATE KEY UPDATE option_value=8920");
  console.log('Logo set successfully! ID: 8920');
  console.log('theme_mods:', JSON.stringify(mods));
  await c.end();
}
main().catch(e => { console.error('ERR:', e.message); process.exit(1); });
