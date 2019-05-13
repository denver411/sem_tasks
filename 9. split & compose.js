'use strict';

const split = (divider, str) => {
  if (!divider || !str) return;
  if (divider === '') return [...str];

  const f = ([x, ...xs], el) => {
    if (x == null) return [el];

    return x === divider ? [el, ...f(xs, '')] : f(xs, el + x);
  };

  return f(str, '');
};

const str = 'one two three';

console.log(split(' ', str));
