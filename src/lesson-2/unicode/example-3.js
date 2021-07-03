'use strict';

function is32Bit(text) {
    return text.codePointAt(0) > 0xFFFF; // 0xFFFF = 65535 = 2^16
}

console.log(is32Bit('𩷶')); // true
console.log(is32Bit('a')); // false
