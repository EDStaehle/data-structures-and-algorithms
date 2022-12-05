'use strict';


const LinkedList = require('./linkedlist');
describe('linked list',() => {
  let list = new LinkedList();
  it('accepts new nodes as expected', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
  })
  it('works as expected', () => {
    expect(true).toBeTruthy();
  });
  it('Can successfully instantiate an empty linked list', () => {
    expect(new LinkedList).toBeInstanceOf(LinkedList);
  });
  it('accepts new nodes as expected', () => {
    // HEAD{a} -> {b} -> {c} -> null
    expect(list.head.value).toEqual('c');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('a');
  });
  it('Can properly insert into the linked list', () => {
    list.insert('addedHead');

    expect(list.head.value).toEqual('addedHead');
  });
  it('The head property will properly point to the first node in the linked list', () =>{
    expect(list.head.value).toEqual('addedHead');
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    list.insert('addedHead4');
    list.insert('addedHead3');
    list.insert('addedHead2');

    expect(list.head.value).toEqual('addedHead2');
    expect(list.head.next.value).toEqual('addedHead3');
    expect(list.head.next.next.value).toEqual('addedHead4');
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    let trueResult = list.includes('a');
    expect(trueResult).toEqual(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let notInList = list.includes('t');
    expect(notInList).toEqual(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let newList = new LinkedList();
    newList.insert('c');
    newList.insert('b');
    newList.insert('a');
    let listString = newList.toString();
    expect(listString).toEqual('{a} -> {b} -> {c} -> NULL');
  });
});

