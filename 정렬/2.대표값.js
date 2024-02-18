// 2587
let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
input = input.map(Number);

function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function solution(arr) {
  const result = [];
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const average = Math.floor(sum / arr.length);
  result.push(average);

  arr = bubble(arr);
  const median = arr[Math.floor(arr.length / 2)];
  result.push(median);

  return result.join('\n');
}

console.log(solution(input));
