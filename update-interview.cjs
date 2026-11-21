const fs = require('fs');
let code = fs.readFileSync('dist/interview.js', 'utf8');

const oldDecl = "var esc = typeof esc !== 'undefined' ? esc : (s => String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c])));";
const newDecl = "function escInterview(s) { return String(s || '').replace(/[&<>'\"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c])); }";

if (code.includes(oldDecl)) {
  code = code.replace(oldDecl, newDecl);
  code = code.replace(/\besc\(/g, 'escInterview(');
  fs.writeFileSync('dist/interview.js', code, 'utf8');
  console.log('Successfully replaced esc with escInterview in dist/interview.js');
} else {
  console.error('Could not find oldDecl in interview.js');
}
