'use strict';

const set = new Set(); // === Object.is()
const key1 = {};
const key2 = {};

set.add(key1);
set.add(key2);

console.log(set);
