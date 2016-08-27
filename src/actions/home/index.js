import * as types from 'constants/ActionTypes'

export function fetchHome() {
  return {
    type: types.FETCH_HOME,
  };
}

export function loadHome(home) {
  return {
    type: types.LOAD_HOME,
    home,
  };
}
