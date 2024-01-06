const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const matrix = [];
let n;
let m;

input.forEach((element) => {
  matrix.push(element.split(' ').map(Number));
});

/*
1. 각 행마다 최대값을 구한다.
2. 최대값끼리 최대값을 구한다.
3. 최대값이 위치한 곳이 어딘지 구한다.
4. 형식에 맞게 출력한다.
*/

// 1. 각 행마다 최대값을 구한다.
const maxList = [];

matrix.forEach((element) => {
  const max = Math.max(...element);
  maxList.push(max);
});

// 2. 최대값끼리 최대값을 구한다.
const totalMax = Math.max(...maxList);

// 3. 최대값이 위치한 곳이 어딘지 구한다.
// 행(n)은 matrix의 인덱스에서, 열(m)은 matrix 요소의 인덱스에서 구한다.
matrix.forEach((ele, i) => {
  if (ele.findIndex((num) => num === totalMax) !== -1) {
    m = ele.findIndex((num) => num === totalMax) + 1;
    n = i + 1;
  }
});

console.log(totalMax);
console.log(n, m);
