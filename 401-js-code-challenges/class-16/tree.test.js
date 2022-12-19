'use strict';

const {Node,Tree,BinaryTree}=require('./tree');
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
  it('traverses the tree as expected pre-order', ()=> {
    let tree = new Tree();
    tree.root = new Node(11);
    tree.root.left = new Node(15);
    tree.root.right = new Node(45);
    tree.root.left.left = new Node(6);
    tree.root.left.right = new Node(7);
    tree.root.right.right = new Node(8);
    expect(tree.preOrder()).toEqual([11,15,6, 7,45, 8]);

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
  test('Can return true if value is contained within the tree when contains method is called', () => {
    let tree = new BinaryTree();
    tree.add(35);
    tree.add(27);
    tree.add(56);
    tree.add(28);
    tree.add(59);
    expect(tree.contains(56)).toBe(true);
  });
  test('Can return false if value is contained within the tree when contains method is called', () => {
    let tree = new BinaryTree();
    tree.add(35);
    tree.add(27);
    tree.add(56);
    tree.add(28);
    tree.add(59);
    expect(tree.contains(3)).toBe(false);
  });
  test('can detrimine the max value in a binary tree', () => {
    let tree = new BinaryTree();
    tree.add(40);
    tree.add(25);
    tree.add(45);
    tree.add(20);
    tree.add(50);
    expect(tree.findMax()).toBe(50)
  })
})
