const input = require('fs').readFileSync(0).toString().trim().split('\n');
const m = input[0].split(' ').map(Number)[1];
const cards = input[1].split(' ').map(Number);

function solution(cards, m) {
  let result = 0;
  for (let i = 0; i < cards.length; i += 1) {
    for (let j = i + 1; j < cards.length; j += 1) {
      for (let k = j + 1; k < cards.length; k += 1) {
        if (m >= cards[i] + cards[j] + cards[k]) {
          result = Math.max(result, cards[i] + cards[j] + cards[k]);
        }
      }
    }
  }

  return result;
}

console.log(solution(cards, m));
