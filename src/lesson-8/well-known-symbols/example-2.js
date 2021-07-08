'use strict';

const Blog = function () {};
Blog.prototype[Symbol.toStringTag] = 'Blog class';

const blog = new Blog();
console.log(blog.toString()); // [object Blog class]