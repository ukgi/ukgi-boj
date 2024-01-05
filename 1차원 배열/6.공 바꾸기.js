const input = require('fs').readFileSync(0).toString().split('\n');
const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const cases = input.slice(1, 1 + m);

const basket = Array.from({ length: n }, (_, i) => i + 1);
cases.forEach((ele) => {
  let tmp;
  const [i, j] = ele.split(' ').map(Number);
  tmp = basket[j - 1];
  basket[j - 1] = basket[i - 1];
  basket[i - 1] = tmp;
});

console.log(basket.join(' '));
