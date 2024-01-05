const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const cases = input.slice(1, 1 + m);

const basket = Array.from({ length: n }, (_, i) => i + 1);
cases.forEach((ele) => {
  const [i, j] = ele.split(' ').map(Number);
  const target = basket.slice(i - 1, j).reverse();
  basket.splice(i - 1, j - i + 1, ...target);
});

console.log(basket.join(' '));
