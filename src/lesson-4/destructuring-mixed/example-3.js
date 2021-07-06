'use strict';

const setCookie = (
    name,
    value,
    {secure, path, domain, expires}) => console.log(name, value, secure, expires); // type js true 30000

setCookie('type', 'js', {
    secure:  true,
    expires: 30000
});

