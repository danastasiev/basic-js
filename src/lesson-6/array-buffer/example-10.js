'use strict';

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);

view.setInt32(0, 1);
view.setInt32(4, 2);

const first = view.getInt32(0);
const second = view.getInt32(4);

console.log(first); // 1
console.log(second); // 2
