/*
1. 단어를 2차원 배열에 저장한다.
2. 각각의 요소들 중 길이가 가장 긴 값을 구한다.
3. 길이가 가장 긴 값만큼 반복하며 단어를 세로로 조합한다.
4. 만일 인덱스에 해당하는 요소가 없다면 ''으로 바꿔서 조합한다.
*/

const input = require('fs').readFileSync(0).toString().trim().split('\n');
const matrix = [];
let result = '';

// 1
input.forEach((element) => {
  matrix.push(element.split('').filter((element) => element !== '\r'));
});

// 2
const tmp = [];
let maxWordLength = 0;
matrix.forEach((element) => {
  tmp.push(element.length);
});

maxWordLength = Math.max(...tmp);

// 3
for (let i = 0; i < maxWordLength; i += 1) {
  matrix.forEach((element) => {
    if (!element[i]) {
      element[i] = '';
    }
    result += element[i];
  });
}

// 4
console.log(result);
