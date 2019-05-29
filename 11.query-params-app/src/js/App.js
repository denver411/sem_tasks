import {createBrowserHistory} from 'history';
import store, {defaultState} from '../store/initialStore';
import {updateParam} from '../store/actions';
import {parseQueryParams} from '../../../10. parse_query_params';

const history = createBrowserHistory();
const getState = () => store.getState();

const getActionName = el => {
  switch (el.name) {
    case 'param_1':
      return 'PARAM_1';
    case 'param_2':
      return 'PARAM_2';
    case 'param_3':
      return 'PARAM_3';
    default:
      return undefined;
  }
};

const getInputValue = el => (el.type === 'checkbox' ? el.checked : el.value);

const updateStateParam = el => {
  store.dispatch(updateParam(getActionName(el), getInputValue(el)));
};

const checkExistInState = el => {
  const currentState = getState();
  const value = el.type === 'checkbox' ? el.checked : el.value;

  return currentState[el.name] == value ? false : true;
};

const getInputValuesToState = e => {
  e.preventDefault();
  [...e.target.elements]
    .filter(el => el.tagName === 'INPUT')
    .filter(checkExistInState)
    .forEach(updateStateParam);
};

const updateStateFromObject = state => {
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
  .addEventListener('reset', () => updateStateFromObject(defaultState));

// location control button
document.querySelector('.param_type_location').addEventListener('submit', e => {
  e.preventDefault();
  const formData = [...e.target.elements]
    .filter(el => el.tagName === 'INPUT')
    .reduce(
      (acc, el) => ({
        ...acc,
        [el.name]: el.type === 'checkbox' ? el.checked : el.value,
      }),
      {},
    );
  updateLocation(formData);
});

document.querySelector('.param_type_location').addEventListener('reset', () => {
  updateLocation(defaultState);
});

const unsubscribe = store.subscribe(() => updateLocation(getState()));
const unlisten = history.listen((location, action) => {
  if (location.search === getQuery(getState())) return;
  updateStateFromObject(parseQueryParams(location.search.slice(1)));
});

document.addEventListener('beforeunload', () => {
  unsubscribe();
  unlisten();
});
