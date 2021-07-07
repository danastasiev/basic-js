'use strict';

const array = [1, 2, 3, 4, 5, 6];
array.copyWithin(3, 0, 2);

console.log(array); // [ 1, 2, 3, 1, 2, 6 ]
