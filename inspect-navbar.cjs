const fs = require('fs');
const code = fs.readFileSync('dist/scale-components.js', 'utf8');
const idx = code.indexOf('function ScaleNavBar(');
console.log(code.slice(idx, idx + 1200));
