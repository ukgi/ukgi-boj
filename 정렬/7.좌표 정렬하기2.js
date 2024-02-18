// 11651
let [n, ...coordinates] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
coordinates = coordinates.map((e) => e.trim().split(' ').map(Number));

function solution(coordinates) {
  coordinates.sort(([x1, y1], [x2, y2]) => {
    if (y1 === y2) return x1 - x2;
    return y1 - y2;
  });
  return coordinates.map((e) => e.join(' ')).join('\n');
}

console.log(solution(coordinates));
