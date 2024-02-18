// https://ko.javascript.info/recursion#ref-281

// 1️⃣ 주어진 숫자까지의 모든 숫자 더하기
function loop(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(loop(100));

function recursion(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + recursion(n - 1);
  }
}

console.log(recursion(100));

console.clear();

// 2️⃣ 급여 합계를 구해주는 함수
let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((acc, cur) => acc + cur.salary, 0);
  } else {
    let sum = 0;
    for (let subdeq of Object.values(department)) {
      sum += sumSalaries(subdeq);
    }
    return sum;
  }
}

console.log(sumSalaries(company));
console.clear();

// 3️⃣ 단일 연결 리스트 출력하기

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log(list.value); // 현재 요소를 출력합니다.

  if (list.next) {
    printList(list.next); // 같은 방법을 사용해 나머지 요소를 출력합니다.
  }
}

printList(list);
