'use strict';
const numbers = [1, 2, 3];
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
