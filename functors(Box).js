// BOX
// Box is a functor because it has a map method
const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  toString: `Box(${x})`,
});

/*The function below just keeps accumulating state, nothing's connected, data isn't 
flowing linearly, it is instead accumulating state for each of these lines
 to communicate with the next line.  */

const nextCharForNumberString = (str) => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
};

/*  On the other hand, what we are doing here is we are trapping the state. 
    Each argument is gone forever after that map. I don't have to think about it anymore.
    So I don't have to worry about trimmed being used down here somewhere. */

const nextCharForNumberStringWithBox = (str) =>
  Box(str)
    .map((x) => x.trim())
    .map((x) => parseInt(x))
    .map((num) => new Number(num + 1))
    .fold(String.fromCharCode);

console.log(nextCharForNumberStringWithBox('  64'));
