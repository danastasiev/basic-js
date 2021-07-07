'use strict';

function createNewPerson(name, age) {
    return {
        name,
        age
    }
}
console.log(createNewPerson('Jon', 25));

// ES6
const createHuman = (name, age) => ({ name, age });
console.log(createHuman('Joe', 24));
