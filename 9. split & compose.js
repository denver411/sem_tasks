'use strict';

const filter = (fn, [x, ...xs]) => {
  if (x == null) {
    return [];
  }

  return fn(x) ? [x, ...filter(fn, xs)] : filter(fn, xs);
};

const split = (divider, str) => {
  if (!divider || !str) return;
  if (divider === '') return [...str];

  const f = ([x, ...xs], el) => {
    if (x == null) return [el];

    return x === divider ? [el, ...f(xs, '')] : f(xs, el + x);
  };

  return f(str, '');
};

const moreThenFiveLetters = el => el.length > 5;

const getCount = arr => arr.length;

const compose = (
  getCount,
  filter,
  moreThenFiveLetters,
  split,
  divider
) => str => getCount(filter(moreThenFiveLetters, split(divider, str)));

const final = compose(
  getCount,
  filter,
  moreThenFiveLetters,
  split,
  ' '
);

const str = 'one two three morethenfiveletters onemorelongword';

console.log(final(str));
