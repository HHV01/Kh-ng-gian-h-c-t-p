const fs = require('fs');
let code = fs.readFileSync('dist/scale-views.js', 'utf8');

const oldHashChange = `// Lắng nghe hash change để đồng bộ URL
window.addEventListener('hashchange', () => {
  const hash = location.hash.replace(/^#\\/?/, '');
  if (!hash) return;

  if (hash === 'scale') {
    goScale('home');
  } else if (hash === 'pricing') {
    goScale('home');
  } else if (['about', 'contact', 'privacy', 'terms'].includes(hash)) {
    goScale(hash);
  } else {
    const parts = hash.split('/');
    if (parts.length >= 1 && scaleLessonsDetail[parts[0]]) {
      goScale('lesson', parts[0], parts[1] || 1);
    }
  }
});`;

const newHashChange = `// Lắng nghe hash change để đồng bộ URL và chuyển page sang System Scale
window.addEventListener('hashchange', () => {
  const hash = location.hash.replace(/^#\\/?/, '');
  if (!hash) return;

  // Đồng bộ trạng thái page VyWorkspace
  if (typeof page !== 'undefined' && page !== 'System Scale') {
    page = 'System Scale';
    document.querySelectorAll('[data-nav]').forEach(b => {
      b.classList.toggle('active', b.dataset.nav === 'System Scale');
    });
  }

  if (hash === 'scale' || hash === 'pricing') {
    goScale('home');
  } else if (['about', 'contact', 'privacy', 'terms'].includes(hash)) {
    goScale(hash);
  } else {
    const parts = hash.split('/');
    if (parts[0] === 'scale' && parts[1]) {
      const slug = parts[1];
      const step = parts[2] || 1;
      goScale('lesson', slug, step);
    } else if (parts[0]) {
      const slug = parts[0];
      const step = parts[1] || 1;
      goScale('lesson', slug, step);
    }
  }
});`;

if (code.includes(oldHashChange)) {
  code = code.replace(oldHashChange, newHashChange);
  fs.writeFileSync('dist/scale-views.js', code, 'utf8');
  console.log('Updated hashchange in dist/scale-views.js');
} else {
  console.log('oldHashChange not exact match, using regex replace');
  code = code.replace(/window\.addEventListener\('hashchange'[\s\S]*?\}\);\s*$/, newHashChange);
  fs.writeFileSync('dist/scale-views.js', code, 'utf8');
  console.log('Regex replaced hashchange');
}
