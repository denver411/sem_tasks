"use strict";

// поиск в массиве через рекурсию

const arr = [];
const sortArr = [];

for (let i = 0; i < 19; i++) {
  arr.push(Math.floor(Math.random() * 30));
  sortArr.push(Math.floor(Math.random() * 30));
}

sortArr.sort((a, b) => a - b);

const findInSortArray = (array, number) => {
  const fn = (arr, num, start, end) => {
    if (start > end) return -1;

    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === num) return middle;
    arr[middle] > num ? (end = middle - 1) : (start = middle + 1);

    return fn(arr, num, start, end);
  };

  return fn(array, number, 0, array.length - 1);
};

const findInArray = (array, number) => {
  const fn = (arr, num, idx = 0) => {
    if (arr[idx] == null) return -1;
    if (arr[idx] === num) return idx;

    return fn(arr, num, ++idx);
  };

  return fn(array, number);
};

console.log(findInSortArray(sortArr, 10), sortArr);
console.log(findInArray(arr, 10), arr);
