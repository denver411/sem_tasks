'use strict'

// реализация функции map

const arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 10));
}

// цикл
const newMap = (fn, arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i, arr));
  }

  return newArr;
};

// рекурсия
const newMapRec = (fn, arr) => {
  const f = (fn, [x, ...xs]) => {
    if (x == null) {
      return [];
    }

    return [fn(x, arr.length - xs.length - 1, arr)].concat(f(fn, xs));
  }

  return f(fn, arr, [])
};

// рекурсия хвостовая
const newMapRecTail = (fn, arr) => {
  const f = (fn, [x, ...xs], newArr) => {
    if (x == null) {
      return newArr;
    }

    return f(fn, xs, [...newArr, fn(x, newArr.length, arr)]);
  }

  return f(fn, arr, [])
};

console.log(newMapRecTail(el => el * 2, [2,2,2,2,2]));