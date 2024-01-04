/*
원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다.

입력 : 첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 알람 시간 H시 M분을 의미한다.
입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 
시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

출력 : 첫째 줄에 상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)
*/

/*
🔨구현 방법

45를 뺐을 때 음수가 된다면 시에 해당하는 값을 1만큼 빼주고 분은 60에서 해당 음수만큼 빼주면 된다.
24시간 표현을 하기 때문에 시에 해당하는 값이 0이면 1만큼 빼주었을 때 23이 되어야한다.

예를 들어 23 40이 입력되었을 때는 40 - 45 = -5 이기 때문에 시에 해당하는 23에서 -1 을 하여 시는 22가 된다.
분은 60에서 -5 를 하여 55 가 된다. 결과는 22 55 가 출력된다.

만약 0 30 이 입력된다면 시가 0이기 때문에 23이 되고 분은 30 - 45 = -15 이기 때문에 45 가 된다.
따라서 23 45 가 출력된다.

🚀기능 목록
- 시와 분을 입력받는다.
- 분을 45만큼 뺀다.
    - 만약 음수가 나오면 60에서 음수만큼 더한다. (차감)
        - 시에서 1만큼 뺀다.
            - 만일 시가 0이라면 23이 된다.
            - 그렇지 않다면 그대로 1을 빼준다.
    - 음수가 아니라면 그대로 뺀 값이 결과 값의 분이 된다.
- 결과를 형식에 맞게 출력한다.    
*/

const input = require('fs').readFileSync(0).toString().split(' ');

const hours = parseInt(input[0], 10);
const minute = parseInt(input[1], 10);

function solution(hours, minute) {
  let resultHours = hours;
  let resultMinute = minute;
  const diff = minute - 45;

  if (diff < 0) {
    hours === 0 ? (resultHours = 23) : (resultHours = hours - 1);
    resultMinute = 60 + diff;
  } else {
    resultMinute = minute - 45;
  }

  console.log(resultHours, resultMinute);
}

solution(hours, minute);
