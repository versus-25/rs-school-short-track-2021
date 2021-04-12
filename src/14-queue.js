const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = undefined;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    this.length++;
    const node = new ListNode(element);
    node.next = null;
    if (!this.queue) {
      this.queue = node;
    } else {
      let last = this.queue;
      while (last.next) {
        last = last.next;
      }
      last.next = node;
    }
  }

  dequeue() {
    this.length--;
    const first = this.queue.value;
    if (this.queue.next) {
      this.queue.value = this.queue.next.value;
      this.queue.next = this.queue.next.next;
    } else {
      this.queue = undefined;
    }
    return first;
  }
}

module.exports = Queue;
