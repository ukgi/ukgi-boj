// 28279

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
input = input.map((e) => e.trim('\r'));

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.count = 0;
    this.front = null;
    this.rear = null;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      const cachedPrevFront = this.front;
      cachedPrevFront.prev = newNode;
      this.front = newNode;
      newNode.next = cachedPrevFront;
    }
    this.count += 1;

    return this.count;
  }

  shift() {
    if (this.count === 0) return -1;
    const value = this.front.value;
    if (this.count === 1) {
      this.front = null;
      this.rear = null;
      this.count = 0;
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      this.count -= 1;
    }

    return value;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.count === 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      const currentRear = this.rear;
      currentRear.next = newNode;
      newNode.prev = currentRear;
      this.rear = newNode;
    }
    this.count += 1;

    return this.count;
  }

  pop() {
    if (this.count === 0) return -1;
    const value = this.rear.value;
    if (this.count === 1) {
      this.front = null;
      this.rear = null;
      this.count = 0;
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
      this.count -= 1;
    }

    return value;
  }

  getCount() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0 ? 1 : 0;
  }

  getFront() {
    return this.front ? this.front.value : -1;
  }

  getRear() {
    return this.rear ? this.rear.value : -1;
  }
}

function solution(commands) {
  let result = '';
  const deque = new Deque();
  commands.forEach((str) => {
    const command = str.split(' ')[0];
    const x = str.split(' ')[1];
    switch (command) {
      case '1':
        deque.unshift(x);
        break;

      case '2':
        deque.push(x);
        break;

      case '3':
        result += deque.shift() + ' ';
        break;

      case '4':
        result += deque.pop() + ' ';
        break;

      case '5':
        result += deque.getCount() + ' ';
        break;

      case '6':
        result += deque.isEmpty() + ' ';
        break;

      case '7':
        result += deque.getFront() + ' ';
        break;

      case '8':
        result += deque.getRear() + ' ';
        break;

      default:
        break;
    }
  });

  return result.split(' ').join('\n');
}

console.log(solution(input));
