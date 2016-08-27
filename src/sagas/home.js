import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import homeApi from 'api/home';

import {
  loadHome,
} from 'actions/home';


import {
  FETCH_HOME,
} from 'constants/ActionTypes';

import {
  setError,
} from 'actions/error';

function* fetchHome(action) {
  try {
    const home = yield call(homeApi.fetchHome);
    yield put(loadHome(home));
  }
  catch (error) {
    yield put(setError(error.message));
  }
}

export function* watchFetchHome() {
  yield* takeEvery(FETCH_HOME, fetchHome)
}

