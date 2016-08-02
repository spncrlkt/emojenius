import {
  LOAD_WORD,
  SET_SELECTED_WORD
} from '../constants/ActionTypes'

import { combineReducers } from 'redux'

function words(state={}, action) {
  switch (action.type) {
    case LOAD_WORD:
      return Object.assign({}, state, {
          [action.word.title]: action.word
      });
    default:
      return state;
  }
}

function selected(state=null, action) {
  switch (action.type) {
    case SET_SELECTED_WORD:
      return action.word;
    default:
      return state;
  }
}

export default combineReducers({
  selected,
  words,
})
