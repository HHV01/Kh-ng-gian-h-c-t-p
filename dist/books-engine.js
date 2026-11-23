/**
 * Books Module Engine - Vy Workspace
 * Provides interactive exploration:
 * - By Book (BABOK v3, BCS 3rd, 100 Ngày BA) with 100 Days filter by day/topic
 * - By Topic (15 comprehensive BA topics with instant search in VI & EN)
 * - Interactive 4-section lesson view with draft auto-save, sample solution, self-check rubrics
 * - 2-way linkage with Quiz BA (launch isolated quiz practice without mutating full quiz scores)
 */

(function () {
  'use strict';

  var root = (typeof window !== 'undefined') ? window : global;

  var booksEngineState = {
    view: 'overview',          // 'overview' | 'book-detail' | 'topic-lesson' | 'practice-quiz'
    tab: 'books',             // 'books' | 'topics'
    activeBookId: null,        // 'babok-v3' | 'bcs-ba-3rd' | '100-days-ba'
    activeLessonId: null,      // e.g. 'TOPIC-IMPACT-ANALYSIS'
    searchQuery: '',
    selectedCategory: 'all',
    daySearchQuery: '',
    dayTopicFilter: 'all',
    showSampleSolution: false,
    practiceQuiz: {
      questions: [],
      index: 0,
      userAns: [],
      finished: false
    }
  };

  // Helper to ensure state.books exists
  function getBooksState() {
    if (typeof state === 'undefined') return { completedLessons: [], bookmarks: [], drafts: {}, lastLessonId: null };
    if (!state.books) {
      state.books = { completedLessons: [], bookmarks: [], drafts: {}, lastLessonId: null };
    }
    return state.books;
  }

  function saveBooksState() {
    if (typeof save === 'function') save();
  }

  function findTopicLesson(id) {
    if (typeof bookTopicLessons === 'undefined') return null;
    return bookTopicLessons.find(function (l) { return l.id === id; }) || null;
  }

  function findBook(id) {
    if (typeof booksMeta === 'undefined') return null;
    return booksMeta.find(function (b) { return b.id === id; }) || null;
  }

  // 1. Overview Screen: Book Catalog & Topic Catalog
  function renderOverview() {
    var bState = getBooksState();
    var completedCount = bState.completedLessons ? bState.completedLessons.length : 0;
    var bookmarkCount = bState.bookmarks ? bState.bookmarks.length : 0;

    var headerHtml = heading('Sách BA Thực chiến', 'Học tập & rèn luyện kỹ năng từ 3 nguồn học liệu BA chuẩn mực: BABOK v3, BCS 3rd Edition và 100 ngày viết về nghề BA.') +
      '<section class="panel" style="padding:22px;margin-bottom:24px">' +
        '<div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between">' +
          '<div>' +
            '<h2 style="font-size:20px;margin-bottom:6px">Kho Học liệu & Thực hành Business Analyst</h2>' +
            '<p class="metadata">Kết nối lý thuyết chuẩn quốc tế (BABOK, BCS) với 100 ngày kinh nghiệm thực tế tại Việt Nam. Chọn học theo từng cuốn sách hoặc tra cứu nhanh theo chủ đề nghiệp vụ.</p>' +
          '</div>' +
          '<div style="display:flex;gap:16px;text-align:center">' +
            '<div style="padding:10px 16px;background:var(--tint);border-radius:12px">' +
              '<strong style="font-size:22px;color:var(--primary);display:block">' + completedCount + '/15</strong>' +
              '<small class="metadata">Bài ôn đã hoàn thành</small>' +
            '</div>' +
            '<div style="padding:10px 16px;background:var(--tint);border-radius:12px">' +
              '<strong style="font-size:22px;color:var(--primary);display:block">' + bookmarkCount + '</strong>' +
              '<small class="metadata">Đã đánh dấu</small>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';

    var tabsHtml = '<div class="books-tabs">' +
      '<button class="books-tab-btn ' + (booksEngineState.tab === 'books' ? 'active' : '') + '" data-books-tab="books">📚 Theo sách (3 tác phẩm)</button>' +
      '<button class="books-tab-btn ' + (booksEngineState.tab === 'topics' ? 'active' : '') + '" data-books-tab="topics">🎯 Theo chủ đề (15 chủ đề nghiệp vụ)</button>' +
      '<button class="books-tab-btn ' + (booksEngineState.tab === 'crossref' ? 'active' : '') + '" data-books-tab="crossref">📑 Bảng đối chiếu nguồn</button>' +
    '</div>';

    var bodyHtml = '';

    if (booksEngineState.tab === 'books') {
      bodyHtml = '<div class="book-catalog-grid">' +
        booksMeta.map(function (b) {
          return '<div class="book-card">' +
            '<div>' +
              '<div class="book-card-header">' +
                '<div class="book-icon-badge" style="background:' + b.color + '18;color:' + b.color + '">' + b.icon + '</div>' +
                '<span class="book-status-pill">' + b.status + '</span>' +
              '</div>' +
              '<h3 style="font-size:18px;font-weight:700;margin:10px 0 6px">' + b.title + '</h3>' +
              '<p class="metadata" style="margin-bottom:12px"><b>Tác giả:</b> ' + b.author + ' (' + b.year + ') · <b>Quy mô:</b> ' + b.totalPages + ' trang</p>' +
              '<p style="font-size:13px;line-height:1.6;color:var(--muted);margin-bottom:16px">' + b.description + '</p>' +
              (b.missingNotice ? '<div class="callout" style="font-size:12px;padding:10px 12px;margin-bottom:16px;background:#fef3c7;border-left:3px solid #d97706;color:#92400e">' + b.missingNotice + '</div>' : '') +
            '</div>' +
            '<button class="primary full" data-open-book="' + b.id + '">Mở sách & Tra cứu chi tiết ➔</button>' +
          '</div>';
        }).join('') +
      '</div>';
    } else if (booksEngineState.tab === 'topics') {
      var q = booksEngineState.searchQuery.trim().toLowerCase();
      var filteredTopics = bookTopicLessons.filter(function (l) {
        if (booksEngineState.selectedCategory !== 'all' && l.category !== booksEngineState.selectedCategory) return false;
        if (!q) return true;
        var searchTarget = (l.title + ' ' + l.category + ' ' + l.keywords.join(' ') + ' ' + l.summary).toLowerCase();
        return searchTarget.includes(q);
      });

      var categories = ['all', 'Đặc tả & Quản lý yêu cầu', 'Mô hình hóa quy trình', 'Phân tích & thiết kế giải pháp', 'Dữ liệu & SQL', 'Agile & Scrum', 'UX & Product Thinking', 'Testing & UAT', 'Kỹ năng & Phỏng vấn BA', 'Nền tảng BA'];

      var tagChips = [
        'truy vết', 'traceability', 'phân tích tác động', 'impact analysis', 'acceptance criteria',
        'ac', 'gherkin', 'bpmn', 'state machine', 'idempotency', 'sql', 'reconciliation',
        'invest', 'progressive disclosure', 'uat', 'bva', 'star method', 'baccm'
      ];

      bodyHtml = '<div>' +
        '<div class="topic-search-wrap">' +
          '<input type="text" class="topic-search-input" id="topic-search-input" placeholder="Tìm theo từ khóa tiếng Việt hoặc tiếng Anh (ví dụ: truy vết / traceability, impact analysis, ac, bpmn...)" value="' + esc(booksEngineState.searchQuery) + '">' +
          (booksEngineState.searchQuery ? '<button class="secondary" id="btn-clear-topic-search">Xóa tìm kiếm</button>' : '') +
        '</div>' +
        '<div class="topic-tag-cloud">' +
          '<span class="metadata" style="align-self:center;margin-right:6px">Gợi ý từ khóa:</span>' +
          tagChips.map(function (tc) {
            return '<span class="topic-tag-chip" data-search-chip="' + tc + '">#' + tc + '</span>';
          }).join('') +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px">' +
          categories.map(function (cat) {
            var activeCls = booksEngineState.selectedCategory === cat ? 'style="background:var(--primary);color:#fff;border-color:var(--primary)"' : '';
            return '<button class="secondary" data-topic-cat="' + cat + '" ' + activeCls + ' style="font-size:12px;padding:6px 12px">' + (cat === 'all' ? 'Tất cả danh mục' : cat) + '</button>';
          }).join('') +
        '</div>' +
        '<div class="topic-grid">' +
          (filteredTopics.length ? filteredTopics.map(function (t) {
            var isCompleted = bState.completedLessons && bState.completedLessons.includes(t.id);
            var isBookmarked = bState.bookmarks && bState.bookmarks.includes(t.id);
            return '<div class="topic-card">' +
              '<div>' +
                '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">' +
                  '<span class="metadata" style="font-weight:600;color:var(--primary)">' + t.category + '</span>' +
                  '<div>' +
                    (isCompleted ? '<span class="quiz-badge pass" style="margin-right:4px">✓ Đã ôn</span>' : '') +
                    (isBookmarked ? '<span style="font-size:14px">⭐</span>' : '') +
                  '</div>' +
                '</div>' +
                '<h3 style="font-size:16px;font-weight:700;margin-bottom:8px;line-height:1.5">' + t.title + '</h3>' +
                '<p style="font-size:13px;line-height:1.6;color:var(--muted);margin-bottom:14px">' + t.summary + '</p>' +
                '<div style="margin-bottom:16px">' +
                  '<small class="metadata" style="display:block;margin-bottom:4px">Nguồn đối chiếu:</small>' +
                  '<div style="display:flex;flex-wrap:wrap;gap:4px">' +
                    t.sources.map(function (s) {
                      var bookInfo = findBook(s.bookId);
                      return '<span style="font-size:11px;background:var(--surface-soft);padding:2px 6px;border-radius:4px;border:1px solid var(--line)">' + (bookInfo ? bookInfo.icon + ' ' + bookInfo.title.split('(')[0] : s.bookId) + ' (p.' + s.page + ')</span>';
                    }).join('') +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<button class="primary full" data-open-topic="' + t.id + '">Vào bài ôn & Làm bài tập ➔</button>' +
            '</div>';
          }).join('') : '<section class="panel" style="grid-column:1/-1;text-align:center;padding:40px"><p class="metadata">Không tìm thấy chủ đề phù hợp với từ khóa "' + esc(booksEngineState.searchQuery) + '". Hãy thử từ khóa khác.</p></section>') +
        '</div>' +
      '</div>';
    } else if (booksEngineState.tab === 'crossref') {
      bodyHtml = '<section class="panel" style="padding:24px">' +
        '<div class="section-head" style="margin-bottom:16px">' +
          '<h3>Bảng Đối chiếu Toàn diện 3 Sách BA (' + bookCrossReference.length + ' mục)</h3>' +
          '<span class="metadata">Ánh xạ từng Task BABOK, Chương BCS và bài DAY sang bài ôn</span>' +
        '</div>' +
        '<div style="overflow-x:auto">' +
          '<table class="cross-ref-table">' +
            '<thead>' +
              '<tr><th>Sách</th><th>Chương / Mục / DAY</th><th>Tên nội dung</th><th>Trang PDF</th><th>Chủ đề BA</th><th>Bài ôn tương ứng</th></tr>' +
            '</thead>' +
            '<tbody>' +
              bookCrossReference.map(function (row) {
                var lesson = findTopicLesson(row.topicLessonId);
                return '<tr>' +
                  '<td><b>' + row.bookTitle + '</b></td>' +
                  '<td><code>' + row.itemCode + '</code></td>' +
                  '<td>' + row.itemTitle + '</td>' +
                  '<td>Trang ' + row.page + '</td>' +
                  '<td><span class="metadata">' + row.topic + '</span></td>' +
                  '<td>' + (lesson ? '<a href="#" data-open-topic="' + lesson.id + '" style="color:var(--primary);font-weight:600">' + lesson.title + '</a>' : row.topicLessonId) + '</td>' +
                '</tr>';
              }).join('') +
            '</tbody>' +
          '</table>' +
        '</div>' +
      '</section>';
    }

    return headerHtml + tabsHtml + bodyHtml;
  }

  // 2. Book Detail View
  function renderBookDetail() {
    var b = findBook(booksEngineState.activeBookId);
    if (!b) return renderOverview();

    var backHtml = '<div style="margin-bottom:20px">' +
      '<button class="secondary" id="btn-back-overview">← Quay lại danh mục Sách BA</button>' +
    '</div>';

    var headerHtml = '<section class="panel" style="padding:28px;margin-bottom:24px">' +
      '<div style="display:flex;gap:18px;align-items:flex-start">' +
        '<div class="book-icon-badge" style="width:64px;height:64px;font-size:32px;background:' + b.color + '18;color:' + b.color + '">' + b.icon + '</div>' +
        '<div style="flex:1">' +
          '<div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">' +
            '<span class="book-status-pill">' + b.status + '</span>' +
            '<span class="metadata">' + b.year + ' · ' + b.totalPages + ' trang</span>' +
          '</div>' +
          '<h1 style="font-size:24px;margin-bottom:8px">' + b.title + '</h1>' +
          '<p class="metadata" style="font-size:14px;margin-bottom:12px"><b>Tác giả:</b> ' + b.author + '</p>' +
          '<p style="line-height:1.7;font-size:14px">' + b.description + '</p>' +
          (b.missingNotice ? '<div class="callout" style="font-size:13px;padding:12px 14px;margin-top:14px;background:#fef3c7;border-left:3px solid #d97706;color:#92400e">' + b.missingNotice + '</div>' : '') +
        '</div>' +
      '</div>' +
    '</section>';

    var contentHtml = '';

    if (b.id === 'babok-v3') {
      contentHtml = '<section class="panel" style="padding:24px">' +
        '<h3>Danh mục 30 Tasks trong 6 Vùng Tri thức (BABOK Guide v3)</h3>' +
        '<p class="metadata" style="margin-bottom:18px">Mỗi task đều có Mục đích, Đầu vào (Inputs), Đầu ra (Outputs) và Thời điểm áp dụng chuẩn xác.</p>' +
        '<div style="display:grid;grid-template-columns:1fr;gap:16px">' +
          bookBabokTasks.map(function (t) {
            var lesson = findTopicLesson(t.topicLessonId);
            return '<div style="background:var(--surface-soft);border:1px solid var(--line);border-radius:12px;padding:18px">' +
              '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">' +
                '<strong>Task ' + t.code + ': ' + t.name + '</strong>' +
                '<span class="metadata">Trang PDF: ' + t.page + ' · ' + t.chapter + '</span>' +
              '</div>' +
              '<p style="font-size:13px;line-height:1.6;margin-bottom:10px"><b>Mục đích:</b> ' + t.purpose + '</p>' +
              '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:10px;font-size:12px;margin-bottom:12px">' +
                '<div><span class="metadata">Đầu vào (Inputs):</span><br>' + t.inputs.join(', ') + '</div>' +
                '<div><span class="metadata">Đầu ra (Outputs):</span><br><b>' + t.outputs.join(', ') + '</b></div>' +
                '<div><span class="metadata">Khi nào áp dụng:</span><br>' + t.whenToApply + '</div>' +
              '</div>' +
              (lesson ? '<button class="secondary" data-open-topic="' + lesson.id + '" style="font-size:12px;padding:6px 12px">Ôn luyện chủ đề liên quan: ' + lesson.title + ' ➔</button>' : '') +
            '</div>';
          }).join('') +
        '</div>' +
      '</section>';
    } else if (b.id === 'bcs-ba-3rd') {
      contentHtml = '<section class="panel" style="padding:24px">' +
        '<h3>Các Chương Kiến thức trong BCS Business Analysis (3rd Edition - split_1)</h3>' +
        '<p class="metadata" style="margin-bottom:18px">Bao phủ 8 chương cốt lõi trong file split_1 (trang 35 đến 235). Chương 9 đến 14 thuộc phần tiếp theo.</p>' +
        '<div style="display:grid;grid-template-columns:1fr;gap:16px">' +
          bookBcsChapters.map(function (c) {
            var lesson = findTopicLesson(c.topicLessonId);
            return '<div style="background:var(--surface-soft);border:1px solid var(--line);border-radius:12px;padding:18px">' +
              '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">' +
                '<strong style="font-size:16px">Chương ' + c.chapter + ': ' + c.title + '</strong>' +
                '<span class="metadata">Trang ' + c.pages + '</span>' +
              '</div>' +
              '<p style="font-size:13px;line-height:1.6;margin-bottom:12px">' + c.summary + '</p>' +
              '<div style="margin-bottom:12px"><span class="metadata">Nội dung chính:</span> ' + c.sections.join(' · ') + '</div>' +
              (lesson ? '<button class="secondary" data-open-topic="' + lesson.id + '" style="font-size:12px;padding:6px 12px">Ôn luyện chủ đề: ' + lesson.title + ' ➔</button>' : '') +
            '</div>';
          }).join('') +
        '</div>' +
      '</section>';
    } else if (b.id === '100-days-ba') {
      var dQuery = booksEngineState.daySearchQuery.trim().toLowerCase();
      var dTopic = booksEngineState.dayTopicFilter;

      var filteredDays = bookDays100.filter(function (d) {
        if (dTopic !== 'all' && d.topic !== dTopic) return false;
        if (!dQuery) return true;
        // match day number or title/text
        if (dQuery.startsWith('day') || dQuery.startsWith('ngày')) {
          var cleanNum = dQuery.replace(/[^0-9]/g, '');
          if (cleanNum && d.day === parseInt(cleanNum)) return true;
        }
        if (String(d.day) === dQuery) return true;
        return (d.title + ' ' + d.takeaway + ' ' + d.projectQuestion).toLowerCase().includes(dQuery);
      });

      var dayTopics = ['all', 'Testing & UAT', 'Dữ liệu & SQL', 'Mô hình hóa quy trình', 'Agile & Scrum', 'UX & Product Thinking', 'Khai thác yêu cầu', 'Đặc tả & Quản lý yêu cầu', 'Phân tích & thiết kế giải pháp', 'Kỹ năng & Phỏng vấn BA', 'Nền tảng BA'];

      contentHtml = '<section class="panel" style="padding:24px">' +
        '<div class="section-head" style="margin-bottom:16px">' +
          '<h3>Danh sách 100 Ngày Viết Về Nghề BA (DAY 1 đến DAY 100)</h3>' +
          '<span class="metadata">Kinh nghiệm thực chiến của tác giả Nguyễn Bá Phú</span>' +
        '</div>' +
        '<div class="days-filter-bar">' +
          '<input type="text" class="topic-search-input" id="day-search-input" style="max-width:320px" placeholder="Tìm theo số ngày (1-100) hoặc từ khóa..." value="' + esc(booksEngineState.daySearchQuery) + '">' +
          '<select class="topic-search-input" id="day-topic-select" style="max-width:240px">' +
            dayTopics.map(function (top) {
              return '<option value="' + top + '" ' + (dTopic === top ? 'selected' : '') + '>' + (top === 'all' ? 'Tất cả chủ đề' : top) + '</option>';
            }).join('') +
          '</select>' +
          (booksEngineState.daySearchQuery || dTopic !== 'all' ? '<button class="secondary" id="btn-reset-day-filter">Đặt lại bộ lọc</button>' : '') +
          '<span class="metadata" style="margin-left:auto">Hiển thị ' + filteredDays.length + '/100 ngày</span>' +
        '</div>' +
        '<div class="days-grid">' +
          filteredDays.map(function (d) {
            var lesson = findTopicLesson(d.topicLessonId);
            return '<div class="day-card">' +
              '<div>' +
                '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">' +
                  '<span class="day-number-badge">DAY ' + d.day + '</span>' +
                  '<span class="metadata">Trang ' + d.page + '</span>' +
                '</div>' +
                '<h4 style="font-size:15px;line-height:1.5;margin-bottom:8px">' + d.title + '</h4>' +
                '<span class="metadata" style="display:inline-block;background:var(--surface-soft);padding:2px 8px;border-radius:4px;font-size:11px;margin-bottom:10px">' + d.topic + '</span>' +
                '<div style="font-size:13px;line-height:1.6;margin-bottom:10px;color:var(--text)"><b>💡 Bài học:</b> ' + d.takeaway + '</div>' +
                '<div style="font-size:12px;line-height:1.6;color:var(--muted);background:var(--surface-soft);padding:8px 10px;border-radius:6px;margin-bottom:12px"><b>❓ Áp dụng:</b> ' + d.projectQuestion + '</div>' +
              '</div>' +
              (lesson ? '<button class="secondary full" data-open-topic="' + lesson.id + '" style="font-size:12px;padding:6px 10px">Ôn chủ đề: ' + lesson.title + ' ➔</button>' : '') +
            '</div>';
          }).join('') +
        '</div>' +
      '</section>';
    }

    return backHtml + headerHtml + contentHtml;
  }

  // 3. Interactive Topic Review Lesson View
  function renderTopicLesson() {
    var l = findTopicLesson(booksEngineState.activeLessonId);
    if (!l) return renderOverview();

    var bState = getBooksState();
    var isBookmarked = bState.bookmarks && bState.bookmarks.includes(l.id);
    var isCompleted = bState.completedLessons && bState.completedLessons.includes(l.id);
    var draftText = (bState.drafts && bState.drafts[l.id]) ? bState.drafts[l.id] : '';

    var navBarHtml = '<div class="lesson-nav-bar">' +
      '<button class="secondary" id="btn-back-overview">← Danh sách Sách & Chủ đề</button>' +
      '<div style="display:flex;gap:10px">' +
        '<button class="secondary" id="btn-toggle-bookmark" data-lesson-id="' + l.id + '">' + (isBookmarked ? '⭐ Đã đánh dấu' : '☆ Đánh dấu bài') + '</button>' +
        '<button class="primary" id="btn-toggle-complete" data-lesson-id="' + l.id + '">' + (isCompleted ? '✓ Đã hoàn thành' : 'Đánh dấu hoàn thành') + '</button>' +
      '</div>' +
    '</div>';

    var headerHtml = '<div style="margin-bottom:24px">' +
      '<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">' +
        '<span class="tier-pill tier-1">' + l.category + '</span>' +
        '<span class="metadata">Mã bài: ' + l.id + '</span>' +
      '</div>' +
      '<h1 style="font-size:26px;line-height:1.4;margin-bottom:10px">' + l.title + '</h1>' +
      '<p class="metadata" style="font-size:15px;line-height:1.7">' + l.summary + '</p>' +
    '</div>';

    // Perspective Comparison Box
    var perspectiveHtml = '<div class="perspective-box">' +
      '<strong>🔍 So sánh Góc nhìn Tiếp cận (BABOK v3 vs BCS vs 100 Ngày BA):</strong>' +
      '<p style="margin-top:8px;margin-bottom:0">' + l.perspectiveComparison + '</p>' +
    '</div>';

    // Section 1: Core Knowledge
    var section1Html = '<div class="lesson-section-box">' +
      '<h3>📌 Phần 1: Kiến thức Cốt lõi (Cần nhớ gì & Dùng khi nào)</h3>' +
      l.coreKnowledge +
    '</div>';

    // Section 2: Application Steps
    var section2Html = '<div class="lesson-section-box">' +
      '<h3>🛠 Phần 2: Các Bước Áp Dụng Thực Tế (Quy trình chuẩn)</h3>' +
      l.applicationSteps +
    '</div>';

    // Section 3: Scenario Exercise
    var ex = l.scenarioExercise;
    var section3Html = '<div class="lesson-section-box">' +
      '<h3>🎯 Phần 3: Bài Tập Tình Huống Thực Chiến</h3>' +
      '<div class="exercise-box">' +
        '<p style="font-size:14px;line-height:1.7;margin-bottom:12px"><b>Bối cảnh tình huống:</b> ' + ex.context + '</p>' +
        '<div style="font-size:14px;line-height:1.7;margin-bottom:14px;background:var(--card);padding:14px;border-radius:10px;border-left:4px solid var(--primary)"><b>Yêu cầu cần làm:</b> ' + ex.task + '</div>' +
        '<label style="display:block;font-size:13px;font-weight:600;margin-bottom:4px">Câu trả lời của bạn (Tự động lưu nháp):</label>' +
        '<textarea class="exercise-textarea" id="exercise-answer-input" placeholder="' + esc(ex.starterPrompt) + '">' + esc(draftText) + '</textarea>' +
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">' +
          '<button class="secondary" id="btn-save-draft" data-lesson-id="' + l.id + '">💾 Lưu bài làm</button>' +
          '<button class="primary" id="btn-toggle-solution">' + (booksEngineState.showSampleSolution ? 'Ẩn đáp án mẫu ▲' : 'Xem đáp án mẫu & Tiêu chí tự kiểm ▼') + '</button>' +
        '</div>' +
        (booksEngineState.showSampleSolution ?
          '<div class="sample-solution-box">' +
            ex.sampleSolution +
            '<h5 style="margin-top:16px;margin-bottom:8px;font-weight:700">Checklist Tiêu chí Tự chấm điểm (Rubric):</h5>' +
            '<ul class="rubric-checklist">' +
              ex.rubricCriteria.map(function (crit) {
                return '<li><label style="cursor:pointer"><input type="checkbox" style="margin-right:8px"> ' + crit + '</label></li>';
              }).join('') +
            '</ul>' +
          '</div>' : '') +
      '</div>' +
    '</div>';

    // Section 4: Sources & Related Quiz
    var section4Html = '<div class="lesson-section-box">' +
      '<h3>📖 Phần 4: Nguồn Tham Chiếu & Luyện Câu Hỏi Liên Quan</h3>' +
      '<div style="overflow-x:auto;margin-bottom:18px">' +
        '<table class="cross-ref-table">' +
          '<thead>' +
            '<tr><th>Tác phẩm</th><th>Chương / Task / DAY</th><th>Trang PDF</th><th>Điểm trọng tâm</th></tr>' +
          '</thead>' +
          '<tbody>' +
            l.sources.map(function (s) {
              var bookInfo = findBook(s.bookId);
              return '<tr>' +
                '<td><b>' + (bookInfo ? bookInfo.icon + ' ' + bookInfo.title : s.bookId) + '</b></td>' +
                '<td><code>' + s.chapter + '</code></td>' +
                '<td>Trang ' + s.page + '</td>' +
                '<td>' + s.notes + '</td>' +
              '</tr>';
            }).join('') +
          '</tbody>' +
        '</table>' +
      '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">' +
        (l.relatedQuizIds && l.relatedQuizIds.length ?
          '<button class="primary" id="btn-practice-quiz" data-quiz-ids="' + l.relatedQuizIds.join(',') + '">⚡ Luyện ' + l.relatedQuizIds.length + ' câu trắc nghiệm liên quan (' + l.relatedQuizIds.join(', ') + ')</button>' : '') +
        (l.relatedCaseId ? '<button class="secondary" data-case-open="' + l.relatedCaseId + '">◈ Mở Case Study liên quan (' + l.relatedCaseId + ')</button>' : '') +
      '</div>' +
    '</div>';

    return '<div class="lesson-container">' + navBarHtml + headerHtml + perspectiveHtml + section1Html + section2Html + section3Html + section4Html + '</div>';
  }

  // 4. Isolated Practice Quiz View (Does not overwrite full quiz score)
  function renderPracticeQuiz() {
    var pQuiz = booksEngineState.practiceQuiz;
    var total = pQuiz.questions.length;
    var currentIdx = pQuiz.index;

    var navBarHtml = '<div style="margin-bottom:20px">' +
      '<button class="secondary" id="btn-exit-practice">← Quay lại bài ôn sách</button>' +
    '</div>';

    if (pQuiz.finished || currentIdx >= total) {
      var correct = 0;
      pQuiz.questions.forEach(function (q, idx) {
        if (pQuiz.userAns[idx] === q.ans) correct++;
      });
      var score = Math.round((correct / total) * 100);

      return navBarHtml + heading('Kết quả Luyện tập theo Chủ đề', 'Lượt luyện tập độc lập nhằm củng cố kiến thức từ sách BA.') +
        '<section class="panel" style="text-align:center;padding:36px">' +
          '<div style="font-size:60px;font-weight:800;color:var(--primary)">' + score + '%</div>' +
          '<h2>' + (score >= 70 ? 'Xuất sắc! Bạn đã nắm vững chủ đề này.' : 'Hãy tiếp tục đọc lại sách và ôn luyện thêm nhé.') + '</h2>' +
          '<p class="metadata">' + correct + '/' + total + ' câu đúng · (Lượt luyện này được cô lập, không ảnh hưởng điểm mở khóa bài 20 câu đầy đủ)</p>' +
          '<div style="margin-top:20px;display:flex;justify-content:center;gap:12px">' +
            '<button class="primary" id="btn-retry-practice">Luyện tập lại lượt này</button>' +
            '<button class="secondary" id="btn-exit-practice">Quay lại bài ôn sách</button>' +
          '</div>' +
        '</section>';
    }

    var q = pQuiz.questions[currentIdx];
    var answered = pQuiz.userAns[currentIdx] !== -1;
    var userChoice = pQuiz.userAns[currentIdx];
    var isCorrect = userChoice === q.ans;

    return navBarHtml + heading('Luyện tập Câu hỏi Trắc nghiệm Liên quan', 'Câu hỏi từ Ngân hàng Quiz BA được gắn với chủ đề này.') +
      '<section class="panel" style="max-width:800px;margin:auto;padding:32px">' +
        '<div class="progress-label" style="display:flex;justify-content:space-between;margin-bottom:10px">' +
          '<span><strong>Câu ' + (currentIdx + 1) + ' / ' + total + '</strong> · ' + q.id + '</span>' +
          '<span class="metadata">Chế độ luyện tập chuyên đề</span>' +
        '</div>' +
        bar(((currentIdx + (answered ? 1 : 0)) / total) * 100) +
        '<h2 style="font-size:20px;line-height:1.6;margin:28px 0 24px">' + q.q + '</h2>' +
        q.opts.map(function (opt, i) {
          var cls = '';
          if (answered) {
            if (i === q.ans) cls = 'correct';
            else if (i === userChoice) cls = 'wrong';
          }
          return '<button class="quiz-answer ' + cls + '" data-practice-ans="' + i + '" ' + (answered ? 'disabled' : '') + '>' +
            '<b>' + String.fromCharCode(65 + i) + '.</b> ' + opt +
          '</button>';
        }).join('') +
        (answered ?
          '<div class="quiz-feedback-box ' + (isCorrect ? 'correct' : 'wrong') + '">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">' +
              '<strong>' + (isCorrect ? '✓ Chính xác!' : '✕ Chưa chính xác') + '</strong>' +
              '<span>' + (!isCorrect ? 'Đáp án đúng: <b>' + String.fromCharCode(65 + q.ans) + '</b>' : '') + '</span>' +
            '</div>' +
            '<div style="font-size:14px;line-height:1.7;margin-bottom:16px">' + (q.exp || '') + '</div>' +
            '<button class="primary" id="btn-next-practice">' + (currentIdx === total - 1 ? 'Xem kết quả tổng kết ➔' : 'Câu tiếp theo ➔') + '</button>' +
          '</div>' : '') +
      '</section>';
  }

  // Master booksPage function
  root.booksPage = function () {
    if (booksEngineState.view === 'book-detail') {
      return renderBookDetail();
    }
    if (booksEngineState.view === 'topic-lesson') {
      return renderTopicLesson();
    }
    if (booksEngineState.view === 'practice-quiz') {
      return renderPracticeQuiz();
    }
    return renderOverview();
  };

  // Event handler registration
  if (typeof document !== 'undefined') {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('button, a, span');
      if (!b) return;

      // Nav to Sách BA
      if (b.dataset.nav === 'Sách BA') {
        booksEngineState.view = 'overview';
        return;
      }

      // Switch tab (books / topics / crossref)
      if (b.dataset.booksTab) {
        e.preventDefault();
        booksEngineState.tab = b.dataset.booksTab;
        if (typeof render === 'function') render();
        return;
      }

      // Open a book
      if (b.dataset.openBook) {
        e.preventDefault();
        booksEngineState.activeBookId = b.dataset.openBook;
        booksEngineState.view = 'book-detail';
        if (typeof render === 'function') render();
        return;
      }

      // Open a topic lesson
      if (b.dataset.openTopic) {
        e.preventDefault();
        booksEngineState.activeLessonId = b.dataset.openTopic;
        booksEngineState.showSampleSolution = false;
        booksEngineState.view = 'topic-lesson';
        var bState = getBooksState();
        bState.lastLessonId = b.dataset.openTopic;
        saveBooksState();
        if (typeof render === 'function') render();
        return;
      }

      // Back to overview
      if (b.id === 'btn-back-overview') {
        e.preventDefault();
        booksEngineState.view = 'overview';
        if (typeof render === 'function') render();
        return;
      }

      // Topic tag chip click
      if (b.dataset.searchChip) {
        e.preventDefault();
        booksEngineState.searchQuery = b.dataset.searchChip;
        if (typeof render === 'function') render();
        return;
      }

      // Topic category filter
      if (b.dataset.topicCat) {
        e.preventDefault();
        booksEngineState.selectedCategory = b.dataset.topicCat;
        if (typeof render === 'function') render();
        return;
      }

      // Clear search
      if (b.id === 'btn-clear-topic-search') {
        e.preventDefault();
        booksEngineState.searchQuery = '';
        if (typeof render === 'function') render();
        return;
      }

      // Reset day filter
      if (b.id === 'btn-reset-day-filter') {
        e.preventDefault();
        booksEngineState.daySearchQuery = '';
        booksEngineState.dayTopicFilter = 'all';
        if (typeof render === 'function') render();
        return;
      }

      // Toggle Bookmark
      if (b.id === 'btn-toggle-bookmark') {
        e.preventDefault();
        var lId = b.dataset.lessonId;
        var st = getBooksState();
        if (!st.bookmarks) st.bookmarks = [];
        var idx = st.bookmarks.indexOf(lId);
        if (idx !== -1) st.bookmarks.splice(idx, 1);
        else st.bookmarks.push(lId);
        saveBooksState();
        if (typeof render === 'function') render();
        return;
      }

      // Toggle Complete
      if (b.id === 'btn-toggle-complete') {
        e.preventDefault();
        var lId = b.dataset.lessonId;
        var st = getBooksState();
        if (!st.completedLessons) st.completedLessons = [];
        var idx = st.completedLessons.indexOf(lId);
        if (idx !== -1) st.completedLessons.splice(idx, 1);
        else st.completedLessons.push(lId);
        saveBooksState();
        if (typeof render === 'function') render();
        return;
      }

      // Save Draft
      if (b.id === 'btn-save-draft') {
        e.preventDefault();
        var lId = b.dataset.lessonId;
        var inputEl = document.getElementById('exercise-answer-input');
        if (inputEl) {
          var st = getBooksState();
          if (!st.drafts) st.drafts = {};
          st.drafts[lId] = inputEl.value;
          saveBooksState();
          if (typeof toast === 'function') toast('Đã lưu câu trả lời nháp thành công!');
        }
        return;
      }

      // Toggle Sample Solution
      if (b.id === 'btn-toggle-solution') {
        e.preventDefault();
        booksEngineState.showSampleSolution = !booksEngineState.showSampleSolution;
        if (typeof render === 'function') render();
        return;
      }

      // Launch Practice Quiz
      if (b.id === 'btn-practice-quiz') {
        e.preventDefault();
        var qIds = b.dataset.quizIds.split(',').map(function (s) { return s.trim(); });
        if (typeof quizBank !== 'undefined') {
          var matchedQs = quizBank.filter(function (q) { return qIds.includes(q.id); });
          if (matchedQs.length) {
            booksEngineState.practiceQuiz = {
              questions: matchedQs,
              index: 0,
              userAns: matchedQs.map(function () { return -1; }),
              finished: false
            };
            booksEngineState.view = 'practice-quiz';
            if (typeof render === 'function') render();
          }
        }
        return;
      }

      // Practice Quiz Answer selected
      if (b.dataset.practiceAns !== undefined) {
        e.preventDefault();
        var ansIdx = parseInt(b.dataset.practiceAns);
        booksEngineState.practiceQuiz.userAns[booksEngineState.practiceQuiz.index] = ansIdx;
        if (typeof render === 'function') render();
        return;
      }

      // Practice Quiz Next
      if (b.id === 'btn-next-practice') {
        e.preventDefault();
        booksEngineState.practiceQuiz.index++;
        if (booksEngineState.practiceQuiz.index >= booksEngineState.practiceQuiz.questions.length) {
          booksEngineState.practiceQuiz.finished = true;
        }
        if (typeof render === 'function') render();
        return;
      }

      // Retry Practice Quiz
      if (b.id === 'btn-retry-practice') {
        e.preventDefault();
        booksEngineState.practiceQuiz.index = 0;
        booksEngineState.practiceQuiz.userAns = booksEngineState.practiceQuiz.questions.map(function () { return -1; });
        booksEngineState.practiceQuiz.finished = false;
        if (typeof render === 'function') render();
        return;
      }

      // Exit Practice Quiz back to lesson
      if (b.id === 'btn-exit-practice') {
        e.preventDefault();
        booksEngineState.view = 'topic-lesson';
        if (typeof render === 'function') render();
        return;
      }

      // Direct study from Quiz button
      if (b.dataset.studyTopic) {
        e.preventDefault();
        var tId = b.dataset.studyTopic;
        booksEngineState.activeLessonId = tId;
        booksEngineState.view = 'topic-lesson';
        if (typeof go === 'function') go('Sách BA');
        else if (typeof page !== 'undefined') { page = 'Sách BA'; if (typeof render === 'function') render(); }
        return;
      }
    });

    // Realtime search inputs listener
    document.addEventListener('input', function (e) {
      if (e.target && e.target.id === 'topic-search-input') {
        booksEngineState.searchQuery = e.target.value;
      }
      if (e.target && e.target.id === 'day-search-input') {
        booksEngineState.daySearchQuery = e.target.value;
      }
      if (e.target && e.target.id === 'exercise-answer-input') {
        var lId = booksEngineState.activeLessonId;
        if (lId) {
          var st = getBooksState();
          if (!st.drafts) st.drafts = {};
          st.drafts[lId] = e.target.value;
        }
      }
    });

    document.addEventListener('change', function (e) {
      if (e.target && e.target.id === 'day-topic-select') {
        booksEngineState.dayTopicFilter = e.target.value;
        if (typeof render === 'function') render();
      }
    });
  }

  // Export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      booksEngineState: booksEngineState,
      findTopicLesson: findTopicLesson,
      findBook: findBook,
      getBooksState: getBooksState,
      renderOverview: renderOverview,
      renderBookDetail: renderBookDetail,
      renderTopicLesson: renderTopicLesson,
      renderPracticeQuiz: renderPracticeQuiz
    };
  }
})();
