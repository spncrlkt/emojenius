import {
  SET_ERROR,
  CLEAR_ERROR,
} from '../constants/ActionTypes';

import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';

const snackbarInitialState = Immutable.fromJS({
  message: '',
  open: false,
});


function snackbar(state=snackbarInitialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return state.merge({
        message: action.message,
        open: true,
      });
    case CLEAR_ERROR:
      return snackbarInitialState;
    default:
      return state;
  }
}

export default combineReducers({
  snackbar,
})
