'use strict';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const transformedData = data.map((item, index, array) => {
    return item * 2;
});

console.log(transformedData); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
