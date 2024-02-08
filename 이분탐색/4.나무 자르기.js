// 2805
let [x, trees] = require('fs').readFileSync('./input.txt').toString().split('\n');
trees = trees.split(' ').map(Number);
const [n, m] = x.split(' ').map(Number);

function count(trees, target) {
  let count = 0;
  trees.forEach((tree) => {
    if (tree >= target) count += tree - target;
    else count += 0;
  });
  return count;
}

function solution(m, trees) {
  let lt = 0;
  let rt = Math.max(...trees);
  let result = 0;
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(trees, mid) < m) rt = mid - 1;
    else {
      lt = mid + 1;
      result = mid;
    }
  }
  return result;
}

console.log(solution(m, trees));
