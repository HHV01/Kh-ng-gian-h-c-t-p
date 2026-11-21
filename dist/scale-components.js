function escScale(s) { 
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); 
}

/**
 * DESIGNED TO SCALE - COMPONENT SYSTEM
 * Implements reusable UI components with accessibility, responsive behavior & state variants.
 */

// Global State cho Designed to Scale
const scaleState = {
  currentView: 'home', // 'home' | 'lesson' | 'about' | 'contact' | 'privacy' | 'terms'
  activeSlug: 'caching',
  activeStep: 1,
  language: 'vi', // 'vi' | 'en'
  isPlaying: false,
  playTimer: null,
  selectedNodeId: null,
  isInspectorDrawerOpen: false,
  completedLessons: [],
  expandedModules: { 'foundations': true, 'scaling': true },
  faqOpen: { 'faq-1': true }
};

// 1. Component Button
function ScaleButton({ text, onClickAttr, variant = 'primary', size = 'md', icon = '', disabled = false, ariaLabel = '' }) {
  const vClass = variant === 'primary' ? 'scale-btn-primary' : variant === 'outline' ? 'scale-btn-outline' : variant === 'secondary' ? 'scale-btn-secondary' : 'scale-btn-text';
  const sClass = size === 'sm' ? 'scale-btn-sm' : size === 'lg' ? 'scale-btn-lg' : '';
  const labelAttr = ariaLabel ? `aria-label="${escScale(ariaLabel)}"` : '';
  const disAttr = disabled ? 'disabled' : '';
  const clickAttr = onClickAttr ? `data-scale-action="${onClickAttr}"` : '';

  return `
    <button class="scale-btn ${vClass} ${sClass}" ${clickAttr} ${labelAttr} ${disAttr}>
      ${icon ? `<span class="scale-btn-icon">${icon}</span>` : ''}
      <span>${escScale(text)}</span>
    </button>
  `;
}

