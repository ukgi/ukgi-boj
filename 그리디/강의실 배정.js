// 11000
let [n, ...arr] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
arr = arr.map((e) => e.split(' ').map(Number));

function solution(arr) {
  const timelines = [];
  let cnt = 0;
  let result = Number.MIN_SAFE_INTEGER;
  arr.forEach(([start, end]) => {
    timelines.push([start, 's']);
    timelines.push([end, 'e']);
  });
  timelines.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
    }
    return a[0] - b[0];
  });
  timelines.forEach((timeline) => {
    if (timeline[1] === 's') cnt++;
    else cnt--;
    result = Math.max(result, cnt);
  });

  return result;
}

console.log(solution(arr));
