let [n, seats] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
n = Number(n);

function solution(n, seats) {
  let cnt = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 'S') cnt += 1;
    else {
      cnt += 1;
      i += 1;
    }
  }
  cnt += 1;
  if (cnt >= n) return n;
  return cnt;
}

console.log(solution(n, seats));
