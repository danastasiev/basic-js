'use strict';

import { tag } from '../after';

const salary = {
    currency: 'UAH',
    amount: 10000
};

if (tag`Your salary is ${salary}` === 'Your salary is 10000, and it will be paid in UAH!') {
    console.log(tag`Your salary is ${salary}`);
} else {
   throw new Error('Please correct your function!');
}

// There shouldn't be any errors in console output.
// Output should be: Your salary is 10000, and it will be paid in UAH!

