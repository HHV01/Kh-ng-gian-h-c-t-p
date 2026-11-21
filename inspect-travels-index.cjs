const fs = require('fs');
const code = fs.readFileSync('dist/scale-data.js', 'utf8');
const idx = code.indexOf('how-request-travels');
console.log('Index:', idx);
if (idx !== -1) {
  console.log(code.slice(idx - 20, idx + 2500));
}
