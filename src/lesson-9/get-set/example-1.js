'use strict';

class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName () {
        const { firstName, lastName } = this;

        return `${firstName} ${lastName}`;
    }

    set fullName (newFullName) {
        const [ firstName, lastName ] = newFullName.split(' ');

        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const jon = new Person('Jon', 'Doe');
const descriptor = Object.getOwnPropertyDescriptor(
    Person.prototype,
    'fullName'
);

console.log(descriptor);
console.log(jon.fullName);

jon.fullName = 'Homer Simpson';

console.log(jon.fullName);
