import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import searchApi from 'api/search';

import {
  loadSearchResults,
} from 'actions/search';


import {
  SEARCH,
} from 'constants/ActionTypes';

function* search(action) {
  try {
    const searchResults = yield call(searchApi.search, action.term);
    yield put(loadSearchResults(searchResults));
  }
  catch (error) {
    yield put(setError(error.message));
  }
}

export function* watchSearch() {
  yield* takeEvery(SEARCH, search)
}

