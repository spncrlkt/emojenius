import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import adminApi from 'api/admin';

import {
  loadWords,
  loadUsers,
} from 'actions/admin';

import {
  FETCH_WORDS,
  WORD_ADDED,
  FETCH_USERS,
  ADD_DEFINITION_SUCCESS,
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

export function* watchAddDefinitionSuccess() {
  yield* takeEvery(ADD_DEFINITION_SUCCESS, fetchWords)
}

export function* fetchUsers() {
  const users = yield call(adminApi.fetchUsers);
  yield put(loadUsers(users));
}

export function* watchFetchUsers() {
  yield* takeEvery(FETCH_USERS, fetchUsers)
}
