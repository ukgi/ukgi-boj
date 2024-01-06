const [amount, ...locations] = require('fs').readFileSync(0).toString().trim().split('\n');
const matrix = Array.from({ length: 100 }, () => Array.from({ length: 100 }).fill(false));
let result = 0;

locations.forEach((element) => {
  const [left, down] = element.split(' ').map(Number);

  for (let i = down - 1; i < down + 9; i += 1) {
    for (let j = left - 1; j < left + 9; j += 1) {
      matrix[i][j] = true;
    }
  }
});

matrix.forEach((element) => {
  result += element.filter((pos) => pos).length;
});

console.log(result);
