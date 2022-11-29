# Reverse an Array

Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Whiteboard Process

[whiteboard](../assets/401-challenge-01.png)

## Approach & Efficiency

Solution algorithm:

declare a function named reverseArray that takes an array as a parameter

create a front variable and assign the first index of the input array
create end variable and dynamically assign the last index of the input array

while end index is greater than the front index
   --create a temp variable and assign the front value

   -- assign array at end to array at  front

   -- assign temp to array at end

   -- increment front variable

   -- decrement end variable

return modified array
