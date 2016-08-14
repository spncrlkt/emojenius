import {
  LOAD_WORDS,
  LOAD_USERS,
} from '../constants/ActionTypes'

import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable';

function words(state=Immutable.List([]), action) {
  switch (action.type) {
    case LOAD_WORDS:
      return Immutable.fromJS(action.words);
    default:
      return state
  }
}

function users(state=Immutable.List([]), action) {
  switch (action.type) {
    case LOAD_USERS:
      return Immutable.fromJS(action.users);
    default:
      return state
  }
}

export default combineReducers({
  words,
  users,
})
