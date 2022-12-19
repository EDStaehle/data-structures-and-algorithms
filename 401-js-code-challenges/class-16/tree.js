'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class KeryNode {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k).fill(null)
  }
}
class
  KaryTree {
  constructor() {
    this.root = null
  }
}
class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() { // this is the most common traversal you will use. learn to traverse like with linked list.
    const results = [];
    //  recursive helper function
    const traverse = (node) => {
      // base case = do the thing
      results.push(node.value);


      //  left and right recursive cases
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    // get the recursive function started
    traverse(this.root);
    return results;
  }
  inOrder() {
    let results = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left)
      results.push(node.value);
      if (node.right) traversal(node.right)
    }
    traversal(this.root);
    return results;
  }
  postOrder() {
    let results = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    }
    traverse(this.root);
    return results;
  }
findMax() {
  let max = this.root.value;
  const traversal = (node) => {
    if (node.left) traversal(node.left)
    if(node.value > max ){max = node.value};
    if (node.right) traversal(node.right)
  }
  traversal(this.root);
  return max;
}
}

class BinaryTree extends Tree {
  constructor() {
    super();
    this.root = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.root) return this.root = node;
    const traverse = (node) => {
      if(node.value > value){
        if(node.left){
          traverse(node.left);
        }else{
          node.left = new Node(value)
          return;
        }
      }else{
        if(node.right){
          traverse(node.right);
        }else{
          node.right = new Node(value);
          return;
        }
      }
    };
      traverse(this.root);
  }

  contains(value){
    return this.postOrder().includes(value);
  }
}
module.exports = {Node, Tree, BinaryTree};
