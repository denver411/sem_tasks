'use strict';

const partition = fn => arr =>
  arr.reduce(
    ([l, r], el, idx, arr) => {
      return fn(el, idx, arr) ? [[el, ...l], r] : [l, [el, ...r]];
    },
    [[], []]
  );

// сортировка слиянием
const halve = partition((el, idx, arr) => idx < arr.length / 2);

const mergeSort = arr => {
  const merge = (arr1, arr2) => {
    if (!arr1.length) return arr2;
    if (!arr2.length) return arr1;

    const [x1, ...xs1] = arr1;
    const [x2, ...xs2] = arr2;

    return x1 < x2
      ? [x1, ...merge(xs1, [x2, ...xs2])]
      : [x2, ...merge(xs2, [x1, ...xs1])];
  };

  const sort = arr => {
    if (arr.length <= 1) return arr;

    const [left, right] = halve(arr);

    return merge(sort(left), sort(right));
  };

  return sort(arr);
};

// быстрая сортировка

const quickSort = ([x, ...xs]) => {
  if (x == null) return [];
  if (xs.length === 0) return [x];

  const [less, more] = partition(el => el < x)(xs);

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
