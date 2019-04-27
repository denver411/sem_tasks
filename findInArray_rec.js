"use strict";

// поиск в массиве через рекурсию

const arr = [];
const sortArr = [];

for (let i = 0; i < 19; i++) {
  arr.push(Math.floor(Math.random() * 30));
  sortArr.push(Math.floor(Math.random() * 30));
}

sortArr.sort((a, b) => a - b);

const findInSortArray = (arr, num, idx = 0) => {
  if (!num || arr[0] > num || arr[arr.length - 1] < num || !arr.length) return -1;
  if (arr.length === 1) return arr[0] === num ? idx : -1;
  
  const middle = Math.floor((0 + arr.length - 1) / 2);
  
  if (arr[middle] === num) return idx + middle;
  if (arr[middle] > num) {
    return findInSortArray(arr.slice(0, middle + 1), num, idx);
  } else {
    return findInSortArray(arr.slice(middle + 1), num, idx + middle + 1);
  }
};

const findInArray = (arr, num, idx = 0) => {
  if (idx >= arr.length) {
    return -1;
  } else {
    if (arr[idx] === num) return idx;
    return findInArray(arr, num, ++idx);
  }
};


console.log(findInSortArray(sortArr, 10), sortArr);
console.log(findInArray(arr, 10) === arr.indexOf(10));
