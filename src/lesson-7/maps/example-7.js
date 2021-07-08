'use strict';

const Person = (function () {
    const privateData = {};
    let privateId = 0;

    function Person(name) {
        Object.defineProperty(
            this,
            '_id',
            { value: privateId++ }
        );

        privateData[this._id] = {
            name
        };
    }

    Person.prototype.getName = function () {
        return privateData[this._id].name;
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


