'use strict';

const data = ['d', 'c', 'b', 'a'];

const string = data.reduceRight((previousItem, currentItem, index, array) => {
    return previousItem + currentItem;
}, '');

console.log(string); // abcd
