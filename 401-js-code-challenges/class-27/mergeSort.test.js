const mergeSort = require('./mergeSort');


describe('Merge Sort', () => {

  it('should sort an array of integers in ascending order', () => {
    const unsortedArray = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(mergeSort(unsortedArray)).toEqual(sortedArray);
  });
  it('should sort an array of floating point numbers in ascending order', () => {
    const unsortedArray = [9.2, 2.1, 5.6, 6.7, 4.9, 3.3, 7.5, 10.1, 1.8, 8.4];
    const sortedArray = [1.8, 2.1, 3.3, 4.9, 5.6, 6.7, 7.5, 8.4, 9.2, 10.1];

    expect(mergeSort(unsortedArray)).toEqual(sortedArray);
  });
  it('should sort an array of strings in alphabetical order', () => {
    const unsortedArray = ['c', 'e', 'a', 'b', 'd', 'g', 'f'];
    const sortedArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    expect(mergeSort(unsortedArray)).toEqual(sortedArray);
  });
  it('should handle an empty array', () => {
    const unsortedArray = [];
    const sortedArray = [];

    expect(mergeSort(unsortedArray)).toEqual(sortedArray);
  });
  it('should handle an array with a single element', () => {
    const unsortedArray = [9];
    const sortedArray = [9];

    expect(mergeSort(unsortedArray)).toEqual(sortedArray);
  });

});
