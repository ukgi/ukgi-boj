const input = require('fs').readFileSync(0).toString().trim().split('\n');
const count = Number(input[0]);
const testNumber = input[1];

let sum = 0;
for (let i = 0; i < count; i += 1) {
  sum += Number(testNumber[i]);
}

console.log(sum);
