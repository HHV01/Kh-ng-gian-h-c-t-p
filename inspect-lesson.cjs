const fs = require('fs');
const code = fs.readFileSync('dist/scale-data.js', 'utf8');
const vm = require('vm');
const ctx = { module: { exports: {} } };
vm.createContext(ctx);
vm.runInContext(code, ctx);
const details = ctx.module.exports.scaleLessonsDetail || ctx.scaleLessonsDetail;
const lesson = details['how-request-travels'];
console.log('Lesson:', JSON.stringify(lesson, null, 2));
