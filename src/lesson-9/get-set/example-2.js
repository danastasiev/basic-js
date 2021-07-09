'use strict';

const name = 'Name';

class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get [`full${name}`] () {
        const { firstName, lastName } = this;

        return `${firstName} ${lastName}`;
    }

    set [`full${name}`] (newFullName) {
        const [ firstName, lastName ] = newFullName.split(' ');

        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const jon = new Person('Jon', 'Doe');
console.log(jon.fullName); // Jon Doe
