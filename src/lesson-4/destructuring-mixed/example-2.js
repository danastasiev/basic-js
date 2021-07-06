'use strict';

const setCookie = (name, value, options) => {
    options = options || {};

    const secure = options.secure;
    const path = options.path;
    const domain = options.domain;
    const expires = options.expires;

    console.log(name, value); // type js
    console.log(options); // { secure: true, expires: 30000 }
};

setCookie('type', 'js', {
    secure:  true,
    expires: 30000
});

