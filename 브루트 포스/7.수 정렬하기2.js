let [n, ...tmp] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
tmp = tmp.map(Number).sort((a, b) => a - b);
console.log(tmp.join('\n'));
