'use strict';

function Entity(field) {
    if (this instanceof Entity) {
        this.field = field;
    } else {
        throw new Error("You must use new with Entity.");
    }
};

const example1 = new Entity('A');
const example2 = Entity('B'); // Error: You must use new with Entity.