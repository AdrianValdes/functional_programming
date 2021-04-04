const { compose } = require('ramda');

const toUpper = (str) => str.toUpperCase();
const exclaim = (str) => str + '!';
const first = (xs) => xs[0];

const basicCompose = (f, g) => (x) => f(g(x));

const shout = compose(exclaim, toUpper);
console.log(shout('books'));
