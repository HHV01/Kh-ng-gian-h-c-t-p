/**
 * profile-manager.js
 * Multi-Profile Local Storage Management for Vy Workspace
 * 
 * Features:
 * - Isolated learning progress per profile (completed lessons, quiz progress & best scores,
 *   interview drafts & completed sessions, books completed, last activity, and appearance).
 * - Default profile ("Vy") with safe one-time import of legacy data.
 * - Add, rename, switch, and delete profiles.
 * - Interactive profile switcher in top header with "Lưu trên thiết bị này" badge.
 * - Reactive listeners to re-render pages seamlessly upon profile switch.
 */

(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.VyProfileManager = api;
  }
})(typeof self !== 'undefined' ? self : (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this)), function () {
  'use strict';

  var META_KEY = 'vy-profiles-meta';
  var DATA_PREFIX = 'vy-profile-data-';
  var LEGACY_APP_KEY = 'vy-workspace-state';
  var LEGACY_APP_KEY_ALT = 'ba-academy-state';
  var LEGACY_INTERVIEW_KEY = 'vy-interview-sessions';
  var LEGACY_BOOKS_KEY = 'ba-books-completed';

  var DEFAULT_PROFILES = [
    {
      id: 'profile-vy',
      name: 'Vy',
      avatar: '👩‍💻',
      role: 'Học viên · BA Elite',
      createdAt: 1700000000000
    }
  ];

  function createEmptyProfileData() {
    return {
      done: [],
      scores: {},
      quizInProgress: null,
      interviewDrafts: {},
      interviewSessions: {},
      interviewActive: null,
      booksCompleted: [],
      lastActivity: null,
      dark: false
    };
  }

  function getStorage() {
    try {
      if (typeof localStorage !== 'undefined') return localStorage;
    } catch (_) {}
    return {
      _data: {},
      getItem: function (k) { return this._data[k] || null; },
      setItem: function (k, v) { this._data[k] = String(v); },
      removeItem: function (k) { delete this._data[k]; }
    };
  }

  var storage = {
    getItem: function (k) { return getStorage().getItem(k); },
    setItem: function (k, v) { return getStorage().setItem(k, v); },
    removeItem: function (k) { return getStorage().removeItem(k); }
  };

  function getMeta() {
    try {
      var raw = storage.getItem(META_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.profiles) && parsed.profiles.length > 0) {
          return parsed;
        }
      }
    } catch (_) {}

    var initialMeta = {
      activeProfileId: DEFAULT_PROFILES[0].id,
      profiles: DEFAULT_PROFILES.slice(),
      legacyImported: false
    };
    saveMeta(initialMeta);
    return initialMeta;
  }

  function saveMeta(meta) {
    try {
      storage.setItem(META_KEY, JSON.stringify(meta));
    } catch (_) {}
  }

  function getActiveProfile() {
    var meta = getMeta();
    var p = null;
    for (var i = 0; i < meta.profiles.length; i++) {
      if (meta.profiles[i].id === meta.activeProfileId) {
        p = meta.profiles[i];
        break;
      }
    }
    return p || meta.profiles[0] || DEFAULT_PROFILES[0];
  }

  function importLegacyData() {
    var empty = createEmptyProfileData();
    try {
      var legacyAppRaw = storage.getItem(LEGACY_APP_KEY) || storage.getItem(LEGACY_APP_KEY_ALT);
      if (legacyAppRaw) {
        var legacyApp = JSON.parse(legacyAppRaw);
        if (legacyApp && Array.isArray(legacyApp.done)) {
          empty.done = legacyApp.done.slice();
        }
        if (legacyApp && legacyApp.scores && typeof legacyApp.scores === 'object') {
          empty.scores = Object.assign({}, legacyApp.scores);
        }
        if (legacyApp && typeof legacyApp.dark === 'boolean') {
          empty.dark = legacyApp.dark;
        }
      }

      var legacyIntRaw = storage.getItem(LEGACY_INTERVIEW_KEY);
      if (legacyIntRaw) {
        var legacyInt = JSON.parse(legacyIntRaw);
        if (legacyInt && typeof legacyInt === 'object') {
          empty.interviewSessions = Object.assign({}, legacyInt);
        }
      }

      var legacyBooksRaw = storage.getItem(LEGACY_BOOKS_KEY);
      if (legacyBooksRaw) {
        var legacyBooks = JSON.parse(legacyBooksRaw);
        if (Array.isArray(legacyBooks)) {
          empty.booksCompleted = legacyBooks.slice();
        }
      }
    } catch (_) {}
    return empty;
  }

  function getProfileData(profileId) {
    if (!profileId) {
      profileId = getActiveProfile().id;
    }
    try {
      var raw = storage.getItem(DATA_PREFIX + profileId);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (_) {}

    var meta = getMeta();
    // If it's the primary default profile and hasn't imported legacy data yet, import it once
    if (profileId === DEFAULT_PROFILES[0].id && !meta.legacyImported) {
      var imported = importLegacyData();
      saveProfileData(profileId, imported);
      meta.legacyImported = true;
      saveMeta(meta);
      return imported;
    }

    var fresh = createEmptyProfileData();
    saveProfileData(profileId, fresh);
    return fresh;
  }

  function saveProfileData(profileId, data) {
    if (!profileId) {
      profileId = getActiveProfile().id;
    }
    try {
      storage.setItem(DATA_PREFIX + profileId, JSON.stringify(data));
    } catch (_) {}
  }

  function listProfiles() {
    return getMeta().profiles;
  }

  var listeners = [];

  function onProfileChange(fn) {
    if (typeof fn === 'function') {
      listeners.push(fn);
    }
  }

  function notifyChange() {
    var p = getActiveProfile();
    var d = getProfileData(p.id);
    for (var i = 0; i < listeners.length; i++) {
      try {
        listeners[i](p, d);
      } catch (err) {
        console.warn('Profile listener error:', err);
      }
    }
  }

  function switchProfile(profileId) {
    var meta = getMeta();
    var found = false;
    for (var i = 0; i < meta.profiles.length; i++) {
      if (meta.profiles[i].id === profileId) {
        found = true;
        break;
      }
    }
    if (!found) return false;
    meta.activeProfileId = profileId;
    saveMeta(meta);
    notifyChange();
    return true;
  }

  function addProfile(name, avatar, role) {
    var meta = getMeta();
    var cleanName = (name && name.trim()) ? name.trim() : ('Học viên ' + (meta.profiles.length + 1));
    var cleanAvatar = avatar || '🧑‍🎓';
    var cleanRole = role || 'Học viên BA';
    var newId = 'profile-' + Date.now().toString(36) + '-' + Math.floor(Math.random() * 1000).toString(36);

    var newProfile = {
      id: newId,
      name: cleanName,
      avatar: cleanAvatar,
      role: cleanRole,
      createdAt: Date.now()
    };

    meta.profiles.push(newProfile);
    meta.activeProfileId = newId;
    saveMeta(meta);

    // Initialize completely empty fresh data (0% progress)
    saveProfileData(newId, createEmptyProfileData());
    notifyChange();
    return newProfile;
  }

  function renameProfile(profileId, newName) {
    if (!newName || !newName.trim()) return false;
    var meta = getMeta();
    for (var i = 0; i < meta.profiles.length; i++) {
      if (meta.profiles[i].id === profileId) {
        meta.profiles[i].name = newName.trim();
        saveMeta(meta);
        notifyChange();
        return true;
      }
    }
    return false;
  }

  function deleteProfile(profileId) {
    var meta = getMeta();
    if (meta.profiles.length <= 1) return false; // Prevent deleting the sole profile

    meta.profiles = meta.profiles.filter(function (p) { return p.id !== profileId; });
    if (meta.activeProfileId === profileId) {
      meta.activeProfileId = meta.profiles[0].id;
    }
    saveMeta(meta);
    try {
      storage.removeItem(DATA_PREFIX + profileId);
    } catch (_) {}

    notifyChange();
    return true;
  }

  function importLegacyIntoCurrentProfile() {
    var current = getActiveProfile();
    var legacy = importLegacyData();
    var existing = getProfileData(current.id);

    // Merge completed lessons
    if (Array.isArray(legacy.done)) {
      legacy.done.forEach(function (k) {
        if (existing.done.indexOf(k) === -1) existing.done.push(k);
      });
    }
    // Merge scores
    if (legacy.scores) {
      Object.keys(legacy.scores).forEach(function (t) {
        existing.scores[t] = Math.max(existing.scores[t] || 0, legacy.scores[t]);
      });
    }
    // Merge interview sessions
    if (legacy.interviewSessions) {
      Object.keys(legacy.interviewSessions).forEach(function (sid) {
        if (!existing.interviewSessions[sid]) {
          existing.interviewSessions[sid] = legacy.interviewSessions[sid];
        }
      });
    }
    // Merge books
    if (Array.isArray(legacy.booksCompleted)) {
      legacy.booksCompleted.forEach(function (b) {
        if (existing.booksCompleted.indexOf(b) === -1) existing.booksCompleted.push(b);
      });
    }

    saveProfileData(current.id, existing);
    notifyChange();
    return true;
  }

  // --- Profile UI Header Widget Renderer ---
  function renderProfileWidget(containerEl) {
    if (!containerEl) return;
    var current = getActiveProfile();
    var profiles = listProfiles();

    var html = '' +
      '<div class="header-profile-wrap" id="header-profile-wrap">' +
        '<button class="header-profile-btn" id="btn-profile-trigger" aria-haspopup="true" aria-expanded="false" title="Nhấn để chuyển hoặc quản lý hồ sơ học tập">' +
          '<span class="avatar header-avatar">' + current.avatar + '</span>' +
          '<div class="profile-text-meta">' +
            '<b class="profile-current-name">' + current.name + '</b>' +
            '<small class="profile-current-role">' + current.role + '</small>' +
          '</div>' +
          '<span class="profile-caret-arrow">▾</span>' +
        '</button>' +
        '<div class="profile-popover-dropdown" id="profile-popover-dropdown" hidden>' +
          '<div class="profile-popover-header">' +
            '<div>' +
              '<h4>Hồ sơ học tập</h4>' +
              '<div class="profile-storage-badge" title="Tiến độ và dữ liệu học tập được lưu cục bộ trên trình duyệt thiết bị này">' +
                '<span class="storage-indicator-dot"></span> Lưu trên thiết bị này' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="profile-items-list">' +
            profiles.map(function (p) {
              var isActive = p.id === current.id;
              return '' +
                '<div class="profile-item-row ' + (isActive ? 'active' : '') + '" data-profile-id="' + p.id + '">' +
                  '<span class="profile-item-avatar">' + p.avatar + '</span>' +
                  '<div class="profile-item-info">' +
                    '<strong>' + p.name + '</strong>' +
                    '<small>' + p.role + '</small>' +
                  '</div>' +
                  (isActive ? '<span class="profile-active-check">✓ Đang dùng</span>' : '<button class="btn-profile-select" data-profile-action="switch" data-profile-id="' + p.id + '">Chọn</button>') +
                '</div>';
            }).join('') +
          '</div>' +
          '<div class="profile-popover-footer">' +
            '<button class="btn-add-new-profile" data-profile-action="add">' +
              '<span>+</span> Thêm hồ sơ mới' +
            '</button>' +
            '<button class="btn-import-legacy-profile" data-profile-action="import-legacy" title="Nhập lại dữ liệu cũ từ trình duyệt vào hồ sơ hiện tại">' +
              '<span>📥</span> Nhập dữ liệu cũ' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    containerEl.innerHTML = html;
  }

  function setupProfileEvents() {
    if (typeof document === 'undefined') return;

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('#btn-profile-trigger');
      var popover = document.getElementById('profile-popover-dropdown');

      if (trigger) {
        e.preventDefault();
        if (popover) {
          var isHidden = popover.hidden;
          popover.hidden = !isHidden;
          trigger.setAttribute('aria-expanded', String(!isHidden));
        }
        return;
      }

      // Action inside popover
      var actionBtn = e.target.closest('[data-profile-action]');
      if (actionBtn) {
        e.preventDefault();
        var action = actionBtn.dataset.profileAction;

        if (action === 'switch') {
          var targetId = actionBtn.dataset.profileId;
          if (targetId) {
            switchProfile(targetId);
            if (popover) popover.hidden = true;
            if (typeof root.toast === 'function') {
              root.toast('Đã chuyển sang hồ sơ: ' + getActiveProfile().name);
            }
          }
          return;
        }

        if (action === 'add') {
          var pName = (typeof window !== 'undefined' && window.prompt)
            ? window.prompt('Nhập tên hồ sơ học tập mới:', 'Học viên ' + (listProfiles().length + 1))
            : null;
          if (pName && pName.trim()) {
            var avatars = ['👩‍💻', '👨‍💻', '🧑‍🎓', '🚀', '💡', '🌟', '🎯'];
            var chosenAvatar = avatars[Math.floor(Math.random() * avatars.length)];
            var newP = addProfile(pName.trim(), chosenAvatar, 'Học viên BA');
            if (popover) popover.hidden = true;
            if (typeof root.toast === 'function') {
              root.toast('Đã tạo và kích hoạt hồ sơ: ' + newP.name);
            }
          }
          return;
        }

        if (action === 'import-legacy') {
          var confirmImport = (typeof window !== 'undefined' && window.confirm)
            ? window.confirm('Bạn có muốn nhập dữ liệu cũ (tiến độ bài học, điểm quiz, phỏng vấn) trên thiết bị này vào hồ sơ hiện tại?')
            : true;
          if (confirmImport) {
            importLegacyIntoCurrentProfile();
            if (popover) popover.hidden = true;
            if (typeof root.toast === 'function') {
              root.toast('Đã nhập thành công dữ liệu cũ vào hồ sơ ' + getActiveProfile().name);
            }
          }
          return;
        }
      }

      // Click outside closes popover
      if (popover && !popover.hidden && !e.target.closest('#header-profile-wrap')) {
        popover.hidden = true;
        var btn = document.getElementById('btn-profile-trigger');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Auto setup events in browser
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupProfileEvents);
    } else {
      setupProfileEvents();
    }
  }

  return {
    init: function () { return getActiveProfile(); },
    getActiveProfileId: function () { return getActiveProfile().id; },
    getMeta: getMeta,
    getActiveProfile: getActiveProfile,
    getProfileData: getProfileData,
    saveProfileData: saveProfileData,
    updateProfileData: function (fn, profileId) {
      var pId = profileId || getActiveProfile().id;
      var data = getProfileData(pId);
      if (typeof fn === 'function') {
        fn(data);
        saveProfileData(pId, data);
      }
      return data;
    },
    listProfiles: listProfiles,
    switchProfile: switchProfile,
    addProfile: addProfile,
    createProfile: addProfile,
    renameProfile: renameProfile,
    deleteProfile: deleteProfile,
    importLegacyIntoCurrentProfile: importLegacyIntoCurrentProfile,
    onProfileChange: onProfileChange,
    renderProfileWidget: renderProfileWidget,
    createEmptyProfileData: createEmptyProfileData
  };
});
