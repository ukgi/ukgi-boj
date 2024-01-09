const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const testCases = input.slice(0, input.length - 1).map(Number);

function getDivisors(n) {
  const divisors = [];

  for (let i = 1; i < n; i += 1) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

function isPerfectNum(n, divisors) {
  const sum = divisors.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return n === sum;
}

function solution(testCases) {
  testCases.forEach((n) => {
    const divisors = getDivisors(n);

    if (isPerfectNum(n, divisors)) {
      console.log(`${n} = ${divisors.join(' + ')}`);
    } else {
      console.log(`${n} is NOT perfect.`);
    }
  });
}

solution(testCases);
