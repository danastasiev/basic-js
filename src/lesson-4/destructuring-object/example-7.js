'use strict';

const user = {
    name: 'Jon'
};

// ES6 syntax
const { name: firstName, surName: lastName = 'Doe', age = 18  } = user;

console.log('First name:', firstName); // First name: Jon
console.log('Last name:', lastName); // Last name: Doe
console.log('Age:', age); // Age: 18
