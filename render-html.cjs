const fs = require('fs');
const vm = require('vm');

function createElem() {
  return {
    innerHTML: '',
    textContent: '',
    style: {},
    dataset: {},
    classList: { contains: () => false, toggle: () => {}, add: () => {}, remove: () => {} },
    querySelectorAll: () => [],
    querySelector: () => createElem(),
    addEventListener: () => {},
    appendChild: (c) => c,
    setAttribute: () => {},
    getAttribute: () => null,
    removeAttribute: () => {},
    closest: () => null
  };
}

const ctx = {
  console: console,
  window: {},
  addEventListener: () => {},
  document: {
    title: '',
    body: createElem(),
    querySelector: () => createElem(),
    querySelectorAll: () => [createElem()],
    getElementById: () => createElem(),
    addEventListener: () => {},
    createElement: () => createElem()
  },
  localStorage: { getItem: () => null, setItem: () => {} },
  location: { hash: '#/how-request-travels/1', href: 'http://localhost:3000/#/how-request-travels/1' },
  navigator: { userAgent: 'test' }
};
ctx.window = ctx;
vm.createContext(ctx);

const files = ['refine.js', 'library.js', 'cases.js', 'cases-extra.js', 'glossary.js', 'interview.js', 'scale-data.js', 'scale-components.js', 'scale-views.js', 'app.js'];

for (const f of files) {
  vm.runInContext(fs.readFileSync('dist/' + f, 'utf8'), ctx);
}

ctx.scaleState.activeSlug = 'how-request-travels';
ctx.scaleState.activeStep = 1;
ctx.scaleState.currentView = 'lesson';
const output = ctx.renderScaleLessonView('how-request-travels', 1);
fs.writeFileSync('output-lesson.html', output, 'utf8');
console.log('Saved output-lesson.html, length:', output.length);
