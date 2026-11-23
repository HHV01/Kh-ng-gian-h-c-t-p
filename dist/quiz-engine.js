// Quiz engine override — enhances quizPage with levels, shuffling, retry-wrong, per-level stats.
(function () {
  'use strict';

  var quizEngineState = {
    track: -1,
    order: [],          // shuffled question indices into the track's quizBank list
    correctPos: [],     // for each ordered q, the shuffled position of the correct option
    shuffledOpts: [],    // for each ordered q, array of original option indices in display order
    userAns: [],        // selected display-index per question, -1 if unanswered
    mode: 'full',       // 'full' | 'retry'
    wrongIndices: [],   // positions (into order) that were wrong, for retry
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

  function buildOrder(track, mode, retryPositions) {
    var qs = trackQuestions(track);
    var byLevel = { 0: [], 1: [], 2: [] };
    qs.forEach(function (q, i) { byLevel[q.level == null ? 0 : q.level].push(i); });

    var order;
    if (mode === 'retry' && retryPositions && retryPositions.length) {
      order = retryPositions.slice();
    } else {
      order = shuffle(byLevel[0]).concat(shuffle(byLevel[1])).concat(shuffle(byLevel[2]));
    }

    var correctPos = [];
    var shuffledOpts = [];
    order.forEach(function (qi) {
      var q = qs[qi];
      var idxs = q.opts.map(function (_, i) { return i; });
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
    quizEngineState.retryPositions = retryPositions || [];
    quizEngineState.wrongIndices = [];
    quizEngineState.built = true;

    // keep legacy global in sync
    answers = quizEngineState.userAns;
    quizIndex = 0;
  }

  function levelLabel(lvl) {
    return lvl === 0 ? 'Nền tảng' : lvl === 1 ? 'Vận dụng' : 'Nâng cao';
  }

  function levelRange(pos, total) {
    // positions are grouped: foundation first, then application, then advanced
    // determine by question's level
    return '';
  }

  window.quizPage = function () {
    var qs = trackQuestions(quizTrack);
    if (!quizEngineState.built || quizEngineState.track !== quizTrack) {
      buildOrder(quizTrack, 'full', []);
    }
    // sync answers reference
    answers = quizEngineState.userAns;

    var order = quizEngineState.order;
    var total = order.length;
    if (total === 0) {
      return heading('Kiểm tra kiến thức', tracks[quizTrack][0]) + '<section class="panel"><p>Chưa có câu hỏi cho chủ đề này.</p></section>';
    }

    if (quizIndex >= total) {
      // result page
      var correct = 0;
      var perLevel = { 0: [0, 0], 1: [0, 0], 2: [0, 0] };
      var wrong = [];
      order.forEach(function (qi, idx) {
        var q = qs[qi];
        var lvl = (q.level == null ? 0 : q.level);
        perLevel[lvl][1]++;
        if (quizEngineState.userAns[idx] === quizEngineState.correctPos[idx]) {
          correct++;
          perLevel[lvl][0]++;
        } else {
          wrong.push(idx);
        }
      });
      quizEngineState.wrongIndices = wrong;

      var score = Math.round(correct / total * 100);
      var isFull = (quizEngineState.mode === 'full' && total === 20);
      if (isFull) {
        var existing = (state.scores[quizTrack] || 0);
        state.scores[quizTrack] = Math.max(existing, score);
        save();
      }

      var wrongHtml = '';
      if (wrong.length) {
        wrongHtml = '<section class="panel" style="margin-top:20px;text-align:left"><h3>Câu trả lời sai (' + wrong.length + ')</h3>' +
          wrong.map(function (idx) {
            var qi = order[idx];
            var q = qs[qi];
            var sel = quizEngineState.userAns[idx];
            var selText = (sel >= 0 && sel < quizEngineState.shuffledOpts[idx].length) ? q.opts[quizEngineState.shuffledOpts[idx][sel]] : '(chưa chọn)';
            var corText = q.opts[q.ans];
            return '<div class="panel" style="margin:10px 0;padding:12px"><b>Câu ' + (idx + 1) + ':</b> ' + q.q +
              '<br><span style="color:#991B1B">Bạn chọn: ' + selText + '</span>' +
              '<br><span style="color:#065F46">Đáp án đúng: ' + corText + '</span>' +
              '<br><p class="metadata">' + (q.exp || '') + '</p></div>';
          }).join('') +
          '<button class="primary" id="retry-wrong">Làm lại ' + wrong.length + ' câu sai</button> ';
      }
      wrongHtml += '<button class="primary" id="retry-all">Làm lại toàn bộ</button>';

      var levelRows = [0, 1, 2].map(function (lvl) {
        var lbl = levelLabel(lvl);
        var c = perLevel[lvl][0], t = perLevel[lvl][1];
        return '<div class="bar-row"><span>' + lbl + '</span><b>' + c + '/' + t + '</b></div>';
      }).join('');

      return heading('Kết quả ôn tập', tracks[quizTrack][0]) +
        '<section class="panel" style="text-align:center;padding:40px">' +
        '<div style="font-size:60px;color:var(--primary)">' + score + '%</div>' +
        '<h2>' + (score >= 70 ? 'Tuyệt vời! Bạn đã mở khóa bài nâng cao.' : 'Hãy ôn lại và thử thêm lần nữa.') + '</h2>' +
        '<p class="metadata">' + correct + '/' + total + ' câu đúng · Điểm mở khóa: 70%</p>' +
        '<div style="margin:20px 0">' + levelRows + '</div>' +
        '</section>' + wrongHtml;
    }

    var qi = order[quizIndex];
    var q = qs[qi];
    var shOpts = quizEngineState.shuffledOpts[quizIndex];
    var correctPos = quizEngineState.correctPos[quizIndex];
    var lvl = (q.level == null ? 0 : q.level);
    var lvlLbl = levelLabel(lvl);
    var answered = quizEngineState.userAns[quizIndex] !== -1;

    return heading('Kiểm tra kiến thức', tracks[quizTrack][0]) +
      '<section class="panel" style="max-width:800px;margin:auto;padding:32px">' +
      '<div class="progress-label"><span>Câu ' + (quizIndex + 1) + '/' + total + '</span><b>' + lvlLbl + ' · Đạt 70% để mở khóa</b></div>' +
      bar(quizIndex / total * 100) +
      '<h2 style="font-size:22px;margin-top:30px">' + q.q + '</h2>' +
      shOpts.map(function (oi, i) {
        var cls = '';
        if (answered) {
          if (i === correctPos) cls = 'correct';
          else if (i === quizEngineState.userAns[quizIndex]) cls = 'wrong';
        }
        return '<button class="quiz-answer ' + cls + '" data-answer="' + i + '" ' + (answered ? 'disabled' : '') + '>' + String.fromCharCode(65 + i) + '. ' + q.opts[oi] + '</button>';
      }).join('') +
      (answered ? '<p class="metadata">' + (quizEngineState.userAns[quizIndex] === correctPos ? '✓ Chính xác!' : 'Đáp án đúng: ' + q.opts[q.ans]) + '</p>' +
        '<p class="metadata" style="margin-top:8px">' + (q.exp || '') + '</p>' +
        '<button class="primary" id="quiz-next">' + (quizIndex === total - 1 ? 'Xem kết quả' : 'Câu tiếp theo') + '</button>' : '') +
      '</section>';
  };

  // click handler for new buttons
  document.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    if (b.id === 'retry-wrong') {
      e.preventDefault();
      if (quizEngineState.wrongIndices.length) {
        buildOrder(quizTrack, 'retry', quizEngineState.wrongIndices);
        render();
      }
    } else if (b.id === 'retry-all') {
      e.preventDefault();
      buildOrder(quizTrack, 'full', []);
      render();
    }
  });

  // sync answers reference when quiz starts
  var origGo = window.go;
  // hook track-quiz and nav Quiz handled by app.js; ensure order built on first quizPage call (done above)
})();
