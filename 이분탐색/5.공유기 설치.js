// 2110
let [x, ...homes] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
homes = homes.map(Number);
const c = Number(x.split(' ')[1]);

function count(homes, d) {
  let ep = homes[0];
  let cnt = 1;
  for (let i = 1; i < homes.length; i++) {
    if (homes[i] - ep >= d) {
      cnt++;
      ep = homes[i];
    }
  }
  return cnt;
}

function solution(c, homes) {
  homes.sort((a, b) => a - b);
  let result = 0;
  let lt = 1;
  let rt = homes[homes.length - 1];
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(homes, mid) >= c) {
      result = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return result;
}

console.log(solution(c, homes));
