import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import adminApi from 'api/admin';

import {
  loadWords,
} from 'actions/admin';

import {
  FETCH_WORDS,
  WORD_ADDED,
} from 'constants/ActionTypes';

export function* fetchWords() {
  const words = yield call(adminApi.fetchWords);
  yield put(loadWords(words));
}

export function* watchFetchWords() {
  yield* takeEvery(FETCH_WORDS, fetchWords)
}

export function* watchWordAdded() {
  yield* takeEvery(WORD_ADDED, fetchWords)
}

