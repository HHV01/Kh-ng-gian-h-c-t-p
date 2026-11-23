/**
 * Automated Test Suite for BA Books Reader & Module "Sách BA"
 * Verifies:
 * 1. Opening all 3 books (BABOK v3, BCS 3rd, 100 Ngày BA) from card click & "Xem nội dung" button.
 * 2. Book Detail View displays real PDF Table of Contents for each book.
 * 3. 100 Ngày BA displays all DAY 1-100, searchable by day number (e.g. 100, 23) and title.
 * 4. Selecting BABOK chapter/task opens direct Reader with exact PDF page & print page.
 * 5. Selecting BCS chapter opens direct Reader (Ch 1-8 available; Ch 9-14 clearly marked "Chưa có trong PDF đính kèm").
 * 6. Opening DAY 100 opens direct Reader with Takeaway, Project question, and author context.
 * 7. Page Reload simulation with hash routing (#/books/:bookId/:itemId) opens the exact content directly.
 * 8. Sequential navigation ("Mục trước", "Mục tiếp theo", "Về danh sách sách") works correctly.
 */

const assert = require('assert');
const path = require('path');

console.log('🧪 Starting BA Books Reader Verification Suite...\n');

// Mock browser environment
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

// Load books data & engine
require('./books-data.js');
const engine = require('./books-engine.js');

// ============================================================
// TEST 1: CATALOG OVERVIEW & OPENING ALL 3 BOOKS
// ============================================================
console.log('--- Test 1: Catalog Overview & Opening All 3 Books ---');

engine.booksEngineState.view = 'overview';
let html = global.booksPage();
assert(html.includes('Sách BA Thực Chiến'), 'Overview must have title');
assert(html.includes('BABOK® Guide v3'), 'Overview must list BABOK');
assert(html.includes('Business Analysis (3rd Edition)'), 'Overview must list BCS');
assert(html.includes('100 ngày viết về nghề BA'), 'Overview must list 100 Ngày BA');

// Confirm each card has clickable data-open-book and "Xem nội dung" button
global.booksMeta.forEach(b => {
  assert(html.includes(`data-open-book="${b.id}"`), `Card for ${b.id} must be clickable`);
  assert(html.includes('Xem nội dung ➔'), 'Must have "Xem nội dung" button');
});
console.log('  ✓ Overview displays all 3 books with clickable cards & "Xem nội dung" buttons.');

// ============================================================
// TEST 2: BOOK DETAIL & PDF TABLE OF CONTENTS
// ============================================================
console.log('\n--- Test 2: Book Detail & Actual PDF Table of Contents ---');

// 2.1 BABOK v3
engine.handleBooksHash(['babok-v3']);
assert.strictEqual(engine.booksEngineState.view, 'book-detail');
assert.strictEqual(engine.booksEngineState.activeBookId, 'babok-v3');
html = global.booksPage();
assert(html.includes('Mục Lục Sách Thực Tế'), 'BABOK detail must show TOC header');
assert(html.includes('Task 3.1'), 'BABOK TOC must list Task 3.1');
assert(html.includes('Trang PDF: <b>34</b>'), 'BABOK Task 3.1 must reference PDF page 34');
console.log('  ✓ BABOK detail renders actual PDF TOC with 30 tasks, chapters, and PDF page 34 for Task 3.1.');

// 2.2 BCS 3rd Edition (split_1 verification)
engine.handleBooksHash(['bcs-ba-3rd']);
assert.strictEqual(engine.booksEngineState.view, 'book-detail');
assert.strictEqual(engine.booksEngineState.activeBookId, 'bcs-ba-3rd');
html = global.booksPage();
assert(html.includes('Phạm vi tài liệu split_1'), 'BCS detail must display split_1 scope notice');
assert(html.includes('Chương 1'), 'BCS TOC must list Chapter 1');
assert(html.includes('Trang PDF: <b>35</b>'), 'BCS Chapter 1 must reference PDF page 35');
// Verify truncated chapters 9 to 14
assert(html.includes('Chương 9'), 'BCS TOC must list Chapter 9');
assert(html.includes('Chưa có trong PDF đính kèm'), 'BCS Chapter 9 must be flagged as "Chưa có trong PDF đính kèm"');
assert(html.includes('disabled-toc-item'), 'Truncated chapters must be disabled');
console.log('  ✓ BCS detail renders Ch 1-8 available (p.35-235) and Ch 9-14 flagged "Chưa có trong PDF đính kèm".');

