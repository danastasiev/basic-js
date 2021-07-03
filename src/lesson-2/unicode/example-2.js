'use strict';

let text = '𩷶a';

// ES5
console.log(text.charCodeAt(0)); // 55399
console.log(text.charCodeAt(1)); // 56822
console.log(text.charCodeAt(2)); // 97

// ES6
console.log(text.codePointAt(0)); // 171510
console.log(text.codePointAt(1)); // 56822
console.log(text.codePointAt(2)); // 97
