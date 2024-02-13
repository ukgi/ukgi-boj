// 1931
let [n, ...arr] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
arr = arr.map((e) => e.split(' ').map(Number));

function solution(arr) {
  arr.sort(([s1, e1], [s2, e2]) => {
    if (e1 === e2) return s1 - s2;
    return e1 - e2;
  });
  let result = 1;
  let t = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] >= t) {
      result += 1;
      t = arr[i][1];
    }
  }
  return result;
}

console.log(solution(arr));
