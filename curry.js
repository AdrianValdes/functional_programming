const add = (x, y) => x + y;

const toPair = (f) => ([x, y]) => f(x, y);
const result = toPair(add)([1, 2]);
// console.log(result);

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
