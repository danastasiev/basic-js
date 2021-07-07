'use strict';

const source = [1, 2];

const float64Items = new Float64Array(source);
console.log('Float 64');
console.log(`Length: ${ float64Items.length }`); // 2
console.log(`Bytes: ${ float64Items.byteLength }`); // 16
console.log(`First: ${ float64Items[0] }`); // 1
console.log(`Second: ${ float64Items[1] }`); // 2
console.log('----------');
