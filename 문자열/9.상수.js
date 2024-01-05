const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ');
const i = Number([...a].reverse().join(''));
const j = Number([...b].reverse().join(''));

console.log(Math.max(i, j));
