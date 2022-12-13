'use strict';


const PseudoQueue = require('../stack-queue-pseudo');

describe('Linked List', () => {
  let list = new PseudoQueue();
  list.enqueue(4);
  list.enqueue(4);
  list.enqueue(4);
  list.dequeue();
  list.dequeue();

  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('Can successfully instantiate an empty linked list', () => {
    expect(new PseudoQueue).toBeInstanceOf(PseudoQueue);
  });

});
