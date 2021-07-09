'use strict';

function PersonType (name) {
    this.name = name;
}

PersonType.create = name => new PersonType(name);

PersonType.prototype.sayName = function () {
    console.log(this.name);
}

const jon = PersonType.create('Jon');
jon.sayName();
