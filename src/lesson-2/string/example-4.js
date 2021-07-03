'use strict';

const text = 'Hello';

console.log(text.repeat(2)); // HelloHello

const indent = ' '.repeat(4);
let indentLevel = 1;
const newIndent = indent.repeat(++indentLevel);

console.log(indent + 'firstLevel'); // firstLevel with 4 indents
console.log(newIndent + 'secondLevel'); // secondLevel with 8 indents
