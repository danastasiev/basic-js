'use strict';

// ES2015 Modules
import { obj, getObjValue } from './source';

obj.n = 2;

getObjValue(); // 2

console.log(obj.n); // 2
