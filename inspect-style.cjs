const fs = require('fs');
const css = fs.readFileSync('dist/style.css', 'utf8');
const lines = css.split('\n');
console.log('style.css lines:', lines.length);
for (let i = 0; i < 60; i++) {
  console.log(lines[i]);
}
