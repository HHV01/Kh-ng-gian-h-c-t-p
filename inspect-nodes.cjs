const fs = require('fs');
const code = fs.readFileSync('dist/scale-components.js', 'utf8');
const idx = code.indexOf('${diagramState.nodes.map(node =>');
console.log(code.slice(idx, idx + 2500));
