const fs = require('fs');
const files = [
  '../ms-replica-v2/src/main.tsx',
  '../ms-replica/src/main.tsx'
];
for (const f of files) {
  let c = fs.readFileSync(f, 'utf-8');
  c = c.replace(/\/\/ Body style[\s\S]*?document\.body\.style\.[a-z]+\s*=\s*'[^']*'/g, '');
  c = c.replace(/document\.body\.style\.[a-z]+\s*=.*/g, '');
  fs.writeFileSync(f, c, 'utf-8');
  console.log('CLEANED ' + f);
}