'use strict';

const buffer = new ArrayBuffer(2);
const view = new DataView(buffer);

view.setInt8(0, 1);
view.setInt8(1, 2);

const first = view.getInt8(0);
const second = view.getInt8(1);

console.log(first); // 1
console.log(second); // 2
