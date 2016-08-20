import {
  LOAD_SEARCH_RESULTS,
} from '../constants/ActionTypes'

import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable';

const resultsInitialState = Immutable.Map({
  matchingWords: Immutable.List([]),
  matchingDefinitions: Immutable.List([]),
});

function results(state=resultsInitialState, action) {
  switch (action.type) {
    case LOAD_SEARCH_RESULTS:
      return Immutable.fromJS(action.searchResults);
    default:
      return state;
  }
}

export default combineReducers({
  results,
})
