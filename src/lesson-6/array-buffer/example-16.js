'use strict';

const array = new Int8Array([1, 2, 3]);

array.concat();  // TypeError: array.concat is not a function
array.shift();   // TypeError: array.shift is not a function
array.pop();     // TypeError: array.pop is not a function
array.splice();  // TypeError: array.splice is not a function
array.push();    // TypeError: array.push is not a function
array.unshift(); // TypeError: array.unshift is not a function
