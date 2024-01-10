const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const [a1, a0] = input[0].split(' ').map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

function f(n) {
  return a1 * n + a0;
}

function g(n) {
  return n;
}

if (f(n0) <= c * g(n0) && a1 <= c) {
  return console.log(1);
}

return console.log(0);
