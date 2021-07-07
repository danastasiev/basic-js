'use strict';

const source = [1, 2];

const integer16Items = new Int16Array(source);
console.log('Integer 16');
console.log(`Length: ${ integer16Items.length }`); // 2
console.log(`Bytes: ${ integer16Items.byteLength }`); // 4
console.log(`First: ${ integer16Items[0] }`); // 1
console.log(`Second: ${ integer16Items[1] }`); // 2
console.log('----------');
