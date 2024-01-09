/*
 m과 n 사이의 모든 자연수에 대해서 모든 자연수의 약수를 구하기
 소수인 수를 구하기
 합과 최솟값을 출력하기
*/
const [m, n] = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number);

function getDivisors(k) {
  const divisors = [];

  for (let i = 1; i <= k; i += 1) {
    if (k % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

function findPrimes(m, n) {
  const primes = [];

  for (let k = m; k <= n; k += 1) {
    const divisors = getDivisors(k);
    if (divisors.length === 2) {
      primes.push(k);
    }
  }

  return primes;
}

function calculateSum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function calculateMin(arr) {
  return Math.min(...arr);
}

function solution(m, n) {
  const primes = findPrimes(m, n);

  if (primes.length === 0) {
    return console.log(-1);
  }

  const sum = calculateSum(primes);
  const min = calculateMin(primes);

  console.log(sum);
  console.log(min);
}

solution(m, n);
