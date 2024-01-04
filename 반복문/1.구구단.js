const input = Number(require('fs').readFileSync(0).toString());

function solution(input) {
  for (let i = 1; i <= 9; i += 1) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
}

solution(input);
