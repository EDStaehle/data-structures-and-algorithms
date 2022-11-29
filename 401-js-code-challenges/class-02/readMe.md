# shift in new number in array

Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process

[whiteboard](../assets/code-challenge-02.png)

## Approach & Efficiency

declare insertShiftArray function that takes an array as a parameter, and a value as a parameter

-create array literal

-create variable with the index value using the Math.ceil method, wrapping (array.length -1) / 2

-iterate over input array placing each index of the array the array until reaching index variable

-if findIdx equals current index insert new value from parameter

-insert remaining values of array at each index + 1

- return new array
