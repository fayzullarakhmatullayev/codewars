class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }

  setNext(node) {
    this.next = node;
  }

  getNext() {
    return this.next;
  }
}

function loop_size(node) {
  let slow = node;
  let fast = node;

  do {
    slow = slow.next;
    fast = fast.next.next;
  } while (slow !== fast);

  let count = 1;
  let current = slow.next;

  while (current !== slow) {
    count++;
    current = current.next;
  }

  return count;
}

module.exports = {
  Node,
  loop_size
};
