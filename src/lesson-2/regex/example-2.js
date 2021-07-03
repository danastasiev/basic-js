'use strict';

function codePointLength (text) {
    const result = text.match(/[\s\S]/gu);
    console.log(result);

    return result ? result.length : 0;
}

console.log('𩷶ab'.length); // 4
console.log(codePointLength('𩷶ab')); // 3
console.log(codePointLength('abc')); // 3
