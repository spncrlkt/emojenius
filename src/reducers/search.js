import {
  SEARCH,
  LOAD_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS,
} from '../constants/ActionTypes'

import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable';

const resultsInitialState = Immutable.Map({
  isEmoji: null,
  matchingWords: Immutable.List([]),
  matchingDefinitions: Immutable.List([]),
});

const termInitialState = '';

function results(state = resultsInitialState, action) {
  switch (action.type) {
    case LOAD_SEARCH_RESULTS:
      return Immutable.fromJS(action.searchResults);
    case CLEAR_SEARCH_RESULTS:
      return resultsInitialState;
    default:
      return state;
  }
}

function term(state = termInitialState, action) {
  switch (action.type) {
    case SEARCH:
      return action.term;
    default:
      return state;
  }
}

export default combineReducers({
  results,
  term,
})
