'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
}
let list = new LinkedList();
list.add(1);
list.add(3);
list.add(5);
list.add(7);

let listTwo = new LinkedList();
listTwo.add(2);
listTwo.add(4);
listTwo.add(6);

function SortedMerge( A,  B) {

  if (A == null)
      return B;
  if (B == null)
      return A;

  if (A.data < B.data) {
      A.next = SortedMerge(A.next, B);
      return A;
  } else {
      B.next = SortedMerge(A, B.next);
      return B;
  }

}
