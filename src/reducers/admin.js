import {
  LOAD_WORDS
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

export default combineReducers({
  words,
})
