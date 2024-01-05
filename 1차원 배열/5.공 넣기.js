const input = require('fs').readFileSync(0).toString().split('\n');
const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const cases = input.slice(1, 1 + m);

const baskets = Array.from({ length: n }).fill(0);
cases.forEach((ele) => {
  const [i, j, k] = ele.split(' ').map(Number);
  baskets.fill(k, i - 1, j);
});

console.log(baskets.join(' '));
