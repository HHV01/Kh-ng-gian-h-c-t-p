const fs = require('fs');
const code = fs.readFileSync('dist/scale-components.js', 'utf8');
const lines = code.split('\n');
console.log('Total lines:', lines.length);
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('esc(')) {
    console.log(`Line ${i + 1}: ${lines[i]}`);
  }
}
