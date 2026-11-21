const fs = require('fs');
const code = fs.readFileSync('dist/scale-data.js', 'utf8');
const idx = code.indexOf('const scaleNodeMetadata =');
console.log(code.slice(idx, idx + 1500));
