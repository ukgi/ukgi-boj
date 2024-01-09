/*
소수란 ?
1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수
= 1과 그 수 자신 이외의 자연수로는 나눌 수 없는 자연수
*/

const [n, list] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const testCases = list.split(' ').map(Number);

function getDivisors(n) {
  const divisors = [];

  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

function solution(testCases) {
  const count = testCases.filter((n) => {
    const divisors = getDivisors(n);

    return divisors.length === 2;
  });

  console.log(count.length);
}

solution(testCases);
