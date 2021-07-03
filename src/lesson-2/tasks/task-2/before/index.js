'use strict';

import { format } from '../after';

const func = '😃';

console.log(format(func));

// decode emoji into unicode string;
// Output should be: \ud83d\ude03

