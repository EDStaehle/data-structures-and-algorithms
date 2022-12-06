'use strict';

class
  Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  insesrt(value){
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node

  }
  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString(){
    let current = this.head;
    let str = '';
    while(current){
      str += `{${current.value}} -> `;
      current = current.next;
    }
    str += 'NULL';
    return str;
  }
  inserts(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  insertBefore(value,newValue){
    let current = this.head;
    if(current.value === value){
      this.insert(newValue);
      return;
    }
    while(current){
      if(current.next.value === value){
        let tempNode = current.next;
        current.next = new Node(newValue);
        return current.next.next = tempNode;
      }
      current = current.next;
    }
  }
  insertAfter(value,newValue){
    let current = this.head;
    if(current.value === value){
      let tempNode = current.next;
      current.next = new Node(newValue);
      current.next.next = tempNode;
      return;
    }
    while(current){
      if(current.value === value){
        let tempNode = current.next;
        current.next = new Node(newValue);
        current.next.next = tempNode;
        return;
      }
      current = current.next;
    }
  }
}
let list = new LinkedList();
list.insesrt('a');
list.insesrt('b');
list.insesrt('c');



console.log(JSON.stringify(list));
list.includes();

module.exports = LinkedList;


