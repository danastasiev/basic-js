'use strict';

const text = '𩷶';

console.log(text.length); // 2
console.log(/^.$/.test(text)); // false
console.log(/^.$/u.test(text)); // true
