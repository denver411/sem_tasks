'use strict';

// реализация функции filter

const arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 10));
}

// цикл
const newFilter = (fn, arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const condition = fn(arr[i], i, arr);
    if (condition) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

// рекурсия
const newFilterRec = (fn, arr) => {
  const f = (fn, [x, ...xs]) => {
    if (x == null) {
      return [];
    }

    const condition = fn(x, arr.length - xs.length, arr);

    return condition ? [x].concat(f(fn, xs)) : f(fn, xs);
  };

  return f(fn, arr, []);
};

// рекурсия хвостовая
const newFilterRecTail = (fn, arr) => {
  const f = (fn, [x, ...xs], newArr) => {
    if (x == null) {
      return newArr;
    }

    if (fn(x, newArr.length, arr)) {
      newArr.push(x);
    }

    return f(fn, xs, newArr);
  };

  return f(fn, arr, []);
};

console.log(arr);
console.log(newFilter(el => el > 2, arr));
console.log(newFilterRec(el => el > 2, arr));
console.log(newFilterRecTail(el => el > 2, arr));
