'use strict';

// рекурсия
const uniFn = ([x, ...xs], fn, initial) => {
  return x == null ? initial : uniFn(xs, fn, fn(x, initial));
};

// рекурсия хвостовая
const uniFnTail = (arr, fn, initial) => {
  const f = ([x, ...xs], acc) => {
    if (x == null) {
      return acc;
    }

    return f(xs, fn(x, acc));
  };

  return f(arr, initial);
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
console.log(arr);
console.log(
  uniFn(
    arr,
    (el, acc) => {
      return el > 5 ? [...acc, el] : acc;
    },
    []
  )
);
console.log(uniFn(arr, (el, acc) => [...acc, el * 2], []));
console.log(uniFn(arr, (el, acc) => el + acc, 0));
console.log(
  uniFnTail(
    arr,
    (el, acc) => {
      return el > 5 ? [...acc, el] : acc;
    },
    []
  )
);
console.log(uniFnTail(arr, (el, acc) => [...acc, el * 2], []));
console.log(uniFnTail(arr, (el, acc) => el + acc, 0));
