'use strict';

// ES2015 Modules
import { str } from './source';
str = 'New string';

console.log(str); // Error: "str" is read-only.
