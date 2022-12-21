'use strict';

const { Node, Tree, BinaryTree } = require('./tree');
describe('Tree', () => {
  it('can instantiate a new tree', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(5);
  });
  it('traverses the tree as expected pre-order', () => {
    let tree = new Tree();
    tree.root = new Node(11);
    tree.root.left = new Node(15);
    tree.root.right = new Node(45);
    tree.root.left.left = new Node(6);
    tree.root.left.right = new Node(7);
    tree.root.right.right = new Node(8);
    expect(tree.preOrder()).toEqual([11, 15, 6, 7, 45, 8]);

  })
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });
  it('Can successfully instantiate a tree with a single node', () => {
    let tree = new BinaryTree();
    tree.add(10);
    expect(tree.root.value).toEqual(10);
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let tree = new BinaryTree();
    tree.add(40);
    tree.add(29);
    tree.add(76);
    expect(tree.root.value).toEqual(40);
    expect(tree.root.left.value).toEqual(29);
    expect(tree.root.right.value).toEqual(76);
  });
  test('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BinaryTree();
    tree.add(40);
    tree.add(25);
    tree.add(45);
    tree.add(20);
    tree.add(50);
    expect(tree.preOrder()).toEqual([40, 25, 20, 45, 50]);
  });
  test('Can successfully return a collection from an inOrder traversal', () => {
    let tree = new BinaryTree();
    tree.add(40);
    tree.add(25);
    tree.add(45);
    tree.add(20);
    tree.add(50);
    expect(tree.inOrder()).toEqual([20, 25, 40, 45, 50]);
  });
  test('Can successfully return a collection from a postOrder traversal', () => {
    let tree = new BinaryTree();
    tree.add(40);
    tree.add(25);
    tree.add(45);
    tree.add(20);
    tree.add(50);
    expect(tree.postOrder()).toEqual([20, 25, 50, 45, 40]);
  });
  test('should return as valuees as expeccted', () => {
    let tree = new BinaryTree();
    tree.add(1)
    expect(tree.breadthFirstTraverse(tree)).toEqual([1]);
  });
  test('should return value for a tree with two levels', () => {
    let tree = new BinaryTree();
    tree.add(1),
      tree.add(2);
    tree.add(3);

    expect(tree.breadthFirstTraverse(tree)).toEqual([1, 2, 3]);
  });
  test('should retrun correct values with a tree with 3 levels', () => {
    let tree = new BinaryTree();
    tree.add(1);
    tree.add(2);
    tree.add(4);
    tree.add(5);
    tree.add(3);
    tree.add(6);
    tree.add(7);
    expect(tree.breadthFirstTraverse(tree)).toEqual([1, 2, 4, 3, 5, 6, 7]);
  });
  test('should return correct values with a tree that has 4 levels', () => {
    let tree = new BinaryTree();
    tree.add(1);
    tree.add(2);
    tree.add(4);
    tree.add(8);
    tree.add(9);
    tree.add(5);
    tree.add(10);
    tree.add(11);
    tree.add(3);
    tree.add(6);
    tree.add(12);
    tree.add(13);
    tree.add(7);
    tree.add(14);
    tree.add(15);
    expect(tree.breadthFirstTraverse(tree)).toEqual([1, 2, 4, 3, 8, 5, 9, 6, 10, 7, 11, 12, 13, 14, 15]);
  });
  test('should return correct values if the tree only has one left child', () => {
    let tree = new BinaryTree();;
    tree.add(1);
    tree.add(2);
    expect(tree.breadthFirstTraverse(tree)).toEqual([1, 2]);
  });
  test('should return expected values for a tree with a single right child', () => {
    let tree = new BinaryTree();
    tree.add(1);
    tree.add(2);
    expect(tree.breadthFirstTraverse(tree)).toEqual([1, 2]);
  });
  test('should return expected values for a tree with a mix of even and odd values', () => {
    let tree = new BinaryTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    expect(tree.breadthFirstTraverse(tree)).toEqual([1, 2, 3]);
  });
});
