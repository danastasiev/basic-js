'use strict';

const cars = ['Skoda', [ 'Audi', 'BMW' ] ];

const [ firstAuto, [ secondAuto ] ] = cars;

console.log('firstAuto', firstAuto); // firstAuto Skoda
console.log('secondAuto', secondAuto); // secondAuto Audi
console.log('third', third); // secondAuto Audi
