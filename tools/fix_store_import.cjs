const fs = require('fs');
let c = fs.readFileSync('C:/Users/31961/Documents/microsoft web/ms-replica/src/pages/StorePage.tsx', 'utf-8');
c = c.replace("import { useCart }", "import { useCart } from \"../CartContext\"");
fs.writeFileSync('C:/Users/31961/Documents/microsoft web/ms-replica/src/pages/StorePage.tsx', c, 'utf-8');
console.log('OK');