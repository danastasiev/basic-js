'use strict';

const user = {
    sayHi () {
        return 'Hello!';
    }
}

const person = {
    sayHi () {
        return 'Hello my friend!';
    }
}

const andrey = Object.create(user);
const jon = Object.create(person);

console.log('Andrey:', andrey.sayHi());
console.log('Jon:', jon.sayHi());

console.log(`\t`);

Object.setPrototypeOf(andrey, person);
console.log('Andrey:', andrey.sayHi());

Object.setPrototypeOf(jon, user);
console.log('Jon:', jon.sayHi());
