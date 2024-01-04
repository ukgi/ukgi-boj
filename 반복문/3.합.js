const input = Number(require('fs').readFileSync(0).toString());

function solution(input) {
  let sum = 0;
  for (let i = 1; i <= input; i += 1) {
    sum += i;
  }

  console.log(sum);
}

solution(input);
