'use strict';

const user = {
    name: 'Jon',
    age:  21
};

// ES6 syntax
const { name: firstName, age: date } = user;

console.log('Name:', firstName); // Name: Jon
console.log('Age:', date); // Age: 21
