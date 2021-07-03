'use strict';

const text = 'hello1 hello2 hello3';

const pattern = /hello\d\s?/;
const globalPattern = /hello\d\s?/g;
const stickyPattern = /hello\d\s?/y;

// Default lastIndex = 0

const result = pattern.exec(text);
const globalResult = globalPattern.exec(text);
const stickyResult = stickyPattern.exec(text);

console.log(result[0]); // hello1
console.log(globalResult[0]); // hello1
console.log(stickyResult[0]); // hello1
