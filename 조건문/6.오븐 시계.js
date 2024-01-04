/*
훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

🚀기능 목록
- 첫번째 줄에서 현재 시각을 입력받는다. 현재 시각은 시 A, 분 B가 정수로 빈칸을 사이에 두고 순서대로 주어진다.
- 두번째 줄에서 요리하는데 필요한 시간이 분 단위로 주어진다.
- 현재시각의 분에서 요리하는데 필요한 시간을 더한다.
- 더한 값이 60보다 작으면 그대로 더한 값이 오븐구이가 끝나는 시각(결과값)이다.
- 만일 더한 값이 60보다 크다면, 60으로 나누어 몫을 현재시각의 시에 더한 값이 결과값이 시 값이고 나머지는 결과값의 분이 된다.
    - 만일 현재 시각의 시가 23이라면 현재 시각의 분에서 오븐구이가 끝나는 시각을 더한 값을 60으로 나눈 몫을 그대로 더한 뒤 24로 빼준다.
- 결과값을 형식에 맞게 출력한다.
*/

const input = require('fs').readFileSync(0).toString().split('\n');
const [currentHour, currentMinute] = input[0].split(' ').map((ele) => Number(ele));
const cookingTime = Number(input[1]);

function solution(currentHour, currentMinute, cookingTime) {
  const sumMinute = currentMinute + cookingTime;
  let cookingFinishHour = currentHour + Math.floor(sumMinute / 60);
  let cookingFinishMinute;

  if (sumMinute < 60) {
    cookingFinishMinute = sumMinute;

    return console.log(cookingFinishHour, cookingFinishMinute);
  }

  if (cookingFinishHour >= 24) cookingFinishHour = cookingFinishHour - 24;
  cookingFinishMinute = sumMinute % 60;

  return console.log(cookingFinishHour, cookingFinishMinute);
}

solution(currentHour, currentMinute, cookingTime);
