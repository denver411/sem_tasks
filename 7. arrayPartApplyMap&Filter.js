'use strict';

// partially apply реализация функций map и filter
// map
const newMapPartialApply = fn => arr => {
  const f = (fn, [x, ...xs], acc) => {
    if (x == null) {
      return acc;
    }

    return f(fn, xs, [...acc, fn(x)]);
  };

  return f(fn, arr, []);
};

// filter
const newFilterPartialApply = fn => arr => {
  const f = (fn, [x, ...xs], acc) => {
    if (x == null) {
      return acc;
    }

    acc = fn(x) ? [...acc, x] : acc;

    return f(fn, xs, acc);
  };

  return f(fn, arr, []);
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
const mPa = newMapPartialApply(el => el * 2);
const fPa = newFilterPartialApply(el => el > 5);
console.log(mPa(arr), fPa(arr));
