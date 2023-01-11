'use strict';

const leftJoin = require('./leftJoin');
const HashTable = require('./hashTable');


describe('left join', () => {
  let tableA = new HashTable(1024);
  tableA.set('diligent', 'employed');
  tableA.set('fond', 'enamored');
  tableA.set('guide', 'usher');
  tableA.set('outfit', 'garb');
  tableA.set('wrath', 'anger');

  let tableB = new HashTable(1024);
  tableB.set('diligent', 'idle');
  tableB.set('fond', 'averse');
  tableB.set('guide', 'follow');
  tableB.set('flow', 'jam');
  tableB.set('wrath', 'delight');

  it('works with lowercase', () => {
    let testItems = [
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight'],
      ['flow', null, 'jam']
    ];

    expect(leftJoin(tableA, tableB)).toEqual(testItems);
  });
});
