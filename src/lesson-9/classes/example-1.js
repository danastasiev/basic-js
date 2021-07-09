'use strict';

function PersonType (name) {
    this.name = name;
};

PersonType.prototype.sayName = function () {
    console.log('Constructor:', this.name);
}

const person = new PersonType('Jon');
person.sayName();

console.log(person instanceof PersonType); // true
console.log(person instanceof Object); // ← ?
