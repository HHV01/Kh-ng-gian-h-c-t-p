const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

console.log('--- TEST HOW-REQUEST-TRAVELS INTERACTIVE LESSON ---');

const storage = {};
const ctx = {
  console: console,
  localStorage: { getItem: k => storage[k] || null, setItem: (k, v) => storage[k] = v },
  document: {
    addEventListener: () => {},
    querySelector: () => ({ innerHTML: '', textContent: '', classList: { toggle: () => {} }, querySelectorAll: () => [] }),
    querySelectorAll: () => []
  },
  window: {},
  addEventListener: () => {},
  module: { exports: {} },
  location: { hash: '#/how-request-travels/1' }
};
ctx.window = ctx;
vm.createContext(ctx);

const files = ['scale-data.js', 'scale-components.js', 'scale-views.js'];
for (const f of files) {
  vm.runInContext(fs.readFileSync('dist/' + f, 'utf8'), ctx);
}

const lessonsDetail = ctx.module.exports.scaleLessonsDetail || ctx.scaleLessonsDetail;
const nodeMeta = ctx.module.exports.scaleNodeMetadata || ctx.scaleNodeMetadata;

// 1. Kiểm tra dữ liệu lesson how-request-travels
const lesson = lessonsDetail['how-request-travels'];
assert.ok(lesson, 'Phải có lesson how-request-travels trong scaleLessonsDetail');
assert.equal(lesson.steps.length, 4, 'how-request-travels phải có 4 bước');
console.log('✓ PASS: Dữ liệu 4 bước hoàn chỉnh.');

// 2. Kiểm tra render từng bước
for (let step = 1; step <= 4; step++) {
  const html = ctx.renderScaleLessonView('how-request-travels', step);
  assert.ok(html.includes('scale-lesson-studio'), `Bước ${step} phải render scale-lesson-studio`);
  assert.ok(html.includes('scale-diagram-interactive-svg'), `Bước ${step} phải có sơ đồ SVG tương tác`);
  assert.ok(html.includes('btn-toggle-lessons'), `Bước ${step} phải có nút toggle danh mục bài học`);
  assert.ok(html.includes('scale-metrics-panel'), `Bước ${step} phải có bảng Live Metrics`);
  assert.ok(html.includes('scale-inspector-panel'), `Bước ${step} phải có Inspector`);
  console.log(`✓ PASS: Bước ${step} render HTML hoàn hảo.`);
}

// 3. Kiểm tra metadata của các node mới
assert.ok(nodeMeta['origin'], 'Phải có metadata cho origin');
assert.ok(nodeMeta['server2'], 'Phải có metadata cho server2');
assert.ok(nodeMeta['dns'], 'Phải có metadata cho dns');
assert.ok(nodeMeta['cdn'], 'Phải có metadata cho cdn');
console.log('✓ PASS: Tất cả các node đều có đầy đủ metadata kiến trúc.');

console.log('🎉 TẤT CẢ TEST CỦA HOW-REQUEST-TRAVELS ĐÃ ĐẠT!');
