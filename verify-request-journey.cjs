const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx=vm.createContext({document:{addEventListener(){},querySelector(){return null}},window:{addEventListener(){},scrollTo(){}},localStorage:{getItem(){return null}},location:{hash:''},setInterval(){},clearInterval(){},uiIcon(){return ''}});
for(const f of ['scale-data.js','scale-components.js','request-journey.js','ba-focus.js','scale-views.js'])vm.runInContext(fs.readFileSync(__dirname+'/dist/'+f,'utf8'),ctx);
for(let step=1;step<=4;step++){
 const html=vm.runInContext(`renderScaleLessonView('how-request-travels',${step})`,ctx);
 assert.ok(html.includes('request-journey'));
 assert.equal((html.match(/data-scale-step=/g)||[]).length,4);
 assert.ok(html.includes(`data-scale-step="${step}" class="active"`));
 assert.ok(html.includes('Tình huống và quy tắc giả lập'));
 assert.ok(!html.includes('studio-inspector-col'));
 assert.equal(html.includes('data-scale-action="complete-lesson"'),step===4);
}
vm.runInContext("scaleState.selectedNodeId='partner'",ctx);
let html=vm.runInContext("renderScaleLessonView('how-request-travels',3)",ctx);
assert.ok(html.includes('<h2>Hệ thống kho</h2>'));
html=vm.runInContext("renderScaleLessonView('how-request-travels',1)",ctx);
assert.ok(html.includes('<h2>Thông tin đặt hàng</h2>'),'Stale node selection must fall back to the current step');
assert.ok(vm.runInContext("renderRequestJourney(99)",ctx).includes('4 / 4 bước'));
console.log('PASS: four-step route, active step, current-node details, stale-selection fallback, clamped step, completion control and simulated-data label.');

const baHome=vm.runInContext('renderBAFocusHome()',ctx);assert.ok(baHome.includes('Kỹ thuật vừa đủ cho BA'));
for(let step=1;step<=4;step++){const content=vm.runInContext(`renderRequestJourney(${step})`,ctx);assert.ok(content.includes('BA cần hỏi gì?'));assert.ok(content.includes('Ví dụ acceptance criteria'));assert.ok(content.includes('Bài tập thực hành'));assert.ok(!content.includes('DNS Anycast'));}
console.log('PASS: BA-first home, business diagrams, elicitation questions, deliverables, acceptance criteria and exercises across four steps.');
