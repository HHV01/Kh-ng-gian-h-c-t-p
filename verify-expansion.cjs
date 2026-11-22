/**
 * Kiểm tra manifest mở rộng và dữ liệu mở rộng (nếu đã có).
 *
 * Cách dùng:
 *   node verify-expansion.cjs
 *   npm run check:content
 *
 * Khi chưa có file dữ liệu mở rộng, script chỉ kiểm tra định mức trong manifest.
 * Khi đã có dist/exp-data-<section>.js, script kiểm tra thêm:
 *   - đủ số lượng mới
 *   - ID/slug duy nhất
 *   - situationKey, objectiveKey, tiêu đề chuẩn hóa duy nhất
 *   - trường bắt buộc theo schema
 *   - độ giống tiêu đề/định nghĩa/dữ kiện không vượt ngưỡng
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs', 'expansion-manifest.json'), 'utf8'));

const errors = [];
const warnings = [];
const results = [];

const DATA_FILES = {
  interview: 'exp-data-interview.js',
  case: 'exp-data-cases.js',
  glossary: 'exp-data-glossary.js',
  tech: 'exp-data-tech.js'
};

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function tokens(value) {
  return new Set(normalize(value).split(/[^a-z0-9]+/).filter(Boolean));
}

function jaccard(a, b) {
  const A = tokens(a);
  const B = tokens(b);
  if (!A.size && !B.size) return 0;
  let shared = 0;
  for (const token of A) if (B.has(token)) shared += 1;
  return shared / (A.size + B.size - shared);
}

function checkManifest() {
  let total = 0;
  for (const section of manifest.sections) {
    const sum = section.submodules.reduce((n, s) => n + s.count, 0);
    const expected = section.target;
    total += expected;

    if (sum !== expected) {
      errors.push(`[manifest] ${section.id}: tổng module con = ${sum}, cần ${expected}`);
    }
    if (section.baseline + section.add !== expected) {
      errors.push(`[manifest] ${section.id}: baseline ${section.baseline} + add ${section.add} != target ${expected}`);
    }
    if (section.levels) {
      const levelSum = Object.values(section.levels).reduce((a, b) => a + b, 0);
      if (levelSum !== expected) {
        errors.push(`[manifest] ${section.id}: tổng level = ${levelSum}, cần ${expected}`);
      }
    }
    if (section.submodules.some(s => !s.id || !s.name || !Number.isInteger(s.count) || s.count <= 0)) {
      errors.push(`[manifest] ${section.id}: có module con thiếu id/name/count hợp lệ`);
    }
    results.push({ section: section.id, target: expected, modules: section.submodules.length });
  }

  if (total !== manifest.totalTarget) {
    errors.push(`[manifest] tổng 4 mục = ${total}, cần ${manifest.totalTarget}`);
  }
}

function makeContext() {
  const storage = {
    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }
  };
  const ctx = {
    console,
    localStorage: storage,
    document: {
      body: { classList: { contains: () => false, toggle: () => {} } },
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: () => {}
    },
    window: { scrollTo: () => {}, addEventListener: () => {}, confirm: () => true },
    location: { hash: '' },
    setInterval: () => 0,
    clearInterval: () => {},
    setTimeout: () => 0,
    clearTimeout: () => {},
    uiIcon: () => '',
    escScale: value => String(value),
    escInterview: value => String(value),
    toast: () => {}
  };
  return vm.createContext(ctx);
}

function loadScripts(ctx, files) {
  for (const file of files) {
    const full = path.join(DIST, file);
    if (!fs.existsSync(full)) {
      throw new Error(`Không tìm thấy ${file}`);
    }
    vm.runInContext(fs.readFileSync(full, 'utf8'), ctx, { filename: file });
  }
}

function loadSection(section) {
  const extraFile = DATA_FILES[section.id];
  const extraPath = path.join(DIST, extraFile);
  if (!fs.existsSync(extraPath)) {
    warnings.push(`[${section.id}] chưa có dist/${extraFile} — bỏ qua kiểm tra dữ liệu`);
    return null;
  }

  const ctx = makeContext();
  if (section.id === 'interview') {
    loadScripts(ctx, ['interview.js', extraFile]);
    return vm.runInContext('interviewScenariosData', ctx);
  }
  if (section.id === 'case') {
    loadScripts(ctx, ['cases.js', 'cases-extra.js', extraFile]);
    return vm.runInContext('caseStudies', ctx);
  }
  if (section.id === 'glossary') {
    loadScripts(ctx, ['glossary.js', extraFile]);
    return vm.runInContext('glossaryData', ctx);
  }
  if (section.id === 'tech') {
    loadScripts(ctx, ['scale-data.js', extraFile]);
    return vm.runInContext('techPractices', ctx);
  }
  return null;
}

function newItemsOf(section, items) {
  if (!Array.isArray(items)) return [];
  if (section.id === 'interview') {
    return items.filter(item => /^iv-\d{3}$/.test(item.id || ''));
  }
  if (section.id === 'case') {
    return items.filter(item => /^case-\d{3}$/.test(item.id || ''));
  }
  if (section.id === 'tech') {
    return items.filter(item => /^tech-\d{3}$/.test(item.id || ''));
  }
  // Glossary: 12 slug gốc hiện có trong dist/glossary.js.
  const baselineIds = new Set([
    'acceptance-criteria', 'backlog', 'bpmn', 'brd', 'elicitation', 'moscow',
    'scope-creep', 'srs', 'stakeholder', 'traceability-matrix', 'uat', 'user-story'
  ]);
  return items.filter(item => !baselineIds.has(item.id));
}

function required(item, fields, label) {
  for (const field of fields) {
    const value = item[field];
    if (value === undefined || value === null || (typeof value === 'string' && !value.trim())) {
      errors.push(`${label}: thiếu trường "${field}"`);
    }
  }
}

function checkInterview(item, label) {
  required(item, [
    'id', 'title', 'level', 'category', 'submodule', 'family', 'domain',
    'skill', 'learningObjective', 'situationKey', 'objectiveKey',
    'brief', 'context', 'candidateRole', 'interviewerRole',
    'initialQuestion', 'modelAnswer', 'rubricCriteria', 'strengths', 'weaknesses', 'pitfalls'
  ], label);
  if (!['Junior', 'Middle', 'Senior'].includes(item.level)) errors.push(`${label}: level không hợp lệ`);
  if (!Array.isArray(item.turns) || item.turns.length < 2) errors.push(`${label}: cần tối thiểu 2 turn`);
  for (const [index, turn] of (item.turns || []).entries()) {
    if (!turn.question) errors.push(`${label}: turn ${index + 1} thiếu question`);
    if (!Array.isArray(turn.options) || turn.options.length !== 4) {
      errors.push(`${label}: turn ${index + 1} cần đúng 4 options`);
      continue;
    }
    const best = turn.options.filter(option => option.isBest);
    if (best.length !== 1) errors.push(`${label}: turn ${index + 1} cần đúng 1 đáp án tốt nhất`);
  }
  const star = item.modelAnswer || {};
  for (const key of ['situation', 'task', 'action', 'result']) {
    if (!star[key]) errors.push(`${label}: modelAnswer thiếu "${key}"`);
  }
  if (!Array.isArray(item.rubricCriteria) || item.rubricCriteria.length !== 6) {
    errors.push(`${label}: cần đúng 6 tiêu chí rubric`);
  }
  if (!Array.isArray(item.sourceRefs) || item.sourceRefs.length === 0) {
    errors.push(`${label}: thiếu sourceRefs (link Nguồn tham khảo)`);
  } else if (item.sourceRefs.some(ref => typeof ref !== 'string' || !ref.trim())) {
    errors.push(`${label}: sourceRefs phải là chuỗi không rỗng`);
  }
}

function checkCase(item, label) {
  required(item, [
    'id', 'title', 'level', 'domain', 'submodule', 'problemFamily', 'variant',
    'skill', 'summary', 'context', 'twist', 'hint', 'learningObjective',
    'situationKey', 'objectiveKey'
  ], label);
  if (!['Junior', 'Mid', 'Senior'].includes(item.level)) errors.push(`${label}: level không hợp lệ`);
  if (!Array.isArray(item.facts) || item.facts.length < 4) errors.push(`${label}: cần tối thiểu 4 dữ kiện`);
  if (!Array.isArray(item.models) || item.models.length !== 7) errors.push(`${label}: cần đúng 7 bước hướng giải`);
  if (!Array.isArray(item.exercise) || item.exercise.length === 0) errors.push(`${label}: thiếu bài tập`);
  if (!item.rubric || !Array.isArray(item.rubric.criteria) || item.rubric.criteria.length === 0) {
    errors.push(`${label}: thiếu rubric tự chấm`);
  }
  if (!Array.isArray(item.sourceRefs) || item.sourceRefs.length === 0) {
    errors.push(`${label}: thiếu sourceRefs (link Nguồn tham khảo)`);
  } else if (item.sourceRefs.some(ref => typeof ref !== 'string' || !ref.trim())) {
    errors.push(`${label}: sourceRefs phải là chuỗi không rỗng`);
  }
}

function checkGlossary(item, label) {
  required(item, [
    'id', 'abbr', 'name', 'letter', 'category', 'categoryName',
    'definition', 'fullDefinition', 'practical', 'proTip'
  ], label);
  if (!Array.isArray(item.related) || item.related.length === 0) errors.push(`${label}: thiếu related`);
  if (!item.comparison || !item.comparison.term1 || !item.comparison.term2) {
    errors.push(`${label}: thiếu comparison`);
  }
  if (!Array.isArray(item.sourceRefs) || item.sourceRefs.length === 0) {
    errors.push(`${label}: thiếu sourceRefs (link Nguồn tham khảo)`);
  } else if (item.sourceRefs.some(ref => typeof ref !== 'string' || !ref.trim())) {
    errors.push(`${label}: sourceRefs phải là chuỗi không rỗng`);
  }
}

function checkTech(item, label) {
  required(item, [
    'id', 'slug', 'title', 'baDomain', 'baDomainName', 'technicalFocus', 'industry',
    'level', 'exerciseFamily', 'variant',
    'learningObjective', 'situationKey', 'objectiveKey', 'context',
    'dataSample', 'solutionSteps', 'acceptanceCriteria', 'rubric'
  ], label);
  const techSection = manifest.sections.find(section => section.id === 'tech');
  if (techSection) {
    if (!techSection.submodules.some(submodule => submodule.id === item.baDomain)) {
      errors.push(`${label}: baDomain "${item.baDomain}" không có trong manifest`);
    }
    if (Array.isArray(techSection.industryContexts) && !techSection.industryContexts.includes(item.industry)) {
      errors.push(`${label}: industry "${item.industry}" không có trong manifest`);
    }
  }
  if (!Array.isArray(item.technicalFocus) || item.technicalFocus.length === 0) {
    errors.push(`${label}: technicalFocus phải có ít nhất 1 tag`);
  } else if (item.technicalFocus.length > 3) {
    errors.push(`${label}: technicalFocus tối đa 3 tag`);
  }
  if (!['Junior', 'Middle', 'Senior'].includes(item.level)) errors.push(`${label}: level không hợp lệ`);
  if (!Array.isArray(item.facts) || item.facts.length === 0) errors.push(`${label}: thiếu dữ kiện`);
  if (!Array.isArray(item.questions) || item.questions.length < 3) errors.push(`${label}: cần tối thiểu 3 câu hỏi`);
  if (!Array.isArray(item.solutionSteps) || item.solutionSteps.length < 3) errors.push(`${label}: cần tối thiểu 3 bước giải`);
  if (!Array.isArray(item.rubric) || item.rubric.length === 0) errors.push(`${label}: thiếu rubric`);
  if (!Array.isArray(item.sourceRefs) || item.sourceRefs.length === 0) errors.push(`${label}: thiếu sourceRefs (link Nguồn tham khảo)`);
  else if (item.sourceRefs.some(ref => typeof ref !== 'string' || !ref.trim())) errors.push(`${label}: sourceRefs phải là chuỗi không rỗng`);
}

function checkUniqueness(section, items) {
  const seenIds = new Map();
  const seenSituation = new Map();
  const seenObjective = new Map();
  const seenTitle = new Map();
  const seenDefinition = new Map();
  const seenAbbr = new Map();
  let nearDuplicateTitles = 0;

  const titleList = [];
  const definitionList = [];
  const factsList = [];
  const questionsList = [];

  for (const [index, item] of items.entries()) {
    const label = `[${section.id}] ${item.id || item.slug || `#${index + 1}`}`;
    const id = item.id || item.slug;

    if (!id) {
      errors.push(`${label}: thiếu id/slug`);
      continue;
    }
    if (seenIds.has(id)) errors.push(`${label}: trùng id/slug với ${seenIds.get(id)}`);
    seenIds.set(id, label);

    if (section.id === 'glossary') {
      const key = normalize(item.name || item.abbr);
      const abbrKey = normalize(item.abbr);
      if (seenDefinition.has(key)) errors.push(`${label}: trùng tên/thuật ngữ với ${seenDefinition.get(key)}`);
      if (seenAbbr.has(abbrKey)) errors.push(`${label}: trùng abbr với ${seenAbbr.get(abbrKey)}`);
      seenDefinition.set(key, label);
      seenAbbr.set(abbrKey, label);
      checkGlossary(item, label);

      for (const previous of definitionList) {
        if (jaccard(previous.text, item.definition) >= manifest.dedupe.definitionSimilarityThreshold) {
          warnings.push(`${label}: định nghĩa gần trùng với ${previous.label} (Jaccard ≥ ${manifest.dedupe.definitionSimilarityThreshold})`);
          break;
        }
      }
      definitionList.push({ text: item.definition, label });
    } else {
      if (!item.situationKey) errors.push(`${label}: thiếu situationKey`);
      if (!item.objectiveKey) errors.push(`${label}: thiếu objectiveKey`);

      const situation = normalize(item.situationKey);
      const objective = normalize(item.objectiveKey);
      const title = normalize(item.title);
      const prefix = section.id === 'interview' ? 'iv|' : section.id === 'case' ? 'cs|' : 'tb|';
      if (situation && !situation.startsWith(prefix)) {
        errors.push(`${label}: situationKey phải bắt đầu bằng "${prefix}"`);
      }

      if (seenSituation.has(situation)) errors.push(`${label}: trùng situationKey với ${seenSituation.get(situation)}`);
      seenSituation.set(situation, label);
      if (seenObjective.has(objective)) errors.push(`${label}: trùng objectiveKey với ${seenObjective.get(objective)}`);
      seenObjective.set(objective, label);
      if (seenTitle.has(title)) errors.push(`${label}: trùng tiêu đề với ${seenTitle.get(title)}`);
      seenTitle.set(title, label);

      for (const previous of titleList) {
        if (jaccard(previous.title, item.title) >= manifest.dedupe.titleSimilarityThreshold) {
          errors.push(`${label}: tiêu đề gần trùng với ${previous.label} (Jaccard ≥ ${manifest.dedupe.titleSimilarityThreshold})`);
          nearDuplicateTitles += 1;
          break;
        }
      }
      titleList.push({ title: item.title, label });

      if (section.id === 'case' && Array.isArray(item.facts)) {
        const factsText = item.facts.join(' ');
        for (const previous of factsList) {
          if (jaccard(previous.text, factsText) >= manifest.dedupe.factsSimilarityThreshold) {
            warnings.push(`${label}: bộ dữ kiện gần trùng với ${previous.label} (Jaccard ≥ ${manifest.dedupe.factsSimilarityThreshold})`);
            break;
          }
        }
        factsList.push({ text: factsText, label });
      }
      if (section.id === 'tech' && Array.isArray(item.questions)) {
        const questionsText = item.questions.join(' ');
        for (const previous of questionsList) {
          if (jaccard(previous.text, questionsText) >= (manifest.dedupe.questionsSimilarityThreshold || 0.95)) {
            warnings.push(`${label}: bộ câu hỏi gần trùng với ${previous.label} (Jaccard ≥ ${manifest.dedupe.questionsSimilarityThreshold || 0.95})`);
            break;
          }
        }
        questionsList.push({ text: questionsText, label });
      }

      if (section.id === 'interview') checkInterview(item, label);
      if (section.id === 'case') checkCase(item, label);
      if (section.id === 'tech') checkTech(item, label);
    }
  }

  return { nearDuplicateTitles };
}

function checkData(section, allItems) {
  const items = newItemsOf(section, allItems);
  const isPartial = items.length < section.add;
  if (items.length > section.add) {
    errors.push(`[${section.id}] có ${items.length} nội dung mới, vượt quá ${section.add}`);
    return;
  }
  if (isPartial) {
    warnings.push(`[${section.id}] đang ở ${items.length}/${section.add} nội dung mới — chưa hoàn tất`);
  }

  const ids = items.map(item => item.id || item.slug).sort();
  if (new Set(ids).size !== ids.length) errors.push(`[${section.id}] ID mới không duy nhất`);

  const stats = checkUniqueness(section, items);

  if (section.id === 'tech' && !isPartial) {
    for (const submodule of section.submodules) {
      const count = items.filter(item => item.baDomain === submodule.id).length;
      if (count !== submodule.count) {
        warnings.push(`[tech] domain ${submodule.id} có ${count}/${submodule.count} bài`);
      }
    }
    const domItems = items.filter(item => item.baDomain === 'TB-DOM');
    for (const industry of (section.industryContexts || [])) {
      const count = domItems.filter(item => item.industry === industry).length;
      if (count !== 2) {
        warnings.push(`[tech] TB-DOM ngành "${industry}" có ${count}/2 bài`);
      }
    }
  }

  // Kiểm tra trùng mạnh giữa nội dung mới và nội dung gốc.
  const baseline = allItems.filter(item => !items.includes(item));
  for (const item of items) {
    if (section.id === 'glossary') {
      const similar = baseline.find(old => jaccard(old.definition, item.definition) >= manifest.dedupe.definitionSimilarityThreshold);
      if (similar) warnings.push(`[${section.id}] ${item.id}: định nghĩa gần trùng ${similar.id}`);
      continue;
    }
    const similar = baseline.find(old => jaccard(old.title, item.title) >= manifest.dedupe.titleSimilarityThreshold);
    if (similar) warnings.push(`[${section.id}] ${item.id}: tiêu đề gần trùng nội dung cũ ${oldId(similar)}`);
    if (section.id === 'case' && Array.isArray(item.facts)) {
      const similarFacts = baseline.find(old => Array.isArray(old.facts) && jaccard(old.facts.join(' '), item.facts.join(' ')) >= manifest.dedupe.factsSimilarityThreshold);
      if (similarFacts) warnings.push(`[${section.id}] ${item.id}: bộ dữ kiện gần trùng ${oldId(similarFacts)}`);
    }
  }

  results.push({
    section: section.id,
    newItems: items.length,
    nearDuplicateTitles: stats.nearDuplicateTitles
  });
}

function oldId(item) {
  return item.id || item.slug || '(không rõ)';
}

console.log('=== KIỂM TRA MỞ RỘNG 4 MỤC ===');
console.log(`Manifest: ${manifest.sections.length} mục, mục tiêu ${manifest.totalTarget} nội dung`);

checkManifest();

for (const section of manifest.sections) {
  let allItems;
  try {
    allItems = loadSection(section);
  } catch (error) {
    errors.push(`[${section.id}] không nạp được dữ liệu: ${error.message}`);
    continue;
  }
  if (!allItems) continue;
  try {
    checkData(section, allItems);
  } catch (error) {
    errors.push(`[${section.id}] lỗi kiểm tra: ${error.message}`);
  }
}

console.log('');
for (const row of results) {
  if (row.newItems !== undefined) {
    console.log(`- ${row.section}: ${row.newItems}/${manifest.sections.find(s => s.id === row.section).add} nội dung mới, ${row.nearDuplicateTitles} tiêu đề gần trùng`);
  } else {
    console.log(`- ${row.section}: ${row.modules} module con, mục tiêu ${row.target}`);
  }
}
for (const warning of warnings) console.log(`  ! ${warning}`);

if (errors.length) {
  console.error(`\n❌ ${errors.length} lỗi:`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log('\n✓ Manifest hợp lệ. Chưa phát hiện trùng lặp trong dữ liệu đã có.');
