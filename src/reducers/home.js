import {
  LOAD_HOME,
} from '../constants/ActionTypes'

import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable';

const homeInitialState = Immutable.fromJS({
  newDefs: [],
  newWords: [],
});

export default function home(state = homeInitialState, action) {
  switch (action.type) {
    case LOAD_HOME:
      return Immutable.fromJS(action.home);
    default:
      return state;
  }
}

