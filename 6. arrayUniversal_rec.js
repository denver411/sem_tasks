'use strict';

// рекурсия
const uniFn = ([x, ...xs], fn, initial) => {
  if (x == null) {
    return initial;
  }

  return fn(x, uniFn(xs, fn, initial));
};

// рекурсия хвостовая
const uniFnTail = ([x, ...xs], fn, initial) => {
  return x == null ? initial : uniFnTail(xs, fn, fn(x, initial));
};

//тесты
const generateArr = (length = 10, max = 10) => {
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max));
  }

  return arr;
};

const arr = generateArr();

// uniFn tests
console.log(arr);
console.log(
  uniFn(
    arr,
    (el, acc) => {
      return el > 5 ? [el, ...acc] : acc;
    },
    []
  )
);
console.log(uniFn(arr, (el, acc) => [el * 2, ...acc], []));
console.log(uniFn(arr, (el, acc) => el + acc, 0));

// uniFnTail tests
console.log(
  uniFnTail(
    arr,
    (el, acc) => {
      return el > 5 ? [el, ...acc] : acc;
    },
    []
  )
);
console.log(uniFnTail(arr, (el, acc) => [el * 2, ...acc], []));
console.log(uniFnTail(arr, (el, acc) => el + acc, 0));
