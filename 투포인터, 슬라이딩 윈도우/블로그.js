// const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
// const x = Number(input[0].split(' ')[1]);
// const arr = input[1].split(' ').map(Number);

function solution(x, arr) {
  const tmp = {};
  let windowSum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < x; i++) {
    windowSum += arr[i];
  }

  for (let i = x; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - x];

    if (tmp[windowSum]) tmp[windowSum]++;
    else {
      tmp[windowSum] = 0;
      tmp[windowSum]++;
    }
  }
  max = Math.max(...Object.keys(tmp).map(Number));
  if (max === 0) {
    console.log('SAD');
  } else {
    console.log(max);
    console.log(tmp[max]);
  }
}

solution(2, [1, 4, 2, 5, 1]);
