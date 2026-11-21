const fs = require('fs');
const code = fs.readFileSync('dist/scale-views.js', 'utf8');
const idx = code.indexOf('function goScale');
console.log(code.slice(idx, idx + 1000));
