'use strict';


const AnimalQueue = require('./stacks-and-queues');

describe('Linked List', () => {
  let list = new AnimalQueue();
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
  list.enqueue(dog1);
  list.enqueue(dog2);
  list.enqueue(cat3);
  list.enqueue(dog3);



  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('Can successfully instantiate an empty linked list', () => {
    expect(new AnimalQueue).toBeInstanceOf(AnimalQueue);
  });
  it('can enqueue a dog', () => {
    const dog4 = {
      pref: 'dog',
      value: 'val4'
    }
    list.enqueue(dog4);
    expect(list.rear.value.value).toEqual('val4')
  })
  it('can successfully dequeue a cat', () => {
    expect(list.dequeue('cat')).toEqual('val3')
  })

});
