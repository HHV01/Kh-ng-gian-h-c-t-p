const fs = require('fs');
const code = fs.readFileSync('dist/scale-data.js', 'utf8');
let idx = code.indexOf('how-request-travels', 7300);
console.log('Next Index:', idx);
if (idx !== -1) {
  console.log(code.slice(idx - 20, idx + 2500));
}
