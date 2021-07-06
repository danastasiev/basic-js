'use strict';

const user = {
    name: 'Jon',
    age:  21
};

let name = 'Andrey';
let age = 24;

console.log('Name before:', name); // Name before: Andrey
console.log('Age before:', age); // Age before: 24

// ES6 syntax
({ name, age } = user);

console.log('Name:', name); // Name: Jon
console.log('Age:', age); // Age: 21
