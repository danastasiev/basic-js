'use strict';

const data = [1, 2, 3];

data.forEach((item, index, array) => {
    console.log(`Item: ${ item }`);
    console.log(`Index: ${ index }`);
    console.log(`Array: ${ array }`);
    console.log('-----------------');
});

// Item: 1
// Index: 0
// Array: 1,2,3
// -----------------
//     Item: 2
// Index: 1
// Array: 1,2,3
// -----------------
//     Item: 3
// Index: 2
// Array: 1,2,3
// -----------------
