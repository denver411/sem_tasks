'use strict';

const str =
  'https://www.aeroflot.ru?key=bdc809aee22230&locator=123456&k=kk778';

const parseUrl = str => str
  .slice(str.indexOf('?') + 1)
  .split('&')
  .reduce((acc, el) => {
    const [key, value] = el.split('=');
    return { ...acc, [key]: value };
  }, {});

console.log(parseUrl(str));
