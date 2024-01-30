/*
js에서 나눗셈은 실수를 반환한다.
예를 들어 7 / 10 은 0이 아니라 0.7이 된다.
그렇기 때문에 정수의 몫을 반환받기 위해서 parseInt를 통해 정수로 변환해야한다.
*/

const input = Number(require('fs').readFileSync('./input.txt').toString().trim());

function solution(n) {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < n; i++) {
    let tmp = i;
    let sum = 0;
    while (tmp) {
      sum += tmp % 10;
      tmp = parseInt(tmp / 10);
    }
    if (i + sum === n) {
      result = Math.min(result, i);
    }
  }
  if (result === Number.MAX_SAFE_INTEGER) {
    result = 0;
    return result;
  }

  return result;
}

console.log(solution(input));
