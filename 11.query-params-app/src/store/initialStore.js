import {createStore} from 'redux';
import reducer from './reducer';
import {parseQueryParams} from '../../../10. parse_query_params';

const locationParams = window.location.search.replace('?', '');
const params = parseQueryParams(locationParams);
const defaultState = {
  param_1: params.param_1 === 'true',
  param_2: params.param_2 === 'true',
  param_3: params.param_3 === 'true',
};

const store = createStore(reducer, defaultState);

export default store;
