### higherOrLower

`higherOrLower(value1, value2)` returns a string indicating whether `value1` is `"higher"`, `"lower"`, or `"equal"` to `value2`.

You can assume that the arguments will be numbers.

```js
higherOrLower(5, 6); // => "lower"
higherOrLower(7, 5); // => "higher"
higherOrLower(6, 6); // => "equal"
```

### exclaim

Given a string, `exclaim(string)` will return the same string with `!` appended to the end.

```js
exclaim("Hello"); // >>> "Hello!"
exclaim("Goodbye"); // >>> "Goodbye!"
exclaim(""); // >>> "!"
```
### esrever

`esrever(array)` will return an array with elements that are the same as the given array, except in reversed order. Do not use the built-in `reverse` method.

```js
esrever([1, 2, 3]); // >>> [3, 2, 1]
esrever(["a", "b", "c", "d"]); // >>> ["d", "c", "b", "a"]
```

### buildNArray

`buildNArray(number)` returns an array of all integers from 1 to `n`. If `n` is 0 or negative, then an empty array is returned. 

```js
buildNArray(-555); // >>> []
buildNArray(3); // [1, 2, 3]
buildNArray(10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
### findLongestString

`findLongestString(string[])` returns the longest string in a given array of strings. If the array is empty, then an empty string is returned.

```js
findLongestString([]); // >>> ""
findLongestString(["a", "bc", "def", "gh"]); // >>> "def"
```
### evenAndOdd

`evenAndOdd(number[])` takes an array of numbers and returns a new array that contains two smaller arrays. The first element in the returned array should be an array with all of the even numbers from the original array. The second element in the returned array should be an array with all of the odd numbers from the original array.

```js
evenAndOdd([1, 2, 3, 4, 5, 6]); // >>> [[ 2, 4, 6 ], [ 1, 3, 5 ]]
evenAndOdd([10, 8, 6, 4, 2]); // >>> [[10, 8, 6, 4, 2], []]
```
### EXTRA: coinMachine

Our coin machine is broken! We need you to write a function that will take a number in cents as an argument and return the correct change in coins. The function should return an object with the number of quarters, dimes, nickels, and pennies needed to make the change.

```js
coinMachine(99); // => { quarters: 3, dimes: 2, nickels: 0, pennies: 4 }
```