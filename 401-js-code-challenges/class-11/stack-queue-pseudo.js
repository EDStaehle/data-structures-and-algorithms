class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack{

    constructor() {
      this.top = null;
      this.length = 0;
    }
    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
      this.length += 1;



    }
    pop() {
      if (!this.top) {
        throw new UnsupportedMethodError('error top is empty')
      }
        const node = this.top;
        this.top = node.next
        node.next = null;
        this.length -= 1;
      return node.value
    }
    peek(){
      if(!this.top){
        throw new UnsupportedMethodError('error top is empty')
      }
      const node = this.top.value;
      return node;
    }
  isEmpty(){
    if(!this.top){
      return true
    }else{
      return false
    }
  }

  }
  class UnsupportedMethodError extends Error {
      constructor(message) {
          super(message);
          this.name = "UnsupportedMethodError";
      }
  }


class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();

  };




  enqueue(element) {

    this.stack1.push(element);

    console.log("Stack-1 elements are in the queue: ", this.stack1);

  }



  dequeue() {

    if (this.stack2.length === 0) {

      if (this.stack1.length === 0) {

        console.log(

          "Dequeue not possible because queue is empty..");

      }

      while (this.stack1.length > 0) {

        let x = this.stack1.pop();

        this.stack2.push(x);

      }

    }

    console.log("Element after Dequeue: " + this.stack2.pop());

  }

}



let q = new PseudoQueue;

q.enqueue(1);

q.enqueue(2);

q.enqueue(3)

q.enqueue(4)

q.dequeue();

q.dequeue()
console.log(q)
q.enqueue(5)

module.exports = PseudoQueue
