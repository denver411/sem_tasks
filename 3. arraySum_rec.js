"use strict";

// сумма чисел в массиве через рекурсию
const getSum_tco = array => {
  const fn = ([x, ...xs], acc) => {
    if (x == null) return acc;

    return fn(xs, x + acc);
  };

  return fn(array, 0);
};

const getSum = ([x, ...xs]) => {
  return x == null ? 0 : x + getSum(xs);
};

//тесты
const generateArr = (length = 10, max = 10) => {
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max));
  }

  return arr;
};

const arr = generateArr(30, 30);

console.log(getSum_tco(arr) === arr.reduce((acc, cur) => acc + cur, 0));
console.log(getSum(arr) === arr.reduce((acc, cur) => acc + cur, 0));
