"use strict";

// поиск в массиве
const findInSortArray = (arr = [], num) => {
  let start = 0;
  let end = arr.length - 1;

  if (num == null || arr[start] > num || arr[end] < num || !arr.length) return -1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === num) return middle;
    if (arr[middle] > num) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};

const findInArray = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }

  return -1;
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
const sortArr = generateArr(30, 30).sort((a, b) => a - b);
console.log(sortArr);

console.log(findInSortArray(sortArr, 0), sortArr.includes(0));
console.log(findInArray(arr, 10) >= 0 === arr.includes(10));
