const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const [a, b, c] = input.sort((a, b) => a - b);

if (a + b > c) {
  return console.log(a + b + c);
}

return console.log(a + b + a + b - 1);
