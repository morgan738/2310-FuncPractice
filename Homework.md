### getFirst

`getFirst(any[])` returns the first element of the given array. You can assume that the given array is nonempty.

```js
getFirst([10, 9, 8, 7]); // >>> 10
```
### getLast

`getLast(any[])` takes an array and returns the last element of that array. You _cannot_ assume that the given array is nonempty.

```js
getLast(["hello", "hi", "greetings", "salutations", "hey"]); // >>> "hey"
getLast([]); // >>> null
```

### TLDR

Given a string, `isStringTooLong(string)` will return whether that string is too long. A string is too long if it has 26 or more characters.

```js
isStringTooLong("kitten"); // >>> false
isStringTooLong("cat"); // >>> false
isStringTooLong("Sphinx of black quartz, judge my vow."); // >>> true
```

### vote

`vote(age: number)` returns `"Who would you like to vote for?"` if the given `age` is at least 18; otherwise it returns `"You must be 18 or older to vote."`

```js
vote(49); // >>> "Who would you like to vote for?"
vote(12); // >>> "You must be 18 or older to vote."
```

### concatenateStrings

`concatenateStrings(a: string, b: string)` returns the two given strings concatenated together.

```js
concatenateStrings("hello", "world"); // >>> "helloworld"
concatenateStrings("another", "example") // >>> "anotherexample"
```

### sumToN

`sumToN(n: number)` returns the sum of all integers from 1 to `n`. If `n` is 0 or negative, then `0` is returned. You can assume that `n` is an integer.

**Use a loop!**

```js
sumToN(-2); // >>> 0
sumToN(8); // >>> 36
sumToN(23); // >>> 276
```

### shareLastDigit

`shareLastDigit(number, number)` takes two numbers and returns whether those two numbers share the same last digit.

_Hint:_ Use mod! %

_ExtraHint:_ What number can we always divide by so that the remainder will always be the last digit

```js
shareLastDigit(15, 43); // >>> false
shareLastDigit(23, 43); // >>> true
```

### findMax

`findMax(number[])` returns the greatest number in a given array of numbers. If the array is empty, then `-Infinity` is returned.

```js
findMax([]); // >>> -Infinity
findMax([-10, 234, 568, 29, 7]); // >>> 568
findMax([3, 3, 3]); // >>> 3
```

### studentBody

`studentBody(students: {name: string, age: number, grade: number}[])` is a function that takes an array of objects as an argument. Each object contains the name, age, and grade of a student. The function should return an object that contains the total number of students in the array, the average age of all students, and the average grade of all students.

```js
studentBody([
  { name: "Stella", age: 25, grade: 11 },
  { name: "Mohammed", age: 31, grade: 13 },
  { name: "Brian", age: 19, grade: 18 },
]); // => { total: 3, age: 25, grade: 14 }
```


### BONUS: bacteriaTime

`bacteriaTime(current: number, target: number)` returns the number of minutes required for the number of bacteria to grow from `current` to a number >= `target`. The number of bacteria doubles every 20 minutes, and you can assume that `current` will be a positive integer. If `target` is smaller than `current`, return the string `"target must be larger than current"`.

```js
bacteriaTime(10, 120); // >>> 80
```

