const input = require('fs').readFileSync(0).toString().split('\n');
const x = Number(input[0].split(' ')[1]);
const a = input[1].split(' ').map(Number);

const result = [];
a.forEach((ele) => {
  if (ele < x) {
    result.push(ele);
  }
});

console.log(result.join(' '));
