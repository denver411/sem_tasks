"use strict";

// поиск в массиве

const arr = [];
const sortArr = [];

for (let i = 0; i < 30; i++) {
  arr.push(Math.floor(Math.random() * 30));
  sortArr.push(Math.floor(Math.random() * 30));
}

sortArr.sort((a, b) => a - b);

const findInSortArray = (arr = [], num) => {
  let start = 0;
  let end = arr.length - 1;

  if (!num || arr[start] > num || arr[end] < num || !arr.length) return -1;

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

console.log(findInSortArray(sortArr, 0) >= 0 === sortArr.includes(0));
console.log(findInArray(arr, 10) >= 0 === arr.includes(10));
