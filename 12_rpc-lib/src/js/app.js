// @flow

import getData from '../lib-rpc';

const getExample = getData('some-url');
const params = {
  user_id: 1234,
  api_key: 'some-key'
};
const method = 'some-method';
const button = document.getElementById('get-data');

const showData = data => {
  const output = document.getElementById('show-data');
  output.textContent = data.reduce((acc, el) => `${acc}${el}, `, '');
};

const clickHandler = () => {
  getExample(method, params).then(data => {
    const res = data.result;
    console.log(res);
    showData(res);
  });
};

button.addEventListener('click', clickHandler);
