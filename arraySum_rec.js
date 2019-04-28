"use strict";

// сумма чисел в массиве через рекурсию

const arr = [];

for (let i = 0; i < 19; i++) {
  arr.push(Math.floor(Math.random() * 30));
}

const arraySum_tco = (array) => {
  const fn = ([el, ...arr], acc) => {
    if (el == null) return acc;
  
    return fn(arr, el + acc);
  };

  return fn(array, 0);
};

const arraySum = ([el, ...arr]) => {
  if (el == null) return 0;

  return el + arraySum(arr);
};

console.log(arraySum_tco(arr) === arr.reduce((acc, cur) => acc + cur, 0));
console.log(arraySum(arr) === arr.reduce((acc, cur) => acc + cur, 0));
