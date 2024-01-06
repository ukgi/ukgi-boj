const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

const piecesList = [1, 1, 2, 2, 2, 8];
const result = input.reduce((acc, cur, i) => {
  acc.push(piecesList[i] - cur);
  return acc;
}, []);

console.log(result.join(' '));
