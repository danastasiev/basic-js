'use strict';

function Entity(field) {
    if (new.target === Entity) {
        this.field = field;
    } else {
        throw new Error("You must use new with Entity.");
    }
};

function SecondEntity(field) {
    Entity.call(this, field);
};

const example1 = new Entity('A');
const example2 = new SecondEntity('B'); // Error: You must use new with Entity.