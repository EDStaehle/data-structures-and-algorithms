# 401 challenge 32: Tree-Intersection

Find common values in 2 binary trees. Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees

## API

Implementation of a Hashtable Class with the following method:

function treeIntersection
Arguments: {Binary Tree} leftTree, {Binary Tree} rightTree
Returns: {Array}
This method accepts 2 Binary Trees and returns an Array of values found in both Binary Trees

## Testing

Tests will cover these cases:

test to see trees without values
test to see trees without repeated value
test to see if function has at least one repeated value
Input and Output
Input:

Input Tree 1 Input Tree 2

Output: [100,160,125,175,200,350,500]

## Approach & Efficiency

The approach I will use during this challenge is the "Single-responsibility principle", which means that the methods I write will be resuable.

The strategy is to traverse one tree and place all values from that tree into a HashTable. Then, traverse the second tree. With each iteration, the hashtable will be checked to see if any intergers match the original. If they do, those integers will be placed into an array. If they do not match, they will be implemented into the hashtable. Last but not least, the array will be returned free of duplicate integers.

Big O:
time: O(n^2) - because it has to traverse over two different trees to obtain an answer space: O(log n) - because the amount of time will depend on how big each binary tree is.

UML
![whiteboard](../assets/class-32-code-challenge.png)
