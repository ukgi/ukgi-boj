// 2750
let [n, ...arr] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
arr = arr.map(Number);

function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    const tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return arr.join('\n');
}
console.log(insert(arr));
