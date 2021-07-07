import {
    Entity,
    talk,
    age
} from '../after';

const bender = new Entity({
    id:        2716057,
    firstName: 'Bender',
    surName:   'Bending',
    lastName:  'Rodriguez',
    sex:       'robot'
});

Object.setPrototypeOf(bender, talk);

bender.say();
bender.sayAge(); // hm undefined? Lets fix it...

Object.setPrototypeOf(bender, age);
bender.fixAge(4) // now I'm 4 years old, let's check it...

Object.setPrototypeOf(bender, talk);
bender.sayAge(); // no more undefined :)

// But now I can not change my age, and I can not use setPrototypeOf function anymore...
// I need to have methods from two prototypes in one entity, hm...
// But I can not do this in JavaScript, or can?

Object.assign(talk, age); // let's change my age without changing the prototype
bender.fixAge(5);
bender.sayAge(); // Happy birthday, now I'm five years old.
