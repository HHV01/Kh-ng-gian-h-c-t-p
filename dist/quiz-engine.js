// Quiz engine override — provides 10-topic overview, progressive levels (Foundation -> Application -> Advanced),
// option shuffling with index tracking, real-time explanation feedback, result breakdown, wrong question retry,
// and localStorage score backward compatibility.
(function () {
  'use strict';

  var root = (typeof window !== 'undefined') ? window : global;

  var quizEngineState = {
    viewMode: 'list',    // 'list' (10-topic grid) | 'quiz' (in quiz or result)
    track: 0,
    order: [],          // array of indices into track questions (qi in 0..19)
    correctPos: [],     // for each question in order, display index of correct answer
    shuffledOpts: [],   // for each question in order, array of original opt indices
    userAns: [],        // chosen display index (-1 if unanswered)
    mode: 'full',       // 'full' | 'retry'
    wrongIndices: [],   // array of qi (original question indices) that were wrong
    built: false
  };

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function trackQuestions(track) {
    if (typeof quizBank === 'undefined') return [];
    return quizBank.filter(function (x) { return x.track === track; });
  }

  function levelLabel(lvl) {
    return lvl === 0 ? 'Nền tảng' : lvl === 1 ? 'Vận dụng' : 'Nâng cao';
  }

  function levelPill(lvl) {
    var cls = lvl === 0 ? 'tier-0' : lvl === 1 ? 'tier-1' : 'tier-2';
    return '<span class="tier-pill ' + cls + '">' + levelLabel(lvl) + '</span>';
  }

  function buildOrder(track, mode, retryQIndices) {
    var qs = trackQuestions(track);
    var order;

    if (mode === 'retry' && retryQIndices && retryQIndices.length) {
      // Order wrong questions preserving level progression: Foundation -> Application -> Advanced
      var byLevel = { 0: [], 1: [], 2: [] };
      retryQIndices.forEach(function (qi) {
        var lvl = qs[qi].level == null ? 0 : qs[qi].level;
        byLevel[lvl].push(qi);
      });
      order = shuffle(byLevel[0]).concat(shuffle(byLevel[1])).concat(shuffle(byLevel[2]));
    } else {
      // Full 20-question mode: 5 Foundation -> 8 Application -> 7 Advanced
      var byLevelFull = { 0: [], 1: [], 2: [] };
      qs.forEach(function (q, i) {
        var lvl = q.level == null ? 0 : q.level;
        byLevelFull[lvl].push(i);
      });
      order = shuffle(byLevelFull[0]).concat(shuffle(byLevelFull[1])).concat(shuffle(byLevelFull[2]));
    }

    var correctPos = [];
    var shuffledOpts = [];
    order.forEach(function (qi) {
      var q = qs[qi];
      var idxs = [0, 1, 2, 3];
      var sh = shuffle(idxs);
      shuffledOpts.push(sh);
      correctPos.push(sh.indexOf(q.ans));
    });

    quizEngineState.track = track;
    quizEngineState.order = order;
    quizEngineState.correctPos = correctPos;
    quizEngineState.shuffledOpts = shuffledOpts;
    quizEngineState.userAns = order.map(function () { return -1; });
    quizEngineState.mode = mode;
    quizEngineState.wrongIndices = [];
    quizEngineState.built = true;

    // keep legacy globals in sync
    try { quizTrack = track; } catch (_) {}
    try { quizIndex = 0; } catch (_) {}
    try { answers = quizEngineState.userAns; } catch (_) {}
    root.quizTrack = track;
    root.quizIndex = 0;
    root.answers = quizEngineState.userAns;
  }

  // 1. Topic List Overview Page
  function renderTopicList() {
    var scoreValues = Object.values(state.scores || {});
    var avgScore = scoreValues.length ? Math.round(scoreValues.reduce(function(a, b){ return a + b; }, 0) / scoreValues.length) : null;
    var passedCount = scoreValues.filter(function(s){ return s >= 70; }).length;

    var html = heading('Ngân hàng Quiz BA', '200 câu hỏi trắc nghiệm chuẩn hóa qua 10 chủ đề nghiệp vụ — 5 Nền tảng · 8 Vận dụng · 7 Nâng cao.') +
      '<section class="panel" style="padding:22px;margin-bottom:24px">' +
        '<div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between">' +
          '<div>' +
            '<h2 style="font-size:20px;margin-bottom:6px">Luyện tập & Đánh giá năng lực BA</h2>' +
            '<p class="metadata">Tiến độ độ khó tăng dần: Nền tảng (Hiểu khái niệm) ➔ Vận dụng (Tình huống thực tế) ➔ Nâng cao (Xung đột & Đánh đổi). Đạt từ 70% (14/20 câu) để mở khóa bài học nâng cao.</p>' +
          '</div>' +
          '<div style="display:flex;gap:16px;text-align:center">' +
            '<div style="padding:10px 16px;background:var(--tint);border-radius:12px">' +
              '<strong style="font-size:22px;color:var(--primary);display:block">' + passedCount + '/10</strong>' +
              '<small class="metadata">Chủ đề đã đạt</small>' +
            '</div>' +
            '<div style="padding:10px 16px;background:var(--tint);border-radius:12px">' +
              '<strong style="font-size:22px;color:var(--primary);display:block">' + (avgScore !== null ? avgScore + '%' : '--') + '</strong>' +
              '<small class="metadata">Điểm trung bình</small>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<div class="quiz-grid">';

    tracks.forEach(function (tr, i) {
      var title = tr[0];
      var desc = tr[1];
      var color = tr[4] || 'var(--primary)';
      var icon = tr[5] || '☑';
      var savedScore = state.scores ? state.scores[i] : undefined;

      var badgeHtml = '';
      if (savedScore !== undefined) {
        if (savedScore >= 70) {
          badgeHtml = '<span class="quiz-badge pass">✓ Đạt: ' + savedScore + '%</span>';
        } else {
          badgeHtml = '<span class="quiz-badge fail">Chưa đạt: ' + savedScore + '%</span>';
        }
      } else {
        badgeHtml = '<span class="quiz-badge none">Chưa làm</span>';
      }

      html += '<div class="quiz-card">' +
        '<div>' +
          '<div class="quiz-card-head">' +
            '<div class="quiz-card-icon" style="background:' + color + '18;color:' + color + '">' + icon + '</div>' +
            badgeHtml +
          '</div>' +
          '<h3 style="font-size:17px;font-weight:700;margin:10px 0 6px">' + title + '</h3>' +
          '<p class="metadata" style="min-height:38px;line-height:1.5">' + desc + '</p>' +
          '<div style="margin:14px 0 18px;display:flex;flex-wrap:wrap;gap:6px">' +
            '<span class="metadata" style="background:var(--surface-soft);padding:3px 8px;border-radius:6px;font-size:11px;font-weight:600">20 câu hỏi</span>' +
            '<span class="metadata" style="background:var(--surface-soft);padding:3px 8px;border-radius:6px;font-size:11px">5 Nền tảng · 8 Vận dụng · 7 Nâng cao</span>' +
          '</div>' +
        '</div>' +
        '<button class="primary full" data-quiz-track="' + i + '">' + (savedScore !== undefined ? 'Luyện tập lại' : 'Bắt đầu làm bài') + '</button>' +
      '</div>';
    });

    html += '</div>';
    return html;
  }

  // 2. Main quizPage implementation
  root.quizPage = function () {
    if (quizEngineState.viewMode === 'list') {
      return renderTopicList();
    }

    var currentTrack = (typeof quizTrack !== 'undefined') ? quizTrack : (root.quizTrack || 0);
    var currentIndex = (typeof quizIndex !== 'undefined') ? quizIndex : (root.quizIndex || 0);

    var qs = trackQuestions(currentTrack);
    if (!quizEngineState.built || quizEngineState.track !== currentTrack) {
      buildOrder(currentTrack, 'full', []);
    }
    try { answers = quizEngineState.userAns; } catch (_) {}
    root.answers = quizEngineState.userAns;

    var order = quizEngineState.order;
    var total = order.length;
    if (total === 0) {
      return heading('Kiểm tra kiến thức', tracks[currentTrack][0]) +
        '<section class="panel"><p>Chưa có câu hỏi cho chủ đề này.</p>' +
        '<button class="secondary" id="quiz-back-list">← Danh sách chủ đề Quiz</button></section>';
    }

    // 3. Result Screen
    if (currentIndex >= total) {
      var correct = 0;
      var perLevel = { 0: { c: 0, t: 0 }, 1: { c: 0, t: 0 }, 2: { c: 0, t: 0 } };
      var wrongQIndices = [];

      order.forEach(function (qi, idx) {
        var q = qs[qi];
        var lvl = q.level == null ? 0 : q.level;
        perLevel[lvl].t++;
        if (quizEngineState.userAns[idx] === quizEngineState.correctPos[idx]) {
          correct++;
          perLevel[lvl].c++;
        } else {
          wrongQIndices.push(qi);
        }
      });
      quizEngineState.wrongIndices = wrongQIndices;

      var score = Math.round((correct / total) * 100);
      var isFull = (quizEngineState.mode === 'full' && total === 20);
      if (isFull) {
        var existing = (state.scores && state.scores[currentTrack] != null) ? state.scores[currentTrack] : 0;
        if (!state.scores) state.scores = {};
        state.scores[currentTrack] = Math.max(existing, score);
        save();
      }

      var passed = score >= 70;

      var wrongHtml = '';
      if (wrongQIndices.length > 0) {
        wrongHtml = '<section class="panel" style="margin-top:24px;text-align:left">' +
          '<div class="section-head" style="margin-bottom:16px">' +
            '<h3>Danh sách câu cần ôn tập (' + wrongQIndices.length + ')</h3>' +
            '<span class="metadata">Xem lại đáp án đúng và phân tích lý do</span>' +
          '</div>' +
          wrongQIndices.map(function (qi) {
            var q = qs[qi];
            var orderPos = order.indexOf(qi);
            var sel = orderPos !== -1 ? quizEngineState.userAns[orderPos] : -1;
            var selText = (sel >= 0 && orderPos !== -1 && sel < quizEngineState.shuffledOpts[orderPos].length)
              ? q.opts[quizEngineState.shuffledOpts[orderPos][sel]]
              : '(Chưa chọn)';
            var corText = q.opts[q.ans];
            var lvl = q.level == null ? 0 : q.level;

            return '<div class="quiz-wrong-card">' +
              '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">' +
                '<strong>' + q.id + ' · ' + levelLabel(lvl) + '</strong>' +
                levelPill(lvl) +
              '</div>' +
              '<p style="font-weight:600;margin-bottom:12px;font-size:15px;line-height:1.6">' + q.q + '</p>' +
              '<div style="margin-bottom:8px;font-size:14px"><span style="color:#dc2626;font-weight:600">✕ Bạn chọn:</span> ' + selText + '</div>' +
              '<div style="margin-bottom:12px;font-size:14px"><span style="color:#059669;font-weight:600">✓ Đáp án đúng:</span> ' + corText + '</div>' +
              '<div class="metadata" style="background:var(--surface-soft);padding:12px 14px;border-radius:8px;line-height:1.7;border:1px solid var(--line)">' +
                '<b>Phân tích & Giải thích:</b> ' + (q.exp || '') +
              '</div>' +
            '</div>';
          }).join('') +
          '<div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:20px">' +
            '<button class="primary" id="retry-wrong">Làm lại riêng ' + wrongQIndices.length + ' câu sai</button>' +
            '<button class="secondary" id="retry-all">Làm lại toàn bộ 20 câu</button>' +
            '<button class="secondary" id="quiz-back-list">← Danh sách chủ đề Quiz</button>' +
          '</div>' +
        '</section>';
      } else {
        wrongHtml = '<section class="panel" style="margin-top:24px;text-align:center;padding:24px">' +
          '<p style="color:#059669;font-weight:600;font-size:16px">Xuất sắc! Bạn đã trả lời chính xác tất cả các câu hỏi.</p>' +
          '<div style="display:flex;justify-content:center;gap:12px;margin-top:16px">' +
            '<button class="primary" id="retry-all">Làm lại toàn bộ 20 câu</button>' +
            '<button class="secondary" id="quiz-back-list">← Danh sách chủ đề Quiz</button>' +
          '</div>' +
        '</section>';
      }

      var levelBreakdownHtml = '<div class="quiz-breakdown-grid">' +
        [0, 1, 2].map(function (lvl) {
          var c = perLevel[lvl].c;
          var t = perLevel[lvl].t;
          var pct = t > 0 ? Math.round((c / t) * 100) : 0;
          return '<div style="background:var(--surface-soft);border:1px solid var(--line);border-radius:12px;padding:16px;text-align:center">' +
            '<div style="margin-bottom:6px">' + levelPill(lvl) + '</div>' +
            '<strong style="font-size:22px;display:block;margin:6px 0">' + c + '/' + t + '</strong>' +
            '<small class="metadata">' + pct + '% chính xác</small>' +
          '</div>';
        }).join('') +
      '</div>';

      return heading('Kết quả đánh giá Quiz', tracks[currentTrack][0]) +
        '<div style="margin-bottom:16px"><button class="secondary" id="quiz-back-list">← Danh sách chủ đề Quiz</button></div>' +
        '<section class="panel" style="text-align:center;padding:36px 24px">' +
          '<div style="font-size:64px;font-weight:800;color:var(--primary);line-height:1">' + score + '%</div>' +
          '<h2 style="font-size:24px;margin:16px 0 8px">' + (passed ? '🎉 Chúc mừng! Bạn đã đạt yêu cầu' : '⚡ Cần cố gắng thêm một chút!') + '</h2>' +
          '<p class="metadata" style="font-size:15px">' +
            (passed ? 'Bạn đã trả lời đúng ' + correct + '/' + total + ' câu. Nội dung bài học nâng cao đã được mở khóa.' : 'Bạn trả lời đúng ' + correct + '/' + total + ' câu. Ngưỡng mở khóa yêu cầu tối thiểu 70% (14/20 câu).') +
          '</p>' +
          '<div style="max-width:600px;margin:24px auto 0">' + levelBreakdownHtml + '</div>' +
        '</section>' + wrongHtml;
    }

    // 4. In-quiz Question Card
    var qi = order[currentIndex];
    var q = qs[qi];
    var shOpts = quizEngineState.shuffledOpts[currentIndex];
    var correctPos = quizEngineState.correctPos[currentIndex];
    var lvl = q.level == null ? 0 : q.level;
    var answered = quizEngineState.userAns[currentIndex] !== -1;
    var userChoice = quizEngineState.userAns[currentIndex];
    var isUserCorrect = userChoice === correctPos;

    return heading('Kiểm tra kiến thức', tracks[currentTrack][0]) +
      '<div style="margin-bottom:16px"><button class="secondary" id="quiz-back-list">← Danh sách chủ đề Quiz</button></div>' +
      '<section class="panel" style="max-width:860px;margin:auto;padding:32px">' +
        '<div class="progress-label" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">' +
          '<span><strong>Câu ' + (currentIndex + 1) + ' / ' + total + '</strong> · ' + q.id + '</span>' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            levelPill(lvl) +
            '<span class="metadata" style="font-size:12px">Đạt ≥ 70% để mở khóa</span>' +
          '</div>' +
        '</div>' +
        bar(((currentIndex + (answered ? 1 : 0)) / total) * 100) +
        '<h2 style="font-size:20px;line-height:1.6;margin:28px 0 24px">' + q.q + '</h2>' +
        shOpts.map(function (oi, i) {
          var cls = '';
          if (answered) {
            if (i === correctPos) cls = 'correct';
            else if (i === userChoice) cls = 'wrong';
          }
          return '<button class="quiz-answer ' + cls + '" data-answer="' + i + '" ' + (answered ? 'disabled' : '') + '>' +
            '<b>' + String.fromCharCode(65 + i) + '.</b> ' + q.opts[oi] +
          '</button>';
        }).join('') +
        (answered ?
          '<div class="quiz-feedback-box ' + (isUserCorrect ? 'correct' : 'wrong') + '">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">' +
              '<strong style="font-size:16px">' + (isUserCorrect ? '✓ Hoàn toàn chính xác!' : '✕ Chưa chính xác') + '</strong>' +
              '<span>' + (!isUserCorrect ? 'Đáp án đúng: <b>' + String.fromCharCode(65 + correctPos) + '</b>' : '') + '</span>' +
            '</div>' +
            '<div style="font-size:14px;line-height:1.7;margin-bottom:16px">' + (q.exp || '') + '</div>' +
            '<button class="primary" id="quiz-next">' + (currentIndex === total - 1 ? 'Xem kết quả tổng kết ➔' : 'Câu tiếp theo ➔') + '</button>' +
          '</div>' : '') +
      '</section>';
  };

  // Event listeners for Quiz interaction
  if (typeof document !== 'undefined') {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('button, a');
      if (!b) return;
      var curTrack = (typeof quizTrack !== 'undefined') ? quizTrack : (root.quizTrack || 0);

      // Click on Topic card in overview
      if (b.dataset.quizTrack !== undefined) {
        e.preventDefault();
        var t = +b.dataset.quizTrack;
        try { quizTrack = t; } catch (_) {}
        root.quizTrack = t;
        quizEngineState.viewMode = 'quiz';
        buildOrder(t, 'full', []);
        if (typeof render === 'function') render();
        return;
      }

      // Back to topic overview
      if (b.id === 'quiz-back-list') {
        e.preventDefault();
        quizEngineState.viewMode = 'list';
        if (typeof render === 'function') render();
        return;
      }

      // Click Quiz in nav: show topic overview list
      if (b.dataset.nav === 'Quiz') {
        quizEngineState.viewMode = 'list';
        return;
      }

      // Click "Làm quiz" on a Track page
      if (b.id === 'track-quiz') {
        quizEngineState.viewMode = 'quiz';
        buildOrder(curTrack, 'full', []);
        return;
      }

      // Retry wrong questions
      if (b.id === 'retry-wrong') {
        e.preventDefault();
        if (quizEngineState.wrongIndices && quizEngineState.wrongIndices.length) {
          buildOrder(curTrack, 'retry', quizEngineState.wrongIndices);
          if (typeof render === 'function') render();
        }
        return;
      }

      // Retry all 20 questions
      if (b.id === 'retry-all') {
        e.preventDefault();
        buildOrder(curTrack, 'full', []);
        if (typeof render === 'function') render();
        return;
      }
    });
  }

  // Export state for automated testing if in test runner
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      quizEngineState: quizEngineState,
      buildOrder: buildOrder,
      shuffle: shuffle,
      trackQuestions: trackQuestions
    };
  }
})();
