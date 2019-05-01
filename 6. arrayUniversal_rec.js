'use strict';

// рекурсия
const uniFn = ([x, ...xs], fn) => {
  if (x == null) {
    return fn ? [] : 0;
  }
  if (fn && typeof fn === 'function') {
    if (typeof fn(x) === 'boolean') {
      return fn(x) ? [x, ...uniFn(xs, fn)] : uniFn(xs, fn);
    }
    return [fn(x), ...uniFn(xs, fn)];
  }

  return x + uniFn(xs);
};

// рекурсия хвостовая
const uniFnTail = (arr, fn) => {
  const f = ([x, ...xs], fn, acc) => {
    if (x == null) {
      return acc;
    }

    if (fn && typeof fn === 'function') {
      if (typeof fn(x) === 'boolean') {
        acc = fn(x) ? [...acc, x] : acc;
        return f(xs, fn, acc);
      }
      return f(xs, fn, [...acc, fn(x)]);
    }

    return f(xs, null, x + acc);
  };
  const initial = fn ? [] : 0;

  return f(arr, fn, initial);
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
console.log(uniFn(arr));
console.log(uniFnTail(arr));
