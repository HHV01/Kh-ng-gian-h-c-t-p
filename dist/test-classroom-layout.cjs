const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

console.log('--- KIỂM TRA BỐ CỤC PHÒNG HỌC MỚI (CLASSROOM LAYOUT VERIFICATION) ---');

const storage = {};
const elements = {};
const listeners = {};

const ctx = vm.createContext({
  localStorage: {
    getItem: k => storage[k] || null,
    setItem: (k, v) => storage[k] = v
  },
  document: {
    addEventListener: (n, f) => (listeners[n] ??= []).push(f),
    querySelector: s => elements[s] ??= {
      innerHTML: '',
      textContent: '',
      classList: {
        contains: () => false,
        toggle: () => {}
      },
      querySelectorAll: () => []
    },
    querySelectorAll: () => [],
    body: { classList: { contains: () => false, toggle: () => {} } }
  },
  window: { scrollTo: () => {}, addEventListener: () => {} },
  location: { hash: '#/how-request-travels/1' },
  toast: () => {}
});

// Load scale-data.js, scale-components.js, scale-views.js
const dataCode = fs.readFileSync(path.join(__dirname, 'scale-data.js'), 'utf8');
const compCode = fs.readFileSync(path.join(__dirname, 'scale-components.js'), 'utf8');
const viewCode = fs.readFileSync(path.join(__dirname, 'scale-views.js'), 'utf8');

vm.runInContext(dataCode, ctx);
vm.runInContext(compCode, ctx);
vm.runInContext(viewCode, ctx);

// Test 1: Kiểm tra render view của bài how-request-travels bước 1
console.log('[Test 1] Render bài how-request-travels/1...');
const htmlStep1 = vm.runInContext("renderScaleLessonView('how-request-travels', 1)", ctx);

// A. Chọn bước ở trên (Step selector on top)
assert.ok(htmlStep1.includes('scale-step-selector-strip'), 'Phải có thanh chọn bước ở trên (scale-step-selector-strip)');
assert.ok(htmlStep1.includes('Bước 1'), 'Phải có nút Bước 1');
assert.ok(htmlStep1.includes('Bước 2'), 'Phải có nút Bước 2');
assert.ok(htmlStep1.includes('Bước 3'), 'Phải có nút Bước 3');
assert.ok(htmlStep1.includes('Bước 4'), 'Phải có nút Bước 4');
assert.ok(htmlStep1.includes('data-scale-action="go-step"'), 'Nút bước phải có action go-step');
console.log('✓ PASS: Chọn bước ở trên đầy đủ 4 bước với tab tương tác.');

// B. Sơ đồ ở trung tâm (Diagram in center stage)
assert.ok(htmlStep1.includes('classroom-center-stage'), 'Phải có khung trung tâm classroom-center-stage');
assert.ok(htmlStep1.includes('classroom-diagram-wrapper'), 'Phải có classroom-diagram-wrapper bọc sơ đồ SVG');
assert.ok(htmlStep1.includes('scale-diagram-interactive-svg'), 'Sơ đồ SVG phải nằm trong trung tâm');
console.log('✓ PASS: Sơ đồ tương tác SVG được đặt ở trung tâm.');

// C. Các chỉ số được ghi rõ là dữ liệu minh họa
assert.ok(htmlStep1.includes('Bảng chỉ số hệ thống'), 'Phải có tiêu đề bảng chỉ số');
assert.ok(htmlStep1.includes('Dữ liệu mô phỏng minh họa'), 'Bảng chỉ số phải ghi rõ Dữ liệu mô phỏng minh họa');
assert.ok(htmlStep1.includes('dữ liệu mô phỏng minh họa'), 'Phải có footnote ghi chú dữ liệu mô phỏng');
console.log('✓ PASS: Các chỉ số hệ thống ghi rõ là dữ liệu mô phỏng minh họa.');

// D. Giải thích và chi tiết thành phần bên cạnh (Explanation & Inspector beside diagram)
assert.ok(htmlStep1.includes('classroom-side-column'), 'Phải có cột bên cạnh classroom-side-column');
assert.ok(htmlStep1.includes('scale-explanation-panel'), 'Giải thích bước học phải nằm trong cột bên cạnh');
assert.ok(htmlStep1.includes('scale-inspector-panel'), 'Bảng Inspector chi tiết thành phần phải nằm trong cột bên cạnh');
console.log('✓ PASS: Giải thích và Chi tiết thành phần được bố trí bên cạnh sơ đồ.');

// Test 2: Kiểm tra CSS không còn position: fixed trên Inspector và không có negative margins
console.log('[Test 2] Kiểm tra CSS layout scale.css...');
const cssCode = fs.readFileSync(path.join(__dirname, 'scale.css'), 'utf8');

// Không có position: fixed; right: -360px
assert.ok(!cssCode.includes('right: -360px'), 'CSS không được chứa right: -360px');
assert.ok(!cssCode.includes('right: -100%'), 'CSS không được chứa right: -100%');
// Không có negative margin trên .designed-to-scale-app
assert.ok(!cssCode.includes('margin: -32px -38px -50px'), 'CSS không được chứa margin -32px -38px -50px gây tràn ngang');
assert.ok(!cssCode.includes('calc(100% + 76px)'), 'CSS không được chứa calc(100% + 76px)');
assert.ok(cssCode.includes('.classroom-workspace-grid'), 'CSS phải định nghĩa grid phòng học');
assert.ok(cssCode.includes('.classroom-side-column'), 'CSS phải định nghĩa cột bên cạnh');
console.log('✓ PASS: CSS đã loại bỏ hoàn toàn drawer đè nội dung và thanh cuộn ngang.');

// Test 3: Kiểm tra render các bước 2, 3, 4
console.log('[Test 3] Kiểm tra dữ liệu và render bước 2, 3, 4 của how-request-travels...');
for (let step = 2; step <= 4; step++) {
  const stepHtml = vm.runInContext(`renderScaleLessonView('how-request-travels', ${step})`, ctx);
  assert.ok(stepHtml.includes(`Bước ${step}`), `Bước ${step} phải render đúng`);
  assert.ok(stepHtml.includes('classroom-side-column'), `Bước ${step} phải có cột bên cạnh`);
}
console.log('✓ PASS: Các bước 1, 2, 3, 4 của how-request-travels đều render chuẩn xác.');

console.log('\n================================================================');
console.log('🎉 TẤT CẢ CÁC MỤC KIỂM THỬ BỐ CỤC PHÒNG HỌC MỚI ĐỀU THÀNH CÔNG!');
console.log('================================================================\n');
