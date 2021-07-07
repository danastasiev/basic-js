'use strict';

const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);

view.setInt16(0, 1);
view.setInt16(2, 2);

const first = view.getInt16(0);
const second = view.getInt16(2);

console.log(first); // 1
console.log(second); // 2
