/**
 * Builder script for 200 high-quality BA multiple-choice questions
 * Loads tracks 0 through 9 from scripts/quiz-builder/
 * Validates all constraints and writes to dist/quiz-data.js
 */

const fs = require('node:fs');
const path = require('node:path');

const builderDir = path.join(__dirname, 'quiz-builder');
const outputPath = path.join(__dirname, '../dist/quiz-data.js');

let allQuestions = [];
const seenIds = new Set();
const levelCounts = { 0: 0, 1: 0, 2: 0 };
const trackCounts = {};

for (let t = 0; t < 10; t++) {
  const trackFile = path.join(builderDir, `track${t}.cjs`);
  if (!fs.existsSync(trackFile)) {
    throw new Error(`Missing track file: ${trackFile}`);
  }
  const trackQuestions = require(trackFile);
  if (!Array.isArray(trackQuestions) || trackQuestions.length !== 20) {
    throw new Error(`Track ${t} must contain exactly 20 questions, got ${trackQuestions.length}`);
  }

  const trackLevelCounts = { 0: 0, 1: 0, 2: 0 };

  trackQuestions.forEach((q, idx) => {
    // Basic fields
    if (q.track !== t) throw new Error(`Track mismatch at item ${idx} in track ${t}: got ${q.track}`);
    if (typeof q.id !== 'string' || !q.id.trim()) throw new Error(`Invalid ID in track ${t} index ${idx}`);
    if (seenIds.has(q.id)) throw new Error(`Duplicate question ID: ${q.id}`);
    seenIds.add(q.id);

    // Levels: 0, 1, 2
    if (![0, 1, 2].includes(q.level)) throw new Error(`Invalid level in question ${q.id}: ${q.level}`);
    trackLevelCounts[q.level]++;
    levelCounts[q.level]++;

    // Question content
    if (typeof q.q !== 'string' || q.q.trim().length < 15) {
      throw new Error(`Question ${q.id} text is too short or invalid`);
    }

    // Options: exactly 4 distinct strings
    if (!Array.isArray(q.opts) || q.opts.length !== 4) {
      throw new Error(`Question ${q.id} must have exactly 4 options!`);
    }
    const uniqueOpts = new Set(q.opts);
    if (uniqueOpts.size !== 4) {
      throw new Error(`Question ${q.id} has duplicate options: ${JSON.stringify(q.opts)}`);
    }
    for (const opt of q.opts) {
      if (typeof opt !== 'string' || opt.trim().length < 3) {
        throw new Error(`Question ${q.id} has empty or trivial option: "${opt}"`);
      }
    }

    // Answer: 0..3
    if (![0, 1, 2, 3].includes(q.ans)) {
      throw new Error(`Question ${q.id} has invalid ans: ${q.ans}`);
    }

    // Explanation
    if (typeof q.exp !== 'string' || q.exp.trim().length < 30) {
      throw new Error(`Question ${q.id} has insufficient explanation (<30 chars)`);
    }

    allQuestions.push(q);
  });

  // Verify distribution per track: 5 Foundation (0), 8 Application (1), 7 Advanced (2)
  if (trackLevelCounts[0] !== 5 || trackLevelCounts[1] !== 8 || trackLevelCounts[2] !== 7) {
    throw new Error(`Track ${t} level distribution invalid: got L0=${trackLevelCounts[0]}, L1=${trackLevelCounts[1]}, L2=${trackLevelCounts[2]} (expected 5, 8, 7)`);
  }

  trackCounts[t] = trackQuestions.length;
}

if (allQuestions.length !== 200) {
  throw new Error(`Total questions count must be exactly 200, got ${allQuestions.length}`);
}

console.log('✅ Validation successful:');
console.log(`- Total questions: ${allQuestions.length}`);
console.log(`- Foundation (Level 0): ${levelCounts[0]} (expected 50)`);
console.log(`- Application (Level 1): ${levelCounts[1]} (expected 80)`);
console.log(`- Advanced (Level 2): ${levelCounts[2]} (expected 70)`);
console.log('- 10 tracks, each with exactly 20 questions (5 L0 / 8 L1 / 7 L2).');

// Write out to dist/quiz-data.js
const header = `// Ngân hàng 200 câu hỏi trắc nghiệm Business Analysis (BA) chuẩn mực
// 10 chủ đề x 20 câu hỏi (5 Nền tảng · 8 Vận dụng · 7 Nâng cao)
// Tự động sinh bởi build-quiz.cjs

const quizBank = ${JSON.stringify(allQuestions, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = quizBank;
}
if (typeof window !== 'undefined') {
  window.quizBank = quizBank;
}
`;

fs.writeFileSync(outputPath, header, 'utf8');
console.log(`💾 Successfully generated ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);
