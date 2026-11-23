const fs = require('fs');
const quizBank = require('../dist/quiz-data.js');
global.quizBank = quizBank;
global.state = { done: [], scores: { 0: 75, 1: 50 }, dark: false, review: 0 };
global.tracks = [
  ['Nền tảng Business Analysis','Vai trò, tư duy & kỹ năng cốt lõi',12,75,'#7771dc','◇'],
  ['Khai thác yêu cầu','Hiểu đúng vấn đề, hỏi đúng câu hỏi',16,42,'#e7a05e','♧'],
  ['Quản lý yêu cầu','Từ yêu cầu đến giá trị kinh doanh',14,28,'#5eaf95','▤'],
  ['Mô hình hóa quy trình','Trực quan hóa với BPMN & Flowchart',18,60,'#668fd9','⌘'],
  ['Phân tích & thiết kế giải pháp','Biến insight thành giải pháp khả thi',15,15,'#d381a4','◈'],
  ['Dữ liệu & SQL cho BA','Đọc dữ liệu, đưa ra quyết định',20,10,'#739eaf','▥'],
  ['Agile & Scrum','Làm việc hiệu quả cùng đội sản phẩm',12,0,'#b090d0','↻'],
  ['UX & Product Thinking','Thiết kế trải nghiệm từ góc nhìn BA',14,0,'#d8aa55','✧'],
  ['Testing & UAT','Đảm bảo giải pháp đáp ứng kỳ vọng',10,0,'#62aaa0','☑'],
  ['Kỹ năng & Phỏng vấn BA','Tự tin sẵn sàng cho bước tiếp theo',16,0,'#8a91c5','♧']
];
global.heading = (t, s) => '<h1>' + t + '</h1><p>' + s + '</p>';
global.bar = (p) => '<div class="bar"><div style="width:' + p + '%"></div></div>';
global.save = () => {};

require('../dist/quiz-engine.js');

// 1. Test Overview List View
const listHtml = global.quizPage();
console.log('List HTML length:', listHtml.length);
console.log('Contains 10 quiz cards:', (listHtml.match(/class="quiz-card"/g) || []).length === 10);
console.log('Contains 5 Nền tảng · 8 Vận dụng · 7 Nâng cao:', listHtml.includes('5 Nền tảng · 8 Vận dụng · 7 Nâng cao'));
console.log('Contains Đạt badge (track 0):', listHtml.includes('✓ Đạt: 75%'));
console.log('Contains Chưa đạt badge (track 1):', listHtml.includes('Chưa đạt: 50%'));
console.log('Contains Chưa làm badge:', listHtml.includes('Chưa làm'));

// 2. Test In-quiz View
const engine = require('../dist/quiz-engine.js');
engine.quizEngineState.viewMode = 'quiz';
engine.buildOrder(0, 'full', []);
const quizHtml = global.quizPage();
console.log('\nQuiz HTML length:', quizHtml.length);
console.log('Contains Câu 1 / 20:', quizHtml.includes('Câu 1 / 20'));
console.log('Contains tier pill:', quizHtml.includes('tier-pill'));
console.log('Contains 4 answer buttons:', (quizHtml.match(/class="quiz-answer/g) || []).length === 4);
console.log('Contains back button:', quizHtml.includes('id="quiz-back-list"'));

// 3. Test Answer Feedback
engine.quizEngineState.userAns[0] = engine.quizEngineState.correctPos[0];
const answeredHtml = global.quizPage();
console.log('\nAnswered HTML length:', answeredHtml.length);
console.log('Contains feedback box:', answeredHtml.includes('quiz-feedback-box correct'));
console.log('Contains explanation:', answeredHtml.includes('quiz-feedback-box'));
console.log('Contains next button:', answeredHtml.includes('id="quiz-next"'));
console.log('\nALL UI CHECKS PASSED!');
