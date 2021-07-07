'use strict';

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);

view.setFloat32(0, 1);
view.setFloat32(4, 2);

const first = view.getFloat32(0);
const second = view.getFloat32(4);

console.log(first); // 1
console.log(second); // 2
