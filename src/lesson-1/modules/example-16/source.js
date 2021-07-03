'use strict';

// ES2015 Modules

export function printValue() {
    console.log('printValue');
}

export function changePrintValue() {
    printValue = function () {
        console.log('function printValue was changed');
    }
}
