// @flow
import store from '../store/initialStore';

const getState = () => store.getState();
const renderNodes = state => {
  document
    .querySelectorAll('.param__item')
    .forEach(el => updateNode(el, state));
  window.history.pushState(
    null,
    null,
    window.location.origin + '/' + getQueryFromState(state),
  );
};

const changeHandler = e => {
  store.dispatch({
    type: e.target.name.toUpperCase(),
    param: e.target.value === 'on',
  });
  renderNodes(getState());
};

const updateNode = (node, state) => {
  const param = Array.from(node.children).reduce(
    (acc, el) => ({...acc, [el.children[0].value]: el.children[0]}),
    {},
  );

  if (state[param.on.name]) {
    param.off.checked = false;
    param.on.checked = true;
  } else {
    param.off.checked = true;
    param.on.checked = false;
  }

  param.on.addEventListener('change', changeHandler);
  param.off.addEventListener('change', changeHandler);
};

const getQueryFromState = params => {
  const queryParamsOn = Object.keys(params).filter(el => params[el]);

  return queryParamsOn.length
    ? `?${queryParamsOn.map(el => `${el}=${params[el]}`).join('&')}`
    : '';
};

document.addEventListener('DOMContentLoaded', () => renderNodes(getState()));
