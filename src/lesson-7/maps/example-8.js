'use strict';

const Person = (function () {
    const privateData = new WeakMap();

    function Person(name) {
        privateData.set(this, { name });
    }

    Person.prototype.getName = function () {
        return privateData.get(this).name;
    }

    Person.prototype.getData = function () {
        return privateData;
    }

    return Person;
})();

const jon = new Person('Jon');

console.log(jon);
console.log(jon.getName());
console.log(jon.getData());

