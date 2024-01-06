let input = require('fs').readFileSync(0).toString().trim();
let tmp = '';
let alphabetCount = 0;
const alphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

[...input].forEach((alphabet) => {
  tmp += alphabet;
  alphabets.forEach((ele) => {
    if (tmp.includes(ele)) {
      alphabetCount += 1;
      tmp = tmp.replace(ele, ' ');
    }
  });
});

tmp = [...tmp].filter((ele) => ele !== ' ').join('');

console.log(tmp.length + alphabetCount);
