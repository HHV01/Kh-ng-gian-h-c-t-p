const $ = s => document.querySelector(s);
const navs = [
  ['Dashboard', '▦'],
  ['Lộ trình học', '◫'],
  ['Thư viện bài học', '▤'],
  ['Quiz', '☑'],
  ['Phỏng vấn', '♧'],
  ['Case study', '◈'],
  ['Sách BA', '📖'],
  ['Glossary', 'Aa'],
  ['Tin tức', '▣']
];

const tracks = [
  ['Nền tảng Business Analysis', 'Vai trò, tư duy & kỹ năng cốt lõi', 12, 75, '#7771dc', '◇'],
  ['Khai thác yêu cầu', 'Hiểu đúng vấn đề, hỏi đúng câu hỏi', 16, 42, '#e7a05e', '♧'],
  ['Quản lý yêu cầu', 'Từ yêu cầu đến giá trị kinh doanh', 14, 28, '#5eaf95', '▤'],
  ['Mô hình hóa quy trình', 'Trực quan hóa với BPMN & Flowchart', 18, 60, '#668fd9', '⌘'],
  ['Phân tích & thiết kế giải pháp', 'Biến insight thành giải pháp khả thi', 15, 15, '#d381a4', '◈'],
  ['Dữ liệu & SQL cho BA', 'Đọc dữ liệu, đưa ra quyết định', 20, 10, '#739eaf', '▥'],
  ['Agile & Scrum', 'Làm việc hiệu quả cùng đội sản phẩm', 12, 0, '#b090d0', '↻'],
  ['UX & Product Thinking', 'Thiết kế trải nghiệm từ góc nhìn BA', 14, 0, '#d8aa55', '✧'],
  ['Testing & UAT', 'Đảm bảo giải pháp đáp ứng kỳ vọng', 10, 0, '#62aaa0', '☑'],
  ['Kỹ năng & Phỏng vấn BA', 'Tự tin sẵn sàng cho bước tiếp theo', 16, 0, '#8a91c5', '♧']
];

const lessonNames = ['Business Analysis là gì?', 'Vai trò của BA trong dự án', 'Các nhóm stakeholder', 'Stakeholder Analysis & Mapping', 'Kỹ thuật phỏng vấn stakeholder', 'Xác định nhu cầu kinh doanh'];

function getActiveAppState() {
  if (typeof VyProfileManager !== 'undefined') {
    return VyProfileManager.getProfileData();
  }
  try {
    return JSON.parse(localStorage.getItem('vy-workspace-state') || localStorage.getItem('ba-academy-state')) || { done: [], scores: {}, dark: false, review: 0 };
  } catch (_) {
    return { done: [], scores: {}, dark: false, review: 0 };
  }
}

let activeProfileData = getActiveAppState();
let state = {
  done: (activeProfileData && activeProfileData.done) || [],
  scores: (activeProfileData && activeProfileData.scores) || {},
  dark: !!(activeProfileData && activeProfileData.dark),
  review: 0
};

let page = 'Dashboard', trackId = 0, lessonId = 3, tab = 0, filter = 'all', flashIndex = 0, quizIndex = 0, answers = [], quizTrack = 0;

const save = () => {
  if (typeof VyProfileManager !== 'undefined') {
    try {
      var pData = VyProfileManager.getProfileData();
      pData.done = state.done;
      pData.scores = state.scores;
      pData.dark = state.dark;
      VyProfileManager.saveProfileData(null, pData);
    } catch (_) {}
  }
  try {
    localStorage.setItem('vy-workspace-state', JSON.stringify(state));
    localStorage.setItem('ba-academy-state', JSON.stringify(state));
  } catch (_) {}
};

const esc = s => String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const key = (t, l) => t + '-' + l;
const progress = t => Math.min(100, (tracks[t] ? tracks[t][3] : 0) + (state.done || []).filter(x => x.startsWith(t + '-')).length * 4);

const toast = m => {
  const el = $('#toast');
  if (!el) return;
  el.textContent = m;
  el.style.display = 'block';
  clearTimeout(window.tt);
  window.tt = setTimeout(() => { el.style.display = 'none'; }, 3200);
};

if (typeof document !== 'undefined') {
  document.body.classList.toggle('dark', state.dark);
}

// React to profile changes
if (typeof VyProfileManager !== 'undefined') {
  VyProfileManager.onProfileChange(function (profile, pData) {
    state.done = (pData && pData.done) || [];
    state.scores = (pData && pData.scores) || {};
    state.dark = !!(pData && pData.dark);
    document.body.classList.toggle('dark', state.dark);
    if ($('#header-profile-container')) {
      VyProfileManager.renderProfileWidget($('#header-profile-container'));
    }
    render();
  });
}

