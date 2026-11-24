/**
 * books-engine.js
 * Master Engine for Module "Sách BA" in Vy Workspace
 * Features:
 * - 3 Books Overview with clickable cards & "Xem nội dung" buttons
 * - Detailed Book Views with actual PDF Table of Contents
 * - 100 Days filter by day number (1-100) and title
 * - Full Reader View with split TOC rail (desktop) & collapsible drawer (mobile)
 * - Dual reading mode: Vietnamese review content (bám sát nguồn) & Embedded PDF Viewer (#page=X)
 * - Distinct hash URL for every item (#/books/:bookId/:itemId) supporting direct reload & deep-linking
 * - BCS split_1 truncated chapters handling ("Chưa có trong PDF đính kèm")
 * - Sequential navigation: "Về danh sách sách", "Mục trước", "Mục tiếp theo"
 */

(function () {
  'use strict';

  var root = (typeof window !== 'undefined') ? window : global;

  var booksEngineState = {
    view: 'overview',          // 'overview' | 'book-detail' | 'reader'
    activeBookId: null,        // 'babok-v3' | 'bcs-ba-3rd' | '100-days-ba'
    activeItemId: null,        // e.g. 'task-3-1', 'bcs-ch-1', 'day-100'
    readerMode: 'notes',       // 'notes' | 'pdf'
    isMobileTocOpen: false,
    daySearchQuery: '',
    dayTopicFilter: 'all',
    tocSearchQuery: ''
  };

  function getBooksList() {
    if (typeof booksMeta !== 'undefined') return booksMeta;
    if (root && root.booksMeta) return root.booksMeta;
    if (typeof global !== 'undefined' && global.booksMeta) return global.booksMeta;
    if (typeof window !== 'undefined' && window.booksMeta) return window.booksMeta;
    return [];
  }

  function findBook(id) {
    var list = getBooksList();
    if (!id) return null;
    var strId = String(id).trim();

    // 1. Direct ID match
    var found = list.find(function (b) { return b.id === strId; });
    if (found) return found;

    // 2. Numeric 1-based index (1 -> babok-v3, 2 -> bcs-ba-3rd, 3 -> 100-days-ba)
    var num = parseInt(strId, 10);
    if (!isNaN(num) && num >= 1 && num <= list.length) {
      return list[num - 1];
    }

    // 3. Keyword / slug alias matches
    var lower = strId.toLowerCase();
    if (lower === 'babok' || lower === 'iiba' || lower === 'babok-guide' || lower === 'babok-v3') {
      return list.find(function (b) { return b.id === 'babok-v3'; }) || null;
    }
    if (lower === 'bcs' || lower === 'bcs-3rd' || lower === 'bcs-ba' || lower === 'bcs-ba-3rd') {
      return list.find(function (b) { return b.id === 'bcs-ba-3rd'; }) || null;
    }
    if (lower === '100' || lower === '100-days' || lower === '100-ngay' || lower === '100-days-ba') {
      return list.find(function (b) { return b.id === '100-days-ba'; }) || null;
    }

    return null;
  }

  function findItem(book, itemId) {
    if (!book || !book.toc) return null;
    if (!itemId) return null;
    var strId = String(itemId).trim();

    // 1. Direct ID match
    var found = book.toc.find(function (item) { return item.id === strId; });
    if (found) return found;

    // 2. Day number match in 100 Days BA (e.g. '1', '100', 'day-1', 'day-100', 'day 100')
    if (book.id === '100-days-ba') {
      var dNum = parseInt(strId.replace(/\D/g, ''), 10);
      if (!isNaN(dNum)) {
        var dayFound = book.toc.find(function (item) { return item.id === ('day-' + dNum); });
        if (dayFound) return dayFound;
      }
    }

    // 3. Task number match in BABOK (e.g. '3.1', 'task-3-1', 'task 3.1')
    if (book.id === 'babok-v3') {
      var cleanCode = strId.toLowerCase().replace(/^(task|chương|chuong)\s*/, '').replace(/[-_]/g, '.');
      var babokFound = book.toc.find(function (item) {
        var itemClean = item.code.toLowerCase().replace(/^(task|chương|chuong)\s*/, '').replace(/[-_]/g, '.');
        return itemClean === cleanCode || item.id === ('task-' + strId.replace(/\./g, '-'));
      });
      if (babokFound) return babokFound;
    }

    // 4. Numeric 1-based index in TOC (e.g. '1' -> first item)
    var num = parseInt(strId, 10);
    if (!isNaN(num) && num >= 1 && num <= book.toc.length) {
      return book.toc[num - 1];
    }

    // 5. Code match (e.g. 'Chương 1', 'Task 3.1')
    var lower = strId.toLowerCase();
    var codeFound = book.toc.find(function (item) {
      return item.code.toLowerCase() === lower ||
             item.code.toLowerCase().replace(/\s+/g, '') === lower.replace(/\s+/g, '');
    });
    if (codeFound) return codeFound;

    return null;
  }

  function getAdjacentItems(book, currentItemId) {
    if (!book || !book.toc) return { prev: null, next: null };
    var availableItems = book.toc.filter(function (it) { return it.available; });
    var idx = availableItems.findIndex(function (it) { return it.id === currentItemId; });
    if (idx === -1) return { prev: null, next: null };
    return {
      prev: idx > 0 ? availableItems[idx - 1] : null,
      next: idx < availableItems.length - 1 ? availableItems[idx + 1] : null
    };
  }

  // Hash Navigation Handler
  function handleBooksHash(parts) {
    if (!parts || parts.length === 0 || !parts[0]) {
      booksEngineState.view = 'overview';
      booksEngineState.activeBookId = null;
      booksEngineState.activeItemId = null;
      return;
    }

    var bookId = parts[0];
    var book = findBook(bookId);
    if (!book) {
      booksEngineState.view = 'overview';
      booksEngineState.activeBookId = null;
      booksEngineState.activeItemId = null;
      return;
    }

    booksEngineState.activeBookId = book.id;

    if (parts.length >= 2 && parts[1]) {
      var itemId = parts[1];
      var item = findItem(book, itemId);
      if (item && item.available) {
        booksEngineState.view = 'reader';
        booksEngineState.activeItemId = item.id;
        return;
      }
    }

    booksEngineState.view = 'book-detail';
    booksEngineState.activeItemId = null;
  }

  function updateUrlHash(bookId, itemId) {
    var newHash = '#/books';
    if (bookId) {
      newHash += '/' + bookId;
      if (itemId) newHash += '/' + itemId;
    }
    if (typeof location !== 'undefined' && location.hash !== newHash) {
      location.hash = newHash;
    }
  }

  // 1. View: Books Catalog Overview
  function renderOverview() {
    var header = heading('Sách BA Thực Chiến', 'Khám phá tri thức chuẩn quốc tế và bài học xương máu nghề Business Analyst qua 3 tác phẩm kinh điển.') +
      '<section class="panel" style="padding:22px;margin-bottom:24px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">' +
          '<div>' +
            '<h2 style="font-size:20px;margin-bottom:6px">Thư Viện Sách Business Analyst</h2>' +
            '<p class="metadata">Kết nối lý thuyết chuẩn mực của IIBA & BCS với 100 câu chuyện va vấp thực tế tại doanh nghiệp Việt Nam. Bấm vào bất kỳ cuốn sách nào để xem mục lục và đọc nội dung chi tiết.</p>' +
          '</div>' +
          '<div style="display:flex;gap:12px">' +
            '<div style="padding:10px 16px;background:var(--tint);border-radius:10px;text-align:center">' +
              '<b style="font-size:20px;color:var(--primary);display:block">3 Cuốn sách</b>' +
              '<small class="metadata">986 trang tài liệu</small>' +
            '</div>' +
            '<div style="padding:10px 16px;background:var(--tint);border-radius:10px;text-align:center">' +
              '<b style="font-size:20px;color:var(--primary);display:block">100 DAY</b>' +
              '<small class="metadata">Kinh nghiệm thực chiến</small>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';

    var cards = '<div class="book-catalog-grid">' +
      getBooksList().map(function (b) {
        var firstItem = b.toc.find(function (it) { return it.available; });
        var firstItemId = firstItem ? firstItem.id : '';
        return '<div class="book-card clickable-book-card" data-open-book="' + b.id + '" style="cursor:pointer">' +
          '<div>' +
            '<div class="book-card-header">' +
              '<div class="book-icon-badge" style="background:' + b.color + '18;color:' + b.color + '">' + b.icon + '</div>' +
              '<span class="book-status-pill">' + b.status + '</span>' +
            '</div>' +
            '<h3 style="font-size:18px;font-weight:700;margin:12px 0 6px;line-height:1.4">' + b.title + '</h3>' +
            '<p class="metadata" style="margin-bottom:10px"><b>Tác giả:</b> ' + b.author + ' (' + b.year + ') · <b>Quy mô:</b> ' + b.totalPages + ' trang</p>' +
            '<p style="font-size:13.5px;line-height:1.6;color:var(--muted);margin-bottom:16px">' + b.description + '</p>' +
            (b.missingNotice ? '<div class="callout" style="font-size:12px;padding:10px 12px;margin-bottom:16px;background:#fef3c7;border-left:3px solid #d97706;color:#92400e">' + b.missingNotice + '</div>' : '') +
          '</div>' +
          '<div style="margin-top:auto;display:flex;gap:10px;flex-wrap:wrap">' +
            '<button class="primary" style="flex:1.2" data-open-book="' + b.id + '">Xem nội dung ➔</button>' +
            (firstItemId ? '<button class="secondary" style="flex:1" data-book-id="' + b.id + '" data-open-item="' + firstItemId + '">Đọc ngay 📖</button>' : '') +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>';

    return header + cards;
  }

  // 2. View: Book Detail with Actual PDF Table of Contents
  function renderBookDetail() {
    var b = findBook(booksEngineState.activeBookId);
    if (!b) return renderOverview();

    var firstAvailableItem = (b.toc || []).find(function (it) { return it.available; });
    var pdfFileUrl = b.pdfUrl || ('/docs/' + b.id + '.pdf');

    var navBarHtml = '<div style="margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">' +
      '<button class="secondary" id="btn-back-overview">← Về danh sách 3 cuốn sách</button>' +
      '<span class="metadata">Mục lục lấy trực tiếp từ PDF thực tế (' + b.totalPages + ' trang)</span>' +
    '</div>';

    var headerHtml = '<section class="panel" style="padding:28px;margin-bottom:24px">' +
      '<div style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap">' +
        '<div class="book-icon-badge" style="width:68px;height:68px;font-size:34px;background:' + b.color + '18;color:' + b.color + '">' + b.icon + '</div>' +
        '<div style="flex:1;min-width:280px">' +
          '<div style="display:flex;gap:8px;align-items:center;margin-bottom:6px;flex-wrap:wrap">' +
            '<span class="book-status-pill">' + b.status + '</span>' +
            '<span class="metadata">Năm xuất bản: ' + b.year + ' · Tổng ' + b.totalPages + ' trang</span>' +
          '</div>' +
          '<h1 style="font-size:24px;margin-bottom:8px;line-height:1.3">' + b.title + '</h1>' +
          '<p class="metadata" style="font-size:14px;margin-bottom:12px"><b>Tác giả / Cơ quan ban hành:</b> ' + b.author + '</p>' +
          '<p style="line-height:1.7;font-size:14px">' + b.description + '</p>' +
          (b.missingNotice ? '<div class="callout warning" style="margin-top:14px"><b>⚠️ Phạm vi tài liệu split_1:</b> ' + b.missingNotice + '</div>' : '') +
          (firstAvailableItem ?
            '<div style="margin-top:18px;display:flex;gap:12px;flex-wrap:wrap">' +
              '<button class="primary" data-book-id="' + b.id + '" data-open-item="' + firstAvailableItem.id + '" style="font-size:14px;padding:10px 18px">' +
                '📖 Bắt đầu đọc: ' + firstAvailableItem.code + ' ➔' +
              '</button>' +
              '<a href="' + pdfFileUrl + '" target="_blank" rel="noopener noreferrer" class="secondary" style="display:inline-flex;align-items:center;padding:10px 18px;border-radius:10px;text-decoration:none;font-size:14px">' +
                '📄 Xem toàn bộ file PDF gốc ↗' +
              '</a>' +
            '</div>' : '') +
        '</div>' +
      '</div>' +
    '</section>';

    var filterBarHtml = '';
    var itemsToDisplay = b.toc || [];

    // Filter bar for 100 Days BA
    if (b.id === '100-days-ba') {
      var q = (booksEngineState.daySearchQuery || '').trim().toLowerCase();
      var topicFilter = booksEngineState.dayTopicFilter;

      itemsToDisplay = b.toc.filter(function (it) {
        if (topicFilter !== 'all' && it.category !== topicFilter) return false;
        if (!q) return true;
        // Search by day number e.g. "100", "day 100", "23"
        var cleanQ = q.replace(/^(day|ngày)\s*/i, '');
        if (cleanQ && it.code.toLowerCase().replace('day ', '') === cleanQ) return true;
        return (it.code + ' ' + it.title + ' ' + it.summary).toLowerCase().includes(q);
      });

      var dayTopics = ['all', 'Testing & UAT', 'Dữ liệu & SQL', 'Mô hình hóa quy trình', 'Agile & Scrum', 'UX & Product Thinking', 'Khai thác yêu cầu', 'Đặc tả & Quản lý yêu cầu', 'Phân tích & thiết kế giải pháp', 'Kỹ năng & Phỏng vấn BA', 'Nền tảng BA'];

      filterBarHtml = '<div class="days-filter-bar" style="margin-bottom:20px">' +
        '<input type="text" class="topic-search-input" id="day-search-input" style="max-width:320px" placeholder="Tìm theo số ngày (ví dụ: 100, 23) hoặc tiêu đề..." value="' + esc(booksEngineState.daySearchQuery) + '">' +
        '<select class="topic-search-input" id="day-topic-select" style="max-width:240px">' +
          dayTopics.map(function (top) {
            return '<option value="' + top + '" ' + (topicFilter === top ? 'selected' : '') + '>' + (top === 'all' ? 'Tất cả chủ đề (' + b.toc.length + ' ngày)' : top) + '</option>';
          }).join('') +
        '</select>' +
        (booksEngineState.daySearchQuery || topicFilter !== 'all' ? '<button class="secondary" id="btn-reset-day-filter">Đặt lại bộ lọc</button>' : '') +
      '</div>';
    }

    var tocListHtml = '<section class="panel" style="padding:24px">' +
      '<div class="section-head" style="margin-bottom:16px">' +
        '<h3>Mục Lục Sách Thực Tế (' + itemsToDisplay.length + ' mục)</h3>' +
        '<span class="metadata">Bấm vào bất kỳ mục nào để mở nội dung đọc tương ứng</span>' +
      '</div>' +
      filterBarHtml +
      '<div class="book-toc-grid">' +
        (itemsToDisplay.length ? itemsToDisplay.map(function (it) {
          if (!it.available) {
            return '<div class="book-toc-item disabled-toc-item">' +
              '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">' +
                '<span class="book-toc-code" style="background:#f1f5f9;color:#64748b">' + it.code + '</span>' +
                '<span class="book-status-pill" style="background:#fee2e2;color:#991b1b;border-color:#fca5a5">' + (it.statusText || 'Chưa có trong PDF đính kèm') + '</span>' +
              '</div>' +
              '<h4 style="font-size:15px;color:#94a3b8;margin-bottom:6px">' + it.title + '</h4>' +
              '<p style="font-size:12.5px;color:#94a3b8;margin:0">' + it.summary + '</p>' +
            '</div>';
          }

          return '<div class="book-toc-item clickable-toc-item" data-book-id="' + b.id + '" data-open-item="' + it.id + '">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">' +
              '<span class="book-toc-code">' + it.code + '</span>' +
              '<span class="metadata" style="font-size:12px">📄 Trang PDF: <b>' + it.pdfPage + '</b> · 📖 Trang in: ' + it.printPage + '</span>' +
            '</div>' +
            '<h4 style="font-size:15px;font-weight:700;margin-bottom:6px;line-height:1.4">' + it.title + '</h4>' +
            (it.category ? '<span class="metadata" style="display:inline-block;background:var(--surface-soft);padding:2px 8px;border-radius:4px;font-size:11px;margin-bottom:8px">' + it.category + '</span>' : '') +
            '<p style="font-size:12.5px;line-height:1.5;color:var(--muted);margin-bottom:12px">' + it.summary + '</p>' +
            '<button class="secondary full" data-book-id="' + b.id + '" data-open-item="' + it.id + '" style="font-size:12.5px;padding:6px 12px">Mở nội dung đọc ➔</button>' +
          '</div>';
        }).join('') : '<div style="text-align:center;padding:40px;color:var(--muted)">Không tìm thấy mục nào khớp với từ khóa.</div>') +
      '</div>' +
    '</section>';

    return navBarHtml + headerHtml + tocListHtml;
  }

  // 3. View: Full Reader with Desktop TOC Rail & Mobile Drawer
  function renderReader() {
    var b = findBook(booksEngineState.activeBookId);
    if (!b) return renderOverview();

    var item = findItem(b, booksEngineState.activeItemId);
    if (!item) return renderBookDetail();

    var adj = getAdjacentItems(b, item.id);

    // Header actions
    var topBarHtml = '<div class="reader-top-bar">' +
      '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">' +
        '<button class="secondary" id="btn-back-overview" title="Về danh sách sách">← Danh sách sách</button>' +
        '<button class="secondary" id="btn-back-book-detail" data-book-id="' + b.id + '">≡ Mục lục cuốn này</button>' +
        '<button class="secondary mobile-toc-toggle-btn" id="btn-toggle-mobile-toc">' + (booksEngineState.isMobileTocOpen ? '✕ Đóng mục lục' : '☰ Hiện mục lục') + '</button>' +
      '</div>' +
      '<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">' +
        '<div class="reader-mode-switch">' +
          '<button class="reader-mode-btn ' + (booksEngineState.readerMode === 'notes' ? 'active' : '') + '" data-set-reader-mode="notes">📖 Bài ôn tiếng Việt</button>' +
          '<button class="reader-mode-btn ' + (booksEngineState.readerMode === 'pdf' ? 'active' : '') + '" data-set-reader-mode="pdf">📄 Trang PDF (' + item.pdfPage + ')</button>' +
        '</div>' +
        '<button class="secondary" id="btn-prev-item" ' + (!adj.prev ? 'disabled' : '') + ' data-book-id="' + b.id + '" data-open-item="' + (adj.prev ? adj.prev.id : '') + '">← Mục trước</button>' +
        '<button class="primary" id="btn-next-item" ' + (!adj.next ? 'disabled' : '') + ' data-book-id="' + b.id + '" data-open-item="' + (adj.next ? adj.next.id : '') + '">Mục tiếp theo →</button>' +
      '</div>' +
    '</div>';

    // Left Rail TOC
    var tocFilterQ = (booksEngineState.tocSearchQuery || '').trim().toLowerCase();
    var filteredToc = b.toc.filter(function (it) {
      if (!tocFilterQ) return true;
      return (it.code + ' ' + it.title).toLowerCase().includes(tocFilterQ);
    });

    var tocRailHtml = '<aside class="reader-toc-rail ' + (booksEngineState.isMobileTocOpen ? 'mobile-open' : '') + '">' +
      '<div class="reader-toc-head">' +
        '<div style="font-weight:700;font-size:14px">' + b.icon + ' ' + (b.shortTitle || b.title) + '</div>' +
        '<input type="text" class="reader-toc-search" id="reader-toc-search-input" placeholder="Lọc mục lục..." value="' + esc(booksEngineState.tocSearchQuery) + '">' +
      '</div>' +
      '<div class="reader-toc-list" id="reader-toc-list-container">' +
        filteredToc.map(function (it) {
          if (!it.available) {
            return '<div class="reader-toc-link disabled">' +
              '<small class="metadata" style="color:#ef4444">' + it.code + ' (Chưa có)</small>' +
              '<span>' + it.title + '</span>' +
            '</div>';
          }
          var isActive = it.id === item.id;
          return '<button class="reader-toc-link ' + (isActive ? 'active' : '') + '" data-book-id="' + b.id + '" data-open-item="' + it.id + '">' +
            '<div style="display:flex;justify-content:space-between;width:100%">' +
              '<small class="code">' + it.code + '</small>' +
              '<small class="page">p.' + it.pdfPage + '</small>' +
            '</div>' +
            '<span class="title">' + it.title + '</span>' +
          '</button>';
        }).join('') +
      '</div>' +
    '</aside>';

    var pdfFileUrl = b.pdfUrl || ('/docs/' + b.id + '.pdf');

    // Main Reading Pane
    var readingPaneHtml = '<div class="reader-content-pane">' +
      '<div class="reader-content-body">' +
        '<div class="reader-item-header">' +
          '<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;flex-wrap:wrap">' +
            '<span class="book-toc-code">' + item.code + '</span>' +
            (item.category ? '<span class="book-status-pill">' + item.category + '</span>' : '') +
            '<span class="metadata">📄 Trang PDF: <b>' + item.pdfPage + '</b> &nbsp;|&nbsp; 📖 Trang in: <b>' + item.printPage + '</b></span>' +
          '</div>' +
          '<h1 style="font-size:24px;line-height:1.4;margin:6px 0 12px">' + item.title + '</h1>' +
          '<div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">' +
            '<button class="secondary" data-set-reader-mode="pdf" style="font-size:12px;padding:4px 10px">📄 Mở xem trang PDF ' + item.pdfPage + '</button>' +
            '<a href="' + pdfFileUrl + '#page=' + item.pdfPage + '" target="_blank" rel="noopener noreferrer" class="subtle" style="font-size:12px;align-self:center">Mở file PDF gốc trong tab mới ↗</a>' +
          '</div>' +
        '</div>' +

        (booksEngineState.readerMode === 'notes' ?
          '<article class="reader-article-body">' +
            item.contentHtml +
          '</article>' :
          '<div class="reader-pdf-viewer-wrap">' +
            '<div style="padding:10px 14px;background:var(--surface-soft);border:1px solid var(--line);border-radius:8px;margin-bottom:12px;font-size:13px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">' +
              '<span>Đang hiển thị trang PDF <b>' + item.pdfPage + '</b> của tác phẩm <i>' + b.title + '</i></span>' +
              '<a href="' + pdfFileUrl + '#page=' + item.pdfPage + '" target="_blank" class="primary" style="font-size:12px;padding:4px 10px;text-decoration:none">Mở toàn màn hình tab mới ↗</a>' +
            '</div>' +
            '<iframe class="reader-pdf-iframe reader-pdf-frame" src="' + pdfFileUrl + '#page=' + item.pdfPage + '" style="width:100%;height:800px;border:1px solid var(--line);border-radius:10px;background:#fff" title="Trình đọc PDF ' + b.title + '"></iframe>' +
          '</div>'
        ) +

        '<div class="reader-bottom-nav">' +
          '<button class="secondary" id="btn-prev-item-bot" ' + (!adj.prev ? 'disabled' : '') + ' data-book-id="' + b.id + '" data-open-item="' + (adj.prev ? adj.prev.id : '') + '">← Mục trước (' + (adj.prev ? adj.prev.code : 'Đầu sách') + ')</button>' +
          '<button class="primary" id="btn-next-item-bot" ' + (!adj.next ? 'disabled' : '') + ' data-book-id="' + b.id + '" data-open-item="' + (adj.next ? adj.next.id : '') + '">Mục tiếp theo (' + (adj.next ? adj.next.code : 'Hết sách') + ') →</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    var backdropHtml = booksEngineState.isMobileTocOpen ? '<div class="reader-toc-backdrop" id="reader-toc-backdrop"></div>' : '';

    return topBarHtml +
      '<div class="book-reader-layout">' +
        tocRailHtml +
        readingPaneHtml +
      '</div>' +
      backdropHtml;
  }

  // Master booksPage function
  root.booksPage = function () {
    if (booksEngineState.view === 'reader') {
      return renderReader();
    }
    if (booksEngineState.view === 'book-detail') {
      return renderBookDetail();
    }
    return renderOverview();
  };

  root.handleBooksHash = handleBooksHash;
  root.booksEngineState = booksEngineState;

  // Event Listeners Registration
  if (typeof document !== 'undefined') {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('button, a, div.clickable-book-card, div.clickable-toc-item');
      if (!b) return;

      // Nav to Sách BA from sidebar or menu
      if (b.dataset.nav === 'Sách BA') {
        booksEngineState.view = 'overview';
        booksEngineState.activeBookId = null;
        booksEngineState.activeItemId = null;
        updateUrlHash(null, null);
        return;
      }

      // Open a book (from card click or "Xem nội dung" button)
      if (b.dataset.openBook) {
        e.preventDefault();
        var bookId = b.dataset.openBook;
        var book = findBook(bookId);
        if (book) {
          booksEngineState.activeBookId = book.id;
          booksEngineState.activeItemId = null;
          booksEngineState.view = 'book-detail';
          updateUrlHash(book.id, null);
          if (typeof render === 'function') render();
          window.scrollTo(0, 0);
          return;
        }
      }

      // Open a specific chapter/task/day item directly
      if (b.dataset.openItem) {
        e.preventDefault();
        var itemId = b.dataset.openItem;
        if (!itemId) return;
        var bookId = b.dataset.bookId || booksEngineState.activeBookId;
        var book = findBook(bookId);
        if (book) {
          var item = findItem(book, itemId);
          if (item && item.available) {
            booksEngineState.activeBookId = book.id;
            booksEngineState.activeItemId = item.id;
            booksEngineState.view = 'reader';
            booksEngineState.isMobileTocOpen = false;
            updateUrlHash(book.id, item.id);
            if (typeof render === 'function') render();
            window.scrollTo(0, 0);
            return;
          }
        }
      }

      // Back to Overview
      if (b.id === 'btn-back-overview') {
        e.preventDefault();
        booksEngineState.view = 'overview';
        booksEngineState.activeBookId = null;
        booksEngineState.activeItemId = null;
        updateUrlHash(null, null);
        if (typeof render === 'function') render();
        window.scrollTo(0, 0);
        return;
      }

      // Back to Book Detail
      if (b.id === 'btn-back-book-detail') {
        e.preventDefault();
        var bookId = b.dataset.bookId || booksEngineState.activeBookId;
        var book = findBook(bookId);
        if (book) {
          booksEngineState.activeBookId = book.id;
          booksEngineState.view = 'book-detail';
          booksEngineState.activeItemId = null;
          updateUrlHash(book.id, null);
          if (typeof render === 'function') render();
          window.scrollTo(0, 0);
          return;
        }
      }

      // Toggle Mobile TOC
      if (b.id === 'btn-toggle-mobile-toc' || b.id === 'reader-toc-backdrop') {
        e.preventDefault();
        booksEngineState.isMobileTocOpen = !booksEngineState.isMobileTocOpen;
        if (typeof render === 'function') render();
        return;
      }

      // Switch reader mode ('notes' | 'pdf')
      if (b.dataset.setReaderMode) {
        e.preventDefault();
        booksEngineState.readerMode = b.dataset.setReaderMode;
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
    });

    // Realtime search inputs listener
    document.addEventListener('input', function (e) {
      if (e.target && e.target.id === 'day-search-input') {
        booksEngineState.daySearchQuery = e.target.value;
        // Re-render TOC items without losing input focus
        var grid = document.querySelector('.book-toc-grid');
        var b = findBook(booksEngineState.activeBookId);
        if (grid && b) {
          // Re-render detail view smoothly
          if (typeof render === 'function') render();
          var inp = document.getElementById('day-search-input');
          if (inp) {
            inp.focus();
            inp.setSelectionRange(inp.value.length, inp.value.length);
          }
        }
      }

      if (e.target && e.target.id === 'reader-toc-search-input') {
        booksEngineState.tocSearchQuery = e.target.value;
        var container = document.getElementById('reader-toc-list-container');
        var b = findBook(booksEngineState.activeBookId);
        if (container && b) {
          var q = booksEngineState.tocSearchQuery.trim().toLowerCase();
          var filtered = b.toc.filter(function (it) {
            if (!q) return true;
            return (it.code + ' ' + it.title).toLowerCase().includes(q);
          });
          container.innerHTML = filtered.map(function (it) {
            if (!it.available) {
              return '<div class="reader-toc-link disabled">' +
                '<small class="metadata" style="color:#ef4444">' + it.code + ' (Chưa có)</small>' +
                '<span>' + it.title + '</span>' +
              '</div>';
            }
            var isActive = it.id === booksEngineState.activeItemId;
            return '<button class="reader-toc-link ' + (isActive ? 'active' : '') + '" data-open-item="' + it.id + '">' +
              '<div style="display:flex;justify-content:space-between;width:100%">' +
                '<small class="code">' + it.code + '</small>' +
                '<small class="page">p.' + it.pdfPage + '</small>' +
              '</div>' +
              '<span class="title">' + it.title + '</span>' +
            '</button>';
          }).join('');
        }
      }
    });

    document.addEventListener('change', function (e) {
      if (e.target && e.target.id === 'day-topic-select') {
        booksEngineState.dayTopicFilter = e.target.value;
        if (typeof render === 'function') render();
      }
    });

    // Hash change event listener
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('hashchange', function () {
        if (location.hash && location.hash.startsWith('#/books')) {
          var h = location.hash.replace(/^#\/?/, '');
          var p = h.split('/');
          handleBooksHash(p.slice(1));
          if (typeof page !== 'undefined' && page !== 'Sách BA') {
            page = 'Sách BA';
          }
          if (typeof render === 'function') render();
        }
      });
    }
  }

  // Export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      booksEngineState: booksEngineState,
      findBook: findBook,
      findItem: findItem,
      getAdjacentItems: getAdjacentItems,
      handleBooksHash: handleBooksHash,
      renderOverview: renderOverview,
      renderBookDetail: renderBookDetail,
      renderReader: renderReader
    };
  }
})();
