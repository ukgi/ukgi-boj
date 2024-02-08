// 1920
let [n, arr1, m, arr2] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
arr1 = arr1.split(' ').map(Number);
arr2 = arr2.split(' ').map(Number);

function isInclude(arr, num) {
  let lt = 0;
  let rt = arr.length - 1;
  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    if (arr[mid] === num) return true;
    else if (arr[mid] > num) rt = mid - 1;
    else lt = mid + 1;
  }
  return false;
}

function solution(arr1, arr2) {
  const result = [];
  arr1.sort((a, b) => a - b);
  arr2.forEach((num) => {
    if (isInclude(arr1, num)) result.push(1);
    else result.push(0);
  });

  return result.join('\n');
}

console.log(solution(arr1, arr2));
// O(NlogN)
