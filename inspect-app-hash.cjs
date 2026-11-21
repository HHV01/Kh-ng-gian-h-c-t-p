const fs = require('fs');
const app = fs.readFileSync('dist/app.js', 'utf8');
const idx = app.indexOf('location.hash&&location.hash.startsWith');
console.log(app.slice(idx - 20, idx + 400));
