const input = Number(require('fs').readFileSync(0).toString().trim());

function solution(n) {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < n; i += 1) {
    let sum = 0;
    let tmp = i;
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
