/**
 * books-engine.js
 * Master Engine for Module "Sách BA" in Vy Workspace
 * Features:
 * - 3 Books Overview with balanced 2-column Hero, Study Stats Center, and clickable cards
 * - Detailed Book Views with actual PDF Table of Contents & 2-column Book Profile Card
 * - 100 Days filter by day number (1-100), topic pills with count badges, day range, and title search
 * - Full Reader View with 3-Column / Balanced 2-Column + Companion Inspector Pane:
 *   Column 1: TOC Rail (280px)
 *   Column 2: Center Reading Pane (minmax(0, 1fr))
 *   Column 3: Right Companion Inspector Pane (290px) with Key Takeaway, Project Reflection, PDF reference
 * - Dual reading mode: Vietnamese review content (bám sát nguồn) & Embedded PDF Viewer (#page=X)
 * - Reading Comfort: Font size controls (A- / A / A+), Focus/Zen mode, Scroll Progress bar
 * - Reading Progress Tracking: "Đánh dấu đã đọc" with local persistence and TOC checkmarks
 * - Keyboard Shortcuts: [ (prev), ] (next), M (mode toggle), F (focus mode)
 * - Auto-scroll TOC rail to current active item
 * - Distinct hash URL for every item (#/books/:bookId/:itemId) supporting direct reload & deep-linking
 * - BCS split_1 truncated chapters handling ("Chưa có trong PDF đính kèm")
 * - Sequential navigation: "Về danh sách sách", "Mục trước", "Mục tiếp theo"
 */

