const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
}

  getUnderlyingList() {
    return this.head;
  }

   enqueue(value) {
    const listNode = new ListNode(value);
    if (this.length === 0) {
      this.head = listNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = listNode;
    }
  this.length++
  }

  dequeue() {
    const current = this.head;
    this.head = this.head.next;
    this.length--;

    return current.value;
  }
}

module.exports = {
  Queue
};
