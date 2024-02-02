// 18258
let [n, ...arr] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
arr = arr.map((command) => command.trim('\r'));

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.tail;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.size += 1;
  }

  dequeue() {
    if (this.size > 2) {
      const data = this.head.data;
      const newHead = this.head.next;
      this.head = newHead;
      this.size -= 1;

      return data;
    } else if (this.size === 2) {
      const data = this.head.data;
      const newHead = this.head.next;
      this.head = newHead;
      this.tail = newHead;
      this.size -= 1;

      return data;
    } else if (this.size === 1) {
      const data = this.head.data;
      this.head = null;
      this.tail = null;
      this.size -= 1;

      return data;
    } else {
      return -1;
    }
  }

  isEmpty() {
    return this.size ? 0 : 1;
  }

  getSize() {
    return this.size;
  }

  front() {
    return this.head ? this.head.data : -1;
  }

  back() {
    return this.tail ? this.tail.data : -1;
  }
}

function solution(commands) {
  const queue = new Queue();
  let answer = '';
  commands.forEach((command) => {
    const [c, n] = command.split(' ');
    switch (c) {
      case 'push':
        queue.enqueue(n);
        break;
      case 'pop':
        answer += queue.dequeue() + ' ';
        break;
      case 'size':
        answer += queue.getSize() + ' ';
        break;
      case 'empty':
        answer += queue.isEmpty() + ' ';
        break;
      case 'front':
        answer += queue.front() + ' ';
        break;
      case 'back':
        answer += queue.back() + ' ';
        break;
      default:
        break;
    }
  });

  return answer.split(' ').join('\n');
}

console.log(solution(arr));
