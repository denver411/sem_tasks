export default function reducer(state, action) {
  switch (action.type) {
    case 'PARAM_1':
      return {...state, param_1: action.value};
    case 'PARAM_2':
      return {...state, param_2: action.value};
    case 'PARAM_3':
      return {...state, param_3: action.value};
    default:
      return state;
  }
}
