'use strict';
const HashTable = require('./hashTable');
const { BinaryTree } = require('./tree');
function tree_intersection(tree1, tree2) {
  const hashTable = new HashTable();
  const intersections = new Set();
  function traversal(node) {
    if (node.left) traversal(node.left);
    hashTable.set(node.value, true);
    if (node.right) traversal(node.right);
  }
  traversal(tree1.root);

  function traverseSecondTree(node) {
    if (hashTable.has(node.value)) {
      intersections.add(node.value);
    }

    if (node.left) traverseSecondTree(node.left);
    if (node.right) traverseSecondTree(node.right);
  }
  traverseSecondTree(tree2.root);
  return intersections
};

let tree1 = new BinaryTree();
tree1.add(100);
tree1.add(15);
tree1.add(78);
tree1.add(200);
tree1.add(150);
tree1.add(10);
tree1.add(50);
tree1.add(45);
tree1.add(110);
tree1.add(145);
let tree2 = new BinaryTree();
tree2.add(100);
tree2.add(30);
tree2.add(27);
tree2.add(150);
tree2.add(16);
tree2.add(15);
tree2.add(27);
tree2.add(45);
tree2.add(300);
tree2.add(500);
console.log(tree_intersection(tree1, tree2));
module.exports = tree_intersection;
