/**
 * UNIT TESTS FOR INTERACTIVE BA INTERVIEW MODULE
 */
const assert = require('assert');
const path = require('path');
const fs = require('fs');
const vm = require('vm');

console.log('--- BẮT ĐẦU KIỂM THỬ MODULE PHỎNG VẤN BA MÔ PHỎNG ---');

// Mock browser environment
const ctx = {
  console,
  localStorage: {
    data: {},
    getItem(k) { return this.data[k] || null; },
    setItem(k, v) { this.data[k] = String(v); }
  },
  document: {
    body: { classList: { contains: () => false, toggle: () => {} } },
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {}
  },
  window: {
    scrollTo: () => {},
    addEventListener: () => {}
  }
};
vm.createContext(ctx);

// Load script
const interviewCode = fs.readFileSync(path.join(__dirname, 'interview.js'), 'utf8');
const exp = vm.runInContext(interviewCode + '; ({ interviewScenariosData, interviewState, renderInterviewHome, renderInterviewStudio, renderInterviewEvaluation })', ctx);

// Test 1: Đủ 10 tình huống thực tế
console.log('[Test 1] Kiểm tra 10 tình huống phỏng vấn thực tế...');
const scenarios = exp.interviewScenariosData;
assert.equal(scenarios.length, 10, 'Phải có đúng 10 tình huống phỏng vấn thực tế');
console.log(`✓ PASS: Tải thành công ${scenarios.length}/10 tình huống.`);

// Test 2: Kiểm tra dữ liệu cấu trúc mỗi tình huống
console.log('[Test 2] Kiểm tra cấu trúc mỗi tình huống (Brief, Context, Turns, Rubric, STAR, Pitfalls)...');
scenarios.forEach((sc, i) => {
  assert.ok(sc.id, `Kịch bản ${i} thiếu ID`);
  assert.ok(sc.title, `Kịch bản ${i} thiếu title`);
  assert.ok(['Junior', 'Middle', 'Senior'].includes(sc.level), `Kịch bản ${sc.id} cấp độ không hợp lệ: ${sc.level}`);
  assert.ok(sc.skill, `Kịch bản ${sc.id} thiếu nhóm kỹ năng`);
  assert.ok(sc.context, `Kịch bản ${sc.id} thiếu context`);
  assert.ok(Array.isArray(sc.turns) && sc.turns.length >= 2, `Kịch bản ${sc.id} phải có tối thiểu 2 vòng hỏi (gồm câu hỏi vặn)`);
  assert.ok(sc.modelAnswer && sc.modelAnswer.situation && sc.modelAnswer.task && sc.modelAnswer.action && sc.modelAnswer.result, `Kịch bản ${sc.id} thiếu cấu trúc STAR`);
  assert.ok(Array.isArray(sc.rubricCriteria) && sc.rubricCriteria.length === 6, `Kịch bản ${sc.id} phải có đúng 6 tiêu chí Rubric đánh giá`);
  assert.ok(Array.isArray(sc.strengths) && sc.strengths.length > 0, `Kịch bản ${sc.id} thiếu danh sách điểm mạnh`);
  assert.ok(Array.isArray(sc.weaknesses) && sc.weaknesses.length > 0, `Kịch bản ${sc.id} thiếu danh sách điểm cần cải thiện`);
  assert.ok(Array.isArray(sc.pitfalls) && sc.pitfalls.length > 0, `Kịch bản ${sc.id} thiếu danh sách bẫy lỗi thường gặp`);
});
console.log('✓ PASS: Tất cả 10 tình huống đều đạt chuẩn cấu trúc nghiệp vụ & STAR.');

// Test 3: Kiểm tra render trang danh sách (Home)
console.log('[Test 3] Kiểm tra render giao diện danh sách kịch bản (Home View)...');
const homeHtml = exp.renderInterviewHome();
assert.ok(homeHtml.includes('Phòng phỏng vấn mô phỏng BA'), 'Trang danh sách phải có tiêu đề chính');
assert.ok(homeHtml.includes('data-interview-action="set-mode"'), 'Phải có nút chọn chế độ Mock / Guided');
assert.ok(homeHtml.includes('Bắt đầu phỏng vấn'), 'Phải có nút bắt đầu phỏng vấn');
console.log('✓ PASS: Giao diện danh sách phỏng vấn render chuẩn xác.');

// Test 4: Kiểm tra render phòng phỏng vấn tương tác (Studio View)
console.log('[Test 4] Kiểm tra phòng mô phỏng tương tác (Studio View)...');
exp.interviewState.activeScenarioId = 'sc-1';
exp.interviewState.currentTurnIndex = 1;
exp.interviewState.isFinished = false;
const studioHtml = exp.renderInterviewStudio();
assert.ok(studioHtml.includes('Bối cảnh dự án &amp; Vấn đề phát sinh') || studioHtml.includes('Bối cảnh dự án & Vấn đề phát sinh'), 'Studio phải có khung bối cảnh tình huống');
assert.ok(studioHtml.includes('Nhập câu trả lời tự do (Chuẩn STAR)'), 'Studio phải hỗ trợ nhập câu trả lời STAR');
assert.ok(studioHtml.includes('Chọn chiến lược nhanh'), 'Studio phải hỗ trợ trắc nghiệm chiến lược');
assert.ok(studioHtml.includes('Tiếp tục câu hỏi vặn'), 'Vòng 1 phải có nút chuyển sang câu hỏi vặn');
console.log('✓ PASS: Phòng mô phỏng phỏng vấn render đúng luồng.');

// Test 5: Kiểm tra render báo cáo đánh giá Rubric (Evaluation View)
console.log('[Test 5] Kiểm tra báo cáo đánh giá & Rubric 6 tiêu chí (Evaluation View)...');
exp.interviewState.isFinished = true;
const evalHtml = exp.renderInterviewEvaluation(scenarios[0]);
assert.ok(evalHtml.includes('Đánh giá chi tiết theo 6 tiêu chí'), 'Evaluation view phải có Rubric 6 tiêu chí');
assert.ok(evalHtml.includes('Phân tích vấn đề'), 'Phải có tiêu chí Phân tích vấn đề');
assert.ok(evalHtml.includes('Tư duy logic'), 'Phải có tiêu chí Tư duy logic');
assert.ok(evalHtml.includes('Kỹ năng giao tiếp'), 'Phải có tiêu chí Kỹ năng giao tiếp');
assert.ok(evalHtml.includes('Quản lý Stakeholder'), 'Phải có tiêu chí Quản lý Stakeholder');
assert.ok(evalHtml.includes('Giải pháp đề xuất'), 'Phải có tiêu chí Giải pháp đề xuất');
assert.ok(evalHtml.includes('Tính thuyết phục'), 'Phải có tiêu chí Tính thuyết phục');
assert.ok(evalHtml.includes('Câu trả lời mẫu theo phương pháp STAR'), 'Phải có Model Answer chuẩn STAR');
assert.ok(evalHtml.includes('Các lỗi thường gặp'), 'Phải có Common Pitfalls');
console.log('✓ PASS: Báo cáo đánh giá Rubric & Feedback render hoàn hảo.');

console.log('\n======================================================');
console.log('🎉 TẤT CẢ 5 TEST SUITES CỦA PHÒNG PHỎNG VẤN ĐÃ VƯỢT QUA!');
console.log('======================================================\n');
