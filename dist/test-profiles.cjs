/**
 * Automated Test Suite for Multi-Profile Management, Data Isolation & Route Redirections
 * Verifies:
 * 1. Multi-profile creation, switching, and local storage isolation.
 * 2. Progress isolation: Profile A actions do not leak to Profile B.
 * 3. Legacy data migration into primary profile without leaking to newly created profiles.
 * 4. Route redirection: legacy #/flashcards -> #/quiz, #/scale -> #/books.
 * 5. Menu verification: Flashcard and Scale/Technical removed, "Sách BA" present in navs.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Multi-Profile & Route Redirection Verification Suite...\n');

// Mock localStorage for Node environment
const mockStorage = {};
global.localStorage = {
  getItem: (key) => mockStorage[key] || null,
  setItem: (key, val) => { mockStorage[key] = String(val); },
  removeItem: (key) => { delete mockStorage[key]; },
  clear: () => {
    Object.keys(mockStorage).forEach(k => delete mockStorage[k]);
  }
};

global.window = global;
global.document = {
  addEventListener: () => {},
  querySelector: () => null,
  querySelectorAll: () => []
};

// ============================================================
// TEST 1: LOAD PROFILE MANAGER & INITIALIZE DEFAULT PROFILE
// ============================================================
console.log('--- Test 1: Profile Manager Initialization & Default Profile ---');

// Load profile manager
const pm = require('./profile-manager.js');
assert(pm, 'VyProfileManager must be exported');

pm.init();
const currentProfile = pm.getActiveProfile();
assert(currentProfile, 'Default profile must exist');
assert.strictEqual(currentProfile.id, 'profile-vy', 'Initial profile should be profile-vy');
assert(currentProfile.name, 'Default profile should have a display name');
console.log(`✓ Default profile initialized: "${currentProfile.name}" (${currentProfile.id})`);

// ============================================================
// TEST 2: DATA ISOLATION BETWEEN PROFILES (A vs B)
// ============================================================
console.log('\n--- Test 2: Data Isolation Between Profile A and Profile B ---');

// Save progress in Profile A (Default profile)
pm.updateProfileData((data) => {
  data.done.push('1-1');
  data.done.push('1-2');
  data.scores['track-1'] = 95;
  data.quizInProgress = { trackId: 'track-1', index: 8 };
  data.interviewDrafts['stakeholder-matrix'] = 'Bản nháp phỏng vấn của Profile A';
  data.booksCompleted.push('babok_v3:task_3_1');
  data.lastActivity = {
    type: 'book',
    title: 'BABOK Task 3.1',
    url: '#/books/babok_v3/task_3_1'
  };
});

const profileAData = pm.getProfileData();
assert(profileAData.done.includes('1-1'), 'Profile A must have lesson 1-1 done');
assert.strictEqual(profileAData.scores['track-1'], 95, 'Profile A score must be 95');
assert.strictEqual(profileAData.quizInProgress.index, 8, 'Profile A quiz in progress index must be 8');
assert.strictEqual(profileAData.interviewDrafts['stakeholder-matrix'], 'Bản nháp phỏng vấn của Profile A');
assert(profileAData.booksCompleted.includes('babok_v3:task_3_1'));

// Create Profile B
const profileB = pm.createProfile('Học viên B');
assert(profileB, 'Profile B must be created');
pm.switchProfile(profileB.id);

assert.strictEqual(pm.getActiveProfileId(), profileB.id, 'Active profile must be Profile B');

// Verify Profile B has clean, isolated state
const profileBData = pm.getProfileData();
assert.deepStrictEqual(profileBData.done, [], 'Profile B must have empty done lessons array');
assert.deepStrictEqual(profileBData.scores, {}, 'Profile B must have empty scores');
assert.strictEqual(profileBData.quizInProgress, null, 'Profile B must have no quiz in progress');
assert.deepStrictEqual(profileBData.interviewDrafts, {}, 'Profile B must have empty interview drafts');
assert.deepStrictEqual(profileBData.booksCompleted, [], 'Profile B must have empty books completed');
assert.strictEqual(profileBData.lastActivity, null, 'Profile B must have no last activity initially');
console.log('✓ Profile B starts completely clean and isolated from Profile A');

// Switch back to Profile A and verify data is fully intact
pm.switchProfile('profile-vy');
const restoredAData = pm.getProfileData();
assert(restoredAData.done.includes('1-1'), 'Profile A restored lesson 1-1');
assert.strictEqual(restoredAData.scores['track-1'], 95, 'Profile A restored track-1 score');
assert.strictEqual(restoredAData.quizInProgress.index, 8, 'Profile A restored quiz in progress');
assert.strictEqual(restoredAData.interviewDrafts['stakeholder-matrix'], 'Bản nháp phỏng vấn của Profile A');
assert(restoredAData.booksCompleted.includes('babok_v3:task_3_1'));
assert.strictEqual(restoredAData.lastActivity.type, 'book');
console.log('✓ Profile A data completely preserved when switching back');

// ============================================================
// TEST 3: LEGACY DATA MIGRATION
// ============================================================
console.log('\n--- Test 3: Legacy Shared Data Migration into Primary Profile ---');

// Setup fresh mock storage with legacy keys
global.localStorage.clear();
mockStorage['vy-workspace-state'] = JSON.stringify({
  done: ['2-1', '2-2'],
  scores: { 'track-2': 88 },
  dark: true
});
mockStorage['vy-interview-sessions'] = JSON.stringify({
  'session-1': { id: 'session-1', scenarioId: 'case-1', score: 85 }
});
mockStorage['ba-books-completed'] = JSON.stringify(['bcs_3rd:ch_1']);

// Re-init profile manager to trigger migration
pm.init();
const migratedData = pm.getProfileData('profile-vy');
assert(migratedData.done.includes('2-1'), 'Legacy done lessons migrated to default profile');
assert.strictEqual(migratedData.scores['track-2'], 88, 'Legacy scores migrated to default profile');
assert(migratedData.interviewSessions['session-1'], 'Legacy interview sessions migrated');
assert(migratedData.booksCompleted.includes('bcs_3rd:ch_1'), 'Legacy books completed migrated');
console.log('✓ Legacy storage safely migrated into default profile without data loss');

// Verify new profile created after migration still starts fresh
const profileC = pm.createProfile('Học viên C');
const profileCData = pm.getProfileData(profileC.id);
assert.deepStrictEqual(profileCData.done, [], 'New profile after migration does not inherit legacy data');
console.log('✓ New profiles do not inherit legacy data from default profile');

// ============================================================
// TEST 4: MENU NAVIGATION & REMOVAL OF FLASHCARD / TECHNICAL
// ============================================================
console.log('\n--- Test 4: Menu Navigation Verification ---');

const appJsCode = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
const refineJsCode = fs.readFileSync(path.join(__dirname, 'refine.js'), 'utf8');

// Check app.js navs array
const navsMatch = appJsCode.match(/const navs = \[([\s\S]*?)\];/);
assert(navsMatch, 'navs must be defined in app.js');
const navsContent = navsMatch[1];
assert(!navsContent.includes('Flashcard'), 'Flashcard must not be in navs array');
assert(!navsContent.includes('Kỹ thuật'), 'Kỹ thuật must not be in navs array');
assert(!navsContent.includes('Scale'), 'Scale must not be in navs array');
assert(navsContent.includes('Sách BA'), 'Sách BA must be in navs array');

// Check refine.js navIcons (should have 9 icons for 9 items: grid, route, book, check, chat, case, spark, glossary, news)
assert(refineJsCode.includes("const navIcons=['grid','route','book','check','chat','case','spark','glossary','news']") ||
       refineJsCode.includes("const navIcons = ['grid', 'route', 'book', 'check', 'chat', 'case', 'spark', 'glossary', 'news']"),
  'refine.js navIcons must match 9 active menu modules without flashcard/scale');
console.log('✓ Main menu navigation properly updated: Flashcards & Scale removed; Sách BA present');

// ============================================================
// TEST 5: ROUTE REDIRECTION LOGIC
// ============================================================
console.log('\n--- Test 5: Route Redirections for Legacy Bookmarks ---');

assert(appJsCode.includes("h === 'flashcards' || h === 'flashcard' || p[0] === 'flashcard' || p[0] === 'flashcards'"), 'Redirect check for flashcards present');
assert(appJsCode.includes("location.hash = '#/quiz'"), 'Redirect flashcards to #/quiz');
assert(appJsCode.includes("h === 'scale' || p[0] === 'scale' || h === 'ba-tech' || h === 'system-scale'"), 'Redirect check for scale present');
assert(appJsCode.includes("location.hash = '#/books'"), 'Redirect scale/tech to #/books');
console.log('✓ Legacy bookmarks cleanly redirect: #/flashcard* -> #/quiz, #/scale* -> #/books');

// ============================================================
// TEST 6: PROFILE MANAGER HTML WIDGET RENDERING
// ============================================================
console.log('\n--- Test 6: Profile Widget Rendering ---');

const mockContainer = {
  innerHTML: '',
  querySelectorAll: () => [],
  addEventListener: () => {}
};

pm.renderProfileWidget(mockContainer);
assert(mockContainer.innerHTML.includes('header-profile-btn'), 'Widget must render profile button');
assert(mockContainer.innerHTML.includes('Lưu trên thiết bị này'), 'Widget must show device storage badge');
assert(mockContainer.innerHTML.includes('profile-popover-dropdown'), 'Widget must render dropdown popover');
assert(mockContainer.innerHTML.includes('Thêm hồ sơ mới'), 'Widget must include Add Profile option');
console.log('✓ Header Profile Switcher widget renders cleanly with local storage badge');

console.log('\n======================================================');
console.log('🎉 ALL MULTI-PROFILE & REDIRECTION TESTS PASSED! 100% COMPLIANT!');
console.log('======================================================\n');
