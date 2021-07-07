'use strict';

const data = [1, 2, 3, 4, 5, 6];

const result = data.find((item, index, array) => {
    return item > 3;
});

console.log(result); // 4
