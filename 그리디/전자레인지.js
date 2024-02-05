//10162
let input = Number(require('fs').readFileSync('./input.txt').toString());

function solution(t) {
  const btn = [300, 60, 10];
  const result = [];
  for (let i = 0; i < btn.length; i++) {
    if (btn[i] <= t) {
      const c = Math.floor(t / btn[i]);
      t = t % btn[i];
      result.push(c);
    } else result.push(0);
  }
  if (t !== 0) return -1;
  return result.join(' ');
}

console.log(solution(input));
