'use strict';

function Person(name) {
    this.name = name;
    this.sayHi = () => console.log(`Hy, my name is ${this.name}!`);
}

const user = new Person('Jon');
user.sayHi();
console.log(typeof user); // ?

