const n = Number(require('fs').readFileSync('./input.txt').toString().trim());

function f(n) {
  return 3 * n ** 2 - 3 * n + 1;
}

let range = 1;
let tmp = f(range);

while (tmp < n) {
  range += 1;

  tmp = f(range);
}

console.log(range);
