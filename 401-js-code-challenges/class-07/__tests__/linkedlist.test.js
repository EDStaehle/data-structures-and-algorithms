'use strict';

const LinkedList = require('../linkedList');

describe('Linked List', () => {
  let list = new LinkedList();
  list.add('a');
  list.add('b');
  list.add('c');

  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('Can successfully instantiate an empty linked list', () => {
    expect(new LinkedList).toBeInstanceOf(LinkedList);
  });
  it('accepts new nodes as expected', () => {
    // HEAD{a} -> {b} -> {c} -> null
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });
  it('Can properly insert into the linked list', () => {
    list.insert('newHead');

    expect(list.head.value).toEqual('newHead');
  });
  it('The head property will properly point to the first node in the linked list', () =>{
    expect(list.head.value).toEqual('newHead');
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    list.insert('newHead4');
    list.insert('newHead3');
    list.insert('newHead2');

    expect(list.head.value).toEqual('newHead2');
    expect(list.head.next.value).toEqual('newHead3');
    expect(list.head.next.next.value).toEqual('newHead4');
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    let trueResult = list.includes('a');
    expect(trueResult).toEqual(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let falseResult = list.includes('d');
    expect(falseResult).toEqual(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let newList = new LinkedList();
    newList.add('a');
    newList.add('b');
    newList.add('c');
    let listString = newList.toString();
    expect(listString).toEqual('{a} -> {b} -> {c} -> NULL');
  });
  it('Can successfully add a node to the end of the linked list, Can successfully add multiple nodes to the end of a linked list', () => {
    let newList = new LinkedList();
    newList.add('a');
    newList.add('b');
    newList.add('c');
    let listString = newList.toString();
    expect(listString).toEqual('{a} -> {b} -> {c} -> NULL');
  });
  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let newList = new LinkedList();
    newList.add('a');
    newList.add('b');
    newList.add('c');
    newList.insertBefore('b','z');
    let listString = newList.toString();
    expect(listString).toEqual('{a} -> {z} -> {b} -> {c} -> NULL');
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    let newList = new LinkedList();
    newList.add('a');
    newList.add('b');
    newList.add('c');
    newList.insertBefore('a','z');
    let listString = newList.toString();
    expect(listString).toEqual('{z} -> {a} -> {b} -> {c} -> NULL');
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    let newList = new LinkedList();
    newList.add('a');
    newList.add('b');
    newList.add('c');
    newList.insertAfter('b','z');
    let listString = newList.toString();
    expect(listString).toEqual('{a} -> {b} -> {z} -> {c} -> NULL');
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    let newList = new LinkedList();
    newList.add('a');
    newList.add('b');
    newList.add('c');
    newList.insertAfter('c','z');
    let listString = newList.toString();
    expect(listString).toEqual('{a} -> {b} -> {c} -> {z} -> NULL');
  });

  let newList = new LinkedList();
  newList.add('a');
  newList.add('b');
  newList.add('c');

  it('Where k is greater than the length of the linked list', () => {
    expect(newList.kthFromEnd(4)).toEqual('not in list');
  });
  it('Where k and the length of the list are the same', () => {
    expect(newList.kthFromEnd(2)).toEqual('a');
  });
  it('Where k is not a positive integer', () => {
    expect(newList.kthFromEnd(-1)).toEqual('not in list');
  });
  it('Where the linked list is of a size 1', () => {
    let singlelinkedlist = new LinkedList();
    singlelinkedlist.add(1);
    expect(singlelinkedlist.kthFromEnd(0)).toEqual(1);
  });
  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    expect(newList.kthFromEnd(2)).toEqual('a');
  });
});
