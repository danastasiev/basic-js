'use strict';

const cars = ['Skoda', 'Honda', 'Ford', 'Audi', 'BMW'];

let firstAuto = 'Mercedes';

console.log('firstAuto before', firstAuto); // firstAuto before Mercedes

[ firstAuto ] = cars;

console.log('firstAuto', firstAuto); // firstAuto Ford

