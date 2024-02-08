// 1654
let [x, ...cables] = require('fs').readFileSync('./input.txt').toString().split('\n');
const [k, n] = x.split(' ').map(Number);
cables = cables.map(Number);

function count(cables, mid) {
  let sum = 0;
  cables.forEach((cable) => {
    sum += Math.floor(cable / mid);
  });

  return sum;
}

function solution(n, cables) {
  let lt = 1;
  let rt = Math.max(...cables);
  let result = 0;
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(cables, mid) < n) rt = mid - 1;
    else {
      lt = mid + 1;
      result = mid;
    }
  }

  return result;
}

console.log(solution(n, cables));
