// 2720
let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const t = input.slice(1).map(Number);

function solution(arr) {
  const m = [25, 10, 5, 1];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    const currentResult = [];
    for (let j = 0; j < m.length; j++) {
      if (m[j] <= temp) {
        currentResult.push(Math.floor(temp / m[j]));
        temp -= m[j] * Math.floor(temp / m[j]);
      } else currentResult.push(0);
    }
    result.push(currentResult);
  }
  return result.map((e) => e.join(' ')).join('\n');
}

console.log(solution(t));
