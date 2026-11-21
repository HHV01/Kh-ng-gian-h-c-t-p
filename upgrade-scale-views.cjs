const fs = require('fs');

console.log('--- UPGRADING SCALE COMPONENTS, VIEWS & CSS ---');

// 1. UPDATE scale-components.js: replace esc( with escScale( and add escScale definition
let compCode = fs.readFileSync('dist/scale-components.js', 'utf8');

if (!compCode.includes('function escScale(')) {
  compCode = `function escScale(s) { 
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); 
}\n\n` + compCode;
}
compCode = compCode.replace(/\besc\(/g, 'escScale(');

// Update ScaleLearningHeader to include Toggle Lessons Sidebar button
const oldHeaderAction = `<div class="learning-header-actions">
          <button class="toggle-inspector-btn" data-scale-action="toggle-inspector" aria-label="Bật tắt bảng kiểm tra">
            <span>🔍 Inspector</span>
          </button>
          <span class="learning-status-pill">`;

const newHeaderAction = `<div class="learning-header-actions">
          <button class="btn-toggle-lessons \${scaleState.isLessonSidebarOpen ? 'active' : ''}" data-scale-action="toggle-lessons-sidebar" aria-label="Bật tắt danh mục 40 bài học">
            <span>☰</span> \${scaleState.isLessonSidebarOpen ? 'Đóng danh mục' : 'Danh mục 40 bài'}
          </button>
          <button class="toggle-inspector-btn \${scaleState.isInspectorDrawerOpen ? 'active' : ''}" data-scale-action="toggle-inspector" aria-label="Bật tắt bảng kiểm tra">
            <span>🔍 Inspector</span>
          </button>
          <span class="learning-status-pill">`;

if (compCode.includes(oldHeaderAction)) {
  compCode = compCode.replace(oldHeaderAction, newHeaderAction);
  console.log('Added btn-toggle-lessons to ScaleLearningHeader');
} else {
  console.log('oldHeaderAction not found, searching alternative...');
  compCode = compCode.replace(/<div class="learning-header-actions">[\s\S]*?<span class="learning-status-pill">/, `<div class="learning-header-actions">
          <button class="btn-toggle-lessons \${scaleState.isLessonSidebarOpen ? 'active' : ''}" data-scale-action="toggle-lessons-sidebar" aria-label="Bật tắt danh mục 40 bài học">
            <span>☰</span> \${scaleState.isLessonSidebarOpen ? 'Đóng danh mục' : 'Danh mục 40 bài'}
          </button>
          <button class="toggle-inspector-btn \${scaleState.isInspectorDrawerOpen ? 'active' : ''}" data-scale-action="toggle-inspector" aria-label="Bật tắt bảng kiểm tra">
            <span>🔍 Inspector</span>
          </button>
          <span class="learning-status-pill">`);
}

fs.writeFileSync('dist/scale-components.js', compCode, 'utf8');
console.log('dist/scale-components.js updated successfully.');

// 2. UPDATE scale-views.js: support toggle-lessons-sidebar and layout classes
let viewCode = fs.readFileSync('dist/scale-views.js', 'utf8');

if (!viewCode.includes('function escScale(')) {
  viewCode = `function escScale(s) { 
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); 
}\n\n` + viewCode;
}
viewCode = viewCode.replace(/\besc\(/g, 'escScale(');

// Add isLessonSidebarOpen to scaleState if not present
if (!viewCode.includes('isLessonSidebarOpen:')) {
  viewCode = viewCode.replace('isInspectorDrawerOpen: false,', 'isInspectorDrawerOpen: false,\n  isLessonSidebarOpen: false,');
}

// Update workspace grid class in renderScaleLessonView
viewCode = viewCode.replace(
  '`<div class="studio-workspace-grid ${scaleState.isInspectorDrawerOpen ? \'drawer-open\' : \'\'}">`',
  '`<div class="studio-workspace-grid ${scaleState.isLessonSidebarOpen ? \'sidebar-open\' : \'sidebar-collapsed\'} ${scaleState.isInspectorDrawerOpen ? \'drawer-open\' : \'\'}">`'
);

viewCode = viewCode.replace(
  '<div class="studio-workspace-grid ${scaleState.isInspectorDrawerOpen ? \'drawer-open\' : \'\'}">',
  '<div class="studio-workspace-grid ${scaleState.isLessonSidebarOpen ? \'sidebar-open\' : \'sidebar-collapsed\'} ${scaleState.isInspectorDrawerOpen ? \'drawer-open\' : \'\'}">'
);

// Add toggle-lessons-sidebar action in document click handler
if (!viewCode.includes("action === 'toggle-lessons-sidebar'")) {
  const targetActionHook = "if (action === 'toggle-inspector') {";
  const newActionCode = `if (action === 'toggle-lessons-sidebar') {
      scaleState.isLessonSidebarOpen = !scaleState.isLessonSidebarOpen;
      renderScaleApp();
      return;
    }

    if (action === 'toggle-inspector') {`;
  viewCode = viewCode.replace(targetActionHook, newActionCode);
}

fs.writeFileSync('dist/scale-views.js', viewCode, 'utf8');
console.log('dist/scale-views.js updated successfully.');

// 3. UPDATE scale.css: full-bleed styling, spacious workspace, sidebar-collapsed styles
let cssCode = fs.readFileSync('dist/scale.css', 'utf8');

const extraCss = `
/* =========================================================================
   FULL-WIDTH STUDIO & COLLAPSIBLE SIDEBAR FOR HOW-REQUEST-TRAVELS & ALL LESSONS
   ========================================================================= */

/* Break out of #main padding for immersive edge-to-edge layout */
.designed-to-scale-app {
  margin: -32px -38px -50px;
  width: calc(100% + 76px);
  background: var(--gl-bg, #F8FAFC);
  min-height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
}

/* Studio Workspace Grid: Spacious 2-column layout when sidebar is collapsed */
.studio-workspace-grid {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr) 320px;
  gap: 24px;
  max-width: 1720px;
  margin: 0 auto;
  width: 100%;
  padding: 24px 32px;
  box-sizing: border-box;
  align-items: start;
  transition: all 0.25s ease;
}

.studio-workspace-grid.sidebar-collapsed {
  grid-template-columns: minmax(0, 1fr) 320px;
}

.studio-workspace-grid.sidebar-collapsed .scale-lesson-sidebar {
  display: none;
}

/* Toggle Lessons Button */
.btn-toggle-lessons {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #FFFFFF;
  border: 1px solid var(--gl-border, #E2E8F0);
  color: var(--gl-text, #0F172A);
  font-size: 12.5px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.btn-toggle-lessons:hover {
  background: #EEF2FF;
  border-color: #C7D2FE;
  color: #6366F1;
}

.btn-toggle-lessons.active {
  background: #6366F1;
  color: #FFFFFF;
  border-color: #4F46E5;
}

/* Toggle Inspector Button */
.toggle-inspector-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #FFFFFF;
  border: 1px solid var(--gl-border, #E2E8F0);
  color: var(--gl-text, #0F172A);
  font-size: 12.5px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.toggle-inspector-btn:hover {
  background: #EEF2FF;
  border-color: #C7D2FE;
  color: #6366F1;
}

.toggle-inspector-btn.active {
  background: #6366F1;
  color: #FFFFFF;
  border-color: #4F46E5;
}

/* Interactive SVG Diagram Enhancements */
.scale-diagram-interactive-svg {
  width: 100%;
  min-height: 280px;
  max-height: 380px;
  display: block;
}

.interactive-node {
  cursor: pointer;
  outline: none;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.interactive-node:hover {
  transform: translateY(-2px);
  filter: drop-shadow(0 6px 16px rgba(99, 102, 241, 0.25));
}

.interactive-node.selected .node-rect {
  stroke: #6366F1 !important;
  stroke-width: 3.5px !important;
  filter: drop-shadow(0 0 12px rgba(99, 102, 241, 0.4));
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .studio-workspace-grid,
  .studio-workspace-grid.sidebar-open {
    grid-template-columns: minmax(0, 1fr) 300px;
    padding: 20px;
    gap: 18px;
  }
  .studio-workspace-grid .scale-lesson-sidebar {
    display: none;
  }
}

@media (max-width: 900px) {
  .designed-to-scale-app {
    margin: -24px -18px -95px;
    width: calc(100% + 36px);
  }
  .studio-workspace-grid,
  .studio-workspace-grid.sidebar-collapsed {
    grid-template-columns: 100%;
    padding: 16px;
    gap: 16px;
  }
  .scale-inspector-panel {
    display: none;
  }
  .studio-workspace-grid.drawer-open .scale-inspector-panel {
    display: flex;
  }
}
`;

fs.writeFileSync('dist/scale.css', cssCode + '\n' + extraCss, 'utf8');
console.log('dist/scale.css updated successfully.');
