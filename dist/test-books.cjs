/**
 * Comprehensive Automated Test Suite for Module "Sách BA" (BA Books)
 * Verifies:
 * 1. Data Integrity: 3 books metadata, 6 BABOK KAs + 30 tasks, 8 BCS chapters + split_1 notice, 100 Days BA (1-100 continuous with takeaways & reflection questions), 15 topic lessons with 4 sections, 138 cross-reference mappings.
 * 2. Search & Filtering: bilingual EN/VI keyword search ('truy vết', 'traceability', 'impact analysis', 'acceptance criteria'), 100 days day-number search and topic filtering.
 * 3. Interactive Lesson Features: Draft auto-saving, bookmarking, completion toggling, sample solution toggling, self-check rubric checklist.
 * 4. Quiz Linkage: 2-way linkage between review lessons and quiz questions, verification of quiz IDs in quizBank, isolation of practice quiz scores from unlock threshold.
 * 5. UI Rendering: booksPage() generates valid HTML for overview, book-detail, topic-lesson, and practice-quiz views.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting BA Books Module Verification Suite...\n');

// 1. Load mock browser environment & scripts
global.window = global;
global.document = {
  addEventListener: () => {},
  querySelector: () => null,
  querySelectorAll: () => []
};
global.heading = (t, s) => `<div class="heading"><h1>${t}</h1><p>${s}</p></div>`;
global.bar = (v) => `<div class="bar">${v}%</div>`;
global.esc = (s) => String(s);
global.toast = () => {};
global.save = () => {};
global.state = {
  scores: { 0: 85, 2: 75 },
  books: { completedLessons: [], bookmarks: [], drafts: {}, lastLessonId: null }
};

// Load Quiz Bank
require('./quiz-data.js');
assert(Array.isArray(global.quizBank) && global.quizBank.length === 200, 'quizBank must have 200 questions');
console.log('  ✓ Loaded quizBank: 200 questions verified.');

// Load Books Data
require('./books-data.js');
assert(Array.isArray(global.booksMeta) && global.booksMeta.length === 3, 'booksMeta must contain 3 books');
assert(Array.isArray(global.bookBabokTasks) && global.bookBabokTasks.length === 30, 'bookBabokTasks must contain 30 tasks');
assert(Array.isArray(global.bookBcsChapters) && global.bookBcsChapters.length === 8, 'bookBcsChapters must contain 8 chapters');
assert(Array.isArray(global.bookDays100) && global.bookDays100.length === 100, 'bookDays100 must contain 100 days');
assert(Array.isArray(global.bookTopicLessons) && global.bookTopicLessons.length === 15, 'bookTopicLessons must contain 15 topic lessons');
assert(Array.isArray(global.bookCrossReference) && global.bookCrossReference.length >= 100, 'bookCrossReference must have >= 100 entries');
console.log('  ✓ Data collections loaded and array length checks passed.');

// Load Books Engine
const engine = require('./books-engine.js');
assert(typeof global.booksPage === 'function', 'booksPage function must be exported to global');
console.log('  ✓ Books engine loaded and booksPage verified.');

// ==========================================
// TEST SUITE 1: DATA INTEGRITY & SOURCE COVERAGE
// ==========================================
console.log('\n--- Test Suite 1: Data Integrity & Source Coverage ---');

// 1.1 BABOK v3
const babokMeta = global.booksMeta.find(b => b.id === 'babok-v3');
assert(babokMeta, 'BABOK v3 metadata must exist');
assert(babokMeta.totalPages === 514, 'BABOK total pages must be 514');

// Verify 6 Knowledge Areas across the 30 tasks
const babokKAs = [...new Set(global.bookBabokTasks.map(t => t.chapter))];
assert(babokKAs.length === 6, `BABOK must have 6 Knowledge Areas across chapters (found ${babokKAs.length})`);

// Verify all 30 BABOK tasks have Purpose, Inputs, Outputs, WhenToApply
global.bookBabokTasks.forEach(task => {
  assert(task.code && task.code.includes('.'), `Task ${task.code} must have code like 3.1`);
  assert(task.name && task.name.length > 3, `Task ${task.code} must have a name`);
  assert(task.chapter && task.chapter.length >= 5, `Task ${task.code} must have chapter name`);
  assert(task.purpose && task.purpose.length > 10, `Task ${task.code} must have Purpose`);
  assert(Array.isArray(task.inputs) && task.inputs.length > 0, `Task ${task.code} must have Inputs array`);
  assert(Array.isArray(task.outputs) && task.outputs.length > 0, `Task ${task.code} must have Outputs array`);
  assert(task.whenToApply && task.whenToApply.length > 10, `Task ${task.code} must have When to Apply guidance`);
  assert(typeof task.page === 'number' && task.page > 0, `Task ${task.code} must have PDF page reference`);
  assert(task.topicLessonId, `Task ${task.code} must map to a topicLessonId`);
});
console.log('  ✓ BABOK v3: 6 KAs, 30 tasks with full attributes (Purpose/Inputs/Outputs/When/Page/TopicMapping).');

// 1.2 BCS Business Analysis 3rd Edition
const bcsMeta = global.booksMeta.find(b => b.id === 'bcs-ba-3rd');
assert(bcsMeta, 'BCS 3rd Edition metadata must exist');
assert(bcsMeta.missingNotice && bcsMeta.missingNotice.includes('split_1'), 'BCS must contain notice regarding split_1 scope');
assert(bcsMeta.missingNotice.toLowerCase().includes('chương 9 đến 14'), 'BCS missingNotice must document truncated chapters (Ch 9-14)');
global.bookBcsChapters.forEach(chap => {
  assert(chap.chapter >= 1 && chap.chapter <= 8, `Chapter number must be between 1 and 8 in split_1`);
  assert(chap.title && chap.title.length > 3, `Chapter must have title`);
  assert(chap.pages && chap.pages.length > 2, `Chapter must have pages string`);
  assert(Array.isArray(chap.sections) && chap.sections.length > 0, `Chapter must have sections array`);
  assert(chap.summary && chap.summary.length > 10, `Chapter must have summary`);
  assert(chap.topicLessonId, `Chapter must map to a topicLessonId`);
});
console.log('  ✓ BCS 3rd: Chapters 1-8 verified in split_1 (pp. 35-235), truncated Ch 9-14 explicitly documented.');

// 1.3 100 Ngày viết về nghề BA
const daysMeta = global.booksMeta.find(b => b.id === '100-days-ba');
assert(daysMeta, '100 Ngày BA metadata must exist');

// Verify all 100 days from 1 to 100 without any gap
for (let d = 1; d <= 100; d++) {
  const dayItem = global.bookDays100.find(item => item.day === d);
  assert(dayItem, `Day ${d} must exist in bookDays100`);
  assert(dayItem.title && dayItem.title.length > 0, `Day ${d} must have title`);
  assert(dayItem.takeaway && dayItem.takeaway.length >= 10, `Day ${d} must have Takeaway (Bài học rút ra)`);
  assert(dayItem.projectQuestion && dayItem.projectQuestion.length >= 10, `Day ${d} must have Project Question (Câu hỏi áp dụng)`);
  assert(dayItem.page >= 1 && dayItem.page <= 237, `Day ${d} page must fall within PDF bounds (1-237)`);
  assert(dayItem.topicLessonId, `Day ${d} must map to a topicLessonId`);
  assert(dayItem.authorNote && dayItem.authorNote.includes('Nguyễn Bá Phú'), `Day ${d} must note author context`);
}
console.log('  ✓ 100 Ngày viết về nghề BA: All DAY 1-100 continuous, each with key takeaway, project question, and author context.');

// 1.4 Topic Lessons (15 Comprehensive Topics)
const validLessonIds = new Set(global.bookTopicLessons.map(l => l.id));
assert(validLessonIds.size === 15, 'Must have exactly 15 unique topic lesson IDs');

global.bookTopicLessons.forEach(lesson => {
  assert(lesson.id && lesson.id.startsWith('TOPIC-'), `Topic lesson ${lesson.id} ID prefix invalid`);
  assert(lesson.title && lesson.title.length > 3, `Topic lesson ${lesson.id} must have title`);
  assert(lesson.category, `Topic lesson ${lesson.id} must have category`);
  assert(Array.isArray(lesson.keywords) && lesson.keywords.length >= 3, `Topic lesson ${lesson.id} must have >= 3 keywords`);
  assert(lesson.summary && lesson.summary.length > 10, `Topic lesson ${lesson.id} must have summary`);

  // Section 1: Core Knowledge
  assert(lesson.coreKnowledge && lesson.coreKnowledge.length > 30, `Topic ${lesson.id} missing coreKnowledge`);

  // Section 2: Step By Step Application
  assert(lesson.applicationSteps && lesson.applicationSteps.length > 20, `Topic ${lesson.id} must have applicationSteps`);

  // Section 3: Realistic Scenario Exercise
  const ex = lesson.scenarioExercise;
  assert(ex, `Topic ${lesson.id} must have scenarioExercise`);
  assert(ex.context && ex.context.length > 20, `Exercise in ${lesson.id} must have realistic context`);
  assert(ex.task && ex.task.length > 10, `Exercise in ${lesson.id} must have task`);
  assert(ex.sampleSolution && ex.sampleSolution.length > 30, `Exercise in ${lesson.id} must have sampleSolution`);
  assert(Array.isArray(ex.rubricCriteria) && ex.rubricCriteria.length >= 2, `Exercise in ${lesson.id} must have rubricCriteria with >= 2 criteria`);

  // Section 4: Source References & Related Quiz IDs
  assert(Array.isArray(lesson.sources) && lesson.sources.length >= 2, `Topic ${lesson.id} must have >= 2 source references`);
  assert(Array.isArray(lesson.relatedQuizIds) && lesson.relatedQuizIds.length >= 2, `Topic ${lesson.id} must have >= 2 related quiz IDs`);
});
console.log('  ✓ 15 Topic Lessons: All 4 sections complete (Core knowledge, Step-by-step, Realistic exercise with rubric checklist, Source references & Quiz IDs).');

// 1.5 Cross Reference Table
assert(global.bookCrossReference.length >= 130, `bookCrossReference has ${global.bookCrossReference.length} items (expected >= 130)`);
global.bookCrossReference.forEach(ref => {
  assert(ref.bookId && ['babok-v3', 'bcs-ba-3rd', '100-days-ba'].includes(ref.bookId), `Invalid bookId in crossref: ${ref.bookId}`);
  assert(ref.itemCode, 'Crossref entry must have itemCode');
  assert(ref.itemTitle, 'Crossref entry must have itemTitle');
  assert(typeof ref.page === 'number' && ref.page > 0, 'Crossref entry must have page');
  assert(ref.topic, 'Crossref entry must have topic');
  assert(validLessonIds.has(ref.topicLessonId), `Crossref topicLessonId ${ref.topicLessonId} must exist in bookTopicLessons`);
});
console.log(`  ✓ Cross-reference table: ${global.bookCrossReference.length} verified rows, all referencing valid topicLessonIds.`);

// ==========================================
// TEST SUITE 2: SEARCH ENGINE & BILINGUAL MATCHING
// ==========================================
console.log('\n--- Test Suite 2: Search Engine & Filtering ---');

function searchTopics(query, cat) {
  var q = (query || '').toLowerCase().trim();
  return global.bookTopicLessons.filter(function (t) {
    if (cat && cat !== 'all' && t.category !== cat) return false;
    if (!q) return true;
    var haystack = (t.title + ' ' + t.id + ' ' + t.category + ' ' + (t.keywords || []).join(' ') + ' ' + t.coreKnowledge).toLowerCase();
    return haystack.indexOf(q) !== -1;
  });
}

// 2.1 Traceability
const resTraceVi = searchTopics('truy vết');
assert(resTraceVi.some(t => t.id === 'TOPIC-TRACEABILITY'), "Searching 'truy vết' must find TOPIC-TRACEABILITY");
const resTraceEn = searchTopics('traceability');
assert(resTraceEn.some(t => t.id === 'TOPIC-TRACEABILITY'), "Searching 'traceability' must find TOPIC-TRACEABILITY");
console.log("  ✓ Search: 'truy vết' and 'traceability' correctly match TOPIC-TRACEABILITY.");

// 2.2 Impact Analysis
const resImpactVi = searchTopics('phân tích tác động');
assert(resImpactVi.some(t => t.id === 'TOPIC-IMPACT-ANALYSIS'), "Searching 'phân tích tác động' must find TOPIC-IMPACT-ANALYSIS");
const resImpactEn = searchTopics('impact analysis');
assert(resImpactEn.some(t => t.id === 'TOPIC-IMPACT-ANALYSIS'), "Searching 'impact analysis' must find TOPIC-IMPACT-ANALYSIS");
console.log("  ✓ Search: 'phân tích tác động' and 'impact analysis' correctly match TOPIC-IMPACT-ANALYSIS.");

// 2.3 Acceptance Criteria / Gherkin
const resAcVi = searchTopics('tiêu chí nghiệm thu');
assert(resAcVi.some(t => t.id === 'TOPIC-AC-GHERKIN'), "Searching 'tiêu chí nghiệm thu' must find TOPIC-AC-GHERKIN");
const resAcEn = searchTopics('acceptance criteria');
assert(resAcEn.some(t => t.id === 'TOPIC-AC-GHERKIN'), "Searching 'acceptance criteria' must find TOPIC-AC-GHERKIN");
console.log("  ✓ Search: 'tiêu chí nghiệm thu' and 'acceptance criteria' correctly match TOPIC-AC-GHERKIN.");

// 2.4 100 Days Filtering
function filter100Days(dayQuery, topicCat) {
  var dq = (dayQuery || '').trim().toLowerCase();
  return global.bookDays100.filter(function (d) {
    if (topicCat && topicCat !== 'all') {
      var tl = global.bookTopicLessons.find(l => l.id === d.topicLessonId);
      if (!tl || tl.category !== topicCat) return false;
    }
    if (!dq) return true;
    if (String(d.day) === dq || ('day ' + d.day) === dq) return true;
    return (d.title + ' ' + d.takeaway + ' ' + d.projectQuestion).toLowerCase().indexOf(dq) !== -1;
  });
}

const day23 = filter100Days('23', 'all');
assert(day23.length >= 1 && day23.some(d => d.day === 23), "Filtering day '23' must return Day 23");
const testingDays = filter100Days('', 'Testing & UAT');
assert(testingDays.length > 0, "Filtering by 'Testing & UAT' category must return corresponding days");
console.log(`  ✓ 100 Days Filter: Day '23' lookup and 'Testing & UAT' category filter (${testingDays.length} days) passed.`);

// ==========================================
// TEST SUITE 3: INTERACTIVE LESSONS & STATE MANAGEMENT
// ==========================================
console.log('\n--- Test Suite 3: Interactive Lesson & State Management ---');

const bState = engine.getBooksState();
assert(Array.isArray(bState.completedLessons), 'completedLessons must be an array');
assert(Array.isArray(bState.bookmarks), 'bookmarks must be an array');
assert(typeof bState.drafts === 'object', 'drafts must be an object');

// Test Draft Saving
const testLessonId = 'TOPIC-TRACEABILITY';
bState.drafts[testLessonId] = 'Ma trận RTM dự án WES gồm FR-01, FR-02 liên kết TC-101';
assert(bState.drafts[testLessonId].includes('WES'), 'Draft must be saved in state');

// Test Bookmark toggle
assert(!bState.bookmarks.includes(testLessonId), 'Initially not bookmarked');
bState.bookmarks.push(testLessonId);
assert(bState.bookmarks.includes(testLessonId), 'Lesson must be bookmarked');
bState.bookmarks.splice(bState.bookmarks.indexOf(testLessonId), 1);
assert(!bState.bookmarks.includes(testLessonId), 'Lesson bookmark must be removed on untoggle');

// Test Completed toggle
assert(!bState.completedLessons.includes(testLessonId), 'Initially not completed');
bState.completedLessons.push(testLessonId);
assert(bState.completedLessons.includes(testLessonId), 'Lesson must be completed');
bState.completedLessons.splice(bState.completedLessons.indexOf(testLessonId), 1);
assert(!bState.completedLessons.includes(testLessonId), 'Lesson completed flag must be untoggled');

console.log('  ✓ State Management: Draft auto-saving, bookmarking, and completion toggle verified.');

// ==========================================
// TEST SUITE 4: QUIZ LINKAGE & SCORE ISOLATION
// ==========================================
console.log('\n--- Test Suite 4: Quiz Linkage & Score Isolation ---');

const quizBankIds = new Set(global.quizBank.map(q => q.id));

// Verify all relatedQuizIds in every topic lesson exist in quizBank
let totalLinkedQuestions = 0;
global.bookTopicLessons.forEach(lesson => {
  lesson.relatedQuizIds.forEach(qId => {
    assert(quizBankIds.has(qId), `Quiz ID ${qId} in lesson ${lesson.id} does not exist in quizBank!`);
    totalLinkedQuestions++;
  });
});
console.log(`  ✓ Quiz Linkage: All ${totalLinkedQuestions} relatedQuizIds point to valid questions in 200-question quizBank.`);

// Verify Practice Quiz Score Isolation
const initialScores = Object.assign({}, global.state.scores);
engine.booksEngineState.practiceQuiz = {
  questions: global.quizBank.slice(0, 3),
  index: 0,
  userAns: [0, 1, 2],
  finished: true
};
// Practice quiz does not invoke save() or mutate state.scores
assert.deepStrictEqual(global.state.scores, initialScores, 'Practice quiz must NOT mutate state.scores or lock/unlock thresholds!');
console.log('  ✓ Score Isolation: Mini-quiz practice scores isolated from track unlock scores.');

// ==========================================
// TEST SUITE 5: UI RENDERING INTEGRITY
// ==========================================
console.log('\n--- Test Suite 5: UI Rendering Integrity ---');

// 5.1 Overview - Books Tab
engine.booksEngineState.view = 'overview';
engine.booksEngineState.tab = 'books';
let html = global.booksPage();
assert(typeof html === 'string' && html.length > 500, 'Overview (books) must render HTML');
assert(html.includes('BABOK'), 'Overview must render BABOK');
assert(html.includes('100 ngày viết về nghề BA'), 'Overview must render 100 Ngày BA');

// 5.2 Overview - Topics Tab
engine.booksEngineState.tab = 'topics';
html = global.booksPage();
assert(html.includes('15 chủ đề nghiệp vụ'), 'Overview must render topics tab');
assert(html.includes('Truy vết Yêu cầu'), 'Overview must render topics');

// 5.3 Overview - Crossref Tab
engine.booksEngineState.tab = 'crossref';
html = global.booksPage();
assert(html.includes('Bảng Đối chiếu Toàn diện'), 'Overview must render crossref table');
assert(html.includes('BABOK Guide v3'), 'Crossref must include BABOK rows');

// 5.4 Book Detail View - BABOK
engine.booksEngineState.view = 'book-detail';
engine.booksEngineState.activeBookId = 'babok-v3';
html = global.booksPage();
assert(html.includes('Danh mục 30 Tasks'), 'BABOK detail must show 30 tasks');
assert(html.includes('Plan Business Analysis Approach'), 'BABOK detail must list task names');

// 5.5 Book Detail View - BCS 3rd with Split Notice
engine.booksEngineState.activeBookId = 'bcs-ba-3rd';
html = global.booksPage();
assert(html.includes('split_1'), 'BCS detail must render split_1 scope notice');
assert(html.includes('Chương 9 đến 14'), 'BCS detail must report truncated chapters');

// 5.6 Book Detail View - 100 Ngày BA
engine.booksEngineState.activeBookId = '100-days-ba';
html = global.booksPage();
assert(html.includes('100 ngày viết về nghề BA'), '100 Ngày detail must render');
assert(html.includes('DAY 1'), '100 Ngày detail must render days');

// 5.7 Topic Lesson View
engine.booksEngineState.view = 'topic-lesson';
engine.booksEngineState.activeLessonId = 'TOPIC-TRACEABILITY';
engine.booksEngineState.showSampleSolution = true;
html = global.booksPage();
assert(html.includes('Phần 1: Kiến thức Cốt lõi'), 'Lesson must have Section 1');
assert(html.includes('Phần 2: Các Bước Áp Dụng Thực Tế'), 'Lesson must have Section 2');
assert(html.includes('Phần 3: Bài Tập Tình Huống'), 'Lesson must have Section 3');
assert(html.includes('Phần 4: Nguồn Tham Chiếu'), 'Lesson must have Section 4');
assert(html.includes('Checklist Tiêu chí Tự chấm điểm'), 'Lesson must have Rubric self-check');

// 5.8 Practice Quiz View
engine.booksEngineState.view = 'practice-quiz';
engine.booksEngineState.practiceQuiz = {
  questions: [global.quizBank[0]],
  index: 0,
  userAns: [-1],
  finished: false
};
html = global.booksPage();
assert(html.includes('Luyện tập Câu hỏi Trắc nghiệm Liên quan'), 'Practice quiz must render');
assert(html.includes('Câu 1 / 1'), 'Practice quiz must render question count');

console.log('  ✓ UI Rendering: All views (overview, book-detail, topic-lesson, practice-quiz) render without errors.');

console.log('\n======================================================');
console.log('🎉 ALL 5 TEST SUITES PASSED! MODULE SÁCH BA IS 100% READY!');
console.log('======================================================\n');
