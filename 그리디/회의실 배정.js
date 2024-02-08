// 1931
let [n, ...arr] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
arr = arr.map((e) => e.split(' ').map(Number));

function solution(arr) {
  let result = 1;
  arr.sort(([s1, e1], [s2, e2]) => {
    if (e1 === e2) return s1 - s2;
    return e1 - e2;
  });
  let e = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (e <= arr[i][0]) {
      e = arr[i][1];
      result++;
    }
  }

  return result;
}

console.log(solution(arr));
