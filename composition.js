const { compose, curry } = require('ramda');

const toUpper = (str) => str.toUpperCase();
const exclaim = (str) => str + '!';
const first = (xs) => xs[0];

const basicCompose = (f, g) => (x) => f(g(x));

const log = curry((tag, x) => (console.log(tag, x), x));
const shout = compose(exclaim, log('here'), toUpper);
console.log(shout('books'));
