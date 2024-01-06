let input = require('fs').readFileSync(0).toString().trim().split('\n');
let sumOfSubjectScore = 0;
let totalScore = 0;
const gradeScore = {
  ['A+']: 4.5,
  ['A0']: 4.0,
  ['B+']: 3.5,
  ['B0']: 3.0,
  ['C+']: 2.5,
  ['C0']: 2.0,
  ['D+']: 1.5,
  ['D0']: 1.0,
  ['F']: 0.0,
};

input = input.filter((info) => {
  const [subject, score, grade] = info.split(' ').map((ele) => ele.trim());

  return grade !== 'P';
});

input.forEach((info) => {
  const [subject, score, grade] = info.split(' ').map((ele) => ele.trim());

  totalScore += Number(score);
  sumOfSubjectScore += Number(score) * gradeScore[grade];
});

const average = sumOfSubjectScore / totalScore;

console.log(average);
