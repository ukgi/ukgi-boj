// 1018
/*
 * 행렬의 가로줄을 행(row)이라고 부르고, 세로줄을 열(column)이라고 부릅니다.
 */
const [a, ...b] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const [col, row] = a.split(' ').map(Number);
const arr = b.map((x) => x.trim('\r'));

function count(startCol, startRow, arr) {
  const cases = ['WBWBWBWB', 'BWBWBWBW'];
  let cnt = 0;
  for (let i = 0; i < 8; i++) {
    let row = startRow + i;
    for (let j = 0; j < 8; j++) {
      let col = startCol + j;
      if (arr[row][col] !== cases[row % 2][j]) cnt++;
    }
  }

  return Math.min(64 - cnt, cnt);
}

function solution(col, row, arr) {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= row - 8; i++) {
    for (let j = 0; j <= col - 8; j++) {
      result = Math.min(result, count(i, j, arr));
    }
  }
  return result;
}

console.log(solution(col, row, arr));
