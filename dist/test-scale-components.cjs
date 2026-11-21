/**
 * UNIT & INTEGRATION TESTS FOR DESIGNED TO SCALE COMPONENTS
 * Validates component output, data integrity, metrics calculations, accessibility, and routing.
 */

const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');

console.log('--- BẮT ĐẦU KIỂM THỬ DESIGNED TO SCALE COMPONENTS ---');

// 1. Tạo Context môi trường giả lập trình duyệt
const storage = {};
const listeners = {};
const elements = {};

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
        contains: c => c === 'dark' ? !!storage['theme-dark'] : false,
        toggle: c => {}
      },
      querySelectorAll: () => []
    },
    querySelectorAll: () => [],
    body: {
      classList: {
        contains: c => !!storage[c],
        toggle: c => storage[c] = !storage[c]
      }
    }
  },
  window: {
    scrollTo: () => {},
    addEventListener: () => {}
  },
  location: { hash: '' },
  toast: () => {},
  esc: s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
});

// 2. Load các file mã nguồn
const dataCode = fs.readFileSync(path.join(__dirname, 'scale-data.js'), 'utf8');
const compCode = fs.readFileSync(path.join(__dirname, 'scale-components.js'), 'utf8');
const viewCode = fs.readFileSync(path.join(__dirname, 'scale-views.js'), 'utf8');

vm.runInContext(dataCode, ctx);
vm.runInContext(compCode, ctx);
vm.runInContext(viewCode, ctx);

// TEST SUITE 1: Kiểm thử Data Schema (40 bài học & 9 module)
console.log('[Test 1] Kiểm tra cấu trúc 9 Modules và 40 bài học...');
const modules = vm.runInContext('scaleModulesData', ctx);
assert.equal(modules.length, 9, 'Phải có chính xác 9 module');

const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
assert.equal(totalLessons, 40, 'Tổng số bài học phải là đúng 40 bài');

const moduleIds = modules.map(m => m.id);
assert.equal(
  JSON.stringify(moduleIds),
  JSON.stringify(['foundations', 'scaling', 'data', 'communication', 'reliability', 'architecture', 'security', 'shipping', 'whole-systems']),
  'Tên các module phải chuẩn xác theo sơ đồ'
);
console.log('✓ PASS: Đầy đủ 9 module và 40 bài học phân tán.');

// TEST SUITE 2: Kiểm thử các trang tĩnh (Home, About, Contact, Privacy, Terms - Bảng giá đã xoá)
console.log('[Test 2] Kiểm tra dữ liệu trang tĩnh và pháp lý...');
const pagesData = vm.runInContext('scalePagesData', ctx);
assert.ok(pagesData.home && pagesData.home.title, 'Trang chủ phải có title');
assert.equal(pagesData.pricing, undefined, 'Bảng giá phải được xoá hoàn toàn');
assert.ok(pagesData.about && pagesData.about.lessonsCount === 40, 'About phải nêu rõ 40 bài học');
assert.ok(pagesData.contact && pagesData.contact.supportEmail.includes('@'), 'Contact phải có email hợp lệ');
assert.ok(pagesData.privacy && pagesData.privacy.sections.length >= 4, 'Privacy phải có ít nhất 4 điều khoản');
assert.ok(pagesData.terms && pagesData.terms.sections.length >= 6, 'Terms phải có 6 điều khoản đánh số');
console.log('✓ PASS: Dữ liệu schema của tất cả các trang hoàn thiện (Bảng giá đã xoá).');

// TEST SUITE 3: Kiểm thử Component NavBar & Footer
console.log('[Test 3] Kiểm thử Component NavBar & Footer...');
const navbarHtml = vm.runInContext('ScaleNavBar({ isPro: false, currentModule: "Scaling", lang: "vi" })', ctx);
assert.ok(navbarHtml.includes('scale-navbar'), 'Navbar phải chứa class scale-navbar');
assert.ok(navbarHtml.includes('Designed to'), 'Navbar phải có Logo Designed to Scale');
assert.ok(navbarHtml.includes('Miễn phí') || navbarHtml.includes('Unlocked'), 'Trạng thái mở khoá miễn phí phải hiển thị');

