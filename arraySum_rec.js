"use strict";

// сумма чисел в массиве через рекурсию

const arr = [];

for (let i = 0; i < 19; i++) {
  arr.push(Math.floor(Math.random() * 30));
}

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

console.log(getSum_tco(arr) === arr.reduce((acc, cur) => acc + cur, 0));
console.log(getSum(arr) === arr.reduce((acc, cur) => acc + cur, 0));
