const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
const m = Number(input[0].split(' ')[1]);

function solution(m, arr) {
  let cnt = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) cnt++;
    while (sum >= m) {
      sum -= arr[lt];
      lt++;
      if (sum === m) cnt++;
    }
  }

  return cnt;
}

console.log(solution(m, arr));
