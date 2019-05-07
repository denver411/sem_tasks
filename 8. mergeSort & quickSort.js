'use strict';

// сортировка слиянием
const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const f = ([x1, ...xs1], [x2, ...xs2], acc) => {
    if (x1 == null || x2 == null) {
      return [...acc, ...(x1 == null ? [x2, ...xs2] : [x1, ...xs1])];
    }

    return x1 <= x2
      ? f(xs1, [x2, ...xs2], [...acc, x1])
      : f([x1, ...xs1], xs2, [...acc, x2]);
  };
  const middle = Math.floor(arr.length / 2);

  return f(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)), []);
};

// быстрая сортировка
const quickSort = ([x, ...xs]) => {
  if (x == null) return [];
  const less = xs.filter(el => el <= x);
  const more = xs.filter(el => el > x);

  return [...quickSort(less), x, ...quickSort(more)];
};

//тесты
const generateArr = (length = 10, max = 10) => {
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max));
  }

  return arr;
};

const arr = generateArr(10, 100);
console.log(arr);
console.log(mergeSort(arr));
console.log(quickSort(arr));
