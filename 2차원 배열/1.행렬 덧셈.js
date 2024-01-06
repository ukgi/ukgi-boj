const input = require('fs').readFileSync('./input.txt').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let a = input.slice(1, 1 + n);
let b = input.slice(1 + n, input.length);
a = a.map((ele) => ele.split(' ').map(Number));
b = b.map((ele) => ele.split(' ').map(Number));
const result = [];

for (let i = 0; i < n; i += 1) {
  const arr = [];
  for (let j = 0; j < m; j += 1) {
    arr.push(a[i][j] + b[i][j]);
  }

  result.push(arr);
}

result.forEach((ele) => {
  console.log(ele.join(' '));
});
