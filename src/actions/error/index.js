import * as types from 'constants/ActionTypes'

export function setError(message) {
  return {
    type: types.SET_ERROR,
    message,
  };
}

export function clearError() {
  return {
    type: types.CLEAR_ERROR,
  };
}
