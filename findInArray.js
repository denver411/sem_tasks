'use strict'

const arr = [];
const sortArr = [];

for (let i = 0; i < 30; i++) {
  arr.push(Math.floor(Math.random() * 100));
  sortArr.push(Math.floor(Math.random() * 100));
}

sortArr.sort((a,b) => a - b);

const findInSortArray = (arr, num) => {
  const array = [...arr];
  let start = 0;
  let end = array.length - 1;
  let middle = 0;

  while (start < end) {
    middle = Math.floor(start + (end - start) / 2);

    if(array[middle] === num) return middle;
    if(array[middle] > num) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  if(array[start] === num) return start;
  if(array[end] === num) return end;

  return -1;
}

const findInArray = (arr, num) => {
  const array = [...arr];
  
  for (let i = 0, l = array.length; i < l; i++) {
    if(array[i] === num) return i;
  }
  
  return -1;
}
