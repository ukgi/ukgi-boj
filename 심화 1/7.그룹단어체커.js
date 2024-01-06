const input = require('fs').readFileSync(0).toString().trim().split('\n');
const count = Number(input[0]);
let cases = input.slice(1, 1 + count);
cases = cases.map((ele) => ele.trim());

let groupedCount = 0;

for (let i = 0; i < count; i += 1) {
  let isGrouped = true;
  const posCount = {};

  // 1. 각 단어의 알파벳의 인덱스를 객체로 정리한다.
  [...cases[i]].forEach((alphabet, i) => {
    if (posCount[alphabet]) {
      posCount[alphabet].push(i);
    } else {
      posCount[alphabet] = [];
      posCount[alphabet].push(i);
    }
  });

  // 2. 단어의 인덱스가 저장된 배열의 길이가 2 이상이면 각각의 요소들을 순회하며 뺄셈을 진행한다.
  for (const key in posCount) {
    if (posCount[key].length > 1) {
      for (let i = 1; i < posCount[key].length; i += 1) {
        // 뺐는데 1이 아니라면 연속해서 나온 값이 아니기 때문에 그룹 단어가 아니다.
        if (posCount[key][i] - posCount[key][i - 1] !== 1) {
          isGrouped = false;
        }
      }
    }
  }

  // 3. 그룹단어가 맞다면 전역변수의 값을 하나 올려준다.
  if (isGrouped) {
    groupedCount += 1;
  }
}

console.log(groupedCount);
