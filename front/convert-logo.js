const sharp = require('sharp');
const fs = require('fs');

const svg = fs.readFileSync('C:\\Users\\31961\\Documents\\microsoft web\\logo.svg');
sharp(Buffer.from(svg))
  .resize(400, 120)
  .png()
  .toFile('C:\\Users\\31961\\Documents\\microsoft web\\logo.png')
  .then(() => console.log('PNG created!'))
  .catch(err => console.error('Error:', err.message));
