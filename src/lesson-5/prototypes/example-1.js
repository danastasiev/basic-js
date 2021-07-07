'use strict';

const user = {
    name: 'Jon',
    sayName: function () {
        console.log(this.name);
    }
}

const junior = {
    name: 'Jon junior',
    __proto__: user
}

junior.sayName();
