/**
 * 基于链表实现队列
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class QueueBasedOnLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(value) {
    if (this.head === null) {
      // 空队
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }
  dequeue() {
    if (this.head === null) return -1; // 空队
    const res = this.head.element;
    this.head = this.head.next;
    return res;
  }
}

const newQueue = new QueueBasedOnLinkedList();
// 插入元素
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
// 获取元素
let res = 0;
console.log("-------获取dequeue元素------");
while (res !== -1) {
  res = newQueue.dequeue();
  console.log(res);
}
