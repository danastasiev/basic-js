'use strict';

const array = [1, 2, 3, 4, 5, 6];
array.fill(99, 2);

console.log(array); // [ 1, 2, 99, 99, 99, 99 ]
