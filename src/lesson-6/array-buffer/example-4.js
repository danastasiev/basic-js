'use strict';

const source = [1, 2];

const float32Items = new Float32Array(source);
console.log('Float 32');
console.log(`Length: ${ float32Items.length }`); // 2
console.log(`Bytes: ${ float32Items.byteLength }`); // 8
console.log(`First: ${ float32Items[0] }`); // 1
console.log(`Second: ${ float32Items[1] }`); // 2
console.log('----------');
