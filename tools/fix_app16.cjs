const fs = require('fs');
let app = fs.readFileSync('C:/Users/31961/Documents/microsoft web/ms-replica/src/App.tsx', 'utf-8');

// Check if CartProvider is already imported
if (!app.includes('CartProvider')) {
  // Add import
  app = app.replace(
    'import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"',
    'import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"\nimport { CartProvider, useCart } from "./CartContext"'
  );
  // Wrap routes with CartProvider
  app = app.replace(
    '    <BrowserRouter>\n      <AppContentHelper />\n    </BrowserRouter>',
    '    <BrowserRouter>\n      <CartProvider>\n        <AppContentHelper />\n      </CartProvider>\n    </BrowserRouter>'
  );
  fs.writeFileSync('C:/Users/31961/Documents/microsoft web/ms-replica/src/App.tsx', app, 'utf-8');
  console.log('ADDED CartProvider to App.tsx');
} else {
  console.log('CartProvider already exists');
}