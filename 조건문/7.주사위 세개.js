const input = require('fs').readFileSync(0).toString().split(' ').map(Number);

function findDuplicates(input) {
  const result = input.filter((item, index) => input.indexOf(item) !== index);

  return { count: result.length, duplicate: result[0] };
}

function solution(input) {
  let reward;
  const { count, duplicate } = findDuplicates(input);

  if (count === 2) {
    reward = 10_000 + duplicate * 1_000;

    return reward;
  }
  if (count === 1) {
    reward = 1_000 + duplicate * 100;

    return reward;
  }

  const [a, b, c] = input;
  const maxDice = Math.max(a, b, c);
  reward = maxDice * 100;

  return reward;
}

console.log(solution(input));
