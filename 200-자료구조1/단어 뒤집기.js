// 9093
let [t, ...tests] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
tests = tests.map((test) => test.trim('\r'));

function solution(tests) {
  const result = [];
  tests.forEach((test) => {
    let answer = '';
    let words = test.split(' ');
    words.forEach((word) => {
      answer += [...word].reverse().join('') + ' ';
    });
    result.push(answer);
  });

  return result.join('\n');
}

console.log(solution(tests));
