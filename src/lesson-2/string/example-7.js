'use strict';

let name = 'Jon';
let text = `Hello, ${ name }!`;

console.log(text); // Hello, Jon!

name = null;
text = `Hello, ${ name ? name : 'Guest' }!`;

console.log(text); // Hello, Guest!

name = 'Joe';
text = `Hello, ${ `my name is ${ name }` }!`;

console.log(text); // Hello, my name is Joe!
