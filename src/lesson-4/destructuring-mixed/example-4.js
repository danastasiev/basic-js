'use strict';

const setCookie = (
    name,
    value,
    {secure, path, domain, expires}) => console.log(name, value, secure, expires);

setCookie('type', 'js');

