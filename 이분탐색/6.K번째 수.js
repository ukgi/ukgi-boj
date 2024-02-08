// 1300
let [n, k] = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number);

function solution(n, k) {
  let lt = 1;
  let rt = n * n;
  let result = 0;
  while (lt <= rt) {
    let sum = 0;
    const mid = Math.floor((lt + rt) / 2);
    for (let i = 1; i <= n; i++) {
      if (Math.floor(mid / i) > n) sum += n;
      else sum += Math.floor(mid / i);
    }
    if (sum >= k) {
      result = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return result;
}

console.log(solution(n, k));
