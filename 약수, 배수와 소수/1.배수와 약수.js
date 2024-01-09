const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

function isDivisors(n, m) {
  return m % n === 0;
}

function isMultiple(n, m) {
  return n % m === 0;
}

input.forEach((testCase) => {
  const [n, m] = testCase.split(' ').map(Number);

  if (n === 0 && m === 0) return;
  if (isDivisors(n, m)) console.log('factor');
  if (isMultiple(n, m)) console.log('multiple');
  if (!isDivisors(n, m) && !isMultiple(n, m)) console.log('neither');
});
