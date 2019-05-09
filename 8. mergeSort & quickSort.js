'use strict';
// функция reduce
const reduce = ([x, ...xs], fn, initial) => {
  return x == null ? initial : reduce(xs, fn, fn(x, initial));
};

// сортировка слиянием
const mergeSort = arr => {
  const merge = ([x1, ...xs1], [x2, ...xs2]) => {
    if (x1 == null) return [x2, ...xs2];
    if (x2 == null) return [x1, ...xs1];

    return x1 < x2
      ? [x1, ...merge(xs1, [x2, ...xs2])]
      : [x2, ...merge(xs2, [x1, ...xs1])];
  };

  const sort = arr => {
    if (arr.length <= 1) return arr;

    const m = Math.floor(arr.length / 2);
    let idx = 0;

    const halfArr = reduce(
      arr,
      (el,  acc) => {
        if (idx++ < m) {
          acc.left.push(el);
          return acc;
        } else {
          acc.right.push(el);
          return acc;
        }
      },
      { left: [], right: [] }
    );

    return merge(sort(halfArr.left), sort(halfArr.right));
  };

  return sort(arr);
};

// быстрая сортировка
const quickSort = ([x, ...xs]) => {
  if (x == null) return [];
  if (xs.length === 0) return [x];
  const halfArr = reduce(
    xs,
    (el, acc) => {
      if (el < x) {
        acc.less.push(el);
        return acc;
      } else {
        acc.more.push(el);
        return acc;
      }
    },
    { less: [], more: [] }
  );

  return [...quickSort(halfArr.less), x, ...quickSort(halfArr.more)];
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
