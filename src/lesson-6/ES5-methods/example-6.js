'use strict';

const data = [1, 2, 3, 66, 8];

const sum = data.reduce((prev, currentItem, index, array) => {
    return prev + currentItem;
});

const oddEven = data.reduce((acc, currentItem) => {
    currentItem % 2 !== 0 ? acc.odd.push(currentItem) : acc.even.push(currentItem);
    return acc;
}, {odd: [], even: []});

console.log(oddEven); // 6
