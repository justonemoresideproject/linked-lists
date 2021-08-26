/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if(this.head == null){
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if(this.head == null){
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    } else {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }

  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.length <= 0){
      return -1
    } else {
      let newTail = this.getAt(this.length - 1);
      let temp = newTail.next;
      this.tail = newTail;
      newTail.next = null;
      this.length--;
      return temp;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.length <= 0){
      return -1;
    } else {
      let temp = this.head;
      this.head.next = this.head;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx > this.length){
      return -1
    } else {
      let count = 0;
      let currentNode = this.head;
      while(count < idx){
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx > this.length){
      return -1
    } else {
      let node = this.getAt(idx);
      node.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > 0) {
      let newNode = newNode(val);
      let previousNode = this.getAt(idx - 1);
      let nextNode = this.getAt(idx);
      previousNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
    } else {
      this.push()
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx <= this.length){
      let previousNode = this.getAt(idx - 1);
      let removedNode = previousNode.next;
      let nextNode = removedNode.next;
      previousNode.next = nextNode;
      removedNode.next = null;
      this.length--;
      return removedNode;
    } else {
      return -1;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let count = 0;
    let total = 0;
    let currentNode = this.head;
    while(count < this.length){
      total += currentNode.val;
      currentNode = currentNode.next;
      count++;
    }
    let average = (total / count)
    return average;    
  }
}

module.exports = LinkedList;
