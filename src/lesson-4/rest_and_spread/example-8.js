'use strict';

const arr1 = [1, 2];
const arr2 = [3, 4];

// ES5 way
let concatArray = arr1.concat(arr2);
console.log(concatArray); // [ 1, 2, 3, 4 ]

// ES6 way
concatArray = [...arr1, ...arr2];
console.log(concatArray); // [ 1, 2, 3, 4 ]

// ES6 way
concatArray = [...arr1, 'Lectrum', ...arr2];
console.log(concatArray); // [ 1, 2, 'Lectrum', 3, 4 ]

const obj1 = { a: 111 };
const obj2 = { a: 222, b: 555 };

const obj3 = { a: 999, ...obj1 };
console.log(obj3);




