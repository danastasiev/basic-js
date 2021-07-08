'use strict';

const set = new Set();
set.add(5);
set.add('5');

console.log(set.has(5)); // true
console.log(set.has('5')); // true
console.log(set.has(6)); // false

