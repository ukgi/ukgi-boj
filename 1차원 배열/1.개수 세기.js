const input = require('fs').readFileSync(0).toString().split('\n');
const cases = input[1].split(' ').map(Number);
const v = Number(input[2]);

let result = 0;
cases.forEach((ele) => {
  if (ele === v) {
    result += 1;
  }
});

console.log(result);
