"use strict";

// реализация функции filter
// цикл
const newFilter = (fn, arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

// рекурсия
const newFilterRec = (fn, [x, ...xs]) => {
  if (x == null) {
    return [];
  }

  return fn(x) ? [x, ...newFilterRec(fn, xs)] : newFilterRec(fn, xs);
};

// рекурсия хвостовая
const newFilterRecTail = (fn, arr) => {
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
console.log(newFilter(el => el > 2, arr));
console.log(newFilterRec(el => el > 2, arr));
console.log(newFilterRecTail(el => el > 2, arr));
