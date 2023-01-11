# 401 challenge 33: leftJoin

## problem domain

Write a function called left join
Arguments: two hash maps
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

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

get the keys of table A
get the keys of table B
define an an array that will hold the results
use a for loop to iterate over table A keys:
define an array to store the results related to the current key
add the current key and value to the current key array
if table B has our current key:
add the table B value
else:
add null
push the current key array to results array

take the keys of table B and filter them for keys not in Table A since Table B may not be empty
for each key in filtered Table B:
push to the results array an array that contains:
[key, NULL, word]

return results array

## Big O

time: O(n) - its values are set to a variable without iterating over the the hashTable. space: O(n) - because the amount of time will depend on how big each hashTable is.

UML
![whiteboard](../assets/code-challenge-33-whiteboard.png)