function initSideNav() {
  const sidebar = $('#sidebar');
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="brand"><em>◈</em><div>vy<span>workspace</span></div></div>
      <div class="nav-label">KHÔNG GIAN HỌC TẬP</div>
      <nav>${navs.map(([n, i]) => `<button class="nav-btn" data-nav="${n}" title="${n}"><span class="nav-icon">${i}</span><span class="nav-text">${n}</span></button>`).join('')}</nav>
      <div class="side-end">
        <div class="side-promo">
          <b>Mỗi ngày, một bước tiến ✨</b>
          <p>15 phút hôm nay.<br>Một phiên bản tốt hơn ngày mai.</p>
          <button data-nav="Lộ trình học">Khám phá lộ trình</button>
        </div>
        <button class="nav-btn" data-nav="Cài đặt" title="Cài đặt"><span class="nav-icon">⚙</span><span class="nav-text">Cài đặt</span></button>
      </div>
    `;
  }

  const bottom = $('#bottom');
  if (bottom) {
    bottom.innerHTML = navs.slice(0, 5).map(([n, i]) => `
      <button data-nav="${n}"><span class="nav-icon">${i}</span>${n === 'Thư viện bài học' ? 'Thư viện' : n === 'Lộ trình học' ? 'Lộ trình' : n}</button>
    `).join('');
  }
}

initSideNav();

function go(n) {
  if (n === 'Flashcard') {
    toast('Flashcard đã được tích hợp vào Thư viện bài học và Ngân hàng Quiz BA.');
    n = 'Quiz';
  }
  page = n;
  $('#results').innerHTML = '';
  $('#search').value = '';
  render();
  window.scrollTo(0, 0);
}

function openTrack(i) {
  trackId = i;
  go('track');
}

function openLesson(t, l) {
  trackId = t;
  lessonId = l;
  tab = 0;
  if (typeof VyProfileManager !== 'undefined') {
    try {
      var pData = VyProfileManager.getProfileData();
      pData.lastActivity = {
        type: 'lesson',
        title: (typeof currentLessons === 'function' && currentLessons()[l]) ? currentLessons()[l] : ('Bài ' + (l + 1)),
        subtitle: tracks[t] ? tracks[t][0] + ' · Bài ' + (l + 1) : ('Track ' + t),
        route: '#/lessons',
        data: { trackId: t, lessonId: l },
        timestamp: Date.now()
      };
      VyProfileManager.saveProfileData(null, pData);
    } catch (_) {}
  }
  go('lesson');
}

function bar(v, c) {
  return `<div class="progress" style="--progress:${v}%;--accent:${c || '#5b5bd6'}"><span></span></div>`;
}

function cards() {
  return tracks.map((t, i) => ({ t, i }))
    .filter(({ i }) => filter === 'all' || (filter === 'learning' ? progress(i) > 0 && progress(i) < 100 : progress(i) === 100))
    .map(({ t, i }) => `
      <button class="track" style="--accent:${t[4]}" data-track="${i}">
        <div class="track-top">
          <span class="track-icon">${t[5]}</span>
          <small>${i < 4 ? 'Cơ bản' : i < 8 ? 'Trung cấp' : 'Nâng cao'}</small>
        </div>
        <h3>${t[0]}</h3>
        <p>${t[2]} bài học · ${t[1]}</p>
        <div class="progress-label">
          <span>${Math.floor(t[2] * progress(i) / 100)}/${t[2]} bài học</span>
          <b>${progress(i)}%</b>
        </div>
        ${bar(progress(i), t[4])}
      </button>
    `).join('') || '<div class="empty">Chưa có track hoàn thành. Tiếp tục cố gắng nhé!</div>';
}

function heading(title, sub) {
  return `<div class="page-heading"><div><h1>${title}</h1><p>${sub}</p></div><span class="date">▦ &nbsp; Thứ Sáu, 20 tháng 11, 2026</span></div>`;
}

function trackSection() {
  return `
    <div class="section-head">
      <h2>Lộ trình của bạn <span class="subtle" style="font-size:11px;font-weight:400">&nbsp; 10 tracks</span></h2>
      <div class="filters">
        ${[['all', 'Tất cả'], ['learning', 'Đang học'], ['done', 'Hoàn thành']].map(([v, n]) => `
          <button data-filter="${v}" class="${filter === v ? 'selected' : ''}">${n}</button>
        `).join('')}
      </div>
    </div>
    <div class="tracks">${cards()}</div>
  `;
}

function dashboard() {
  var activeProfile = (typeof VyProfileManager !== 'undefined') ? VyProfileManager.getActiveProfile() : { name: 'Vy' };
  var currentData = (typeof VyProfileManager !== 'undefined') ? VyProfileManager.getProfileData() : { done: [], scores: {}, booksCompleted: [] };
  var doneCount = (state.done || []).length;
  var scoreVals = Object.values(state.scores || {});
  var avgQuiz = scoreVals.length ? Math.round(scoreVals.reduce((a, b) => a + b, 0) / scoreVals.length) + '%' : '---';
  var booksDone = (currentData.booksCompleted || []).length;

  // Dynamic "Tiếp tục học" card
  var continueCardHtml = '';
  var lastAct = currentData.lastActivity;

  if (lastAct && lastAct.type === 'book') {
    continueCardHtml = `
      <section class="panel">
        <span class="continue-tag" style="background:#e0e7ff;color:#4338ca">SÁCH BA</span>
        <h2 class="continue-title">${esc(lastAct.title)}</h2>
        <p class="metadata">${esc(lastAct.subtitle)}<br>◷ Đang ôn luyện</p>
        <div class="progress-label" style="margin-top:18px"><span>Tiến độ đọc</span><b>Đang mở</b></div>
        ${bar(80, '#6366f1')}
        <button class="primary full" data-nav="Sách BA">Tiếp tục đọc sách</button>
      </section>
    `;
  } else if (lastAct && lastAct.type === 'interview') {
    continueCardHtml = `
      <section class="panel">
        <span class="continue-tag" style="background:#fef3c7;color:#92400e">PHỎNG VẤN</span>
        <h2 class="continue-title">${esc(lastAct.title)}</h2>
        <p class="metadata">${esc(lastAct.subtitle)}<br>◷ Mô phỏng tình huống</p>
        <div class="progress-label" style="margin-top:18px"><span>Phiên luyện tập</span><b>Đang làm dở</b></div>
        ${bar(50, '#f59e0b')}
        <button class="primary full" data-nav="Phỏng vấn">Tiếp tục phỏng vấn</button>
      </section>
    `;
  } else if (lastAct && lastAct.type === 'quiz') {
    continueCardHtml = `
      <section class="panel">
        <span class="continue-tag" style="background:#d1fae5;color:#065f46">QUIZ BA</span>
        <h2 class="continue-title">${esc(lastAct.title)}</h2>
        <p class="metadata">${esc(lastAct.subtitle)}<br>◷ Ngân hàng 200 câu</p>
        <div class="progress-label" style="margin-top:18px"><span>Tiến độ đề</span><b>Đang làm</b></div>
        ${bar(60, '#10b981')}
        <button class="primary full" data-nav="Quiz">Tiếp tục làm Quiz</button>
      </section>
    `;
  } else if (lastAct && lastAct.type === 'lesson' && lastAct.data) {
    continueCardHtml = `
      <section class="panel">
        <span class="continue-tag">ĐANG HỌC</span>
        <h2 class="continue-title">${esc(lastAct.title)}</h2>
        <p class="metadata">${esc(lastAct.subtitle)}<br>◷ 10 phút đọc</p>
        <div class="progress-label" style="margin-top:18px"><span>Tiến độ bài học</span><b>Đang học</b></div>
        ${bar(65)}
        <button class="primary full" data-lesson="${lastAct.data.trackId},${lastAct.data.lessonId}">Tiếp tục học</button>
      </section>
    `;
  } else if (doneCount === 0) {
    // Brand new profile onboarding card
    continueCardHtml = `
      <section class="panel">
        <span class="continue-tag" style="background:#ecfdf5;color:#059669">HỒ SƠ MỚI</span>
        <h2 class="continue-title">Chào mừng bạn!<br>Khởi đầu hành trình</h2>
        <p class="metadata">Bắt đầu từ Bài 01: Business Analysis là gì?<br>◷ 8 phút đọc</p>
        <div class="progress-label" style="margin-top:18px"><span>Hành trình kiến thức</span><b>0/60 bài học</b></div>
        ${bar(0)}
        <button class="primary full" data-lesson="0,0">Bắt đầu bài học đầu tiên</button>
      </section>
    `;
  } else {
    // Default fallback
    continueCardHtml = `
      <section class="panel">
        <span class="continue-tag">ĐANG HỌC</span>
        <h2 class="continue-title">Stakeholder Analysis<br>& Mapping</h2>
        <p class="metadata">Khai thác yêu cầu · Bài 04<br>◷ 12 phút đọc</p>
        <div class="progress-label" style="margin-top:18px"><span>Tiến độ bài học</span><b>65%</b></div>
        ${bar(65)}
        <button class="primary full" data-lesson="1,3">Tiếp tục học</button>
      </section>
    `;
  }

  return heading('Chào mừng trở lại, ' + esc(activeProfile.name) + '! 👋 ✨', 'Không gian học tập & thực chiến Business Analyst.') + `
    <div class="dashboard-layout">
      <div>
        <section class="hero">
          <div>
            <div class="eyebrow">✦ VY WORKSPACE</div>
            <h2>Nuôi dưỡng tư duy đỉnh cao.<br>Kiến tạo giá trị vượt bậc.</h2>
            <p>Chào mừng bạn trở lại với Vy Workspace!<br>Hành trình khai phóng tiềm năng Business Analyst của bạn bắt đầu từ hôm nay.</p>
            <button class="primary" data-nav="Lộ trình học">Khám phá lộ trình học</button>
          </div>
          <div class="hero-art" aria-hidden="true">
            <div class="orb"></div>
            <span class="spark">✦</span>
            <div class="book">◈</div>
            <div class="float-card">✦ &nbsp; Vy Workspace · Không gian học tập</div>
          </div>
        </section>

        <div class="stats">
          ${[
            ['▤', doneCount + ' bài', 'Bài học hoàn thành', doneCount > 0 ? (doneCount + '/60 bài mẫu') : 'Bắt đầu bài đầu tiên', '#7771dc'],
            ['☑', avgQuiz, 'Điểm Quiz trung bình', scoreVals.length ? (scoreVals.length + '/10 tracks đã làm') : 'Chưa có bài thi', '#5eaf95'],
            ['📖', booksDone + ' mục', 'Sách BA đã đọc', 'BABOK · BCS · 100 Ngày', '#e7a05e'],
            ['♨', 7, 'Ngày học liên tiếp', 'Giữ vững phong độ!', '#d381a4']
          ].map(([icon, v, n, s, c]) => `
            <div class="stat">
              <span class="icon" style="background:${c}18;color:${c}">${icon}</span>
              <strong>${v}</strong>
              <p>${n}</p>
              <small>${s}</small>
            </div>
          `).join('')}
        </div>

        ${trackSection()}

        <section class="panel chart">
          <div class="section-head">
            <h2>Bức tranh kỹ năng</h2>
            <span class="metadata">Điểm đánh giá mẫu · /100</span>
          </div>
          ${[['Nền tảng BA', 88], ['Khai thác yêu cầu', 76], ['Mô hình hóa', 65], ['Dữ liệu & SQL', 42], ['Agile & Scrum', 72]].map(([n, v]) => `
            <div class="bar-row">
              <span>${n}</span>
              ${bar(v, v < 50 ? '#e7a05e' : '#8c87e7')}
              <b>${v}</b>
            </div>
          `).join('')}
          <p class="metadata" style="margin-top:20px">✧ Dữ liệu & SQL là kỹ năng bạn có thể ưu tiên tiếp theo.</p>
        </section>
      </div>

      <div class="right-col">
        ${continueCardHtml}

        <section class="panel">
          <div class="section-head">
            <h2>Lịch học tập</h2>
            <span>♨</span>
          </div>
          <div class="calendar-head">
            <span>Tháng 11, 2026</span>
            <span>Tuần này</span>
          </div>
          <div class="calendar">
            ${['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(d => `<span>${d}</span>`).join('')}
            ${Array.from({ length: 30 }, (_, i) => `
              <span class="${i + 1 === 20 ? 'today' : i + 1 >= 14 && i + 1 < 20 ? 'done' : ''}">${i + 1}</span>
            `).join('')}
          </div>
          <div class="streak">
            <span style="font-size:24px">♨</span>
            <div><b>7 ngày liên tiếp!</b><small>Giữ lửa học tập của bạn nhé.</small></div>
          </div>
        </section>

        <section class="panel">
          <h3>Cần ôn hôm nay</h3>
          ${[
            ['📖', '100 ngày viết về nghề BA', 'Đọc 1 bài học thực tế hôm nay', 'Sách BA'],
            ['☑', 'Requirement Elicitation', 'Quiz · 20 câu trắc nghiệm chuẩn', 'Quiz']
          ].map(([i, n, d, p]) => `
            <div class="review-row">
              <span class="review-icon">${i}</span>
              <div><b>${n}</b><small>${d}</small></div>
              <button data-nav="${p}" aria-label="Mở ${n}">▷</button>
            </div>
          `).join('')}
        </section>

        <section class="panel">
          <div class="section-head">
            <h2>Góc nhìn BA</h2>
            <button data-nav="Tin tức">Xem tất cả</button>
          </div>
          <div class="news-item">Từ yêu cầu đến giá trị: tư duy outcome cho BA<small>Góc học tập · 5 phút đọc</small></div>
          <div class="news-item">AI hỗ trợ BA như thế nào trong phân tích yêu cầu?<small>Chuyên đề · 8 phút đọc</small></div>
        </section>
      </div>
    </div>
  `;
}

function trackPage() {
  let t = tracks[trackId] || tracks[0];
  return `
    <button data-nav="Lộ trình học" class="subtle">Lộ trình học / ${t[0]}</button>
    <div class="track-banner" style="margin-top:20px">
      <div class="eyebrow">LỘ TRÌNH CHUYÊN MÔN</div>
      <h1>${t[5]} ${t[0]}</h1>
      <p>${t[1]}. Học lý thuyết, thực hành tình huống và kiểm tra kiến thức.</p>
      <p class="metadata">${t[2]} bài học · Cơ bản đến thực hành</p>
      <div class="progress-label"><span>Tiến độ của bạn</span><b>${progress(trackId)}%</b></div>
      ${bar(progress(trackId), t[4])}
    </div>
    <div class="section-head">
      <h2>Nội dung lộ trình</h2>
      <span class="metadata">Đạt quiz ≥ 70% để mở khóa phần nâng cao</span>
    </div>
    <div class="timeline">
      ${currentLessons().map((n, i) => {
        let locked = i >= 4 && (state.scores[trackId] || 0) < 70;
        let done = state.done.includes(key(trackId, i));
        return `
          <button class="lesson-row" ${locked ? 'disabled' : ''} data-lesson="${trackId},${i}">
            <span class="number">${done ? '✓' : locked ? '♙' : String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>${n}</h3>
              <p>${i < 4 ? 'Cơ bản' : 'Trung cấp'} · ${8 + i * 2} phút đọc</p>
            </div>
            <span class="status">${locked ? 'Khóa' : done ? 'Hoàn thành' : i === 3 ? 'Đang học' : 'Bắt đầu'}</span>
          </button>
        `;
      }).join('')}
      <button class="primary" id="track-quiz">Làm quiz mở khóa</button>
    </div>
  `;
}

function theory() {
  let title = currentLessons()[lessonId] || 'Business Analysis';
  return `
    <div class="lesson-obj-card" style="background:#EEF2FF;border-left:4px solid #6366F1;padding:16px 20px;border-radius:0 12px 12px 0;margin-bottom:24px">
      <div style="font-size:11.5px;font-weight:800;color:#6366F1;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:4px">🎯 Mục tiêu bài học (Learning Objective)</div>
      <p style="margin:0;font-size:14px;color:#1E1B4B;font-weight:600">Làm chủ nguyên lý ${esc(title)}, biết cách nhận diện các bên liên quan, phân tầng mức độ ưu tiên và chuyển hóa nhu cầu nghiệp vụ thành giải pháp phần mềm khả thi.</p>
    </div>

    <h2 id="context" style="font-size:18px;font-weight:800;margin-top:28px">1. Bối cảnh nghiệp vụ thực tế (Business Context)</h2>
    <p>Trong các dự án chuyển đổi số hiện đại (E-commerce, Ngân hàng số, SCM), hơn <strong>70% lỗi dự án</strong> không xuất phát từ việc lập trình sai mà do <em>hiểu sai kỳ vọng hoặc bỏ quên người dùng then chốt</em>.</p>
    <div class="callout" style="background:#F8FAFC;border:1px solid #E2E8F0;border-left:4px solid #F59E0B;padding:14px 18px;border-radius:0 8px 8px 0;margin:16px 0">
      <b style="color:#D97706">🏢 Tình huống dự án:</b>
      <p style="margin:4px 0 0 0;font-size:13.5px">Dự án Mobile App thanh toán bị trì hoãn 3 tuần sát ngày Go-live vì phòng Pháp chế & Tuân thủ (Compliance) không được tham gia ngay từ đầu, dẫn đến việc thiếu các bước kiểm soát hạn mức giao dịch theo thông tư Ngân hàng Nhà nước.</p>
    </div>

    <h2 id="concept" style="font-size:18px;font-weight:800;margin-top:28px">2. Khái niệm cốt lõi & Nguyên lý BA (Key Concept)</h2>
    <p><strong>Stakeholder (Bên liên quan)</strong> là bất kỳ cá nhân, nhóm người hoặc tổ chức nào có thể tác động đến, chịu tác động bởi, hoặc tự cảm thấy mình bị tác động bởi một quyết định hoặc giải pháp của dự án.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:18px 0">
      <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.03)">
        <span style="font-size:11px;font-weight:800;color:#6366F1;background:#EEF2FF;padding:2px 6px;border-radius:4px">NHÓM 1</span>
        <h4 style="font-size:14px;margin:8px 0 4px;font-weight:700">Quyết định & Tài trợ</h4>
        <p style="font-size:12.5px;color:#64748B;margin:0">Sponsor, C-Level, Product Owner. Nắm ngân sách và định hướng chiến lược.</p>
      </div>
      <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.03)">
        <span style="font-size:11px;font-weight:800;color:#10B981;background:#ECFDF5;padding:2px 6px;border-radius:4px">NHÓM 2</span>
        <h4 style="font-size:14px;margin:8px 0 4px;font-weight:700">Người dùng trực tiếp</h4>
        <p style="font-size:12.5px;color:#64748B;margin:0">Nhân viên thu ngân, kế toán, khách hàng. Trực tiếp thao tác trên màn hình hàng ngày.</p>
      </div>
      <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.03)">
        <span style="font-size:11px;font-weight:800;color:#F59E0B;background:#FFFBEB;padding:2px 6px;border-radius:4px">NHÓM 3</span>
        <h4 style="font-size:14px;margin:8px 0 4px;font-weight:700">Giám sát & Quản trị</h4>
        <p style="font-size:12.5px;color:#64748B;margin:0">Pháp chế, Kiểm toán, An toàn thông tin, Vận hành mạng. Đảm bảo tuân thủ chuẩn mực.</p>
      </div>
    </div>

    <h2 id="matrix" style="font-size:18px;font-weight:800;margin-top:28px">3. Sơ đồ ma trận phân loại (Visual Diagram)</h2>
    <p>Áp dụng ma trận 2x2 kinh điển của BABOK để quyết định chiến lược giao tiếp và tần suất tương tác tối ưu cho từng bên liên quan:</p>
    
    <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:12px;padding:20px;margin:16px 0;box-shadow:0 2px 8px rgba(0,0,0,0.03)">
      <svg viewBox="0 0 540 270" style="width:100%;max-height:270px;display:block">
        <line x1="60" y1="230" x2="500" y2="230" stroke="#94A3B8" stroke-width="2"/>
        <line x1="60" y1="230" x2="60" y2="40" stroke="#94A3B8" stroke-width="2"/>
        <text x="500" y="248" text-anchor="end" font-size="11" font-weight="700" fill="#64748B">MỨC ĐỘ QUAN TÂM (INTEREST) →</text>
        <text x="50" y="40" text-anchor="end" font-size="11" font-weight="700" fill="#64748B" transform="rotate(-90 50,40)">ẢNH HƯỞNG (POWER) →</text>

        <rect x="270" y="50" width="220" height="85" rx="8" fill="#EEF2FF" stroke="#6366F1" stroke-width="1.5"/>
        <text x="380" y="75" text-anchor="middle" font-size="11.5" font-weight="800" fill="#4338CA">HỢP TÁC CHẶT CHẼ (MANAGE CLOSELY)</text>
        <text x="380" y="95" text-anchor="middle" font-size="10.5" fill="#6366F1">Sponsor, Product Owner, Head of Biz</text>
        <text x="380" y="115" text-anchor="middle" font-size="9.5" fill="#64748B">Họp thường xuyên, thống nhất mọi thay đổi</text>

        <rect x="70" y="50" width="190" height="85" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.5"/>
        <text x="165" y="75" text-anchor="middle" font-size="11.5" font-weight="800" fill="#B45309">LÀM HÀI LÒNG (KEEP SATISFIED)</text>
        <text x="165" y="95" text-anchor="middle" font-size="10.5" fill="#D97706">Compliance, CISO, Kiểm toán</text>
        <text x="165" y="115" text-anchor="middle" font-size="9.5" fill="#64748B">Báo cáo mốc lớn, đảm bảo không vi phạm</text>

        <rect x="270" y="140" width="220" height="85" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5"/>
        <text x="380" y="165" text-anchor="middle" font-size="11.5" font-weight="800" fill="#047857">CẬP NHẬT THƯỜNG XUYÊN (KEEP INFORMED)</text>
        <text x="380" y="185" text-anchor="middle" font-size="10.5" fill="#059669">Người dùng cuối, Vận hành ca trực</text>
        <text x="380" y="205" text-anchor="middle" font-size="9.5" fill="#64748B">Gửi newsletter, demo sprint, khảo sát UI</text>

        <rect x="70" y="140" width="190" height="85" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="165" y="165" text-anchor="middle" font-size="11.5" font-weight="800" fill="#475569">THEO DÕI ĐỊNH KỲ (MONITOR)</text>
        <text x="165" y="185" text-anchor="middle" font-size="10.5" fill="#64748B">Nhà cung ứng phụ, nhóm gián tiếp</text>
        <text x="165" y="205" text-anchor="middle" font-size="9.5" fill="#94A3B8">Giao tiếp tối thiểu, tiết kiệm tài nguyên</text>
      </svg>
    </div>

    <h2 id="takeaways" style="font-size:18px;font-weight:800;margin-top:28px">4. Điểm cốt lõi cần hành động (Actionable Takeaways)</h2>
    <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;padding:16px 20px;margin:16px 0">
      <h4 style="color:#166534;font-size:13.5px;font-weight:700;margin:0 0 8px 0">✓ Checklist hành động thực tế cho BA:</h4>
      <ul style="margin:0;padding-left:18px;font-size:13px;color:#166534;line-height:1.6">
        <li>Lập danh sách Stakeholder Register ngay từ tuần đầu khởi động dự án.</li>
        <li>Không bao giờ giữ nguyên ma trận phân loại suốt dự án: vị thế và quyền lực có thể thay đổi sau mỗi giai đoạn.</li>
        <li>Tập trung 80% năng lượng giao tiếp vào nhóm <em>High Power - High Interest</em> và <em>High Power - Low Interest</em>.</li>
        <li>Luôn chuẩn bị tài liệu tóm tắt 1 trang (Executive Summary) khi làm việc với Quản lý cấp cao.</li>
      </ul>
    </div>

    <h2 id="selfcheck" style="font-size:18px;font-weight:800;margin-top:28px">5. Tự kiểm tra nhanh (Self-check Question)</h2>
    <div class="self-check-card" style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:12px;padding:20px;margin:16px 0">
      <p style="font-weight:700;font-size:14px;color:#0F172A;margin:0 0 12px 0">
        Câu 1: Một Giám đốc Pháp chế có mức độ Ảnh hưởng cao (Power cao) nhưng ít có thời gian tham gia các buổi họp dự án (Interest thấp). Chiến lược giao tiếp chuẩn của BA là gì?
      </p>
      <div style="display:flex;flex-direction:column;gap:8px" id="self-check-opts">
        <button class="lesson-check-opt" data-opt="wrong" style="padding:10px 14px;border:1px solid #E2E8F0;border-radius:8px;background:#F8FAFC;text-align:left;font-size:13px;cursor:pointer">A. Mời họ vào tất cả các buổi Daily Standup 15 phút mỗi sáng.</button>
        <button class="lesson-check-opt" data-opt="correct" style="padding:10px 14px;border:1px solid #E2E8F0;border-radius:8px;background:#F8FAFC;text-align:left;font-size:13px;cursor:pointer">B. Giữ họ luôn hài lòng (Keep Satisfied): chỉ gửi báo cáo tóm tắt các mốc then chốt và xin ý kiến phê duyệt các điểm tuân thủ.</button>
        <button class="lesson-check-opt" data-opt="wrong" style="padding:10px 14px;border:1px solid #E2E8F0;border-radius:8px;background:#F8FAFC;text-align:left;font-size:13px;cursor:pointer">C. Không cần liên lạc cho đến ngày triển khai ứng dụng.</button>
      </div>
      <div id="self-check-feedback" style="display:none;margin-top:12px;padding:10px 14px;border-radius:6px;font-size:13px"></div>
    </div>
  `;
}

function lessonPage() {
  return `
    <div class="lesson-layout">
      <article class="article">
        <a href="#" data-track="${trackId}">${tracks[trackId] ? tracks[trackId][0] : 'Lộ trình'}</a>
        <h1>${currentLessons()[lessonId]}</h1>
        <div class="metadata">Bài ${String(lessonId + 1).padStart(2, '0')} · ${8 + lessonId * 2} phút đọc · Cơ bản</div>
        <div class="tabs">
          ${['Lý thuyết', 'Ứng dụng thực tế', 'Ôn tập'].map((n, i) => `
            <button data-tab="${i}" style="--tab:${['#5b5bd6', '#d58f46', '#9b6bd3'][i]}" class="${tab === i ? 'selected' : ''}">${n}</button>
          `).join('')}
        </div>
        ${tab === 0 ? theory() : tab === 1 ? `
          <h2 id="overview">1. Tình huống thực tế</h2>
          <p>Một công ty bán lẻ muốn xây dựng hệ thống đặt hàng. Bộ phận kinh doanh muốn nhiều khuyến mãi, trong khi vận hành ưu tiên giảm lỗi giao nhận.</p>
          <div class="callout tip"><b>Nhiệm vụ của bạn</b><br>Xác định stakeholder, lập ma trận ảnh hưởng – quan tâm và đề xuất kế hoạch trao đổi cho từng nhóm.</div>
          <h2 id="method">2. Gợi ý tiếp cận</h2>
          <p>Phỏng vấn đại diện kinh doanh, vận hành, kho, tài chính và khách hàng. Làm rõ KPI của từng nhóm trước khi thảo luận tính năng. Tổ chức workshop để thống nhất ưu tiên và ghi nhận các quyết định.</p>
          <h2 id="summary">3. Kết quả mong đợi</h2>
          <p>Một danh sách stakeholder, ma trận phân loại, kế hoạch giao tiếp và biên bản thống nhất mục tiêu. Có thể dùng bảng gồm: tên nhóm, mối quan tâm, ảnh hưởng, kênh liên lạc và tần suất.</p>
        ` : `
          <h2 id="overview">Tự kiểm tra kiến thức</h2>
          <p>Bạn đã giải thích được stakeholder là ai? Bạn có thể phân loại stakeholder và chọn cách giao tiếp phù hợp chưa?</p>
          <div class="callout">Hoàn thành quiz của track với điểm từ 70% để mở khóa các bài nâng cao.</div>
          <button class="primary" id="track-quiz">Bắt đầu quiz</button>
          <h2 id="method">Gợi ý ôn tập chuyên sâu</h2>
          <p>Thử lập bản đồ stakeholder cho một dự án bạn từng tham gia. So sánh cách bạn đã giao tiếp với cách bạn sẽ làm sau bài học này.</p>
          <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:14px">
            <button class="primary" data-nav="Quiz">Luyện Quiz chủ đề này</button>
            <button class="secondary" data-nav="Sách BA">Đọc Sách BA đối chiếu</button>
          </div>
        `}
      </article>
      <aside class="toc panel" style="position:sticky;width:auto;height:fit-content;border:0">
        <h3>Trong bài học này</h3>
        <a href="#overview">Tổng quan & tình huống</a>
        <a href="#method">Phương pháp phân tích</a>
        <a href="#summary">Ghi nhớ & áp dụng</a>
        <p class="metadata">Tiến độ đọc <b id="read-percent">0%</b></p>
        <div id="read-bar">${bar(0)}</div>
      </aside>
    </div>
    <div class="lesson-bottom">
      <button id="prev-lesson" ${lessonId === 0 ? 'disabled' : ''}>Bài trước</button>
      <button class="primary" id="complete">${state.done.includes(key(trackId, lessonId)) ? '✓ Đã hoàn thành' : 'Đánh dấu hoàn thành'}</button>
      <button id="next-lesson" ${lessonId === 5 ? 'disabled' : ''}>Bài sau</button>
    </div>
  `;
}

const resources = {
  'Phỏng vấn': [
    ['Giới thiệu bản thân theo cấu trúc', 'Trình bày kinh nghiệm, đóng góp và giá trị bạn mang lại.'],
    ['Xử lý yêu cầu mâu thuẫn', 'Nêu một ví dụ: bối cảnh, hành động, kết quả và bài học.'],
    ['Câu hỏi tình huống BA', 'Bạn làm gì khi stakeholder không có thời gian cung cấp yêu cầu?']
  ],
  'Case study': [
    ['Hệ thống đặt hàng bán lẻ', 'Xác định stakeholder và mô hình quy trình đặt hàng.'],
    ['Ứng dụng đặt lịch khám', 'Làm rõ nhu cầu, ngoại lệ và tiêu chí chấp nhận.'],
    ['Quản lý yêu cầu nội bộ', 'Đề xuất quy trình tiếp nhận, phân loại và phê duyệt.']
  ],
  'Glossary': [
    ['Stakeholder', 'Cá nhân hoặc nhóm có thể ảnh hưởng, chịu ảnh hưởng hoặc có lợi ích liên quan đến một thay đổi.'],
    ['Acceptance Criteria', 'Các điều kiện cụ thể mà một giải pháp hoặc user story cần đáp ứng để được chấp nhận.'],
    ['Business Requirement', 'Mục tiêu hoặc kết quả cấp cao mà tổ chức mong muốn đạt được từ một thay đổi.'],
    ['MoSCoW', 'Ưu tiên yêu cầu theo Must have, Should have, Could have và Won’t have trong phạm vi đang xét.']
  ],
  'Tin tức': [
    ['Tư duy outcome cho Business Analyst', 'Phân biệt đầu ra được bàn giao với thay đổi có ý nghĩa cho doanh nghiệp. Đây là nội dung chuyên đề minh họa.'],
    ['AI trong phân tích yêu cầu', 'Gợi ý cách dùng AI để tổ chức ghi chú, phát hiện điểm chưa rõ và chuẩn bị câu hỏi. Nội dung chuyên đề minh họa.']
  ]
};

function resourcePage() {
  if (page === 'Case study') return (typeof casePage === 'function' ? casePage() : '');
  if (page === 'Thư viện bài học') return (typeof libraryPage === 'function' ? libraryPage() : '');
  if (page === 'Glossary') return (typeof glossaryPage === 'function' ? glossaryPage() : '');
  if (page === 'Phỏng vấn') return typeof interviewPage === 'function' ? interviewPage() : renderInterviewHome();
  if (page === 'System Scale' || page === 'Sách BA') return typeof booksPage === 'function' ? booksPage() : '';

  return heading(page, 'Thư viện nội dung thực hành cho hành trình BA.') + `
    <div class="resource-grid">
      ${(resources[page] || []).map(([n, d], i) => `
        <article class="resource">
          <span class="track-icon" style="--accent:#7771dc">${navs.find(n => n[0] === page)?.[1] || '◇'}</span>
          <h3>${esc(n)}</h3>
          <p>${esc(d)}</p>
          <button class="primary" data-resource="${i}">Đọc chi tiết</button>
        </article>
      `).join('')}
    </div>
    <section id="resource-detail" style="margin-top:25px"></section>
  `;
}

function render() {
  document.querySelectorAll('[data-nav]').forEach(b => {
    b.classList.toggle('active', b.dataset.nav === page || (page === 'track' && b.dataset.nav === 'Lộ trình học') || (page === 'lesson' && b.dataset.nav === 'Thư viện bài học'));
  });

  const main = $('#main');
  if (main) {
    main.innerHTML = page === 'Dashboard' ? dashboard() :
      page === 'Lộ trình học' ? heading('Lộ trình học', '10 miền kiến thức. Một hành trình phát triển toàn diện.') + trackSection() :
      page === 'track' ? trackPage() :
      page === 'lesson' ? lessonPage() :
      page === 'Quiz' ? (typeof quizPage === 'function' ? quizPage() : '') :
      page === 'Thư viện bài học' ? (typeof libraryPage === 'function' ? libraryPage() : '') :
      page === 'Glossary' ? (typeof glossaryPage === 'function' ? glossaryPage() : '') :
      page === 'Cài đặt' ? heading('Cài đặt', 'Cá nhân hóa không gian học tập.') + `
        <section class="panel">
          <h3>Giao diện</h3>
          <button class="primary" id="settings-theme">Đổi chế độ sáng / tối</button>
          <p class="metadata">Tiến độ và giao diện được lưu riêng theo từng hồ sơ trên thiết bị này.</p>
        </section>
      ` : resourcePage();
  }

  document.title = (page === 'track' ? (tracks[trackId] ? tracks[trackId][0] : 'Lộ trình') : page === 'lesson' ? currentLessons()[lessonId] : page) + ' · Vy Workspace';
  if (typeof polish === 'function') polish();
  updateReading();
  if (page === 'Glossary' && typeof bindGlossaryEvents === 'function') bindGlossaryEvents();
  if (page === 'Phỏng vấn' && typeof bindInterviewEvents === 'function') bindInterviewEvents();
}

document.addEventListener('click', e => {
  let b = e.target.closest('button,a');
  if (!b) return;

  if (b.dataset.nav) {
    e.preventDefault();
    if (b.dataset.nav === 'Quiz') {
      quizIndex = 0;
      answers = [];
      quizTrack = trackId;
    }
    go(b.dataset.nav);
    return;
  }

  if (b.dataset.glOpen) {
    e.preventDefault();
    go('Glossary');
    if (typeof openGlossaryDrawer === 'function') openGlossaryDrawer(b.dataset.glOpen);
    return;
  }

  if (b.dataset.track !== undefined) {
    e.preventDefault();
    openTrack(+b.dataset.track);
    return;
  }

  if (b.dataset.lesson) {
    let [t, l] = b.dataset.lesson.split(',').map(Number);
    openLesson(t, l);
    return;
  }

  if (b.dataset.filter) {
    filter = b.dataset.filter;
    render();
    return;
  }

  if (b.dataset.tab) {
    tab = +b.dataset.tab;
    render();
    return;
  }

  if (b.id === 'theme' || b.id === 'settings-theme') {
    state.dark = !state.dark;
    save();
    document.body.classList.toggle('dark', state.dark);
    if ($('#theme')) $('#theme').innerHTML = uiIcon(state.dark ? 'sun' : 'moon');
    return;
  }

  if (b.id === 'notifications') {
    var pName = (typeof VyProfileManager !== 'undefined') ? VyProfileManager.getActiveProfile().name : 'bạn';
    toast('Chào mừng ' + pName + ' đến với Vy Workspace! Chúc bạn một buổi học tập hiệu quả.');
    return;
  }

  if (b.id === 'complete') {
    let k = key(trackId, lessonId);
    if (!state.done.includes(k)) {
      state.done.push(k);
      save();
      toast('Đã lưu tiến độ bài học vào hồ sơ của bạn!');
    }
    render();
    return;
  }

  if (b.id === 'prev-lesson' && lessonId > 0) {
    openLesson(trackId, lessonId - 1);
    return;
  }

  if (b.id === 'next-lesson') {
    if (lessonId >= 3 && (state.scores[trackId] || 0) < 70) {
      toast('Hoàn thành quiz từ 70% để mở bài tiếp theo.');
    } else if (lessonId < 5) {
      openLesson(trackId, lessonId + 1);
    }
    return;
  }

  if (b.id === 'track-quiz') {
    quizTrack = trackId;
    quizIndex = 0;
    answers = [];
    go('Quiz');
    return;
  }

  if (b.id === 'retry') {
    quizIndex = 0;
    answers = [];
    render();
    return;
  }

  if (b.classList.contains('lesson-check-opt')) {
    let isC = b.dataset.opt === 'correct', fb = $('#self-check-feedback');
    if (fb) {
      fb.style.display = 'block';
      fb.style.background = isC ? '#ECFDF5' : '#FEF2F2';
      fb.style.color = isC ? '#065F46' : '#991B1B';
      fb.style.border = isC ? '1px solid #A7F3D0' : '1px solid #FECACA';
      fb.innerHTML = isC ? '✓ <b>Chính xác!</b> Stakeholder nhóm High Power / Low Interest cần được cung cấp thông tin súc tích qua các mốc quan trọng, tránh kéo họ vào các buổi họp vụn vặt.' : '✕ <b>Chưa chính xác.</b> Hãy nhớ nguyên lý: Đối tượng có quyền lực cao và bận rộn cần được làm hài lòng (Keep Satisfied) bằng báo cáo cô đọng, không làm phiền việc hàng ngày.';
    }
    return;
  }

  if (b.id === 'flip') {
    b.classList.toggle('flipped');
    return;
  }

  if (b.id === 'remember' || b.id === 'again') {
    if (b.id === 'remember') {
      state.review++;
      save();
    }
    flashIndex++;
    render();
    return;
  }

  if (b.dataset.answer !== undefined) {
    answers[quizIndex] = +b.dataset.answer;
    render();
    return;
  }

  if (b.id === 'quiz-next') {
    quizIndex++;
    render();
    return;
  }

  if (b.dataset.resource !== undefined) {
    let i = +b.dataset.resource, [n, d] = (resources[page] && resources[page][i]) ? resources[page][i] : ['Bài tập', 'Nội dung thực hành'];
    $('#resource-detail').innerHTML = `
      <article class="panel article">
        <h2>${esc(n)}</h2>
        <p>${esc(d)}</p>
        <h3>Gợi ý thực hành</h3>
        <p>Chọn một dự án quen thuộc, ghi lại mục tiêu kinh doanh, người liên quan và các giả định cần xác nhận. Đối chiếu kết quả với kiến thức trong lộ trình và bổ sung câu hỏi còn thiếu.</p>
        <button class="primary" data-nav="Lộ trình học">Học kiến thức liên quan</button>
      </article>
    `;
    $('#resource-detail').scrollIntoView({ behavior: 'smooth' });
    return;
  }
});

// Full-text search
$('#search').addEventListener('input', e => {
  let q = e.target.value.trim().toLocaleLowerCase('vi');
  if (!q) {
    $('#results').innerHTML = '';
    return;
  }
  let found = [];
  tracks.forEach((t, i) => {
    if ((t[0] + ' ' + t[1]).toLocaleLowerCase('vi').includes(q)) {
      found.push(`<button data-track="${i}">Lộ trình · ${t[0]}</button>`);
    }
  });
  lessonNames.forEach((n, l) => {
    if ((n + ' ' + theory().replace(/<[^>]+>/g, ' ')).toLocaleLowerCase('vi').includes(q)) {
      found.push(`<button data-lesson="1,${l}">Bài học · ${n}</button>`);
    }
  });
  if (typeof glossaryData !== 'undefined') {
    glossaryData.forEach(t => {
      if ((t.abbr + ' ' + t.name + ' ' + t.definition).toLocaleLowerCase('vi').includes(q)) {
        found.push(`<button data-gl-open="${t.id}">Thuật ngữ · ${t.abbr}</button>`);
      }
    });
  }
  if (typeof caseStudies !== 'undefined') {
    caseStudies.forEach(c => {
      if ((c.title + ' ' + c.summary + ' ' + c.domain + ' ' + c.skill + ' ' + c.context).toLocaleLowerCase('vi').includes(q)) {
        found.push(`<button data-case-open="${c.id}">Case study · ${c.title}</button>`);
      }
    });
  }
  if (typeof bookTopicLessons !== 'undefined') {
    bookTopicLessons.forEach(tl => {
      if ((tl.title + ' ' + tl.id + ' ' + tl.category + ' ' + (tl.keywords || []).join(' ')).toLocaleLowerCase('vi').includes(q)) {
        found.push(`<button data-study-topic="${tl.id}">Sách BA · ${tl.title}</button>`);
      }
    });
  }
  if (typeof bookDays100 !== 'undefined' && q.startsWith('day')) {
    let dNum = parseInt(q.replace(/\D/g, ''));
    let dFound = bookDays100.find(d => d.day === dNum);
    if (dFound) {
      found.push(`<button data-study-topic="${dFound.topicLessonId}">100 Ngày · DAY ${dFound.day}: ${dFound.title}</button>`);
    }
  }
  $('#results').innerHTML = found.join('') || '<div class="empty">Không tìm thấy nội dung phù hợp.</div>';
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) $('#results').innerHTML = '';
});

document.addEventListener('keydown', e => {
  if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    $('#search').focus();
  }
  if (e.key === 'Escape') {
    $('#results').innerHTML = '';
    $('#search').blur();
  }
});

function updateReading() {
  if (page !== 'lesson') return;
  let article = $('.article');
  if (!article) return;
  let max = Math.max(1, article.offsetHeight - innerHeight + 160);
  let v = Math.min(100, Math.max(0, Math.round(scrollY / max * 100)));
  if ($('#read-percent')) $('#read-percent').textContent = v + '%';
  if ($('#read-bar')) $('#read-bar').innerHTML = bar(v);
}

window.addEventListener('scroll', updateReading, { passive: true });

render();

function handleAppHash() {
  if (!location.hash || !location.hash.startsWith('#/')) return;
  const h = location.hash.replace(/^#\/?/, '');
  const p = h.split('/');

  // Redirection for obsolete routes
  if (h === 'flashcards' || h === 'flashcard' || p[0] === 'flashcard' || p[0] === 'flashcards') {
    location.hash = '#/quiz';
    toast('Mục Flashcard đã được tích hợp vào Ngân hàng Quiz BA.');
    page = 'Quiz';
    render();
    return;
  }

  if (h === 'scale' || p[0] === 'scale' || h === 'ba-tech' || h === 'system-scale' || h.includes('how-request-travels')) {
    location.hash = '#/books';
    toast('Học phần kỹ thuật đã được chuyển vào Tủ sách BA chuyên sâu.');
    page = 'Sách BA';
    if (typeof handleBooksHash === 'function') handleBooksHash([]);
    render();
    return;
  }

  if (['about', 'contact', 'privacy', 'terms'].includes(h)) {
    location.hash = '#/books';
    page = 'Sách BA';
    render();
    return;
  }

  if (p[0] === 'books') {
    page = 'Sách BA';
    if (typeof handleBooksHash === 'function') handleBooksHash(p.slice(1));
    render();
  } else if (p[0] === 'interview') {
    page = 'Phỏng vấn';
    render();
  } else if (p[0] === 'quiz') {
    page = 'Quiz';
    render();
  } else if (p[0] === 'cases') {
    page = 'Case study';
    render();
  } else if (p[0] === 'lessons') {
    page = 'Thư viện bài học';
    render();
  } else if (p[0] === 'roadmap') {
    page = 'Lộ trình học';
    render();
  } else if (p[0] === 'dashboard') {
    page = 'Dashboard';
    render();
  } else if (p[0] === 'glossary') {
    page = 'Glossary';
    render();
  }
}

handleAppHash();
window.addEventListener('hashchange', handleAppHash);
