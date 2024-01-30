// https://coding-grandpa.tistory.com/107

const [a, ...b] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const [row, column] = a.split(' ').map(Number);
const arr = b.map((x) => x.trim('\r'));

function getSolution(startRow, startCol, board) {
  const orgBoard = ['WBWBWBWB', 'BWBWBWBW'];
  let whiteSol = 0;
  for (let i = 0; i < 8; i++) {
    let row = startRow + i;
    for (let j = 0; j < 8; j++) {
      let col = startCol + j;
      if (board[row].charAt(col) != orgBoard[row % 2].charAt(j)) whiteSol++;
    }
  }
  return Math.min(whiteSol, 64 - whiteSol);
}

function solution(row, column, arr) {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= row - 8; i++) {
    for (let j = 0; j <= column - 8; j++) {
      let curResult = getSolution(i, j, arr);
      if (result > curResult) result = curResult;
    }
  }
  return result;
}

console.log(solution(row, column, arr));
