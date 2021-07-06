'use strict';

const user = {
    name: 'Jon',
    age:  21
};

// ES6 syntax
const { name, age } = user;

console.log('Name:', name); // Name: Jon
console.log('Age:', age); // Age: 21
