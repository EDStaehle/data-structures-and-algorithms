const insertionSort = require('./insertionSort');

describe('Insertion Sort', () => {
  it('can sort an array of numbers in ascending order', () => {
    const arr = [5, 3, 8, 1, 2, 4];
    const sortedArray = insertionSort(arr);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 8]);
  });

  it(' can sort an array of strings in alphabetical order', () => {
    const arr = ['c', 'a', 'b', 'e', 'd'];
    const sortedArray = insertionSort(arr);
    expect(sortedArray).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});
