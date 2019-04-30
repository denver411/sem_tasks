"use strict";

// реализация функции map
// цикл
const newMap = (fn, arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
};

// рекурсия
const newMapRec = (fn, [x, ...xs]) => {
  return x == null ? [] : [fn(x), ...newMapRec(fn, xs)];
};

// рекурсия хвостовая
const newMapRecTail = (fn, arr) => {
  const f = (fn, [x, ...xs], acc) => {
    if (x == null) {
      return acc;
    }

    return f(fn, xs, [...acc, fn(x)]);
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
console.log(newMap(el => el * 2, arr));
console.log(newMapRec(el => el * 2, arr));
console.log(newMapRecTail(el => el * 2, arr));
