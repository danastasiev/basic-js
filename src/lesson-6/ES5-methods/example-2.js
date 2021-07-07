'use strict';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = data.filter((item) => {
    return item % 2 === 0;
});

console.log(oddNumbers); // [ 2, 4, 6, 8, 10 ]
