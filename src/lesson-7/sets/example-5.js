'use strict';

const set = new Set();
set.add(5);
set.add('5');

console.log('\n*****************INITIAL****************');
console.log(set.has(5)); // true
console.log(set.has('5')); // true
console.log(set.size);

set.delete(5);
console.log('\n*****************DELETE****************');
console.log(set.has(5)); // false
console.log(set.has('5')); // true
console.log(set.size);

set.clear()
console.log('\n*****************CLEAR****************');
console.log(set.has(5)); // false
console.log(set.has('5')); // true
console.log(set.size);
