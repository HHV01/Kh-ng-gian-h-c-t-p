const fs = require('fs');
let code = fs.readFileSync('dist/scale-components.js', 'utf8');

const target = `<div class="learning-header-actions">
          <button class="scale-btn scale-btn-outline scale-btn-sm toggle-inspector-btn" data-scale-action="toggle-inspector" aria-label="Bật tắt Inspector">
            <span>⚙️ Inspector</span>
          </button>
          <span class="learning-status-pill \${isDone ? 'done' : ''}">`;

const replacement = `<div class="learning-header-actions">
          <button class="scale-btn scale-btn-outline scale-btn-sm btn-toggle-lessons \${scaleState.isLessonSidebarOpen ? 'active' : ''}" data-scale-action="toggle-lessons-sidebar" aria-label="Bật tắt danh mục 40 bài học">
            <span>☰</span> \${scaleState.isLessonSidebarOpen ? 'Đóng danh mục' : 'Danh mục 40 bài'}
          </button>
          <button class="scale-btn scale-btn-outline scale-btn-sm toggle-inspector-btn \${scaleState.isInspectorDrawerOpen ? 'active' : ''}" data-scale-action="toggle-inspector" aria-label="Bật tắt Inspector">
            <span>🔍 Inspector</span>
          </button>
          <span class="learning-status-pill \${isDone ? 'done' : ''}">`;

if (code.includes(target)) {
  code = code.replace(target, replacement);
  fs.writeFileSync('dist/scale-components.js', code, 'utf8');
  console.log('Successfully updated ScaleLearningHeader with btn-toggle-lessons');
} else {
  console.log('Target not found, inspecting around learning-header-actions');
  const idx = code.indexOf('learning-header-actions');
  console.log(code.slice(idx, idx + 400));
}
