'use strict';

// ES2015 Modules
import { printValue, changePrintValue } from './source';

printValue(); // printValue

changePrintValue();

printValue(); // function printValue was changed
printValue(); // function printValue was changed
