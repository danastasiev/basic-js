'use strict';

const set = new WeakSet();
let key = {};

set.add(key);

console.log(set.has(key));

key = null;

console.log(set.has(key));
