'use strict';

const buffer = new ArrayBuffer(3);
const view = new DataView(buffer);

const firstArray = new Int8Array([1]);
view.setInt8(0, firstArray);

const secondArray = new Int16Array([2]);
view.setInt16(1, secondArray);

const first = view.getInt8(0);
const second = view.getInt16(1);

console.log(`First: ${ first }`);
console.log(`Second: ${ second }`);
