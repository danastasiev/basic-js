'use strict';
const data = new Map();

data.set('title', 'eastern wisdom');
data.set('format', 'story');

for (const [key, value] of data) {
    console.log(`${key}: ${value}`);
}
