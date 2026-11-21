/**
 * UNIT TESTS FOR INTERACTIVE BA INTERVIEW MODULE
 */
const assert = require('assert');
const path = require('path');
const fs = require('fs');
const vm = require('vm');

console.log('--- BẮT ĐẦU KIỂM THỬ MODULE PHỎNG VẤN BA MÔ PHỎNG ---');

// Mock browser environment
const mockStorage = {
  data: {},
  getItem(k) { return this.data[k] || null; },
  setItem(k, v) { this.data[k] = String(v); },
  removeItem(k) { delete this.data[k]; }
};

const ctx = {
  console,
  localStorage: mockStorage,
  document: {
    body: { classList: { contains: () => false, toggle: () => {} } },
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {}
  },
  window: {
    scrollTo: () => {},
    addEventListener: () => {},
    confirm: () => true
  }
};
vm.createContext(ctx);

// Load script
const interviewCode = fs.readFileSync(path.join(__dirname, 'interview.js'), 'utf8');
const exp = vm.runInContext(interviewCode + '; ({ interviewScenariosData, interviewState, renderInterviewHome, renderInterviewStudio, renderInterviewEvaluation, saveInterviewSession })', ctx);

// Test 1: Đủ 10 tình huống thực tế
console.log('[Test 1] Kiểm tra 10 tình huống phỏng vấn thực tế...');
const scenarios = exp.interviewScenariosData;
assert.equal(scenarios.length, 10, 'Phải có đúng 10 tình huống phỏng vấn thực tế');
console.log(`✓ PASS: Tải thành công ${scenarios.length}/10 tình huống.`);

// Test 2: Kiểm tra dữ liệu cấu trúc mỗi tình huống & 6 danh mục kỹ năng
console.log('[Test 2] Kiểm tra cấu trúc mỗi tình huống (Category, Roles, Turns, Rubric, STAR, Pitfalls)...');
const requiredCategories = ['Requirement', 'Stakeholder', 'Agile/Scrum', 'Technical', 'Communication', 'Problem Solving'];
const foundCategories = new Set();

scenarios.forEach((sc, i) => {
  assert.ok(sc.id, `Kịch bản ${i} thiếu ID`);
  assert.ok(sc.title, `Kịch bản ${i} thiếu title`);
  assert.ok(['Junior', 'Middle', 'Senior'].includes(sc.level), `Kịch bản ${sc.id} cấp độ không hợp lệ: ${sc.level}`);
  assert.ok(requiredCategories.includes(sc.category), `Kịch bản ${sc.id} category không hợp lệ: ${sc.category}`);
  foundCategories.add(sc.category);
  assert.ok(sc.candidateRole, `Kịch bản ${sc.id} thiếu candidateRole`);
  assert.ok(sc.interviewerRole, `Kịch bản ${sc.id} thiếu interviewerRole`);
  assert.ok(sc.scenarioContext, `Kịch bản ${sc.id} thiếu scenarioContext`);
  assert.ok(sc.initialQuestion, `Kịch bản ${sc.id} thiếu initialQuestion`);
  assert.ok(Array.isArray(sc.turns) && sc.turns.length >= 2, `Kịch bản ${sc.id} phải có tối thiểu 2 vòng hỏi (gồm câu hỏi phản biện)`);
  assert.ok(sc.modelAnswer && sc.modelAnswer.situation && sc.modelAnswer.task && sc.modelAnswer.action && sc.modelAnswer.result, `Kịch bản ${sc.id} thiếu cấu trúc STAR`);
  assert.ok(Array.isArray(sc.rubricCriteria) && sc.rubricCriteria.length === 6, `Kịch bản ${sc.id} phải có đúng 6 tiêu chí Rubric đánh giá`);
  assert.ok(Array.isArray(sc.strengths) && sc.strengths.length > 0, `Kịch bản ${sc.id} thiếu danh sách điểm mạnh`);
  assert.ok(Array.isArray(sc.weaknesses) && sc.weaknesses.length > 0, `Kịch bản ${sc.id} thiếu danh sách điểm cần cải thiện`);
  assert.ok(Array.isArray(sc.pitfalls) && sc.pitfalls.length > 0, `Kịch bản ${sc.id} thiếu danh sách bẫy lỗi thường gặp`);
});

assert.equal(foundCategories.size, 6, 'Phải có đầy đủ 6 nhóm kỹ năng chuyên môn');
console.log('✓ PASS: Tất cả 10 tình huống đều đạt chuẩn cấu trúc nghiệp vụ & STAR với 6 nhóm kỹ năng.');

// Test 3: Kiểm tra render trang danh sách (Home)
console.log('[Test 3] Kiểm tra render giao diện danh sách kịch bản & Session Tracker (Home View)...');
const homeHtml = exp.renderInterviewHome();
assert.ok(homeHtml.includes('Phòng phỏng vấn – Luyện tập tình huống BA thực tế'), 'Trang danh sách phải có tiêu đề chính');
assert.ok(homeHtml.includes('data-interview-action="set-mode"'), 'Phải có nút chọn chế độ Mock / Guided');
assert.ok(homeHtml.includes('Bắt đầu phỏng vấn'), 'Phải có nút bắt đầu phỏng vấn');
assert.ok(homeHtml.includes('interview-sessions-tracker'), 'Phải có khu vực theo dõi các phiên phỏng vấn (Sessions Tracker)');
assert.ok(homeHtml.includes('interview-category-pills'), 'Phải có bộ lọc 6 nhóm kỹ năng');
console.log('✓ PASS: Giao diện danh sách phỏng vấn & Session Tracker render chuẩn xác.');

