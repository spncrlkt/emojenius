import {
  LOAD_SEARCH_RESULTS,
} from '../constants/ActionTypes'

import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable';

function results(state=Immutable.Map({}), action) {
  switch (action.type) {
    case LOAD_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return state;
  }
}

export default combineReducers({
  results,
})
