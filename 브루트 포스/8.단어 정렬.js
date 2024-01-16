let [n, ...tmp] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
tmp = [...new Set(tmp)];
tmp.sort();
tmp.sort((a, b) => a.length - b.length);
console.log(tmp.join('\n'));
