'use strict';

var user = {
    'age of this person': 25,
    [2 ** 4]: 'computed property' // does not work in ES5
}

var firstName = 'first name';
var lastName = 'last name';

user[firstName] = 'Jon';
user[lastName] = 'Doe';

console.log(user['age of this person']);
console.log(user[firstName]);
console.log(user[lastName]);
console.log(user[16]);
