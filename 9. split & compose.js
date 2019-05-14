'use strict';

const filter = fn => arr => {
  const f = (fn, [x, ...xs]) => {
    if (x == null) {
      return [];
    }

    return fn(x) ? [x, ...f(fn, xs)] : f(fn, xs);
  };

  return f(fn, arr);
};

const filterLongWords = filter(el => el.length > 5);

const split = divider => str => {
  if (!divider || !str || (typeof str !== 'string')) return [];
  if (divider === '') return [...str];

  const f = ([x, ...xs], el) => {
    if (x == null) return [el];
    if (x !== divider) return f(xs, el + x);

    return el ? [el, ...f(xs, '')] : f(xs, '');
  };

  return f(str, '');
};

const splitByGap = split(' ');

const compose = (f1, f2) => arg => f1(f2(arg));

const resFn = compose(
  filterLongWords,
  splitByGap
);

const str = 'one  two three      morethenfiveletters onemorelongword';

console.log(resFn(str));
