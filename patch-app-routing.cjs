const fs = require('fs');
let code = fs.readFileSync('dist/app.js', 'utf8');

const oldRouting = "if(location.hash&&location.hash.startsWith('#/')){const h=location.hash.replace(/^#\\/?/,'');if(h==='scale'||['about','contact','privacy','terms'].includes(h)||h.includes('/')){page='System Scale';render();goScale(h==='scale'?'home':h.includes('/')?'lesson':h,h.split('/')[0]||'caching',h.split('/')[1]||1);}}";

const newRouting = "if(location.hash&&location.hash.startsWith('#/')){const h=location.hash.replace(/^#\\/?/,'');const p=h.split('/');if(h==='scale'||['about','contact','privacy','terms'].includes(h)||h.includes('/')){page='System Scale';render();if(p[0]==='scale'&&p[1]){goScale('lesson',p[1],p[2]||1);}else if(p.length>=2){goScale('lesson',p[0],p[1]||1);}else{goScale(h==='scale'?'home':h);}}}";

if (code.includes(oldRouting)) {
  code = code.replace(oldRouting, newRouting);
  fs.writeFileSync('dist/app.js', code, 'utf8');
  console.log('Updated hash routing in dist/app.js');
} else {
  console.log('oldRouting string not found exactly, inspecting app.js tail');
  const idx = code.indexOf("if(location.hash");
  console.log(code.slice(idx));
}
