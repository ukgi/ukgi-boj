// 17608번
let [n, ...sticks] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
sticks = sticks.map(Number);

function solution(sticks) {
  let cnt = 0;
  let tmp = sticks.pop();
  for (let i = sticks.length - 1; i >= 0; i--) {
    if (sticks[i] > tmp) {
      cnt++;
      tmp = sticks[i];
    }
  }

  return cnt + 1;
}

console.log(solution(sticks));
