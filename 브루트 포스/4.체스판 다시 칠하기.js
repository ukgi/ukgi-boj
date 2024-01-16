// ❌

const [a, ...b] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const [row, column] = a.split(' ').map(Number);
const arr = b.map((x) => x.trim().split(''));

function getMinimumCost(startRow, startColumn, arr) {
  const tmp = ['WBWBWBWB', 'BWBWBWBW'];
  let whiteStart = 0;
  for (let i = 0; i < 8; i++) {
    let row = startRow + i;
    for (let j = 0; j < 8; j++) {
      let col = startColumn + j;
      if (arr[row][col] !== tmp[row % 2][j]) {
        whiteStart++;
      }
    }
  }

  return Math.min(whiteStart, 64 - whiteStart);
}

function solution(row, column, arr) {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= row - 8; i++) {
    for (let j = 0; j <= column - 8; j++) {
      let mc = getMinimumCost(i, j, arr);

      if (result > mc) result = mc;
    }
  }

  return result;
}

console.log(solution(row, column, arr));
