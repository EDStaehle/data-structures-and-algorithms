const HashTable = require('./hashTable');
const repeatedWord = require('./repeatedWords');

describe('repeatedWord', () => {
  test('finds repeated word in string with all lower case characters', () => {
    const string = 'the quick brown fox jumps over the lazy dog';
    const splitString = string.split(' ').length
    const hashTable = new HashTable(splitString);
    expect(repeatedWord(string, hashTable)).toBe('the');
  });

  test('finds repeated word in string with mixed case characters', () => {
    const string = 'The quick brown fox jumps over the lazy dog';
    const splitString = string.split(' ').length
    const hashTable = new HashTable(splitString);
    expect(repeatedWord(string, hashTable)).toBe('the');
  });

  test('finds repeated word in string with punctuation marks', () => {
    const string = 'The quick brown fox jumps over the lazy dog!';
    const splitString = string.split(' ').length
    const hashTable = new HashTable(splitString);
    expect(repeatedWord(string, hashTable)).toBe('the');
  });

  test('returns null if no repeated words are found', () => {
    const string = 'The quick brown fox jumps over lazy cats';
    const splitString = string.split(' ').length
    const hashTable = new HashTable(splitString);
    expect(repeatedWord(string, hashTable)).toBe(null);
  });
})
