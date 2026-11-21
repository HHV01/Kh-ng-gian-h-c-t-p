const fs = require('fs');
const code = fs.readFileSync('dist/scale-data.js', 'utf8');
const idx = code.indexOf('const scaleNodeMetadata =');
console.log(code.slice(idx + 800, idx + 2500));
