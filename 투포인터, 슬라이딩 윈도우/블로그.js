const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const x = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(Number);

function solution(x, arr) {
  const tmp = {};
  let windowSum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= x - 1) {
      if (tmp[windowSum]) tmp[windowSum]++;
      else {
        tmp[windowSum] = 0;
        tmp[windowSum]++;
      }
      windowSum -= arr[i - (x - 1)];
    }
  }
  console.log(tmp);
  max = Math.max(...Object.keys(tmp).map(Number));
  if (max === 0) {
    console.log('SAD');
  } else {
    console.log(max);
    console.log(tmp[max]);
  }
}

solution(x, arr);
