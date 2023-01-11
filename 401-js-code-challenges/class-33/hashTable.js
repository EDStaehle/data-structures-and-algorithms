'use strict';
class Node {
  constructor(value) {
    this.value = value;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    // using reducer pattern
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    let position = this.hash(key);
    let data = { [key]: value };

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.value = data;
    } else {
      // bucket but only holds one
      let bucket = new Node(data);
      this.buckets[position] = bucket;
    }
  }

  get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let value = bucket.value[key];
      return value;
    }
  }

  has(key) {
    let position = this.hash(key);
    return this.buckets[position] !== null;
  }

  keys() {
    let keys = [];
    this.buckets.forEach(bucket => {
      let bucketKeys = Object.keys(bucket.value);
      keys = [...keys, ...bucketKeys];
    });
    return keys;
  }
}
module.exports = HashTable;
