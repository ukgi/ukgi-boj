const [n, k] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

function getDivisors(n) {
  const divisors = [];

  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

function solution(n, k) {
  const divisors = getDivisors(n);

  if (divisors.length < k) {
    return console.log(0);
  }

  return console.log(divisors[k - 1]);
}

solution(n, k);