(function () {
  'use strict';

  var root = (typeof window !== 'undefined') ? window : global;

  function getCompletedItems() {
    try {
      if (typeof VyProfileManager !== 'undefined') {
        var pData = VyProfileManager.getProfileData();
        if (pData && Array.isArray(pData.booksCompleted)) {
          return pData.booksCompleted;
        }
      }
      if (typeof localStorage === 'undefined') return [];
      var raw = localStorage.getItem('ba-books-completed');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCompletedItems(list) {
    try {
      if (typeof VyProfileManager !== 'undefined') {
        var pData = VyProfileManager.getProfileData();
        pData.booksCompleted = list;
        VyProfileManager.saveProfileData(null, pData);
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('ba-books-completed', JSON.stringify(list));
      }
    } catch (e) {}
  }

  if (typeof VyProfileManager !== 'undefined') {
    VyProfileManager.onProfileChange(function() {
      if (typeof render === 'function' && typeof page !== 'undefined' && page === 'Sách BA') {
        render();
      }
    });
  }

  var booksEngineState = {
    view: 'overview',          // 'overview' | 'book-detail' | 'reader'
    activeBookId: null,        // 'babok-v3' | 'bcs-ba-3rd' | '100-days-ba'
    activeItemId: null,        // e.g. 'task-3-1', 'bcs-ch-1', 'day-100'
    readerMode: 'notes',       // 'notes' | 'pdf'
    fontSize: 'normal',        // 'small' | 'normal' | 'large'
    isFocusMode: false,        // boolean (Zen/Focus mode)
    isMobileTocOpen: false,
    daySearchQuery: '',
    dayTopicFilter: 'all',
    dayRangeFilter: 'all',     // 'all' | '1-25' | '26-50' | '51-75' | '76-100'
    tocSearchQuery: '',
    catalogSearchQuery: '',
    completedItems: getCompletedItems()
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

  function isItemCompleted(itemId) {
    var items = booksEngineState.completedItems || [];
    return items.includes(itemId);
  }

  function toggleItemCompleted(itemId) {
    var items = getCompletedItems();
    var idx = items.indexOf(itemId);
    var nowCompleted = false;
    if (idx > -1) {
      items.splice(idx, 1);
      nowCompleted = false;
    } else {
      items.push(itemId);
      nowCompleted = true;
    }
    saveCompletedItems(items);
    booksEngineState.completedItems = items;
    return nowCompleted;
  }

  function getReadingTimeEstimate(html) {
    if (!html) return '2 phút đọc';
    var text = String(html).replace(/<[^>]*>/g, ' ');
    var words = text.trim().split(/\s+/).length;
    var minutes = Math.max(2, Math.round(words / 200));
    return minutes + ' phút đọc';
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
    var allBooks = getBooksList();
    var totalItems = 0;
    var completedCount = 0;

    allBooks.forEach(function (b) {
      (b.toc || []).forEach(function (it) {
        if (it.available) {
          totalItems++;
          if (isItemCompleted(it.id)) completedCount++;
        }
      });
    });

    var overallPct = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

    var header = heading('Sách BA Thực Chiến', 'Khám phá tri thức chuẩn quốc tế và bài học xương máu nghề Business Analyst qua 3 tác phẩm kinh điển.') +
      '<div class="books-container">' +
        '<section class="books-overview-hero-grid books-animate-fade">' +
          // Left Column: Hero Title & 3 Pillars
          '<div class="books-hero-panel">' +
            '<div>' +
              '<div style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">' +
                '<span>📚 Tủ sách Business Analysis chuyên sâu</span>' +
              '</div>' +
              '<h2 style="font-size:24px;letter-spacing:-0.5px;margin-bottom:10px;line-height:1.3">Thư Viện Sách Business Analyst</h2>' +
              '<p class="metadata" style="font-size:13.5px;line-height:1.7;margin:0 0 16px">' +
                'Kết nối chuẩn mực quốc tế của IIBA (BABOK Guide v3) & BCS (Business Analysis 3rd) với 100 câu chuyện va vấp thực tế tại doanh nghiệp Việt Nam. ' +
                'Đọc bài tóm tắt cô đọng bằng tiếng Việt hoặc đối chiếu trực tiếp trang sách PDF gốc.' +
              '</p>' +
            '</div>' +
            '<div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;margin-top:14px">' +
              '<div style="padding:10px 12px;background:var(--surface-soft);border:1px solid var(--line);border-radius:10px;font-size:12px">' +
                '<b style="color:var(--primary);display:block;margin-bottom:2px">📘 BABOK v3</b>' +
                '<span class="metadata">6 Vùng tri thức & 50 kỹ thuật</span>' +
              '</div>' +
              '<div style="padding:10px 12px;background:var(--surface-soft);border:1px solid var(--line);border-radius:10px;font-size:12px">' +
                '<b style="color:#d97706;display:block;margin-bottom:2px">📙 BCS 3rd</b>' +
                '<span class="metadata">Phân tích chiến lược & quy trình</span>' +
              '</div>' +
              '<div style="padding:10px 12px;background:var(--surface-soft);border:1px solid var(--line);border-radius:10px;font-size:12px">' +
                '<b style="color:#059669;display:block;margin-bottom:2px">📗 100 Ngày BA</b>' +
                '<span class="metadata">100 bài học thực tế Việt Nam</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
          // Right Column: Study Center Progress & Stats Card
          '<div class="books-stats-sidebar-card">' +
            '<div>' +
              '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">' +
                '<h3 style="font-size:16px;margin:0">Tiến độ ôn tập toàn diện</h3>' +
                '<span class="book-status-pill" style="background:#ecfdf5;color:#059669;border-color:#a7f3d0">' + overallPct + '% Hoàn thành</span>' +
              '</div>' +
              '<div class="book-progress-bar-outer">' +
                '<div class="book-progress-bar-inner" style="width:' + overallPct + '%"></div>' +
              '</div>' +
              '<small class="metadata">Đã hoàn thành <b>' + completedCount + '</b> trên tổng số <b>' + totalItems + '</b> mục học liệu thực tế.</small>' +
            '</div>' +
            '<div class="books-stat-chips-grid">' +
              '<div class="books-stat-chip">' +
                '<b>3 Cuốn</b>' +
                '<small>Chuẩn quốc tế</small>' +
              '</div>' +
              '<div class="books-stat-chip">' +
                '<b>986 Trang</b>' +
                '<small>Tài liệu thực tế</small>' +
              '</div>' +
              '<div class="books-stat-chip">' +
                '<b>100 DAY</b>' +
                '<small>Kinh nghiệm thực chiến</small>' +
              '</div>' +
            '</div>' +
            '<div style="padding-top:10px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center">' +
              '<span style="font-size:12px;color:var(--muted)">Khám phá tác phẩm ngay ➔</span>' +
              '<a href="#/books/babok-v3/ch-1" class="secondary" style="font-size:12px;padding:6px 12px;border-radius:8px;text-decoration:none">Bắt đầu học ngay 🚀</a>' +
            '</div>' +
          '</div>' +
        '</section>' +
        '<div class="book-catalog-grid">' +
          allBooks.map(function (b) {
            var firstItem = (b.toc || []).find(function (it) { return it.available; });
            var firstItemId = firstItem ? firstItem.id : '';
            var bTotal = (b.toc || []).filter(function (it) { return it.available; }).length;
            var bDone = (b.toc || []).filter(function (it) { return it.available && isItemCompleted(it.id); }).length;
            var bPct = bTotal > 0 ? Math.round((bDone / bTotal) * 100) : 0;

            return '<div class="book-card clickable-book-card" data-open-book="' + b.id + '" style="cursor:pointer;--book-accent:' + b.color + '">' +
              '<div>' +
                '<div class="book-card-header">' +
                  '<div class="book-icon-badge" style="background:' + b.color + '18;color:' + b.color + '">' + b.icon + '</div>' +
                  '<div style="text-align:right">' +
                    '<span class="book-status-pill">' + b.status + '</span>' +
                    (bDone > 0 ? '<div style="font-size:11px;color:#059669;font-weight:600;margin-top:4px">✓ Đã đọc ' + bDone + '/' + bTotal + ' (' + bPct + '%)</div>' : '') +
                  '</div>' +
                '</div>' +
                '<h3 style="font-size:18px;font-weight:700;margin:12px 0 6px;line-height:1.4">' + b.title + '</h3>' +
                '<p class="metadata" style="margin-bottom:10px"><b>Tác giả:</b> ' + b.author + ' (' + b.year + ') · <b>Quy mô:</b> ' + b.totalPages + ' trang</p>' +
                '<p style="font-size:13.5px;line-height:1.6;color:var(--muted);margin-bottom:16px">' + b.description + '</p>' +
                (b.missingNotice ? '<div class="callout" style="font-size:12px;padding:10px 12px;margin-bottom:16px;background:#fef3c7;border-left:3px solid #d97706;color:#92400e">' + b.missingNotice + '</div>' : '') +
              '</div>' +
              '<div style="margin-top:auto;display:flex;gap:10px;flex-wrap:wrap">' +
                '<a href="#/books/' + b.id + '" class="primary" style="flex:1.2;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;padding:9px 16px;border-radius:8px;font-size:14px" data-open-book="' + b.id + '">Xem nội dung ➔</a>' +
                (firstItemId ? '<a href="#/books/' + b.id + '/' + firstItemId + '" class="secondary" style="flex:1;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;padding:9px 16px;border-radius:8px;font-size:14px" data-book-id="' + b.id + '" data-open-item="' + firstItemId + '">Đọc ngay 📖</a>' : '') +
              '</div>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>';

    return header;
  }

  // 2. View: Book Detail with Actual PDF Table of Contents
  function renderBookDetail() {
    var b = findBook(booksEngineState.activeBookId);
    if (!b) return renderOverview();

    var firstAvailableItem = (b.toc || []).find(function (it) { return it.available; });
    var pdfFileUrl = b.pdfUrl || ('/docs/' + b.id + '.pdf');

    var availableCount = (b.toc || []).filter(function (it) { return it.available; }).length;
    var completedCount = (b.toc || []).filter(function (it) { return it.available && isItemCompleted(it.id); }).length;
    var bookPct = availableCount > 0 ? Math.round((completedCount / availableCount) * 100) : 0;

    var breadcrumbsHtml = '<div class="books-breadcrumb-bar">' +
      '<a href="#/books" id="btn-back-overview">Thư viện Sách BA</a>' +
      '<span class="sep">›</span>' +
      '<span class="current">' + (b.shortTitle || b.title) + '</span>' +
    '</div>';

    var navBarHtml = '<div style="margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">' +
      '<a href="#/books" class="secondary" id="btn-back-overview" style="text-decoration:none;display:inline-flex;align-items:center;padding:7px 14px;border-radius:8px">← Về danh sách 3 cuốn sách</a>' +
      '<span class="metadata">Mục lục lấy trực tiếp từ PDF thực tế (' + b.totalPages + ' trang)</span>' +
    '</div>';

    var headerHtml = '<section class="book-detail-hero-grid books-animate-fade" style="--book-accent:' + b.color + '">' +
      // Left Main Panel
      '<div class="book-detail-main-panel">' +
        '<div style="display:flex;gap:18px;align-items:flex-start;flex-wrap:wrap">' +
          '<div class="book-icon-badge" style="width:68px;height:68px;font-size:34px;background:' + b.color + '18;color:' + b.color + '">' + b.icon + '</div>' +
          '<div style="flex:1;min-width:260px">' +
            '<div style="display:flex;gap:8px;align-items:center;margin-bottom:6px;flex-wrap:wrap">' +
              '<span class="book-status-pill">' + b.status + '</span>' +
              '<span class="metadata">Năm xuất bản: ' + b.year + ' · Tổng ' + b.totalPages + ' trang</span>' +
            '</div>' +
            '<h1 style="font-size:23px;margin-bottom:8px;line-height:1.3">' + b.title + '</h1>' +
            '<p class="metadata" style="font-size:13.5px;margin-bottom:10px"><b>Tác giả / Cơ quan ban hành:</b> ' + b.author + '</p>' +
            '<p style="line-height:1.65;font-size:13.5px;margin-bottom:14px">' + b.description + '</p>' +
            (b.missingNotice ? '<div class="callout warning" style="margin-top:12px"><b>⚠️ Phạm vi tài liệu split_1:</b> ' + b.missingNotice + '</div>' : '') +
            (firstAvailableItem ?
              '<div style="margin-top:18px;display:flex;gap:12px;flex-wrap:wrap">' +
                '<a href="#/books/' + b.id + '/' + firstAvailableItem.id + '" class="primary" data-book-id="' + b.id + '" data-open-item="' + firstAvailableItem.id + '" style="font-size:13.5px;padding:9px 18px;text-decoration:none;display:inline-flex;align-items:center;border-radius:8px">' +
                  '📖 Bắt đầu đọc: ' + firstAvailableItem.code + ' ➔' +
                '</a>' +
                '<a href="' + pdfFileUrl + '" target="_blank" rel="noopener noreferrer" class="secondary" style="display:inline-flex;align-items:center;padding:9px 16px;border-radius:8px;text-decoration:none;font-size:13.5px">' +
                  '📄 Xem toàn bộ file PDF gốc ↗' +
                '</a>' +
              '</div>' : '') +
          '</div>' +
        '</div>' +
      '</div>' +
      // Right Stats & Profile Card
      '<div class="book-detail-stats-card">' +
        '<div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center">' +
            '<h3 style="font-size:16px;margin:0">Tiến độ cuốn này</h3>' +
            '<span class="book-status-pill" style="background:#ecfdf5;color:#059669;border-color:#a7f3d0">' + bookPct + '%</span>' +
          '</div>' +
          '<div class="book-progress-bar-outer">' +
            '<div class="book-progress-bar-inner" style="width:' + bookPct + '%"></div>' +
          '</div>' +
          '<div style="font-size:13px;color:var(--text);font-weight:600">Đã đọc ' + completedCount + ' / ' + availableCount + ' mục</div>' +
          '<small class="metadata">' + (completedCount === availableCount ? '🎉 Đã hoàn thành 100% mục lục cuốn sách!' : 'Hãy đọc và đánh dấu hoàn thành từng mục') + '</small>' +
        '</div>' +
        '<div style="padding-top:12px;border-top:1px solid var(--line);display:flex;flex-direction:column;gap:8px;font-size:12px">' +
          '<div style="display:flex;justify-content:space-between"><span class="metadata">Quy mô tài liệu:</span><b>' + b.totalPages + ' trang PDF</b></div>' +
          '<div style="display:flex;justify-content:space-between"><span class="metadata">Mục lục có sẵn:</span><b>' + availableCount + ' chương / task</b></div>' +
          '<div style="display:flex;justify-content:space-between"><span class="metadata">Định dạng đọc:</span><b>Bản dịch + PDF gốc</b></div>' +
        '</div>' +
        (firstAvailableItem ?
          '<a href="#/books/' + b.id + '/' + firstAvailableItem.id + '" class="secondary full" style="font-size:12px;padding:8px 12px;text-align:center;text-decoration:none;border-radius:8px;font-weight:600">' +
            (completedCount > 0 ? 'Tiếp tục bài ôn ➔' : 'Bắt đầu bài đầu tiên ➔') +
          '</a>' : '') +
      '</div>' +
    '</section>';

    var filterBarHtml = '';
    var itemsToDisplay = b.toc || [];

    // Filter controls for 100 Days BA
    if (b.id === '100-days-ba') {
      var q = (booksEngineState.daySearchQuery || '').trim().toLowerCase();
      var topicFilter = booksEngineState.dayTopicFilter;
      var rangeFilter = booksEngineState.dayRangeFilter;

      itemsToDisplay = b.toc.filter(function (it) {
        if (topicFilter !== 'all' && it.category !== topicFilter) return false;

        // Day range check
        if (rangeFilter && rangeFilter !== 'all') {
          var dNum = parseInt(it.code.replace(/\D/g, ''), 10);
          if (rangeFilter === '1-25' && (dNum < 1 || dNum > 25)) return false;
          if (rangeFilter === '26-50' && (dNum < 26 || dNum > 50)) return false;
          if (rangeFilter === '51-75' && (dNum < 51 || dNum > 75)) return false;
          if (rangeFilter === '76-100' && (dNum < 76 || dNum > 100)) return false;
        }

        if (!q) return true;
        var cleanQ = q.replace(/^(day|ngày)\s*/i, '');
        if (cleanQ && it.code.toLowerCase().replace('day ', '') === cleanQ) return true;
        return (it.code + ' ' + it.title + ' ' + it.summary).toLowerCase().includes(q);
      });

      var dayTopics = ['all', 'Testing & UAT', 'Dữ liệu & SQL', 'Mô hình hóa quy trình', 'Agile & Scrum', 'UX & Product Thinking', 'Khai thác yêu cầu', 'Đặc tả & Quản lý yêu cầu', 'Phân tích & thiết kế giải pháp', 'Kỹ năng & Phỏng vấn BA', 'Nền tảng BA'];
      var dayRanges = [
        { id: 'all', label: 'Tất cả (1-100)' },
        { id: '1-25', label: 'DAY 1–25' },
        { id: '26-50', label: 'DAY 26–50' },
        { id: '51-75', label: 'DAY 51–75' },
        { id: '76-100', label: 'DAY 76–100' }
      ];

      filterBarHtml = '<div class="book-filter-toolbar">' +
        // Row 1: Search box & Day range pills
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">' +
          '<div class="search-box-wrap">' +
            '<input type="text" id="day-search-input" placeholder="Tìm số ngày (100, 23) hoặc tiêu đề..." value="' + esc(booksEngineState.daySearchQuery) + '">' +
            (booksEngineState.daySearchQuery ? '<button class="clear-btn" id="btn-clear-day-search" title="Xóa tìm kiếm">✕</button>' : '') +
          '</div>' +
          '<div class="filter-pill-group">' +
            dayRanges.map(function (rng) {
              var isAct = rangeFilter === rng.id;
              return '<button class="filter-pill-btn ' + (isAct ? 'active' : '') + '" data-set-day-range="' + rng.id + '">' + rng.label + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        // Row 2: Topic pills
        '<div class="filter-pill-group">' +
          dayTopics.map(function (top) {
            var isAct = topicFilter === top;
            var count = top === 'all' ? b.toc.length : b.toc.filter(function (it) { return it.category === top; }).length;
            var label = top === 'all' ? 'Tất cả (' + count + ')' : top + ' (' + count + ')';
            return '<button class="filter-pill-btn ' + (isAct ? 'active' : '') + '" data-set-day-topic="' + top + '">' + label + '</button>';
          }).join('') +
        '</div>' +
        // Hidden select element for contract preservation
        '<select id="day-topic-select" style="display:none">' +
          dayTopics.map(function (top) {
            return '<option value="' + top + '" ' + (topicFilter === top ? 'selected' : '') + '>' + top + '</option>';
          }).join('') +
        '</select>' +
        (booksEngineState.daySearchQuery || topicFilter !== 'all' || rangeFilter !== 'all' ? '<div style="margin-top:2px"><button class="secondary" id="btn-reset-day-filter" style="font-size:11.5px;padding:3px 8px">↺ Đặt lại tất cả bộ lọc</button></div>' : '') +
      '</div>';
    }

    var tocListHtml = '<section class="panel books-animate-fade" style="padding:24px">' +
      '<div class="section-head" style="margin-bottom:14px">' +
        '<div>' +
          '<h3 style="font-size:18px;margin-bottom:4px">Mục Lục Sách Thực Tế (' + itemsToDisplay.length + ' mục)</h3>' +
          '<span class="metadata">Bấm vào bất kỳ mục nào để mở nội dung đọc tương ứng</span>' +
        '</div>' +
        (completedCount > 0 ? '<span class="book-toc-completed-badge">✓ Đã đọc ' + completedCount + '/' + availableCount + '</span>' : '') +
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
              '<h4 style="font-size:14.5px;color:#94a3b8;margin-bottom:6px">' + it.title + '</h4>' +
              '<p style="font-size:12px;color:#94a3b8;margin:0">' + it.summary + '</p>' +
            '</div>';
          }

          var isDone = isItemCompleted(it.id);

          return '<div class="book-toc-item clickable-toc-item ' + (isDone ? 'completed' : '') + '" data-book-id="' + b.id + '" data-open-item="' + it.id + '">' +
            '<div>' +
              '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px">' +
                '<span class="book-toc-code">' + (isDone ? '✓ ' : '') + it.code + '</span>' +
                '<span class="metadata" style="font-size:11.5px">📄 Trang PDF: <b>' + it.pdfPage + '</b> · 📖 Trang in: ' + it.printPage + '</span>' +
              '</div>' +
              '<h4 style="font-size:14.5px;font-weight:700;margin-bottom:6px;line-height:1.4">' + it.title + '</h4>' +
              (it.category ? '<span class="metadata" style="display:inline-block;background:var(--surface-soft);padding:2px 8px;border-radius:4px;font-size:11px;margin-bottom:8px">' + it.category + '</span>' : '') +
              '<p style="font-size:12px;line-height:1.5;color:var(--muted);margin-bottom:12px">' + it.summary + '</p>' +
            '</div>' +
            '<div style="display:flex;gap:8px;align-items:center;margin-top:auto">' +
              '<a href="#/books/' + b.id + '/' + it.id + '" class="secondary full" data-book-id="' + b.id + '" data-open-item="' + it.id + '" style="font-size:12px;padding:7px 12px;text-decoration:none;display:block;text-align:center;border-radius:6px;font-weight:600">' +
                (isDone ? 'Đọc lại mục này ➔' : 'Mở nội dung đọc ➔') +
              '</a>' +
            '</div>' +
          '</div>';
        }).join('') : '<div style="text-align:center;padding:45px 20px;color:var(--muted)">Không tìm thấy mục nào khớp với bộ lọc hiện tại.</div>') +
      '</div>' +
    '</section>';

    return '<div class="books-container">' + breadcrumbsHtml + navBarHtml + headerHtml + tocListHtml + '</div>';
  }

  // 3. View: Full Reader with Desktop TOC Rail & Right Companion Inspector Pane
  function renderReader() {
    var b = findBook(booksEngineState.activeBookId);
    if (!b) return renderOverview();

    var item = findItem(b, booksEngineState.activeItemId);
    if (!item) return renderBookDetail();

    // Record last activity into active profile
    if (typeof VyProfileManager !== 'undefined') {
      try {
        var pData = VyProfileManager.getProfileData();
        pData.lastActivity = {
          type: 'book',
          title: item.title,
          subtitle: (b.shortTitle || b.title) + (item.day ? ' · DAY ' + item.day : (item.chapter ? ' · ' + item.chapter : '')),
          route: '#/books/' + b.id + '/' + item.id,
          data: { bookId: b.id, itemId: item.id },
          timestamp: Date.now()
        };
        VyProfileManager.saveProfileData(null, pData);
      } catch (_) {}
    }

    var adj = getAdjacentItems(b, item.id);
    var isDone = isItemCompleted(item.id);
    var readingTime = getReadingTimeEstimate(item.contentHtml);
    var pdfFileUrl = b.pdfUrl || ('/docs/' + b.id + '.pdf');

    // Breadcrumbs
    var breadcrumbsHtml = '<div class="books-breadcrumb-bar">' +
      '<a href="#/books" id="btn-back-overview">Sách BA</a>' +
      '<span class="sep">›</span>' +
      '<a href="#/books/' + b.id + '" id="btn-back-book-detail" data-book-id="' + b.id + '">' + (b.shortTitle || b.title) + '</a>' +
      '<span class="sep">›</span>' +
      '<span class="current">' + item.code + ': ' + item.title + '</span>' +
    '</div>';

    // Reading Progress Global Bar
    var progressBarHtml = '<div class="reader-progress-bar-wrap"><div class="reader-progress-bar" id="reader-global-progress"></div></div>';

    // Header Actions
    var topBarHtml = '<div class="reader-top-bar">' +
      '<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">' +
        '<a href="#/books" class="secondary" id="btn-back-overview" title="Về danh sách sách" style="text-decoration:none;display:inline-flex;align-items:center;padding:6px 12px;border-radius:8px">← Danh sách sách</a>' +
        '<a href="#/books/' + b.id + '" class="secondary" id="btn-back-book-detail" data-book-id="' + b.id + '" style="text-decoration:none;display:inline-flex;align-items:center;padding:6px 12px;border-radius:8px">≡ Mục lục cuốn này</a>' +
        '<button class="secondary mobile-toc-toggle-btn" id="btn-toggle-mobile-toc">' + (booksEngineState.isMobileTocOpen ? '✕ Đóng mục lục' : '☰ Hiện mục lục') + '</button>' +
      '</div>' +
      '<div class="reader-controls-cluster">' +
        // Dual Mode Switch
        '<div class="reader-mode-switch">' +
          '<button class="reader-mode-btn ' + (booksEngineState.readerMode === 'notes' ? 'active' : '') + '" data-set-reader-mode="notes">📖 Bài ôn tiếng Việt</button>' +
          '<button class="reader-mode-btn ' + (booksEngineState.readerMode === 'pdf' ? 'active' : '') + '" data-set-reader-mode="pdf">📄 Trang PDF (' + item.pdfPage + ')</button>' +
        '</div>' +
        // Font Size Controls (Notes Mode)
        (booksEngineState.readerMode === 'notes' ?
          '<div style="display:inline-flex;border:1px solid var(--line);border-radius:8px;overflow:hidden">' +
            '<button class="reader-tool-btn ' + (booksEngineState.fontSize === 'small' ? 'active' : '') + '" data-set-font-size="small" title="Cỡ chữ nhỏ" style="border:none;border-radius:0">A-</button>' +
            '<button class="reader-tool-btn ' + (booksEngineState.fontSize === 'normal' ? 'active' : '') + '" data-set-font-size="normal" title="Cỡ chữ tiêu chuẩn" style="border:none;border-radius:0">A</button>' +
            '<button class="reader-tool-btn ' + (booksEngineState.fontSize === 'large' ? 'active' : '') + '" data-set-font-size="large" title="Cỡ chữ lớn" style="border:none;border-radius:0">A+</button>' +
          '</div>' : '') +
        // Focus/Zen Mode Toggle
        '<button class="reader-tool-btn ' + (booksEngineState.isFocusMode ? 'active' : '') + '" id="btn-toggle-focus" title="Chế độ tập trung (Ẩn cột mục lục)">⛶ Focus</button>' +
        // Mark as completed button
        '<button class="btn-mark-completed ' + (isDone ? 'is-completed' : '') + '" id="btn-toggle-completed" data-item-id="' + item.id + '" title="Đánh dấu đã ôn xong mục này">' +
          (isDone ? '✓ Đã đọc' : '○ Đánh dấu đã đọc') +
        '</button>' +
        // Prev & Next Buttons
        (adj.prev ?
          '<a href="#/books/' + b.id + '/' + adj.prev.id + '" class="secondary" id="btn-prev-item" data-book-id="' + b.id + '" data-open-item="' + adj.prev.id + '" style="text-decoration:none;display:inline-flex;align-items:center;padding:6px 12px;border-radius:8px" title="Phím tắt: [">← Mục trước</a>' :
          '<button class="secondary" id="btn-prev-item" disabled style="opacity:0.5;cursor:not-allowed">← Mục trước</button>'
        ) +
        (adj.next ?
          '<a href="#/books/' + b.id + '/' + adj.next.id + '" class="primary" id="btn-next-item" data-book-id="' + b.id + '" data-open-item="' + adj.next.id + '" style="text-decoration:none;display:inline-flex;align-items:center;padding:6px 12px;border-radius:8px" title="Phím tắt: ]">Mục tiếp theo →</a>' :
          '<button class="primary" id="btn-next-item" disabled style="opacity:0.5;cursor:not-allowed">Mục tiếp theo →</button>'
        ) +
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
        '<div style="font-weight:700;font-size:13.5px;display:flex;align-items:center;justify-content:space-between">' +
          '<span>' + b.icon + ' ' + (b.shortTitle || b.title) + '</span>' +
          '<small class="metadata">' + filteredToc.length + ' mục</small>' +
        '</div>' +
        '<input type="text" class="reader-toc-search" id="reader-toc-search-input" placeholder="Lọc nhanh mục lục..." value="' + esc(booksEngineState.tocSearchQuery) + '">' +
      '</div>' +
      '<div class="reader-toc-list" id="reader-toc-list-container">' +
        filteredToc.map(function (it) {
          if (!it.available) {
            return '<div class="reader-toc-link disabled">' +
              '<small class="metadata" style="color:#ef4444">' + it.code + ' (Chưa có)</small>' +
              '<span class="title">' + it.title + '</span>' +
            '</div>';
          }
          var isActive = it.id === item.id;
          var itemDone = isItemCompleted(it.id);

          return '<a href="#/books/' + b.id + '/' + it.id + '" class="reader-toc-link ' + (isActive ? 'active' : '') + '" data-book-id="' + b.id + '" data-open-item="' + it.id + '" style="text-decoration:none;display:block">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;width:100%">' +
              '<small class="code">' + (itemDone ? '✓ ' : '') + it.code + '</small>' +
              '<small class="page">p.' + it.pdfPage + '</small>' +
            '</div>' +
            '<span class="title">' + it.title + '</span>' +
          '</a>';
        }).join('') +
      '</div>' +
    '</aside>';

    // Right Companion Inspector Pane (Eliminates the empty desert on wide screens!)
    var companionPaneHtml = '<aside class="reader-companion-pane">' +
      // Card 1: Key Takeaway / Core Summary
      '<div class="reader-companion-card" style="border-left:4px solid var(--primary)">' +
        '<h4>💡 Bài học trọng tâm</h4>' +
        '<p>' + (item.summary || 'Nắm vững nguyên lý và phương pháp luận cốt lõi để áp dụng linh hoạt vào thực tế dự án.') + '</p>' +
      '</div>' +
      // Card 2: Book & Reference Info
      '<div class="reader-companion-card">' +
        '<h4>📚 Thông tin đối chiếu</h4>' +
        '<div style="font-size:12.5px;color:var(--muted);display:flex;flex-direction:column;gap:6px">' +
          '<div><b>Tác phẩm:</b> ' + (b.shortTitle || b.title) + '</div>' +
          '<div><b>Trang PDF:</b> p.' + item.pdfPage + ' (Trang in: ' + item.printPage + ')</div>' +
          (item.category ? '<div><b>Chủ đề:</b> ' + item.category + '</div>' : '') +
          '<div><b>Thời gian đọc:</b> ~' + readingTime + '</div>' +
        '</div>' +
        '<div style="margin-top:12px">' +
          '<a href="' + pdfFileUrl + '#page=' + item.pdfPage + '" target="_blank" rel="noopener noreferrer" class="secondary full" style="font-size:12px;padding:6px 10px;text-decoration:none;display:block;text-align:center;border-radius:6px">📄 Mở PDF trang ' + item.pdfPage + ' ↗</a>' +
        '</div>' +
      '</div>' +
      // Card 3: Completion Action & Quick Nav
      '<div class="reader-companion-card">' +
        '<h4>🎯 Trạng thái học tập</h4>' +
        '<p style="margin-bottom:10px">' +
          (isDone ? '✓ Bạn đã hoàn thành mục này. Đọc kỹ lại nếu cần củng cố kiến thức.' : 'Đọc xong hãy đánh dấu hoàn thành để ghi nhận vào tiến độ của bạn.') +
        '</p>' +
        '<button class="btn-mark-completed ' + (isDone ? 'is-completed' : '') + '" data-item-id="' + item.id + '" style="width:100%;justify-content:center">' +
          (isDone ? '✓ Đã hoàn thành' : '○ Đánh dấu hoàn thành') +
        '</button>' +
      '</div>' +
    '</aside>';

    // Center Reading Pane
    var readingPaneHtml = '<div class="reader-content-pane books-animate-fade">' +
      '<div class="reader-content-body">' +
        '<div class="reader-item-header">' +
          '<div style="display:flex;gap:10px;align-items:center;margin-bottom:8px;flex-wrap:wrap">' +
            '<span class="book-toc-code">' + item.code + '</span>' +
            (item.category ? '<span class="book-status-pill">' + item.category + '</span>' : '') +
            '<span class="metadata">📄 Trang PDF: <b>' + item.pdfPage + '</b> &nbsp;|&nbsp; 📖 Trang in: <b>' + item.printPage + '</b></span>' +
            '<span class="metadata" style="margin-left:auto">⏱️ ' + readingTime + '</span>' +
          '</div>' +
          '<h1 style="font-size:23px;line-height:1.4;margin:8px 0 12px">' + item.title + '</h1>' +
          '<div style="display:flex;gap:12px;margin-bottom:8px;flex-wrap:wrap;align-items:center">' +
            '<button class="secondary" data-set-reader-mode="pdf" style="font-size:12px;padding:5px 12px;border-radius:6px">📄 Chuyển sang xem trang PDF ' + item.pdfPage + '</button>' +
            '<a href="' + pdfFileUrl + '#page=' + item.pdfPage + '" target="_blank" rel="noopener noreferrer" class="subtle" style="font-size:12px;align-self:center">Mở file PDF gốc toàn màn hình ↗</a>' +
          '</div>' +
        '</div>' +

        (booksEngineState.readerMode === 'notes' ?
          '<article class="reader-article-body" data-font-size="' + (booksEngineState.fontSize || 'normal') + '">' +
            item.contentHtml +
          '</article>' :
          '<div class="reader-pdf-viewer-wrap">' +
            '<div style="padding:10px 14px;background:var(--surface-soft);border:1px solid var(--line);border-radius:10px;margin-bottom:12px;font-size:13px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">' +
              '<span>Đang hiển thị trang PDF <b>' + item.pdfPage + '</b> của tác phẩm <i>' + b.title + '</i></span>' +
              '<a href="' + pdfFileUrl + '#page=' + item.pdfPage + '" target="_blank" class="primary" style="font-size:12px;padding:5px 12px;text-decoration:none;border-radius:6px">Mở toàn màn hình tab mới ↗</a>' +
            '</div>' +
            '<iframe class="reader-pdf-iframe reader-pdf-frame" src="' + pdfFileUrl + '#page=' + item.pdfPage + '" style="width:100%;height:800px;border:1px solid var(--line);border-radius:12px;background:#fff" title="Trình đọc PDF ' + b.title + '"></iframe>' +
          '</div>'
        ) +

        '<div class="reader-bottom-nav">' +
          '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
            (adj.prev ?
              '<a href="#/books/' + b.id + '/' + adj.prev.id + '" class="secondary" id="btn-prev-item-bot" data-book-id="' + b.id + '" data-open-item="' + adj.prev.id + '" style="text-decoration:none;display:inline-flex;align-items:center;padding:7px 14px;border-radius:8px">← Mục trước (' + adj.prev.code + ')</a>' :
              '<button class="secondary" id="btn-prev-item-bot" disabled style="opacity:0.5;cursor:not-allowed">← Đầu sách</button>'
            ) +
            (adj.next ?
              '<a href="#/books/' + b.id + '/' + adj.next.id + '" class="primary" id="btn-next-item-bot" data-book-id="' + b.id + '" data-open-item="' + adj.next.id + '" style="text-decoration:none;display:inline-flex;align-items:center;padding:7px 14px;border-radius:8px">Mục tiếp theo (' + adj.next.code + ') →</a>' :
              '<button class="primary" id="btn-next-item-bot" disabled style="opacity:0.5;cursor:not-allowed">Hết sách →</button>'
            ) +
          '</div>' +
          '<span class="reader-keyboard-hint">Phím tắt: <kbd>[</kbd> Trước &nbsp;·&nbsp; <kbd>]</kbd> Sau &nbsp;·&nbsp; <kbd>M</kbd> PDF/Bản dịch &nbsp;·&nbsp; <kbd>F</kbd> Focus</span>' +
        '</div>' +
      '</div>' +
    '</div>';

    var backdropHtml = booksEngineState.isMobileTocOpen ? '<div class="reader-toc-backdrop" id="reader-toc-backdrop"></div>' : '';

    return '<div class="books-container">' +
      breadcrumbsHtml +
      progressBarHtml +
      topBarHtml +
      '<div class="book-reader-layout ' + (booksEngineState.isFocusMode ? 'focus-mode' : '') + '">' +
        tocRailHtml +
        readingPaneHtml +
        companionPaneHtml +
      '</div>' +
      backdropHtml +
    '</div>';
  }

  // Master booksPage function
  root.booksPage = function () {
    var outHtml = '';
    if (booksEngineState.view === 'reader') {
      outHtml = renderReader();
    } else if (booksEngineState.view === 'book-detail') {
      outHtml = renderBookDetail();
    } else {
      outHtml = renderOverview();
    }

    // Auto-scroll TOC rail in reader mode
    if (typeof document !== 'undefined' && booksEngineState.view === 'reader') {
      setTimeout(function () {
        var activeLink = document.querySelector('.reader-toc-link.active');
        if (activeLink) {
          activeLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }, 80);
    }

    return outHtml;
  };

  root.handleBooksHash = handleBooksHash;
  root.booksEngineState = booksEngineState;

  // Global Scroll Progress Tracker for Reader View
  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('scroll', function () {
      if (booksEngineState.view !== 'reader') return;
      var article = document.querySelector('.reader-article-body');
      var bar = document.getElementById('reader-global-progress');
      if (!article || !bar) return;
      var max = Math.max(1, article.offsetHeight - window.innerHeight + 200);
      var pct = Math.min(100, Math.max(0, Math.round(window.scrollY / max * 100)));
      bar.style.width = pct + '%';
    }, { passive: true });
  }

  // Keyboard Shortcuts for Reader View
  if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
    document.addEventListener('keydown', function (e) {
      if (booksEngineState.view !== 'reader') return;
      if (document.activeElement && ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      // '[' or Alt+Left for Prev Item
      if (e.key === '[' || (e.altKey && e.key === 'ArrowLeft')) {
        var prevBtn = document.getElementById('btn-prev-item');
        if (prevBtn && !prevBtn.hasAttribute('disabled')) {
          e.preventDefault();
          prevBtn.click();
        }
      }

      // ']' or Alt+Right for Next Item
      if (e.key === ']' || (e.altKey && e.key === 'ArrowRight')) {
        var nextBtn = document.getElementById('btn-next-item');
        if (nextBtn && !nextBtn.hasAttribute('disabled')) {
          e.preventDefault();
          nextBtn.click();
        }
      }

      // 'm' or 'M' for Mode Toggle (Notes <-> PDF)
      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        booksEngineState.readerMode = booksEngineState.readerMode === 'notes' ? 'pdf' : 'notes';
        if (typeof render === 'function') render();
      }

      // 'f' or 'F' for Focus / Zen Mode Toggle
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        booksEngineState.isFocusMode = !booksEngineState.isFocusMode;
        if (typeof render === 'function') render();
      }
    });
  }

  // Event Listeners Registration
  if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
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

      // Switch font size
      if (b.dataset.setFontSize) {
        e.preventDefault();
        booksEngineState.fontSize = b.dataset.setFontSize;
        if (typeof render === 'function') render();
        return;
      }

      // Toggle Focus / Zen Mode
      if (b.id === 'btn-toggle-focus') {
        e.preventDefault();
        booksEngineState.isFocusMode = !booksEngineState.isFocusMode;
        if (typeof render === 'function') render();
        return;
      }

      // Toggle Mark Completed
      if (b.classList.contains('btn-mark-completed') || b.id === 'btn-toggle-completed') {
        e.preventDefault();
        var itemId = b.dataset.itemId || booksEngineState.activeItemId;
        if (itemId) {
          var completed = toggleItemCompleted(itemId);
          if (typeof toast === 'function') {
            toast(completed ? '✓ Đã đánh dấu hoàn thành mục ôn này!' : 'Đã bỏ đánh dấu hoàn thành.');
          }
          if (typeof render === 'function') render();
        }
        return;
      }

      // Set Day Topic Filter pill in 100 Days BA
      if (b.dataset.setDayTopic) {
        e.preventDefault();
        booksEngineState.dayTopicFilter = b.dataset.setDayTopic;
        if (typeof render === 'function') render();
        return;
      }

      // Set Day Range Filter pill in 100 Days BA
      if (b.dataset.setDayRange) {
        e.preventDefault();
        booksEngineState.dayRangeFilter = b.dataset.setDayRange;
        if (typeof render === 'function') render();
        return;
      }

      // Clear Day Search button
      if (b.id === 'btn-clear-day-search') {
        e.preventDefault();
        booksEngineState.daySearchQuery = '';
        if (typeof render === 'function') render();
        var inp = document.getElementById('day-search-input');
        if (inp) inp.focus();
        return;
      }

      // Reset day filter
      if (b.id === 'btn-reset-day-filter') {
        e.preventDefault();
        booksEngineState.daySearchQuery = '';
        booksEngineState.dayTopicFilter = 'all';
        booksEngineState.dayRangeFilter = 'all';
        if (typeof render === 'function') render();
        return;
      }
    });

    // Realtime search inputs listener
    document.addEventListener('input', function (e) {
      if (e.target && e.target.id === 'day-search-input') {
        booksEngineState.daySearchQuery = e.target.value;
        var grid = document.querySelector('.book-toc-grid');
        var b = findBook(booksEngineState.activeBookId);
        if (grid && b) {
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
                '<span class="title">' + it.title + '</span>' +
              '</div>';
            }
            var isActive = it.id === booksEngineState.activeItemId;
            var itemDone = isItemCompleted(it.id);
            return '<a href="#/books/' + b.id + '/' + it.id + '" class="reader-toc-link ' + (isActive ? 'active' : '') + '" data-book-id="' + b.id + '" data-open-item="' + it.id + '" style="text-decoration:none;display:block">' +
              '<div style="display:flex;justify-content:space-between;align-items:center;width:100%">' +
                '<small class="code">' + (itemDone ? '✓ ' : '') + it.code + '</small>' +
                '<small class="page">p.' + it.pdfPage + '</small>' +
              '</div>' +
              '<span class="title">' + it.title + '</span>' +
            '</a>';
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
      renderReader: renderReader,
      isItemCompleted: isItemCompleted,
      toggleItemCompleted: toggleItemCompleted
    };
  }
})();