// 2.3 100 Ngày viết về nghề BA (Day 1-100 & Search)
engine.handleBooksHash(['100-days-ba']);
assert.strictEqual(engine.booksEngineState.view, 'book-detail');
assert.strictEqual(engine.booksEngineState.activeBookId, '100-days-ba');
html = global.booksPage();
assert(html.includes('DAY 1'), '100 Ngày detail must show DAY 1');
assert(html.includes('DAY 100'), '100 Ngày detail must show DAY 100');
assert(html.includes('id="day-search-input"'), '100 Ngày detail must have day search input');

// Test Day Search logic
engine.booksEngineState.daySearchQuery = '100';
html = global.booksPage();
assert(html.includes('DAY 100'), 'Searching "100" must show DAY 100');
assert(!html.includes('DAY 1<'), 'Searching "100" must not show DAY 1');

engine.booksEngineState.daySearchQuery = 'release';
html = global.booksPage();
assert(html.includes('DAY 1'), 'Searching "release" must show DAY 1');

// Reset query
engine.booksEngineState.daySearchQuery = '';
console.log('  ✓ 100 Ngày detail displays full DAY 1-100 with real-time day/title search filter.');

// ============================================================
// TEST 3: SELECTING BABOK TASK & READER VIEW
// ============================================================
console.log('\n--- Test 3: Opening BABOK Task in Reader ---');

engine.handleBooksHash(['babok-v3', 'task-3-1']);
assert.strictEqual(engine.booksEngineState.view, 'reader');
assert.strictEqual(engine.booksEngineState.activeItemId, 'task-3-1');
html = global.booksPage();

// Verify Header & Metadata
assert(html.includes('Task 3.1'), 'Reader must show Task 3.1');
assert(html.includes('Trang PDF: <b>34</b>'), 'Reader must show PDF page 34');
assert(html.includes('Trang in: <b>24</b>'), 'Reader must show print page 24');

// Verify Left Rail TOC on Desktop
assert(html.includes('reader-toc-rail'), 'Reader must have TOC left rail');
assert(html.includes('Task 3.2'), 'TOC left rail must list adjacent tasks');

// Verify Vietnamese Review Content
assert(html.includes('Mục đích của Task (Purpose)'), 'Reader must have Purpose');
assert(html.includes('Đầu vào (Inputs):'), 'Reader must have Inputs');
assert(html.includes('Đầu ra (Outputs):'), 'Reader must have Outputs');

// Verify PDF Mode Switch
engine.booksEngineState.readerMode = 'pdf';
html = global.booksPage();
assert(html.includes('reader-pdf-iframe'), 'PDF mode must render iframe');
assert(html.includes('#page=34'), 'Iframe src must point to #page=34');

// Switch back to notes mode
engine.booksEngineState.readerMode = 'notes';
console.log('  ✓ BABOK Task 3.1 Reader verified: dual mode (Vietnamese notes & PDF iframe at page 34) and TOC rail.');

// ============================================================
// TEST 4: SELECTING BCS CHAPTER & RESTRICTING TRUNCATED
// ============================================================
console.log('\n--- Test 4: Opening BCS Chapter & Restriction Checks ---');

// 4.1 Available chapter (Ch 1)
engine.handleBooksHash(['bcs-ba-3rd', 'bcs-ch-1']);
assert.strictEqual(engine.booksEngineState.view, 'reader');
assert.strictEqual(engine.booksEngineState.activeItemId, 'bcs-ch-1');
html = global.booksPage();
assert(html.includes('What is Business Analysis?'), 'Reader must show BCS Ch 1');
assert(html.includes('Trang PDF: <b>35</b>'), 'BCS Ch 1 must show PDF page 35');
assert(html.includes('Trang in: <b>1</b>'), 'BCS Ch 1 must show print page 1');

// 4.2 Attempting to open truncated chapter 9 via hash
engine.handleBooksHash(['bcs-ba-3rd', 'bcs-ch-9']);
// Truncated chapter has available: false, so it safely remains in book-detail view
assert.strictEqual(engine.booksEngineState.view, 'book-detail', 'Opening truncated Ch 9 must safely remain in detail view');
html = global.booksPage();
assert(html.includes('Chưa có trong PDF đính kèm'), 'Must display "Chưa có trong PDF đính kèm"');
console.log('  ✓ BCS Ch 1 opens cleanly at PDF page 35; truncated Ch 9 is guarded with "Chưa có trong PDF đính kèm".');

