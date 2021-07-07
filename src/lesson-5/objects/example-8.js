'use strict';

const user = {
    'age of this person': 25
}

const firstName = 'first';
const lastName = 'last';
const suffix = 'name';

user[`${firstName} ${suffix}`] = 'Jon';
user[`${lastName} ${suffix}`] = 'Doe';

console.log(user['age of this person']);
console.log(user['first name']);
console.log(user['last name']);
