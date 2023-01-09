'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  traverse() {
    let current = this.head;
    let results = [];
    while (current) {
      results.push(current.value);
      current = current.next;
    }
    return results;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }
  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  includes(value) {
    let current = this.head;
    let result = false;
    while (current) {
      if (current.value === value) {
        result = true;
      }
      current = current.next;
    }
    return result;
  }
}
module.exports = LinkedList;
