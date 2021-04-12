/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let cur = l;
  if (cur.value === k) {
    if (cur.next === null) {
      cur = null;
    } else {
      cur.value = cur.next.value;
      cur.next = cur.next.next;
    }
  }
  if (cur.next !== null) removeKFromList(cur.next, k);
  return cur;
}

module.exports = removeKFromList;