// Test 4: Kiểm tra render phòng phỏng vấn tương tác (Studio View) & Business Rules
console.log('[Test 4] Kiểm tra phòng mô phỏng tương tác (Studio View - 2 cột & Empty Validation)...');
exp.interviewState.activeScenarioId = 'sc-1';
exp.interviewState.currentTurnIndex = 1;
exp.interviewState.isFinished = false;
exp.interviewState.answers = {}; // Reset câu trả lời rỗng
const studioHtml = exp.renderInterviewStudio();
assert.ok(studioHtml.includes('studio-layout-grid'), 'Studio phải có layout grid');
assert.ok(studioHtml.includes('dialogue-main-column'), 'Studio phải có cột chính hội thoại');
assert.ok(studioHtml.includes('studio-sidebar-panel'), 'Studio phải có cột sidebar thông tin tình huống & tiến độ');
assert.ok(studioHtml.includes('Soạn câu trả lời tự do (Chuẩn STAR)'), 'Studio phải hỗ trợ nhập câu trả lời STAR');
assert.ok(studioHtml.includes('Chọn chiến lược nhanh'), 'Studio phải hỗ trợ trắc nghiệm chiến lược');
assert.ok(studioHtml.includes('disabled'), 'Khi chưa nhập câu trả lời, nút gửi phải bị vô hiệu hóa (disabled)');
assert.ok(studioHtml.includes('btn-save-draft'), 'Phải có nút lưu nháp (Save draft)');
console.log('✓ PASS: Phòng mô phỏng phỏng vấn 2 cột render đúng luồng, khóa nút gửi khi rỗng.');

// Test 5: Kiểm tra lưu phiên & Báo cáo đánh giá Rubric (Evaluation View)
console.log('[Test 5] Kiểm tra báo cáo đánh giá & Rubric 6 tiêu chí (Evaluation View)...');
exp.interviewState.answers['sc-1'] = {
  turn1: { type: 'text', content: 'Tôi sẽ chủ động lắng nghe và giải thích quy trình audit trail cho Trưởng phòng vận hành để giảm rủi ro.' },
  turn2: { type: 'text', content: 'Đề xuất thử nghiệm pilot 2 tuần với nhóm nhỏ để đảm bảo an toàn trước khi nhân rộng.' }
};
exp.interviewState.isFinished = true;
const evalHtml = exp.renderInterviewEvaluation(scenarios[0]);
assert.ok(evalHtml.includes('Đánh giá chi tiết theo Rubric 6 tiêu chí tuyển dụng BA') || evalHtml.includes('6 tiêu chí'), 'Evaluation view phải có Rubric 6 tiêu chí');
assert.ok(evalHtml.includes('Phân tích vấn đề'), 'Phải có tiêu chí Phân tích vấn đề');
assert.ok(evalHtml.includes('Tư duy logic'), 'Phải có tiêu chí Tư duy logic');
assert.ok(evalHtml.includes('Kỹ năng giao tiếp'), 'Phải có tiêu chí Kỹ năng giao tiếp');
assert.ok(evalHtml.includes('Quản lý Stakeholder'), 'Phải có tiêu chí Quản lý Stakeholder');
assert.ok(evalHtml.includes('Giải pháp đề xuất'), 'Phải có tiêu chí Giải pháp đề xuất');
assert.ok(evalHtml.includes('Tính thuyết phục'), 'Phải có tiêu chí Tính thuyết phục');
assert.ok(evalHtml.includes('Câu trả lời mẫu chuẩn phương pháp STAR') || evalHtml.includes('STAR'), 'Phải có Model Answer chuẩn STAR');
assert.ok(evalHtml.includes('Các lỗi sai thường gặp') || evalHtml.includes('Common Pitfalls'), 'Phải có Common Pitfalls');
assert.ok(evalHtml.includes('Câu trả lời của bạn trong phiên phỏng vấn'), 'Phải hiển thị phần review câu trả lời của ứng viên');

// Kiểm tra session đã được lưu vào localStorage
const savedSessions = JSON.parse(mockStorage.getItem('vy-interview-sessions') || '{}');
assert.ok(savedSessions['sc-1'], 'Phiên phỏng vấn phải được lưu tự động vào localStorage');
assert.equal(savedSessions['sc-1'].status, 'completed', 'Trạng thái phiên phải là completed');
console.log(`✓ PASS: Báo cáo đánh giá Rubric & Feedback render hoàn hảo, đã lưu session với điểm ${savedSessions['sc-1'].score}/100.`);

console.log('\n======================================================');
console.log('🎉 TẤT CẢ 5 TEST SUITES CỦA PHÒNG PHỎNG VẤN ĐÃ VƯỢT QUA!');
console.log('======================================================\n');