const footerHtml = vm.runInContext('ScaleFooter({ lang: "vi" })', ctx);
assert.ok(footerHtml.includes('support@designedtoscale.app'), 'Footer phải chứa email liên hệ');
assert.ok(footerHtml.includes('Chính sách bảo mật') || footerHtml.includes('Privacy Policy'), 'Footer phải có link Privacy');
console.log('✓ PASS: NavBar & Footer render semantic, chuẩn props.');

// TEST SUITE 4: Kiểm thử Flagship Interactive Caching Lesson
console.log('[Test 4] Kiểm thử bài học tương tác Caching & Sơ đồ SVG...');
const cachingLesson = vm.runInContext('scaleLessonsDetail.caching', ctx);
assert.ok(cachingLesson, 'Bài học Caching phải tồn tại trong dữ liệu');
assert.equal(cachingLesson.steps.length, 5, 'Bài Caching phải có đủ 5 bước tương tác');

// Test Diagram render cho bước 1 (Cold)
const step1 = cachingLesson.steps[0];
assert.equal(step1.metrics.cacheHitRate, 0, 'Bước 1 tỉ lệ cache hit phải là 0%');
assert.ok(step1.metrics.p50 > 100, 'Bước 1 p50 latency phải cao khi chưa có cache');

const diagramHtml = vm.runInContext('ScaleLessonDiagram({ diagramState: scaleLessonsDetail.caching.steps[0].diagram, activeStepNumber: 1 })', ctx);
assert.ok(diagramHtml.includes('svg') && diagramHtml.includes('interactive-node'), 'Diagram phải render SVG nodes');
assert.ok(diagramHtml.includes('Primary DB'), 'Diagram bước 1 phải có Primary DB');

// Test MetricsPanel
const metricsHtml = vm.runInContext('ScaleMetricsPanel({ metrics: scaleLessonsDetail.caching.steps[0].metrics })', ctx);
assert.ok(metricsHtml.includes('p50 Latency'), 'MetricsPanel phải có p50');
assert.ok(metricsHtml.includes('Throughput'), 'MetricsPanel phải có Throughput');
assert.ok(metricsHtml.includes('Database CPU'), 'MetricsPanel phải có Database CPU');
console.log('✓ PASS: Sơ đồ tương tác Caching và MetricsPanel hoạt động chuẩn xác.');

// TEST SUITE 5: Kiểm thử StepNavigation & InspectorPanel
console.log('[Test 5] Kiểm thử StepNavigation & InspectorPanel...');
const stepNavHtml = vm.runInContext('ScaleStepNavigation({ currentStep: 1, totalSteps: 5, stepTitle: "Test Title", stepExplanation: "Test Exp" })', ctx);
assert.ok(stepNavHtml.includes('BƯỚC 1 / 5'), 'StepNavigation phải hiển thị đúng số bước');
assert.ok(stepNavHtml.includes('disabled'), 'Ở bước 1 nút Prev phải bị disable');

const inspectorHtml = vm.runInContext('ScaleInspectorPanel({ inspectorData: scaleLessonsDetail.caching.steps[0].inspector })', ctx);
assert.ok(inspectorHtml.includes('INSPECTOR'), 'InspectorPanel phải có badge');
assert.ok(inspectorHtml.includes('Primary Database'), 'InspectorPanel phải hiển thị thông tin Node');
console.log('✓ PASS: StepNavigation & InspectorPanel hoạt động chính xác.');

// TEST SUITE 6: Kiểm thử FAQ Accordion và Accessibility ARIA
console.log('[Test 6] Kiểm thử FAQ Accordion và thuộc tính ARIA...');
const faqHtml = vm.runInContext('ScaleFAQAccordion({ faqList: scalePagesData.home.faq })', ctx);
assert.ok(faqHtml.includes('aria-expanded="true"'), 'FAQ mở phải có aria-expanded=true');
assert.ok(faqHtml.includes('scale-faq-question'), 'FAQ phải có các nút question');
console.log('✓ PASS: FAQ Accordion tuân thủ chuẩn trợ năng ARIA.');

console.log('\n======================================================');
console.log('🎉 TẤT CẢ 6 TEST SUITES CỦA DESIGNED TO SCALE ĐÃ VƯỢT QUA!');
console.log('======================================================\n');
