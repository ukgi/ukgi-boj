// 1300
let [n, k] = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number);

function count(n, mid) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (Math.floor(mid / i) >= n) {
      cnt += n;
    } else {
      cnt += Math.floor(mid / i);
    }
  }
  return cnt;
}

function solution(n, k) {
  let lt = 1;
  let rt = n * n;
  let result = 0;
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(n, mid) < k) lt = mid + 1;
    else {
      result = mid;
      rt = mid - 1;
    }
  }
  return result;
}

console.log(solution(n, k));
