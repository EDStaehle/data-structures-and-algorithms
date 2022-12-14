class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalQueue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    const node = new Node(value);
    if(this.front === null){
      this.front = node;
      this.rear = node;
    }else{
      this.rear.next = node;
      this.rear = node;
    }

  }

  dequeue(pref){
    if(this.front === null){return 'exception';}
    let finder;
    let previous = this.front;
    if(this.front.pref === pref){
      finder = this.front.value
      this.front = this.front.next;
      return finder;
    }
    let current = this.front.next;
    while(current !== null){
      if(pref === current.value.pref){
        finder = current.value.value;
        previous = current.next
        break;
      }
      previous = current;
      current = current.next;
    }
    return finder;
  }
}
const cat3 = {
  pref: 'cat',
  value: 'val3'
};
const dog1 = {
  pref: 'dog',
  value: 'val1'
};

const dog2 = {
  pref: 'dog',
  value: 'val2'
};

const dog3 = {
  pref: 'dog',
  value: 'val3'
};

let q = new AnimalQueue();
q.enqueue(dog1);
q.enqueue(dog2);
q.enqueue(cat3);
q.enqueue(dog3);
console.log('--------',q);
q.dequeue('cat');
console.log(q)
console.log('---',q.front.next);
console.log('----',q.front.next.next);

module.exports = AnimalQueue;
