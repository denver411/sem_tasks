'use strict';

const compose = (...args) => {
  return a => {
    const f = ([x, ...xs]) => {
      return xs.length ? x(f(xs)) : x(a);
    };
    return f(args);
  };
};

const split = divider => str => {
  if (!divider || !str || typeof str !== 'string') return [];
  if (divider === '') return [...str];

  const f = ([x, ...xs], el) => {
    if (x == null) return [el];
    if (x !== divider) return f(xs, el + x);

    return el ? [el, ...f(xs, '')] : f(xs, '');
  };

  return f(str, '');
};

const reduce = (fn, initial) => arr => {
  const f = ([x, ...xs], fn, initial) => {
    return x == null ? initial : f(xs, fn, fn(x, initial));
  };

  return f(arr, fn, initial);
};

const splitToGroups = split('&');
const splitToKeyValue = split('=');
const getObject = reduce((el, acc) => {
  const [key, value] = splitToKeyValue(el);
  return {...acc, [key]: value};
}, {});

export const parseQueryParams = compose(
  getObject,
  splitToGroups,
);

const str = 'key=bdc809aee22230&locator=123456&k=kk778';

console.log(parseQueryParams(str));
