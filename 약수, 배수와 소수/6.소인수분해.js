/*
 - 인수를 구한다.
 - 인수들 중 소수인 것으로 필터링한다.
 - n을 소수로 나눈다.
 - 매번 나눌때마다 나눈 소수 값을 배열에 저장한다.
 - 형식에 맞게 출력한다.
 */

const n = Number(require('fs').readFileSync('./input.txt').toString().trim());

function getDivisors(k) {
  const divisors = [];

  for (let i = 1; i <= k; i += 1) {
    if (k % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

function getPrimeFactors(arr) {
  return arr.filter((element) => {
    const divisors = getDivisors(element);

    return divisors.length === 2;
  });
}

function solution(n) {
  const result = [];
  const divisors = getDivisors(n);
  const primeFactors = getPrimeFactors(divisors);

  primeFactors.reduce((n, cur) => {
    while (n % cur === 0) {
      n = n / cur;
      result.push(cur);
    }

    return n;
  }, n);

  result.forEach((element) => {
    console.log(element);
  });
}

solution(n);
