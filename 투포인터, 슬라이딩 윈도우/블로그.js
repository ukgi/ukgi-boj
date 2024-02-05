const input = require('fs').readFileSync(0).toString().trim().split('\n');
const x = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(Number);

function solution(x, arr) {
  let result = [];
  let count = 0;
  let sum = 0;
  const table = {};
  for (let i = 0; i < x; i++) sum += arr[i];
  table[sum] = 1;
  for (let i = x; i < arr.length; i++) {
    sum += arr[i] - arr[i - x];
    if (table[sum]) table[sum]++;
    else table[sum] = 1;
  }
  result.push(Math.max(...Object.keys(table).map(Number)));
  if (result[0] === 0) return 'SAD';
  count = table[result[0]];
  result.push(count);

  return result.join('\n');
}

console.log(solution(x, arr));
