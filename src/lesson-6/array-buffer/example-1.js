'use strict';

const source = [1, 2];

const integer8Items = new Int8Array(source);
console.log('Integer 8');
console.log(`Length: ${ integer8Items.length }`); // 2
console.log(`Bytes: ${ integer8Items.byteLength }`); // 2
console.log(`First: ${ integer8Items[0] }`); // 1
console.log(`Second: ${ integer8Items[1] }`); // 2
console.log('----------');