// 2. Component NavBar
function ScaleNavBar({ isPro = false, currentModule = 'Scaling', lang = 'vi' }) {
  const isEn = lang === 'en';
  return `
    <header class="scale-navbar" role="banner">
      <div class="scale-nav-container">
        <!-- Logo Brand -->
        <a href="#/scale" class="scale-brand" data-scale-nav="home" aria-label="Designed to Scale Home">
          <div class="scale-brand-icon">⚡</div>
          <div class="scale-brand-text">
            <span>Designed to</span>
            <strong>Scale</strong>
          </div>
        </a>

        <!-- Module Breadcrumb or Navigation Links -->
        <nav class="scale-nav-links" aria-label="Điều hướng chính">
          <button class="scale-nav-link ${scaleState.currentView === 'home' ? 'active' : ''}" data-scale-nav="home">
            ${isEn ? 'Home' : 'Trang chủ'}
          </button>
          <button class="scale-nav-link ${scaleState.currentView === 'lesson' ? 'active' : ''}" data-scale-nav="lesson" data-scale-slug="caching">
            ${isEn ? 'Lessons (40)' : 'Bài học (40 bài)'}
          </button>
          <button class="scale-nav-link ${scaleState.currentView === 'about' ? 'active' : ''}" data-scale-nav="about">
            ${isEn ? 'About' : 'Giới thiệu'}
          </button>
          <button class="scale-nav-link ${scaleState.currentView === 'contact' ? 'active' : ''}" data-scale-nav="contact">
            ${isEn ? 'Contact' : 'Liên hệ'}
          </button>
        </nav>

        <!-- Right Actions: Plan Status, Language, Theme, Back to BA Academy -->
        <div class="scale-nav-actions">
          <!-- Gói tài khoản -->
          <div class="scale-plan-badge pro">
            <span class="plan-dot"></span>
            <span>${isEn ? '40 Lessons Unlocked' : 'Mở toàn bộ 40 bài · Miễn phí'}</span>
          </div>

          <!-- Nút chọn ngôn ngữ -->
          <button class="scale-lang-btn" data-scale-action="toggle-lang" title="Đổi ngôn ngữ / Change language" aria-label="Đổi ngôn ngữ">
            <span>🌐</span>
            <strong>${lang.toUpperCase()}</strong>
          </button>

          <!-- Nút đổi Theme Sáng/Tối -->
          <button class="scale-theme-btn" data-scale-action="toggle-theme" title="Đổi chế độ sáng / tối" aria-label="Đổi chế độ sáng / tối">
            <span>${document.body.classList.contains('dark') ? '☀️' : '🌙'}</span>
          </button>

          <!-- Nút chuyển về BA Workspace -->
          <button class="scale-btn-workspace" data-nav="Dashboard" title="Quay về Vy Workspace Dashboard">
            <span>◫ BA Workspace</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

// 3. Component Footer
function ScaleFooter({ lang = 'vi' }) {
  const isEn = lang === 'en';
  return `
    <footer class="scale-footer" role="contentinfo">
      <div class="scale-footer-container">
        <div class="scale-footer-brand">
          <div class="scale-brand">
            <div class="scale-brand-icon">⚡</div>
            <div class="scale-brand-text">
              <span>Designed to</span>
              <strong>Scale</strong>
            </div>
          </div>
          <p class="scale-footer-desc">
            ${isEn 
              ? 'Interactive system design lessons to build confidence with distributed web architecture.' 
              : 'Nền tảng học thiết kế kiến trúc hệ thống trực quan, sinh động giúp kỹ sư làm chủ hạ tầng triệu người dùng.'}
          </p>
          <p class="scale-footer-copy">© 2026 Designed to Scale · All rights reserved.</p>
        </div>

        <div class="scale-footer-links-group">
          <h4>${isEn ? 'Navigation' : 'Điều hướng'}</h4>
          <a href="#/scale" data-scale-nav="home">${isEn ? 'Home' : 'Trang chủ'}</a>
          <a href="#/caching/1" data-scale-nav="lesson" data-scale-slug="caching">${isEn ? 'Interactive Lessons' : 'Bài học tương tác'}</a>
          <a href="#/about" data-scale-nav="about">${isEn ? 'About Course' : 'Về khoá học'}</a>
        </div>

        <div class="scale-footer-links-group">
          <h4>${isEn ? 'Legal & Support' : 'Pháp lý & Hỗ trợ'}</h4>
          <a href="#/contact" data-scale-nav="contact">${isEn ? 'Contact Support' : 'Liên hệ hỗ trợ'}</a>
          <a href="#/privacy" data-scale-nav="privacy">${isEn ? 'Privacy Policy' : 'Chính sách bảo mật'}</a>
          <a href="#/terms" data-scale-nav="terms">${isEn ? 'Terms of Use' : 'Điều khoản dịch vụ'}</a>
          <span class="scale-footer-email">support@designedtoscale.app</span>
        </div>
      </div>
    </footer>
  `;
}

// 4. Component HeroBanner
function ScaleHeroBanner({ title, subtitle, ctaStart, ctaDemo, isEn = false }) {
  return `
    <section class="scale-hero" aria-labelledby="hero-title">
      <div class="scale-hero-content">
        <div class="scale-badge-pill">
          <span class="sparkle">✦</span>
          <span>40 ANIMATED LESSONS · 9 SYSTEM MODULES</span>
        </div>
        <h1 id="hero-title" class="scale-hero-title">${escScale(title)}</h1>
        <p class="scale-hero-subtitle">${escScale(subtitle)}</p>
        <div class="scale-hero-actions">
          <button class="scale-btn scale-btn-primary scale-btn-lg" data-scale-nav="lesson" data-scale-slug="caching">
            <span>${escScale(ctaStart)}</span>
            <span>→</span>
          </button>
          <button class="scale-btn scale-btn-outline scale-btn-lg" data-scale-action="scroll-to-demo">
            <span>▶</span>
            <span>${escScale(ctaDemo)}</span>
          </button>
        </div>
      </div>

      <div class="scale-hero-visual" aria-hidden="true">
        <div class="scale-iso-grid">
          <div class="scale-node-cube server">
            <span class="cube-icon">🖥️</span>
            <small>App Server</small>
          </div>
          <div class="scale-node-cube cache">
            <span class="cube-icon">⚡</span>
            <small>Redis 94%</small>
          </div>
          <div class="scale-node-cube db">
            <span class="cube-icon">🗄️</span>
            <small>DB Shard</small>
          </div>
          <div class="scale-stream-line"></div>
        </div>
      </div>
    </section>
  `;
}

// 5. Component FeatureList & UseCaseList
function ScaleFeatureList({ features, useCases, isEn = false }) {
  return `
    <section class="scale-features-section">
      <div class="scale-section-header">
        <span class="scale-kicker">TÍNH NĂNG VƯỢT TRỘI</span>
        <h2>Học kiến trúc hệ thống theo cách trực quan nhất</h2>
        <p>Không còn những trang sách lý thuyết khô khan. Trực tiếp quan sát các gói tin luân chuyển và độ trễ biến đổi.</p>
      </div>

      <div class="scale-features-grid">
        <div class="scale-feature-card">
          <ul class="scale-bullet-list">
            ${features.map(f => `
              <li>
                <span class="check-icon">✓</span>
                <span>${escScale(f)}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="scale-usecases-card">
          <h3>Các trường hợp ứng dụng thực tế</h3>
          <div class="scale-usecases-list">
            ${useCases.map(u => `
              <div class="scale-usecase-item">
                <div class="usecase-icon">${u.icon === 'server' ? '🌐' : u.icon === 'briefcase' ? '💼' : '🛡️'}</div>
                <div>
                  <h4>${escScale(u.title)}</h4>
                  <p>${escScale(u.desc)}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

// 6. Component Interactive Caching Preview ("A closer look")
function ScaleACloserLook() {
  return `
    <section class="scale-closer-look" id="caching-demo-section">
      <div class="scale-section-header">
        <span class="scale-kicker">A CLOSER LOOK · KHẢO SÁT THỰC NGHIỆM</span>
        <h2>Xem Caching giải cứu Database trong 30 giây</h2>
        <p>Bấm thử nút dưới đây để chứng kiến số liệu p50/p99 và thông lượng thay đổi ngay trên màn hình.</p>
      </div>

      <div class="scale-demo-box">
        <div class="scale-demo-controls">
          <button class="scale-demo-btn active" data-scale-demo-step="cold">1. Chưa có Cache (Nghẽn DB)</button>
          <button class="scale-demo-btn" data-scale-demo-step="warm">2. Bổ sung Redis (Hit 68%)</button>
          <button class="scale-demo-btn" data-scale-demo-step="hot">3. Tối ưu cực đại (Hit 94%)</button>
        </div>

        <div id="scale-demo-playground">
          <!-- Render diagram demo động -->
          ${renderDemoCanvas('cold')}
        </div>
      </div>
    </section>
  `;
}

// Helper render Canvas SVG cho Demo
function renderDemoCanvas(mode) {
  const isCold = mode === 'cold';
  const isWarm = mode === 'warm';
  const isHot = mode === 'hot';

  const p50 = isCold ? 165 : isWarm ? 32 : 6;
  const p99 = isCold ? 340 : isWarm ? 95 : 18;
  const rps = isCold ? 480 : isWarm ? 2400 : 4800;
  const cpu = isCold ? 88 : isWarm ? 38 : 16;
  const hit = isCold ? 0 : isWarm ? 68 : 94;

  return `
    <div class="demo-canvas-wrap">
      <div class="demo-metrics-strip">
        <div class="demo-metric-cell">
          <label>p50 Latency</label>
          <strong class="${isCold ? 'danger' : 'success'}">${p50} ms</strong>
        </div>
        <div class="demo-metric-cell">
          <label>p99 Latency</label>
          <strong class="${isCold ? 'danger' : 'success'}">${p99} ms</strong>
        </div>
        <div class="demo-metric-cell">
          <label>Throughput</label>
          <strong>${rps.toLocaleString()} RPS</strong>
        </div>
        <div class="demo-metric-cell">
          <label>Database CPU</label>
          <strong class="${cpu > 80 ? 'danger' : 'success'}">${cpu}%</strong>
        </div>
        <div class="demo-metric-cell">
          <label>Cache Hit Ratio</label>
          <strong class="${hit > 80 ? 'success' : 'warn'}">${hit}%</strong>
        </div>
      </div>

      <div class="demo-diagram-svg-wrap">
        <svg viewBox="0 0 760 220" class="scale-diagram-svg">
          <!-- Background Grid Pattern -->
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-opacity="0.05"/>
            </pattern>
            <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#6366F1"/>
              <stop offset="100%" stop-color="#10B981"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          <!-- Connection Lines -->
          <!-- Client -> LB -->
          <line x1="120" y1="110" x2="250" y2="110" stroke="#6366F1" stroke-width="2.5" stroke-dasharray="6,4" class="anim-dash" />
          <!-- LB -> App -->
          <line x1="330" y1="110" x2="430" y2="110" stroke="#6366F1" stroke-width="2.5" stroke-dasharray="6,4" class="anim-dash" />

          <!-- App -> Cache (nếu có cache) -->
          ${!isCold ? `
            <path d="M 470 85 Q 520 40 570 40" fill="none" stroke="#10B981" stroke-width="3" stroke-dasharray="6,4" class="anim-dash" />
            <text x="520" y="30" fill="#10B981" font-size="11" font-weight="700">Cache Check (${hit}% Hit)</text>
          ` : ''}

          <!-- App -> DB -->
          <line x1="510" y1="110" x2="630" y2="110" stroke="${isCold ? '#EF4444' : '#94A3B8'}" stroke-width="${isCold ? 3 : 1.5}" stroke-dasharray="${isCold ? '4,4' : 'none'}" class="${isCold ? 'anim-dash' : ''}" />
          ${isCold ? `<text x="540" y="135" fill="#EF4444" font-size="11" font-weight="700">100% Reads vào Đĩa</text>` : ''}

          <!-- Node: Client -->
          <g transform="translate(60, 80)" class="diagram-node">
            <rect width="70" height="60" rx="10" fill="var(--gl-card)" stroke="#6366F1" stroke-width="2"/>
            <text x="35" y="28" text-anchor="middle" font-size="18">📱</text>
            <text x="35" y="48" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">Client</text>
          </g>

          <!-- Node: Load Balancer -->
          <g transform="translate(250, 80)" class="diagram-node">
            <rect width="80" height="60" rx="10" fill="var(--gl-card)" stroke="#6366F1" stroke-width="2"/>
            <text x="40" y="28" text-anchor="middle" font-size="18">⚖️</text>
            <text x="40" y="48" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">Load Balancer</text>
          </g>

          <!-- Node: App Server -->
          <g transform="translate(430, 80)" class="diagram-node">
            <rect width="80" height="60" rx="10" fill="var(--gl-card)" stroke="#6366F1" stroke-width="2"/>
            <text x="40" y="28" text-anchor="middle" font-size="18">⚙️</text>
            <text x="40" y="48" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">App Server</text>
          </g>

          <!-- Node: Redis Cache -->
          ${!isCold ? `
            <g transform="translate(570, 15)" class="diagram-node">
              <rect width="85" height="55" rx="10" fill="var(--gl-card)" stroke="#10B981" stroke-width="2.5"/>
              <text x="42" y="25" text-anchor="middle" font-size="16">⚡</text>
              <text x="42" y="44" text-anchor="middle" font-size="10" font-weight="700" fill="#10B981">Redis Cache</text>
            </g>
          ` : ''}

          <!-- Node: Database -->
          <g transform="translate(630, 80)" class="diagram-node">
            <rect width="80" height="60" rx="10" fill="var(--gl-card)" stroke="${isCold ? '#EF4444' : '#6366F1'}" stroke-width="2"/>
            <text x="40" y="28" text-anchor="middle" font-size="18">🗄️</text>
            <text x="40" y="48" text-anchor="middle" font-size="10" font-weight="700" fill="${isCold ? '#EF4444' : 'currentColor'}">PostgreSQL</text>
            ${isCold ? `<circle cx="70" cy="10" r="5" fill="#EF4444" class="anim-pulse"/>` : ''}
          </g>
        </svg>
      </div>

      <div class="demo-explanation-box">
        <strong>${isCold ? '⚠️ Vấn đề:' : isWarm ? '💡 Cải tiến:' : '🚀 Kết quả:'}</strong>
        <span>
          ${isCold 
            ? 'Cơ sở dữ liệu đang quá tải. Khi số lượng request tăng vọt, đĩa cứng không kịp đáp ứng, p99 tăng lên 340ms.' 
            : isWarm 
              ? 'Redis bắt đầu hấp thụ 68% số lượng đọc. Thời gian phản hồi giảm hơn một nửa.' 
              : 'Tối ưu tuyệt đối: 94% request được giải quyết trong RAM với 6ms, Database nghỉ ngơi hoàn toàn.'}
        </span>
      </div>
    </div>
  `;
}

// 7. Component CourseOutline (9 modules & 40 bài học)
function ScaleCourseOutline({ modules, isEn = false }) {
  return `
    <section class="scale-outline-section" id="course-outline">
      <div class="scale-section-header">
        <span class="scale-kicker">LỘ TRÌNH 40 BÀI HỌC</span>
        <h2>Khung chương trình 9 Module hoàn chỉnh</h2>
        <p>Bao quát toàn diện từ cách một request di chuyển cho đến thiết kế các hệ sinh thái phân tán khổng lồ.</p>
      </div>

      <div class="scale-modules-grid">
        ${modules.map(m => `
          <div class="scale-module-box">
            <div class="scale-module-head">
              <span class="module-chip">${m.lessons.length} ${isEn ? 'lessons' : 'bài'}</span>
              <h3>${escScale(m.titleVi || m.title)}</h3>
              <p>${escScale(m.desc)}</p>
            </div>
            <div class="scale-module-lessons">
              ${m.lessons.map((l, idx) => `
                <a href="#/${l.slug}/1" class="scale-lesson-row" data-scale-nav="lesson" data-scale-slug="${l.slug}">
                  <span class="lesson-num">${String(idx + 1).padStart(2, '0')}</span>
                  <span class="lesson-name">${escScale(l.titleVi || l.title)}</span>
                  <span class="lesson-arrow">→</span>
                </a>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

// 8. Component FAQAccordion
function ScaleFAQAccordion({ faqList }) {
  return `
    <section class="scale-faq-section" aria-labelledby="faq-title">
      <div class="scale-section-header">
        <span class="scale-kicker">HỎI ĐÁP PHỔ BIẾN</span>
        <h2 id="faq-title">Những thắc mắc thường gặp</h2>
        <p>Tất cả thông tin bạn cần biết về phương pháp học và nội dung Designed to Scale.</p>
      </div>

      <div class="scale-faq-accordion" role="region" aria-label="Accordion câu hỏi thường gặp">
        ${faqList.map(item => {
          const isOpen = scaleState.faqOpen[item.id] || false;
          return `
            <div class="scale-faq-item ${isOpen ? 'open' : ''}" id="${item.id}">
              <button class="scale-faq-question" 
                      data-scale-action="toggle-faq" 
                      data-scale-faq="${item.id}"
                      aria-expanded="${isOpen}"
                      aria-controls="${item.id}-answer">
                <span>${escScale(item.question)}</span>
                <span class="faq-icon">${isOpen ? '−' : '+'}</span>
              </button>
              <div class="scale-faq-answer" id="${item.id}-answer" role="region" aria-hidden="${!isOpen}">
                <p>${escScale(item.answer)}</p>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

// 8b. Component LearningHeader (Chuẩn hóa Header phòng học)
function ScaleLearningHeader({ lesson, validStep, totalSteps, isEn = false }) {
  const percent = Math.round((validStep / totalSteps) * 100);
  const isDone = scaleState.completedLessons.includes(lesson.slug);

  return `
    <header class="scale-learning-header" role="region" aria-label="Tiêu đề & tiến độ bài học">
      <div class="learning-header-top">
        <a href="#/scale" data-scale-nav="home" class="learning-back-btn" aria-label="Quay lại danh sách bài học">
          <span>← Quay lại danh mục Designed to Scale</span>
        </a>
        <div class="learning-header-actions">
          <button class="scale-btn scale-btn-outline scale-btn-sm btn-toggle-lessons ${scaleState.isLessonSidebarOpen ? 'active' : ''}" data-scale-action="toggle-lessons-sidebar" aria-label="Bật tắt danh mục 40 bài học">
            <span>☰</span> ${scaleState.isLessonSidebarOpen ? 'Đóng danh mục' : 'Danh mục 40 bài'}
          </button>
          <button class="scale-btn scale-btn-outline scale-btn-sm toggle-inspector-btn ${scaleState.isInspectorDrawerOpen ? 'active' : ''}" data-scale-action="toggle-inspector" aria-label="Bật tắt Inspector">
            <span>🔍 Inspector</span>
          </button>
          <span class="learning-status-pill ${isDone ? 'done' : ''}">
            ${isDone ? '✓ Đã hoàn thành' : `Tiến độ: ${percent}%`}
          </span>
        </div>
      </div>

      <div class="learning-header-main">
        <div class="learning-header-info">
          <span class="learning-module-tag">${escScale(lesson.moduleTitle)}</span>
          <h1 class="learning-lesson-title">${escScale(lesson.titleVi || lesson.title)}</h1>
          <p class="learning-objective">
            <strong>🎯 Mục tiêu bài học:</strong> Nắm vững nguyên lý và kiểm chứng hiệu năng chịu tải của ${escScale(lesson.titleVi || lesson.title)} qua ${totalSteps} bước mô phỏng luồng dữ liệu thời gian thực.
          </p>
        </div>

        <div class="learning-step-progress-box">
          <div class="step-progress-labels">
            <span>Bước ${validStep} / ${totalSteps}</span>
            <strong>${percent}%</strong>
          </div>
          <div class="step-progress-track">
            <div class="step-progress-bar" style="width: ${percent}%"></div>
          </div>
        </div>
      </div>
    </header>
  `;
}

// 8c. Component ExplanationPanel (Chuẩn hóa Panel giải thích)
function ScaleExplanationPanel({ stepTitle, stepExplanation, validStep, totalSteps }) {
  return `
    <section class="scale-explanation-panel" role="region" aria-label="Giải thích bước học">
      <div class="explanation-step-pill">BƯỚC ${validStep} / ${totalSteps}</div>
      <h2 class="explanation-step-title">${escScale(stepTitle)}</h2>
      <p class="explanation-step-body">${escScale(stepExplanation)}</p>
      <div class="explanation-interaction-guide">
        <span class="guide-icon">👉</span>
        <span><strong>Hướng dẫn thao tác:</strong> Nhấp chuột vào bất kỳ node nào trên sơ đồ (Client, Load Balancer, App Server, Redis, Database...) để kiểm tra vai trò, trạng thái tải và tác động kiến trúc tại bảng Inspector bên phải.</span>
      </div>
    </section>
  `;
}

// 9. Component LessonDiagram (SVG tương tác thời gian thực)
function ScaleLessonDiagram({ diagramState, activeStepNumber = 1, selectedNodeId = null }) {
  if (!diagramState || !diagramState.nodes) return '<div class="diagram-empty">Không có sơ đồ cho bước này.</div>';

  const activeNodeId = selectedNodeId || scaleState.selectedNodeId || diagramState.activeNode;

  return `
    <div class="scale-lesson-diagram-card" role="region" aria-label="Sơ đồ kiến trúc động">
      <div class="diagram-top-toolbar">
        <div class="diagram-status-badge">
          <span class="pulse-indicator"></span>
          <span>Hệ thống trực tiếp (Live Simulator)</span>
        </div>
        <div class="diagram-legend">
          <span class="legend-dot active"></span><span>Active</span>
          <span class="legend-dot cache"></span><span>Cache</span>
          <span class="legend-dot overload"></span><span>Nghẽn tải</span>
        </div>
      </div>

      <div class="diagram-svg-container">
        <svg viewBox="0 0 760 300" class="scale-diagram-interactive-svg" preserveAspectRatio="xMidYMid meet">
          <!-- Background Pattern -->
          <defs>
            <pattern id="diag-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" fill-opacity="0.08"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag-grid)" />

          <!-- Render Connections -->
          ${diagramState.connections.map(c => {
            const fromNode = diagramState.nodes.find(n => n.id === c.from);
            const toNode = diagramState.nodes.find(n => n.id === c.to);
            if (!fromNode || !toNode) return '';
            const isConnHighlighted = activeNodeId && (c.from === activeNodeId || c.to === activeNodeId);
            const strokeColor = isConnHighlighted ? '#6366F1' : (c.color || '#94A3B8');
            const strokeWidth = isConnHighlighted ? 3.5 : 2;
            const midX = (fromNode.x + toNode.x) / 2 + 42;
            const midY = (fromNode.y + toNode.y) / 2 + 25;

            return `
              <g class="connection-group ${isConnHighlighted ? 'highlighted' : ''}">
                <line x1="${fromNode.x + 42}" y1="${fromNode.y + 32}" 
                      x2="${toNode.x + 42}" y2="${toNode.y + 32}" 
                      stroke="${strokeColor}" 
                      stroke-width="${strokeWidth}" 
                      stroke-dasharray="6,4" 
                      class="anim-dash ${isConnHighlighted ? 'pulse-line' : ''}" />
                <rect x="${midX - 45}" y="${midY - 12}" width="90" height="20" rx="4" 
                      fill="var(--gl-card)" stroke="${isConnHighlighted ? '#6366F1' : 'var(--gl-border)'}" stroke-width="${isConnHighlighted ? 1.5 : 1}"/>
                <text x="${midX}" y="${midY + 2}" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gl-text)">${escScale(c.label)}</text>
              </g>
            `;
          }).join('')}

          <!-- Render Nodes -->
          ${diagramState.nodes.map(node => {
            const isSelected = activeNodeId === node.id;
            const borderColor = node.status === 'overload' ? '#EF4444' : node.status === 'warming' ? '#F59E0B' : node.type === 'cache' ? '#10B981' : '#6366F1';
            const icon = node.type === 'client' ? '📱' : node.type === 'lb' ? '⚖️' : node.type === 'cache' ? '⚡' : node.type === 'dns' ? '🌐' : node.type === 'cdn' ? '☁️' : node.type === 'server' ? '⚙️' : '🗄️';

            return `
              <g transform="translate(${node.x}, ${node.y})" 
                 class="interactive-node ${isSelected ? 'selected' : ''}" 
                 data-scale-node="${node.id}"
                 tabindex="0"
                 role="button"
                 aria-label="Node ${node.label} (${node.type})">
                <rect width="86" height="64" rx="12" 
                      fill="var(--gl-card)" 
                      stroke="${isSelected ? '#6366F1' : borderColor}" 
                      stroke-width="${isSelected ? 3.5 : 2}" 
                      class="node-rect"/>
                <text x="43" y="30" text-anchor="middle" font-size="20">${icon}</text>
                <text x="43" y="52" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${escScale(node.label)}</text>
                ${isSelected ? `<circle cx="43" cy="5" r="3.5" fill="#6366F1" class="anim-pulse"/>` : ''}
                ${node.status === 'overload' ? `<circle cx="75" cy="12" r="6" fill="#EF4444" class="anim-pulse"/>` : ''}
                ${node.status === 'warming' ? `<circle cx="75" cy="12" r="6" fill="#F59E0B" class="anim-pulse"/>` : ''}
              </g>
            `;
          }).join('')}
        </svg>
      </div>
    </div>
  `;
}

// 10. Component MetricsPanel (p50, p99, throughput, cpu, cacheHit)
function ScaleMetricsPanel({ metrics }) {
  if (!metrics) return '';

  return `
    <div class="scale-metrics-panel" role="region" aria-label="Bảng số liệu thời gian thực">
      <div class="metrics-grid">
        <!-- p50 Latency -->
        <div class="metric-card ${metrics.p50 > 100 ? 'status-danger' : metrics.p50 > 30 ? 'status-warn' : 'status-good'}">
          <div class="metric-head">
            <span class="metric-title">p50 Latency</span>
            <span class="metric-tag">${metrics.p50 < 30 ? 'Cực nhanh' : metrics.p50 < 100 ? 'Chấp nhận' : 'Chậm'}</span>
          </div>
          <div class="metric-value">
            <strong>${metrics.p50}</strong>
            <small>ms</small>
          </div>
          <div class="metric-meter">
            <div class="meter-bar" style="width: ${Math.min(100, (metrics.p50 / 200) * 100)}%"></div>
          </div>
        </div>

        <!-- p99 Latency -->
        <div class="metric-card ${metrics.p99 > 250 ? 'status-danger' : metrics.p99 > 80 ? 'status-warn' : 'status-good'}">
          <div class="metric-head">
            <span class="metric-title">p99 Latency</span>
            <span class="metric-tag">Độ trễ đuôi</span>
          </div>
          <div class="metric-value">
            <strong>${metrics.p99}</strong>
            <small>ms</small>
          </div>
          <div class="metric-meter">
            <div class="meter-bar" style="width: ${Math.min(100, (metrics.p99 / 400) * 100)}%"></div>
          </div>
        </div>

        <!-- Throughput RPS -->
        <div class="metric-card status-good">
          <div class="metric-head">
            <span class="metric-title">Throughput</span>
            <span class="metric-tag">Lưu lượng</span>
          </div>
          <div class="metric-value">
            <strong>${metrics.throughput.toLocaleString()}</strong>
            <small>RPS</small>
          </div>
          <div class="metric-meter">
            <div class="meter-bar" style="width: ${Math.min(100, (metrics.throughput / 5000) * 100)}%"></div>
          </div>
        </div>

        <!-- CPU Gauge -->
        <div class="metric-card ${metrics.cpu > 80 ? 'status-danger' : metrics.cpu > 50 ? 'status-warn' : 'status-good'}">
          <div class="metric-head">
            <span class="metric-title">Database CPU</span>
            <span class="metric-tag">${metrics.cpu > 80 ? 'Nghẽn tải' : 'An toàn'}</span>
          </div>
          <div class="metric-value">
            <strong>${metrics.cpu}</strong>
            <small>%</small>
          </div>
          <div class="metric-meter">
            <div class="meter-bar" style="width: ${metrics.cpu}%"></div>
          </div>
        </div>

        <!-- Cache Hit Rate (nếu có) -->
        ${metrics.cacheHitRate !== undefined ? `
          <div class="metric-card status-highlight">
            <div class="metric-head">
              <span class="metric-title">Cache Hit Ratio</span>
              <span class="metric-tag">Hiệu quả Cache</span>
            </div>
            <div class="metric-value">
              <strong>${metrics.cacheHitRate}</strong>
              <small>%</small>
            </div>
            <div class="metric-meter">
              <div class="meter-bar" style="width: ${metrics.cacheHitRate}%"></div>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// 11. Component StepNavigation (Giữ tương thích ngược và mở rộng)
function ScaleStepNavigation({ currentStep, totalSteps, stepTitle, stepExplanation, isPlaying = false, isCompleted = false }) {
  const isFirst = currentStep <= 1;
  const isLast = currentStep >= totalSteps;

  return `
    <div class="scale-step-nav" role="region" aria-label="Điều hướng bước học">
      <div class="step-nav-header">
        <div class="step-counter">
          <span class="step-pill">BƯỚC ${currentStep} / ${totalSteps}</span>
          <h3>${escScale(stepTitle)}</h3>
        </div>

        <div class="step-buttons">
          <button class="scale-btn scale-btn-secondary" data-scale-action="prev-step" ${isFirst ? 'disabled' : ''} aria-label="Bước trước">
            <span>← Trước</span>
          </button>
          <button class="scale-btn scale-btn-outline" data-scale-action="reset-sim" title="Khôi phục trạng thái mô phỏng ban đầu của bước này" aria-label="Reset mô phỏng">
            <span>↺ Reset</span>
          </button>
          <button class="scale-btn ${isPlaying ? 'scale-btn-secondary' : 'scale-btn-outline'}" data-scale-action="toggle-play" aria-label="${isPlaying ? 'Tạm dừng' : 'Tự động phát'}">
            <span>${isPlaying ? '⏸ Tạm dừng' : '▶ Tự động phát'}</span>
          </button>
          ${!isLast ? `
            <button class="scale-btn scale-btn-primary" data-scale-action="next-step" aria-label="Bước tiếp">
              <span>Tiếp theo →</span>
            </button>
          ` : `
            <button class="scale-btn scale-btn-primary" data-scale-action="complete-lesson" aria-label="Hoàn thành bài học">
              <span>✓ Hoàn thành</span>
            </button>
          `}
        </div>
      </div>

      <div class="step-explanation-card">
        <div class="explanation-icon">💡</div>
        <div class="explanation-text">
          <p>${escScale(stepExplanation)}</p>
        </div>
      </div>
    </div>
  `;
}

// 11b. Component LearningNavigation (Thanh điều khiển bước dưới chân màn hình)
function ScaleLearningNavigation({ currentStep, totalSteps, isPlaying = false, isCompleted = false }) {
  const isFirst = currentStep <= 1;
  const isLast = currentStep >= totalSteps;

  return `
    <nav class="scale-learning-navigation" role="navigation" aria-label="Điều khiển bài học">
      <div class="learning-nav-group-left">
        <button class="scale-btn scale-btn-secondary" data-scale-action="prev-step" ${isFirst ? 'disabled' : ''} aria-label="Bước trước">
          <span>← Bước trước</span>
        </button>
        <button class="scale-btn scale-btn-outline" data-scale-action="reset-sim" aria-label="Reset mô phỏng">
          <span>↺ Reset mô phỏng</span>
        </button>
      </div>

      <div class="learning-nav-group-center">
        <button class="scale-btn ${isPlaying ? 'scale-btn-secondary' : 'scale-btn-outline'}" data-scale-action="toggle-play" aria-label="${isPlaying ? 'Tạm dừng' : 'Tự động phát'}">
          <span>${isPlaying ? '⏸ Tạm dừng' : '▶ Tự động chạy'}</span>
        </button>
      </div>

      <div class="learning-nav-group-right">
        ${!isLast ? `
          <button class="scale-btn scale-btn-primary" data-scale-action="next-step" aria-label="Bước tiếp theo">
            <span>Bước tiếp theo →</span>
          </button>
        ` : `
          <button class="scale-btn scale-btn-primary" data-scale-action="complete-lesson" aria-label="Hoàn thành bài học">
            <span>✓ Hoàn thành bài học</span>
          </button>
        `}
      </div>
    </nav>
  `;
}

// 12. Component InspectorPanel (Chi tiết thành phần được chọn)
function ScaleInspectorPanel({ inspectorData, selectedNode = null, selectedNodeInfo = null }) {
  const isCustomNode = !!selectedNode;
  const title = isCustomNode 
    ? (selectedNodeInfo ? `${selectedNode.label} (${selectedNodeInfo.title})` : `Node: ${selectedNode.label}`) 
    : (inspectorData ? inspectorData.title : 'Primary Database');
  
  const role = isCustomNode && selectedNodeInfo ? selectedNodeInfo.role : null;
  const state = isCustomNode 
    ? (selectedNode.status === 'overload' ? 'Bị nghẽn tải I/O (Disk Bottleneck)' : selectedNode.status === 'warming' ? 'Đang làm nóng bộ nhớ (Warming up)' : 'Hoạt động tối ưu (Healthy)')
    : (inspectorData ? inspectorData.state : 'Hoạt động ổn định');
  
  const advice = isCustomNode && selectedNodeInfo ? selectedNodeInfo.advice : (inspectorData ? inspectorData.advice : '');

  return `
    <div class="scale-inspector-panel" role="region" aria-label="Bảng chi tiết kỹ thuật">
      <div class="inspector-head">
        <div class="inspector-badge-wrap">
          <span class="inspector-badge">${isCustomNode ? 'NODE ĐANG CHỌN' : 'INSPECTOR'}</span>
          ${isCustomNode ? `
            <button class="scale-btn-reset-node" data-scale-action="reset-node" title="Trở về thông số tổng thể của bước">
              ↺ Mặc định bước
            </button>
          ` : ''}
        </div>
        <h4>${escScale(title)}</h4>
      </div>

      <div class="inspector-body">
        ${role ? `
          <div class="inspector-row">
            <label>Vai trò kiến trúc (Role):</label>
            <p class="inspector-role-desc">${escScale(role)}</p>
          </div>
        ` : ''}

        <div class="inspector-row">
          <label>Trạng thái hiện hành:</label>
          <strong class="${state.includes('nghẽn') || state.includes('Bottleneck') ? 'text-danger' : 'text-success'}">${escScale(state)}</strong>
        </div>

        ${inspectorData && inspectorData.queryRate ? `
          <div class="inspector-row">
            <label>Tốc độ truy vấn:</label>
            <span>${escScale(inspectorData.queryRate)}</span>
          </div>
        ` : ''}

        ${inspectorData && inspectorData.memoryUsed ? `
          <div class="inspector-row">
            <label>Bộ nhớ sử dụng:</label>
            <span>${escScale(inspectorData.memoryUsed)}</span>
          </div>
        ` : ''}

        ${inspectorData && inspectorData.cacheHits ? `
          <div class="inspector-row">
            <label>Tỉ lệ Hit:</label>
            <span class="text-success">${escScale(inspectorData.cacheHits)}</span>
          </div>
        ` : ''}

        ${advice ? `
          <div class="inspector-advice">
            <b>Nhận định kiến trúc & tác động hệ thống:</b>
            <p>${escScale(advice)}</p>
          </div>
        ` : ''}

        <div class="inspector-node-guide">
          <small>💡 Bấm vào bất kỳ node nào trên sơ đồ (Client, LB, App, Redis, DB...) để kiểm tra vai trò và số liệu.</small>
        </div>
      </div>
    </div>
  `;
}

// 13. Component SidebarMenu (Danh sách 9 module & bài học trong phòng học)
function ScaleSidebarMenu({ activeSlug, modules }) {
  return `
    <aside class="scale-lesson-sidebar" role="navigation" aria-label="Danh mục bài học">
      <div class="sidebar-top">
        <h3>Designed to Scale</h3>
        <p>40 bài học kiến trúc phân tán</p>
      </div>

      <div class="sidebar-modules-list">
        ${modules.map(mod => {
          const isExpanded = scaleState.expandedModules[mod.id] !== false;
          return `
            <div class="sidebar-mod-item ${isExpanded ? 'expanded' : ''}">
              <button class="sidebar-mod-head" data-scale-action="toggle-module" data-scale-mod="${mod.id}" aria-expanded="${isExpanded}">
                <span>${escScale(mod.titleVi || mod.title)}</span>
                <span class="chevron">${isExpanded ? '▾' : '▸'}</span>
              </button>

              ${isExpanded ? `
                <div class="sidebar-mod-lessons">
                  ${mod.lessons.map(l => {
                    const isActive = l.slug === activeSlug;
                    return `
                      <a href="#/${l.slug}/1" 
                         class="sidebar-lesson-link ${isActive ? 'active' : ''}" 
                         data-scale-nav="lesson" 
                         data-scale-slug="${l.slug}"
                         aria-current="${isActive ? 'page' : 'false'}">
                        <span class="link-bullet">${isActive ? '●' : '○'}</span>
                        <span class="link-text">${escScale(l.titleVi || l.title)}</span>
                      </a>
                    `;
                  }).join('')}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </aside>
  `;
}
