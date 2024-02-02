// 2164
const input = Number(require('fs').readFileSync('./input.txt').toString());

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
    if (this.size >= 2) {
      const data = this.head.data;
      const newHead = this.head.next;
      this.head = newHead;
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

  getSize() {
    return this.size;
  }

  getFront() {
    return this.head.data;
  }
}

function solution(n) {
  const queue = new Queue();
  const cards = Array.from({ length: n }, (_, i) => i + 1);
  cards.forEach((num) => {
    queue.enqueue(num);
  });
  for (let i = 0; i < cards.length; i++) {
    if (queue.getSize() === 1) return queue.getFront();
    queue.dequeue();
    const temp = queue.dequeue();
    queue.enqueue(temp);
  }
}

console.log(solution(input));
