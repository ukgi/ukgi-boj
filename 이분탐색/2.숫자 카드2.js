// 10816
let [n, arr1, m, arr2] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
arr1 = arr1.split(' ').map(Number);
arr2 = arr2.split(' ').map(Number);

function isInclude(arr, target) {
  let lt = 0;
  let rt = arr.length - 1;
  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    if (arr[mid] > target) rt = mid - 1;
    else if (arr[mid] < target) lt = mid + 1;
    else return true;
  }

  return false;
}

function solution(arr1, arr2) {
  let result = '';
  const hashMap = new Map();
  arr1.sort((a, b) => a - b);
  arr1.forEach((num) => {
    if (hashMap.has(num)) hashMap.set(num, hashMap.get(num) + 1);
    else hashMap.set(num, 1);
  });
  arr2.forEach((num) => {
    if (isInclude(arr1, num)) result += hashMap.get(num).toString() + ' ';
    else result += '0' + ' ';
  });

  return result;
}

console.log(solution(arr1, arr2));