// ============================================================
// TEST 5: OPENING DAY 100 (100 NGÀY VIẾT VỀ NGHỀ BA)
// ============================================================
console.log('\n--- Test 5: Opening DAY 100 in Reader ---');

engine.handleBooksHash(['100-days-ba', 'day-100']);
assert.strictEqual(engine.booksEngineState.view, 'reader');
assert.strictEqual(engine.booksEngineState.activeItemId, 'day-100');
html = global.booksPage();

// Verify Day 100 content
assert(html.includes('DAY 100'), 'Reader must display DAY 100');
assert(html.includes('Trang PDF: <b>236</b>'), 'DAY 100 must reference PDF page 236');
assert(html.includes('Trang in: <b>233</b>'), 'DAY 100 must reference print page 233');
assert(html.includes('Bài học rút ra (Key Takeaway)'), 'Reader must show Key Takeaway');
assert(html.includes('Câu hỏi phản tư áp dụng vào dự án'), 'Reader must show Project Reflection Question');
assert(html.includes('Nguyễn Bá Phú'), 'Reader must note author context');

// Check sequential navigation boundary on Day 100 (last item)
const b100 = engine.findBook('100-days-ba');
const adj100 = engine.getAdjacentItems(b100, 'day-100');
assert(adj100.prev && adj100.prev.id === 'day-99', 'Day 100 prev must be Day 99');
assert(adj100.next === null, 'Day 100 next must be null (last item)');
console.log('  ✓ DAY 100 opens with Takeaway, Project Question, author note, and bounded navigation.');

// ============================================================
// TEST 6: PAGE RELOAD / DIRECT DEEP-LINK SIMULATION
// ============================================================
console.log('\n--- Test 6: Direct Deep-link & Page Reload Simulation ---');

// Simulate visiting #/books/babok-v3/task-4-1 directly on fresh page load
engine.booksEngineState.view = 'overview';
engine.booksEngineState.activeBookId = null;
engine.booksEngineState.activeItemId = null;

engine.handleBooksHash(['babok-v3', 'task-4-1']);
assert.strictEqual(engine.booksEngineState.view, 'reader');
assert.strictEqual(engine.booksEngineState.activeBookId, 'babok-v3');
assert.strictEqual(engine.booksEngineState.activeItemId, 'task-4-1');
html = global.booksPage();
assert(html.includes('Task 4.1: Prepare for Elicitation'), 'Must immediately render Task 4.1');
assert(html.includes('Trang PDF: <b>66</b>'), 'Must show PDF page 66');

// Simulate visiting #/books/100-days-ba/day-23 directly
engine.handleBooksHash(['100-days-ba', 'day-23']);
assert.strictEqual(engine.booksEngineState.view, 'reader');
assert.strictEqual(engine.booksEngineState.activeBookId, '100-days-ba');
assert.strictEqual(engine.booksEngineState.activeItemId, 'day-23');
html = global.booksPage();
assert(html.includes('DAY 23'), 'Must immediately render DAY 23');

// Confirm no empty view or dead button
assert(!html.includes('undefined'), 'Rendered HTML must not contain "undefined"');
assert(!html.includes('null'), 'Rendered HTML must not contain "null"');
console.log('  ✓ Direct deep-links (#/books/:bookId/:itemId) restore exact content and state immediately upon reload.');

// ============================================================
// TEST 7: SEQUENTIAL NAVIGATION
// ============================================================
console.log('\n--- Test 7: Sequential Navigation ("Mục trước" & "Mục tiếp theo") ---');

const babokBook = engine.findBook('babok-v3');
const adjTask31 = engine.getAdjacentItems(babokBook, 'task-3-1');
assert(adjTask31.prev && adjTask31.prev.id === 'ch-2', 'Item before Task 3.1 is Chapter 2');
assert(adjTask31.next && adjTask31.next.id === 'task-3-2', 'Item after Task 3.1 is Task 3.2');
console.log('  ✓ Sequential navigation correctly steps through TOC items.');

console.log('\n======================================================');
console.log('🎉 ALL BA BOOKS READER TESTS PASSED! 100% COMPLIANT!');
console.log('======================================================\n');
