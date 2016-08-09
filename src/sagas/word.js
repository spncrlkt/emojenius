import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import wordApi from 'api/word';

import {
  loadWord,
  wordAdded,
  addDefinitionSuccess,
} from 'actions/word';

import {
  ADD_WORD,
  FETCH_WORD,
  ADD_DEFINITION,
  ADD_DEFINITION_SUCCESS,
} from 'constants/ActionTypes';

function* addWord(action) {
  const word = yield call(wordApi.addWord, action.word);
  yield put(wordAdded());
}

export function* watchAddWord() {
  yield* takeEvery(ADD_WORD, addWord)
}

function* fetchWord(action) {
  const word = yield call(wordApi.fetchWord, action.word);
  yield put(loadWord(word));
}

export function* watchFetchWord() {
  yield* takeEvery(FETCH_WORD, fetchWord)
}

function* addDefinition(action) {
  yield call(wordApi.addDefinition, action);
  yield put(addDefinitionSuccess());
}

export function* watchAddDefinition() {
  yield* takeEvery(ADD_DEFINITION, addDefinition)
}
