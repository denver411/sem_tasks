import {createStore} from 'redux';
import reducer from './reducer';

export const defaultState = {
  param_1: false,
  param_2: '',
  param_3: 0,
};

const store = createStore(reducer, defaultState);

export default store;
