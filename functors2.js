const Box = require('./box');

const first = (xs) => xs[0];

const halfTheFirstLargeNumber_ = (xs) => {
  const found = xs.filter((x) => x >= 20);
  const answer = first(found) / 2;
  return `The answer is ${answer}`;
};

const halfTheFirstLargeNumber = (xs) =>
  Box(xs)
    .map((xs) => xs.filter((x) => x >= 20))
    .map((found) => first(found) / 2)
    .fold((answer) => `The answer is ${answer}`);

const res = halfTheFirstLargeNumber([1, 4, 50]);
// console.log(res);

// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat_ = (str) => parseFloat(str.replace(/\$/, ''));

const moneyToFloat = (str) =>
  Box(str)
    .map((str) => str.replace(/\$/, ''))
    .fold(parseFloat);

// console.log(moneyToFloat('$5.00')); //5

// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat_ = (str) => {
  const float = parseFloat(str.replace(/\%/, ''));
  return float * 0.01;
};

const percentToFloat = (str) =>
  Box(str)
    .map((str) => str.replace(/\%/, ''))
    .map(parseFloat)
    .fold((number) => number * 0.01);

// console.log(percentToFloat('20%')); // 0.2

// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const applyDiscount_ = (price, discount) => {
  const cents = moneyToFloat(price);
  const savings = percentToFloat(discount);
  return cents - cents * savings;
};

const applyDiscount = (price, discount) =>
  Box(price)
    .map(moneyToFloat)
    .fold((cents) =>
      Box(discount)
        .map(percentToFloat)
        .fold((savings) => cents - cents * savings)
    );

const applyDiscount1 = (price, discount) =>
  Box(moneyToFloat(price)).fold((cents) =>
    Box(percentToFloat(discount)).fold((savings) => cents - cents * savings)
  );
console.log(applyDiscount1('$5.00', '20%'));
