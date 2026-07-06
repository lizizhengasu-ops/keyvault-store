const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function main() {
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'local'
  });

  // 1. Insert wp_posts for the attachment
  const fileUrl = 'http://keysavings.local/wp-content/uploads/2026/06/logo.svg';
  const filePath = '2026/06/logo.svg';
  const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const excerpt = 'Keys-starter logo - 4 colorful rings with key silhouette';
  
  const [result] = await conn.execute(
    "INSERT INTO wp_posts (post_author, post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, ping_status, post_password, post_name, to_ping, pinged, post_modified, post_modified_gmt, post_content_filtered, post_parent, guid, menu_order, post_type, post_mime_type, comment_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [1, now, now, '', 'Keys-starter Logo', excerpt, 'inherit', 'open', 'closed', '', 'keys-starter-logo', '', '', now, now, '', 0, fileUrl, 0, 'attachment', 'image/svg+xml', 0]
  );
  
  const attachId = result.insertId;
  console.log('Inserted attachment with ID: ' + attachId);

  // 2. Insert wp_postmeta for _wp_attached_file
  await conn.execute(
    "INSERT INTO wp_postmeta (post_id, meta_key, meta_value) VALUES (?, '_wp_attached_file', ?)",
    [attachId, filePath]
  );

  // SVG metadata
  const svgContent = fs.readFileSync('C:\\\\Users\\\\31961\\\\Documents\\\\microsoft web\\\\logo.svg', 'utf8');
  const width = svgContent.match(/width=\"(\\d+)\"/);
  const height = svgContent.match(/height=\"(\\d+)\"/);
  const meta = JSON.stringify({
    width: width ? parseInt(width[1]) : 400,
    height: height ? parseInt(height[1]) : 120,
    file: filePath,
    filesize: fs.statSync('C:\\\\Users\\\\31961\\\\Documents\\\\microsoft web\\\\logo.svg').size,
    image_meta: { aperture: 0, credit: '', camera: '', caption: '', created_timestamp: 0, copyright: '', focal_length: 0, iso: 0, shutter_speed: 0, title: '', orientation: 0 }
  });
  
  await conn.execute(
    "INSERT INTO wp_postmeta (post_id, meta_key, meta_value) VALUES (?, '_wp_attachment_metadata', ?)",
    [attachId, meta]
  );

  // 3. Update theme_mods_astra to set custom_logo
  const [rows] = await conn.execute(
    "SELECT option_value FROM wp_options WHERE option_name = 'theme_mods_astra'"
  );
  
  if (rows.length > 0) {
    let themeMods = JSON.parse(rows[0].option_value);
    themeMods.custom_logo = attachId;
    await conn.execute(
      "UPDATE wp_options SET option_value = ? WHERE option_name = 'theme_mods_astra'",
      [JSON.stringify(themeMods)]
    );
    console.log('Updated theme_mods_astra with custom_logo: ' + attachId);
  } else {
    const themeMods = { custom_logo: attachId };
    await conn.execute(
      "INSERT INTO wp_options (option_name, option_value, autoload) VALUES ('theme_mods_astra', ?, 'yes')",
      [JSON.stringify(themeMods)]
    );
    console.log('Created theme_mods_astra with custom_logo: ' + attachId);
  }

  console.log('SUCCESS! Logo uploaded and set.');
  await conn.end();
}

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
