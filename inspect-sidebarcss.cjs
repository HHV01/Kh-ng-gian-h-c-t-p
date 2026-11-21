const fs = require('fs');
const css = fs.readFileSync('dist/scale.css', 'utf8');
const idx = css.indexOf('.scale-lesson-sidebar');
console.log(css.slice(idx, idx + 1200));
