'use strict';

const buffer = new ArrayBuffer(16);
const view = new DataView(buffer);

view.setFloat64(0, 1);
view.setFloat64(8, 2);

const first = view.getFloat64(0);
const second = view.getFloat64(8);

console.log(first); // 1
console.log(second); // 2
