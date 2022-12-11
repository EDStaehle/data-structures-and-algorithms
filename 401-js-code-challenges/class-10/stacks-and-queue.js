class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(value) {
    if (!this.length) {
      return null;
    } else {
      const node = new Node(value);
      node.next = this.top;
      this.top = node;
      this.length += 1;
      return node
    }
  }
  pop() {
    if (!this.length) {
      return null;
    }else{
      const node = this.top;
      this.top = node.next;
      node.next = null;
      this.length -= 1;
      return node;
    }

  }

}

s = new Stack();
s.push('a');
s.push('b');
s.push('c');
console.log(s)
