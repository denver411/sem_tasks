import store, {defaultState} from '../store/initialStore';
import {createBrowserHistory} from 'history';
import {parseQueryParams} from '../../../10. parse_query_params';

const history = createBrowserHistory();
const getState = () => store.getState();

const updateStateParam = param => {
  store.dispatch({
    type: param.name.toUpperCase(),
    param: param.type === 'checkbox' ? param.checked : param.value,
  });
};

const getInputValuesToState = e => {
  e.preventDefault();
  Array.from(e.target.elements)
    .filter(el => el.tagName === 'INPUT')
    .forEach(el => updateStateParam(el));
};

const updateState = state => {
  Object.entries(state).forEach(([key, value]) =>
    updateStateParam({name: key, value: value}),
  );
};

const getQuery = params => {
  const queryParamsOn = Object.keys(params).filter(el => params[el]);

  return queryParamsOn.length
    ? `?${queryParamsOn.map(el => `${el}=${params[el]}`).join('&')}`
    : '';
};

const updateLocation = data => {
  history.push(getQuery(data));
};

// state control buttons
document
  .querySelector('.param_type_state')
  .addEventListener('submit', getInputValuesToState);

document
  .querySelector('.param_type_state')
  .addEventListener('reset', () => updateState(defaultState));

// location control button
document.querySelector('.param_type_location').addEventListener('submit', e => {
  e.preventDefault();
  const params = Array.from(e.target.elements)
    .filter(el => el.tagName === 'INPUT')
    .reduce(
      (acc, el) => ({
        ...acc,
        [el.name]: el.type === 'checkbox' ? el.checked : el.value,
      }),
      {},
    );
  updateLocation(params);
});

document.querySelector('.param_type_location').addEventListener('reset', () => {
  updateLocation(defaultState);
});

const unsubscribe = store.subscribe(() => updateLocation(getState()));
const unlisten = history.listen((location, action) => {
  if (location.search === getQuery(getState())) return;
  updateState(parseQueryParams(location.search.slice(1)));
});
