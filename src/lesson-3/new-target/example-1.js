'use strict';

function Entity(field) {
    if (new.target !== 'undefined') {
        this.field = field;
    } else {
        throw new Error('You must use new with Entity.');
    }
};

const example1 = new Entity('A');

const example2 = Entity.call(example1, 'B'); // Error: You must use new with Entity.