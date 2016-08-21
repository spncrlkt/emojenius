import * as types from 'constants/ActionTypes'

export function search(term) {
  return {
    type: types.SEARCH,
    term,
  };
}

export function loadSearchResults(searchResults) {
  return {
    type: types.LOAD_SEARCH_RESULTS,
    searchResults,
  };
}

export function clearSearchResults() {
  return {
    type: types.CLEAR_SEARCH_RESULTS,
  };
}
