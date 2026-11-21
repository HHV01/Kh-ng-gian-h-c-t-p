const fs = require('fs');
const css = fs.readFileSync('dist/scale.css', 'utf8');
const idx = css.indexOf('.scale-lesson-studio');
console.log(code = css.slice(idx, idx + 1000));
