// @flow

type Params = {
  api_key: string,
  user_id: number,
  [key: string]: any
};

const counter = (): (() => number) => {
  let count = 0;
  return () => ++count;
};

const genId = counter();

const getData = (url: string) => (
  method: string,
  params: Params,
  headers: { [key: string]: string } = {}
) => {
  const fetchParams = {
    id: genId(),
    jsonrpc: '2.0',
    method: method,
    params: params
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(fetchParams)
  }).then(data => data.json(), data => console.log('Errooorrr::: ', data));
};

export default getData;
