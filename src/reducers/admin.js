import {
  LOAD_WORDS,
  LOAD_USERS,
} from '../constants/ActionTypes'

import { combineReducers } from 'redux'

function words(state=[], action) {
  switch (action.type) {
    case LOAD_WORDS:
      return action.words;
    default:
      return state
  }
}

function users(state=[], action) {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    default:
      return state
  }
}

export default combineReducers({
  words,
  users,
})
