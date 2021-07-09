'use strict';
const people = ['Jon', 'Joe', 'Jim'];
const tracking = new Set([123, 456, 789]);
const data = new Map();

data.set('title', 'eastern wisdom');
data.set('format', 'story');

for (const entry of people.entries()) {
    console.log(entry);
}

for (const entry of tracking.entries()) {
    console.log(entry);
}

for (const entry of data.entries()) {
    console.log(entry);
}
