'use strict';

const map = new WeakMap();
let key = { name: 'Jon' };

map.set(key, 25);

console.log(map.get(key)); // 25

key = null;

console.log(map.get(key)); // undefined


