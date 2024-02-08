let [n, ...cards] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
cards = cards.map(Number);

function solution(cards) {
  cards.sort((a, b) => a - b);
  if (cards.length === 1) return 0;
  else {
    let sum = cards[0] + cards[1];
    for (let i = 2; i < cards.length; i++) {
      sum += sum + cards[i];
    }
    return sum;
  }
}

console.log(solution(cards));
