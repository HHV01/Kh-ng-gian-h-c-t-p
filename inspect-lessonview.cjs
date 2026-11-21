const fs = require('fs');
const code = fs.readFileSync('dist/scale-views.js', 'utf8');
const idx = code.indexOf('function renderScaleLessonView');
console.log(code.slice(idx, idx + 2500));
