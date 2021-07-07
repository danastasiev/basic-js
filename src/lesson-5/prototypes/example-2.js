'use strict';

const parent = {
    name: 'Big daddy',
    sayName: function () {
        console.log(this.name);
    }
}

parent.sayName();

const user = {
    name: 'Jon',
    __proto__: parent
}

user.sayName();

const junior = {
    name: 'Jon junior',
    __proto__: user
}

junior.sayName();
