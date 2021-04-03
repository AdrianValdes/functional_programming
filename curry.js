const add = (x, y) => x + y;

const toPair = (f) => ([x, y]) => f(x, y);
const result = toPair(add)([1, 2]);
// console.log('🚀 ~ file: curry.js ~ line 5 ~ result', result)

const curry = (f) => (x) => (y) => f(x, y);

const curriedAdd = curry(add);
const incrementBy1 = curriedAdd(1);
const incrementBy2 = curriedAdd(2);

// console.log(incrementBy1(3));
// console.log(incrementBy2(3))

const mult = (x, y) => x * y;
const curriedMult = curry(mult);
const multBy2 = curriedMult(2);

console.log(multBy2(4));

//modulo
const modulo = curry((x, y) => y % x);

const isOdd = modulo(2);

console.log(isOdd(2)); // 0 => false; 1 => true

//filter
const filter = curry((f, xs) => xs.filter(f));
const getOdds = filter(isOdd);
console.log(getOdds([1, 2, 3, 4, 5, 6, 7]));
