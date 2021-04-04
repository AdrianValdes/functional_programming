const { compose, curry, last, prop } = require('ramda');

const toUpper = (str) => str.toUpperCase();
const exclaim = (str) => str + '!';
const first = (xs) => xs[0];

const basicCompose = (f, g) => (x) => f(g(x));

const log = curry((tag, x) => (console.log(tag, x), x));
const shout = compose(exclaim, toUpper);
// console.log(shout('books'));

// Example Data
const CARS = [
  { name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
  {
    name: 'Spyker C12 Zagato',
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false,
  },
  {
    name: 'Jaguar XKR-S',
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false,
  },
  { name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
  {
    name: 'Aston Martin One-77',
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  },
  {
    name: 'Pagani Huayra',
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false,
  },
];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

// const isLastInStock = (cars) => {
//   var reversed_cars = _.last(cars);
//   return _.prop('in_stock', reversed_cars);
// };

const istLastInStock = compose(prop('in_stock'), last);
console.log(istLastInStock(CARS));
