'use strict';

const map = new Map();
let key = { name: 'Jon' };

map.set(key, 25);

console.log(map);
console.log(Array.from(map.values())); // [ 25 ]
console.log(Array.from(map.keys())); // [ { name: 'Jon' } ]

