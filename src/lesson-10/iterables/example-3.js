'use strict';
const isIterable = object =>
    typeof object[Symbol.iterator] === 'function';

console.log('[1, 2]', isIterable([1, 2]));
console.log('Andrey', isIterable('Andrey'));
console.log('new Map()', isIterable(new Map()));
console.log('new Set()', isIterable(new Set()));
console.log('new WeakMap()', isIterable(new WeakMap()));
console.log('new WeakSet()', isIterable(new WeakSet()));
console.log('{}', isIterable({}));
