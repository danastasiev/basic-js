'use strict';

const text = '𩷶';

// ES5
console.log(text.length); // 2

console.log(text.charAt(0)); // ""
console.log(text.charAt(1)); // ""

console.log(text.charCodeAt(0)); // 55399
console.log(text.charCodeAt(1)); // 56822

console.log(/^.$/.test(text)); // false
