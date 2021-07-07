'use strict';

const source = [1, 2];

const integer32Items = new Int32Array(source);
console.log('Integer 32');
console.log(`Length: ${ integer32Items.length }`); // 2
console.log(`Bytes: ${ integer32Items.byteLength }`); // 8
console.log(`First: ${ integer32Items[0] }`); // 1
console.log(`Second: ${ integer32Items[1] }`); // 2
console.log('----------');
