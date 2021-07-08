'use strict';

const map = new Map();
const jon = { name: 'Jon' };
const joe = { name: 'Joe' };

map.set(jon, 24);
map.set(joe, 25); // set not add

console.log(map.get(jon)); // 24
