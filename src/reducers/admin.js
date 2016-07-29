import {
  LOAD_WORDS
} from '../constants/ActionTypes'

import { combineReducers } from 'redux'

const initialState = {};

function words(state=initialState, action) {
  switch (action.type) {
    case LOAD_WORDS:
      return Object.assign({}, state, {
        words: action.words,
      })
    default:
      return state
  }
}

export default combineReducers({
  words,
})
