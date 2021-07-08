'use strict';

const set = new Set();
let key = {};

set.add(key);

console.log(set.size) // 1
key = null;
console.log(set.size) // 1
key = [...set][0];
console.log(key);
