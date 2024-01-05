const input = require('fs').readFileSync(0).toString().trim().split('\n');
const s = input[0];
const i = Number(input[1]);

console.log(s[i - 1]);
