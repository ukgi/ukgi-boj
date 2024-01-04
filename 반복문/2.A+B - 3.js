const input = require('fs').readFileSync(0).toString().split('\n');

function solution(input) {
  const caseCount = input[0];

  for (let i = 1; i <= caseCount; i += 1) {
    const [a, b] = input[i].split(' ').map(Number);

    console.log(a + b);
  }
}

solution(input);
