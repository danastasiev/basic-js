'use strict';

function hasRegExpU () {
   try {
       var re = new RegExp('.', 'u');

       return true;
   } catch (e) {
       return false;
   }
}

console.log(hasRegExpU()); // true
