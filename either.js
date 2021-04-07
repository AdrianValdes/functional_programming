// Definitions
// ====================
const Right = (x) => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  toString: `Right(${x})`,
});

const Left = (x) => ({
  chain: (f) => Left(x),
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  toString: `Left(${x})`,
});

const fromNullable = (x) => (x != null ? Right(x) : Left(null));

const findColor_ = (name) =>
  ({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name]);

const findColor_0 = (name) => {
  const found = { red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name];
  return found ? Right(found) : Left('missing');
};

const findColor = (name) =>
  fromNullable({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name]);

const res = () =>
  findColor('red')
    .map((x) => x.toUpperCase())
    .fold(
      () => 'no color!',
      (color) => color
    );

console.log(res());
