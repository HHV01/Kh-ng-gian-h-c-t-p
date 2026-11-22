function escScale(s) { 
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); 
}

/**
 * DESIGNED TO SCALE - VIEW CONTROLLER & ROUTER
 * Handles page rendering, navigation state, interactive animations, and keyboard accessibility.
 */

// Điều hướng trang trong Designed to Scale
function goScale(view = 'home', slug = 'caching', step = 1) {
  scaleState.currentView = view;
  scaleState.activeSlug = slug;
  scaleState.activeStep = Number(step) || 1;

  // Dừng auto-play nếu đang chạy
  if (scaleState.playTimer) {
    clearInterval(scaleState.playTimer);
    scaleState.playTimer = null;
    scaleState.isPlaying = false;
  }

  // Cập nhật URL hash
  if (view === 'home') {
    location.hash = '#/scale';
  } else if (view === 'lesson') {
    location.hash = `#/${slug}/${scaleState.activeStep}`;
  } else {
    location.hash = `#/${view}`;
  }

  renderScaleApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render ứng dụng Designed to Scale vào #main
function renderScaleApp() {
  const main = document.querySelector('#main');
  if (!main) return;

  // Đổi title tab
  const isEn = scaleState.language === 'en';
  let titlePrefix = 'Designed to Scale';
  if (scaleState.currentView === 'lesson') {
    const lesson = scaleLessonsDetail[scaleState.activeSlug];
    if (lesson) titlePrefix = `${lesson.titleVi || lesson.title} (Step ${scaleState.activeStep}) · Designed to Scale`;
  } else if (scaleState.currentView === 'about') {
    titlePrefix = 'Giới thiệu · Designed to Scale';
  }
  document.title = titlePrefix;

  // Khung layout chính
  let pageContent = '';
  switch (scaleState.currentView) {
    case 'lesson':
      pageContent = renderScaleLessonView(scaleState.activeSlug, scaleState.activeStep);
      break;
    case 'about':
      pageContent = renderScaleAboutView();
      break;
    case 'contact':
      pageContent = renderScaleContactView();
      break;
    case 'privacy':
      pageContent = renderScalePrivacyView();
      break;
    case 'terms':
      pageContent = renderScaleTermsView();
      break;
    case 'home':
    default:
      pageContent = renderScaleHomeView();
      break;
  }

  main.innerHTML = `
    <div class="designed-to-scale-app" role="main">
      ${ScaleNavBar({ isPro: false, currentModule: 'Scaling', lang: scaleState.language })}
      <div class="scale-page-wrapper">
        ${pageContent}
      </div>
      ${ScaleFooter({ lang: scaleState.language })}
    </div>
  `;
}

// Trang chủ (Home View)
function renderScaleHomeView() {
  const isEn = scaleState.language === 'en';
  const data = scalePagesData.home;

  return `
    <div class="scale-home-page">
      ${ScaleHeroBanner({
        title: isEn ? data.titleEn : data.title,
        subtitle: isEn ? data.subtitleEn : data.subtitle,
        ctaStart: data.ctaStart,
        ctaDemo: data.ctaDemo,
        isEn
      })}

      ${ScaleFeatureList({
        features: data.features,
        useCases: data.useCases,
        isEn
      })}

      ${ScaleACloserLook()}

      ${ScaleCourseOutline({
        modules: scaleModulesData,
        isEn
      })}

      ${ScaleFAQAccordion({
        faqList: data.faq
      })}
    </div>
  `;
}

// Trang bài học tương tác (Interactive Lesson Studio View)
function renderScaleLessonView(slug, stepNumber) {
  const lesson = scaleLessonsDetail[slug] || scaleLessonsDetail['caching'];
  const steps = lesson.steps || [];
  const validStep = Math.max(1, Math.min(steps.length, stepNumber));
  const currentStepData = steps[validStep - 1] || steps[0];

  // Tìm node đang được người dùng click chọn trong sơ đồ
  const selectedNode = currentStepData.diagram && currentStepData.diagram.nodes
    ? currentStepData.diagram.nodes.find(n => n.id === scaleState.selectedNodeId)
    : null;
  const selectedNodeInfo = selectedNode 
    ? (typeof scaleNodeMetadata !== 'undefined' ? (scaleNodeMetadata[selectedNode.id] || scaleNodeMetadata[selectedNode.type]) : null)
    : null;

  return `
    <div class="scale-lesson-studio">
      <!-- 1. Learning Header: Tiêu đề bài học, Mục tiêu, Tiến độ & Chọn bước ở trên -->
      ${ScaleLearningHeader({
        lesson,
        validStep,
        totalSteps: steps.length,
        steps,
        isEn: scaleState.language === 'en'
      })}

      <!-- 2. Khung phòng học chính: Sidebar (nếu mở) + [Sơ đồ trung tâm | Giải thích & Chi tiết bên cạnh] -->
      <div class="classroom-layout-container ${scaleState.isLessonSidebarOpen ? 'with-sidebar' : ''}">
        <!-- Sidebar danh mục 40 bài học (bật/tắt bằng nút trên Header) -->
        ${scaleState.isLessonSidebarOpen ? ScaleSidebarMenu({ activeSlug: slug, modules: scaleModulesData }) : ''}

        <!-- Workspace Grid: Sơ đồ ở trung tâm, Giải thích và Chi tiết thành phần bên cạnh -->
        <div class="classroom-workspace-grid">
          <!-- SƠ ĐỒ Ở TRUNG TÂM & CHỈ SỐ MÔ PHỎNG MINH HỌA -->
          <main class="classroom-center-stage" role="main">
            <!-- Sơ đồ kiến trúc tương tác trực quan SVG -->
            <div class="classroom-diagram-wrapper">
              ${ScaleLessonDiagram({
                diagramState: currentStepData.diagram,
                activeStepNumber: validStep,
                selectedNodeId: scaleState.selectedNodeId
              })}
            </div>

            <!-- Bảng chỉ số hệ thống (Dữ liệu mô phỏng minh họa) -->
            ${ScaleMetricsPanel({
              metrics: currentStepData.metrics
            })}

            <!-- Điều khiển chuyển bước dưới chân sơ đồ -->
            ${ScaleLearningNavigation({
              currentStep: validStep,
              totalSteps: steps.length,
              isPlaying: scaleState.isPlaying,
              isCompleted: scaleState.completedLessons.includes(slug)
            })}
          </main>

          <!-- GIẢI THÍCH VÀ CHI TIẾT THÀNH PHẦN BÊN CẠNH (Tự nhiên trong luồng layout, không đè nội dung) -->
          <aside class="classroom-side-column" role="complementary" aria-label="Giải thích bước học và chi tiết kỹ thuật">
            <!-- Giải thích bước học -->
            ${ScaleExplanationPanel({
              stepTitle: currentStepData.title,
              stepExplanation: currentStepData.explanation,
              validStep,
              totalSteps: steps.length
            })}

            <!-- Chi tiết thành phần đang chọn (Inspector) -->
            ${ScaleInspectorPanel({
              inspectorData: currentStepData.inspector,
              selectedNode,
              selectedNodeInfo
            })}
          </aside>
        </div>
      </div>
    </div>
  `;
}

// Trang Giới thiệu (About View)
function renderScaleAboutView() {
  const a = scalePagesData.about;

  return `
    <div class="scale-static-page">
      <div class="scale-section-header">
        <span class="scale-kicker">ABOUT DESIGNED TO SCALE</span>
        <h1>${escScale(a.title)}</h1>
        <p>${escScale(a.description)}</p>
      </div>

      <div class="static-content-card">
        <h3>Phương pháp học tương tác (Interactive Visual Learning)</h3>
        <p>Hệ thống bao gồm <strong>40 bài học</strong> được tổ chức khoa học qua <strong>9 module</strong>. Mỗi bài học được thiết kế như một phòng thí nghiệm thu nhỏ, nơi bạn có thể chủ động kích hoạt lưu lượng, bật tắt các thành phần hạ tầng và đánh giá sự biến thiên của hệ thống.</p>

        <h3>Cách sử dụng khoá học hiệu quả</h3>
        <p>${escScale(a.howToUse)}</p>

        <h3>Đính chính và hỗ trợ kỹ thuật</h3>
        <p>Nếu bạn phát hiện điểm chưa chuẩn xác trong giải thích kiến trúc hoặc gặp lỗi hiển thị trên thiết bị, xin vui lòng gửi phản hồi tại <a href="#/contact" data-scale-nav="contact">Trang liên hệ & báo lỗi</a>.</p>
      </div>
    </div>
  `;
}

// Trang Liên hệ (Contact View)
function renderScaleContactView() {
  const c = scalePagesData.contact;

  return `
    <div class="scale-static-page">
      <div class="scale-section-header">
        <span class="scale-kicker">SUPPORT & FEEDBACK</span>
        <h1>${escScale(c.title)}</h1>
        <p>${escScale(c.description)}</p>
      </div>

      <div class="static-content-card">
        <h3>Kênh liên hệ trực tiếp</h3>
        <p>Gửi thư hỗ trợ tới hòm thư: <a href="mailto:${c.supportEmail}" class="contact-email-link"><strong>${c.supportEmail}</strong></a></p>

        <h3>Hướng dẫn báo cáo lỗi hoặc đề xuất kỹ thuật</h3>
        <ul class="scale-bullet-list">
          ${c.reportInstructions.map(inst => `
            <li>
              <span class="check-icon">✓</span>
              <span>${escScale(inst)}</span>
            </li>
          `).join('')}
        </ul>

        <div class="contact-quick-form">
          <h3>Gửi tin nhắn nhanh</h3>
          <div class="form-group">
            <label>Nội dung đóng góp:</label>
            <textarea id="scale-feedback-input" class="scale-textarea" placeholder="Nhập câu hỏi hoặc phản hồi của bạn..."></textarea>
          </div>
          <button class="scale-btn scale-btn-primary" data-scale-action="send-feedback">
            <span>Gửi phản hồi</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Trang Chính sách bảo mật (Privacy View)
function renderScalePrivacyView() {
  const p = scalePagesData.privacy;

  return `
    <div class="scale-static-page">
      <div class="scale-section-header">
        <span class="scale-kicker">LEGAL & PRIVACY</span>
        <h1>${escScale(p.title)}</h1>
        <p>Cập nhật lần cuối: ${escScale(p.lastUpdated)}</p>
      </div>

      <div class="static-content-card">
        ${p.sections.map(sec => `
          <div class="legal-section">
            <h3>${escScale(sec.heading)}</h3>
            <p>${escScale(sec.content)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Trang Điều khoản dịch vụ (Terms View)
function renderScaleTermsView() {
  const t = scalePagesData.terms;

  return `
    <div class="scale-static-page">
      <div class="scale-section-header">
        <span class="scale-kicker">TERMS OF USE</span>
        <h1>${escScale(t.title)}</h1>
        <p>Cập nhật lần cuối: ${escScale(t.lastUpdated)}</p>
      </div>

      <div class="static-content-card">
        ${t.sections.map(sec => `
          <div class="legal-section">
            <h3>${escScale(sec.heading)}</h3>
            <p>${escScale(sec.content)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// =========================================================================
// EVENT DELEGATION & TƯƠNG TÁC NGƯỜI DÙNG
// =========================================================================

document.addEventListener('click', e => {
  // 1. Điều hướng theo Navigation Data
  const navBtn = e.target.closest('[data-scale-nav]');
  if (navBtn) {
    e.preventDefault();
    const view = navBtn.dataset.scaleNav;
    const slug = navBtn.dataset.scaleSlug || 'caching';
    goScale(view, slug, 1);
    return;
  }

  // 1b. Chọn bước trực tiếp từ thanh chọn bước ở trên (Step Selector Bar)
  const goStepBtn = e.target.closest('[data-scale-action="go-step"]');
  if (goStepBtn) {
    e.preventDefault();
    const targetStep = Number(goStepBtn.dataset.scaleStep) || 1;
    scaleState.activeStep = targetStep;
    scaleState.selectedNodeId = null; // reset node selection khi đổi bước
    location.hash = `#/${scaleState.activeSlug}/${scaleState.activeStep}`;
    renderScaleApp();
    return;
  }

  // 1c. Bật / Tắt Sidebar danh mục 40 bài học
  if (e.target.closest('[data-scale-action="toggle-lessons-sidebar"]')) {
    e.preventDefault();
    scaleState.isLessonSidebarOpen = !scaleState.isLessonSidebarOpen;
    renderScaleApp();
    return;
  }

  // 2. Chuyển bước bài học: Next Step
  if (e.target.closest('[data-scale-action="next-step"]')) {
    e.preventDefault();
    const lesson = scaleLessonsDetail[scaleState.activeSlug] || scaleLessonsDetail['caching'];
    if (scaleState.activeStep < lesson.steps.length) {
      scaleState.activeStep++;
      location.hash = `#/${scaleState.activeSlug}/${scaleState.activeStep}`;
      renderScaleApp();
    }
    return;
  }

  // 3. Chuyển bước bài học: Prev Step
  if (e.target.closest('[data-scale-action="prev-step"]')) {
    e.preventDefault();
    if (scaleState.activeStep > 1) {
      scaleState.activeStep--;
      location.hash = `#/${scaleState.activeSlug}/${scaleState.activeStep}`;
      renderScaleApp();
    }
    return;
  }

  // 4. Bật / Tắt Tự động phát (Auto-play)
  if (e.target.closest('[data-scale-action="toggle-play"]')) {
    e.preventDefault();
    scaleState.isPlaying = !scaleState.isPlaying;
    if (scaleState.isPlaying) {
      scaleState.playTimer = setInterval(() => {
        const lesson = scaleLessonsDetail[scaleState.activeSlug] || scaleLessonsDetail['caching'];
        if (scaleState.activeStep < lesson.steps.length) {
          scaleState.activeStep++;
        } else {
          scaleState.activeStep = 1;
        }
        location.hash = `#/${scaleState.activeSlug}/${scaleState.activeStep}`;
        renderScaleApp();
      }, 3500);
    } else if (scaleState.playTimer) {
      clearInterval(scaleState.playTimer);
      scaleState.playTimer = null;
    }
    renderScaleApp();
    return;
  }

  // 5. Mở / Đóng Accordion FAQ
  const faqBtn = e.target.closest('[data-scale-action="toggle-faq"]');
  if (faqBtn) {
    e.preventDefault();
    const faqId = faqBtn.dataset.scaleFaq;
    scaleState.faqOpen[faqId] = !scaleState.faqOpen[faqId];
    renderScaleApp();
    return;
  }

  // 6. Mở / Thu gọn Module trong Sidebar
  const modBtn = e.target.closest('[data-scale-action="toggle-module"]');
  if (modBtn) {
    e.preventDefault();
    const modId = modBtn.dataset.scaleMod;
    scaleState.expandedModules[modId] = !scaleState.expandedModules[modId];
    renderScaleApp();
    return;
  }

  // 7. Chọn nút Demo trên Homepage
  const demoBtn = e.target.closest('[data-scale-demo-step]');
  if (demoBtn) {
    e.preventDefault();
    const mode = demoBtn.dataset.scaleDemoStep;
    document.querySelectorAll('[data-scale-demo-step]').forEach(b => b.classList.toggle('active', b === demoBtn));
    const playground = document.querySelector('#scale-demo-playground');
    if (playground) playground.innerHTML = renderDemoCanvas(mode);
    return;
  }

  // 8. Cuộn mượt đến demo
  if (e.target.closest('[data-scale-action="scroll-to-demo"]')) {
    e.preventDefault();
    const sec = document.querySelector('#caching-demo-section');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // 9. Đổi ngôn ngữ
  if (e.target.closest('[data-scale-action="toggle-lang"]')) {
    e.preventDefault();
    scaleState.language = scaleState.language === 'vi' ? 'en' : 'vi';
    if (typeof toast === 'function') {
      toast(scaleState.language === 'en' ? 'Language switched to English' : 'Đã đổi sang Tiếng Việt');
    }
    renderScaleApp();
    return;
  }

  // 10. Đổi Theme Sáng / Tối
  if (e.target.closest('[data-scale-action="toggle-theme"]')) {
    e.preventDefault();
    document.body.classList.toggle('dark');
    if (typeof toast === 'function') {
      toast(document.body.classList.contains('dark') ? 'Chế độ tối (Dark mode)' : 'Chế độ sáng (Light mode)');
    }
    renderScaleApp();
    return;
  }

  // 11. Bấm vào Node trong sơ đồ kiến trúc để inspect
  const nodeEl = e.target.closest('[data-scale-node]');
  if (nodeEl) {
    e.preventDefault();
    scaleState.selectedNodeId = nodeEl.dataset.scaleNode;
    renderScaleApp();
    return;
  }

  // 11b. Reset mô phỏng về trạng thái mặc định của bước
  if (e.target.closest('[data-scale-action="reset-sim"]')) {
    e.preventDefault();
    scaleState.selectedNodeId = null;
    if (scaleState.playTimer) {
      clearInterval(scaleState.playTimer);
      scaleState.playTimer = null;
      scaleState.isPlaying = false;
    }
    if (typeof toast === 'function') {
      toast('Đã reset mô phỏng về trạng thái mặc định của bước.');
    }
    renderScaleApp();
    return;
  }

  // 11c. Reset lựa chọn node quay về mặc định
  if (e.target.closest('[data-scale-action="reset-node"]')) {
    e.preventDefault();
    scaleState.selectedNodeId = null;
    renderScaleApp();
    return;
  }

  // 11d. Hoàn thành bài học
  if (e.target.closest('[data-scale-action="complete-lesson"]')) {
    e.preventDefault();
    if (!scaleState.completedLessons.includes(scaleState.activeSlug)) {
      scaleState.completedLessons.push(scaleState.activeSlug);
      try {
        localStorage.setItem('vy-scale-completed', JSON.stringify(scaleState.completedLessons));
      } catch(e) {}
    }
    if (typeof toast === 'function') {
      toast('🎉 Xuất sắc! Bạn đã hoàn thành toàn bộ bài học này.');
    }
    renderScaleApp();
    return;
  }

  // 11e. Bật tắt bảng Inspector Drawer trên tablet / mobile
  if (e.target.closest('[data-scale-action="toggle-inspector"]')) {
    e.preventDefault();
    scaleState.isInspectorDrawerOpen = !scaleState.isInspectorDrawerOpen;
    renderScaleApp();
    return;
  }

  // 12. Gửi phản hồi liên hệ
  if (e.target.closest('[data-scale-action="send-feedback"]')) {
    e.preventDefault();
    const input = document.querySelector('#scale-feedback-input');
    if (input && input.value.trim()) {
      input.value = '';
      if (typeof toast === 'function') {
        toast('Cảm ơn bạn! Phản hồi kỹ thuật đã được ghi nhận.');
      }
    }
    return;
  }
});

// Điều khiển bàn phím (Keyboard Navigation)
document.addEventListener('keydown', e => {
  if (scaleState.currentView !== 'lesson') return;
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

  const lesson = scaleLessonsDetail[scaleState.activeSlug] || scaleLessonsDetail['caching'];
  if (e.key === 'ArrowRight' || e.key === ' ') {
    if (scaleState.activeStep < lesson.steps.length) {
      e.preventDefault();
      scaleState.activeStep++;
      location.hash = `#/${scaleState.activeSlug}/${scaleState.activeStep}`;
      renderScaleApp();
    }
  } else if (e.key === 'ArrowLeft') {
    if (scaleState.activeStep > 1) {
      e.preventDefault();
      scaleState.activeStep--;
      location.hash = `#/${scaleState.activeSlug}/${scaleState.activeStep}`;
      renderScaleApp();
    }
  }
});

// Lắng nghe hash change để đồng bộ URL và chuyển page sang System Scale
window.addEventListener('hashchange', () => {
  const hash = location.hash.replace(/^#\/?/, '');
  if (!hash) return;

  // Đồng bộ trạng thái page VyWorkspace
  if (typeof page !== 'undefined' && page !== 'System Scale') {
    page = 'System Scale';
    document.querySelectorAll('[data-nav]').forEach(b => {
      b.classList.toggle('active', b.dataset.nav === 'System Scale');
    });
  }

  if (hash === 'scale' || hash === 'pricing') {
    goScale('home');
  } else if (['about', 'contact', 'privacy', 'terms'].includes(hash)) {
    goScale(hash);
  } else {
    const parts = hash.split('/');
    if (parts[0] === 'scale' && parts[1]) {
      const slug = parts[1];
      const step = parts[2] || 1;
      goScale('lesson', slug, step);
    } else if (parts[0]) {
      const slug = parts[0];
      const step = parts[1] || 1;
      goScale('lesson', slug, step);
    }
  }
});
