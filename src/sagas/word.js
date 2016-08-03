import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import wordApi from 'api/word';

import {
  loadWord,
  wordAdded,
} from 'actions/word';

import {
  ADD_WORD,
} from 'constants/ActionTypes';

export function* addWord(action) {
  const word = yield call(wordApi.addWord, action.word);
  yield put(wordAdded());
}

export function* watchAddWord() {
  yield* takeEvery(ADD_WORD, addWord)
}

