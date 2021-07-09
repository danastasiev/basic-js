'use strict';

class PersonClass {
    constructor (name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }
}

const jon = new PersonClass('Jon');
jon.sayName();

console.log(jon instanceof PersonClass); // true
console.log(jon instanceof Object); // true
console.log(typeof PersonClass); // function
