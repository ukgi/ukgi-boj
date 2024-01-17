let [n, ...test] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
n = Number(n);
test = test.map((t) => t.split(' ').map(Number));

function solution(n, test) {
  const result = [];
  for (let i = 0; i < n; i++) {
    let k = 0;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (test[i][0] < test[j][0] && test[i][1] < test[j][1]) {
        k++;
      }
    }
    result.push(k + 1);
  }

  return result.join(' ');
}

console.log(solution(n, test));
