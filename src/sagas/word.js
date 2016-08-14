import { takeEvery } from 'redux-saga'
import { put, call, select } from 'redux-saga/effects'

import wordApi from 'api/word';

import {
  loadWord,
  wordAdded,
  fetchWord as fetchWordAction,
  addDefinitionSuccess,
  addVoteSuccess as addVoteSuccessAction,
} from 'actions/word';

import {
  fetchUser
} from 'actions/user';

import {
  getSelectedWord,
} from 'selectors/word';

import {
  userId as selectUserId,
} from 'selectors/user';

import {
  ADD_WORD,
  FETCH_WORD,
  ADD_DEFINITION,
  ADD_DEFINITION_SUCCESS,
  ADD_VOTE,
  ADD_VOTE_SUCCESS,
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
  yield put(addDefinitionSuccess(action));
}

export function* watchAddDefinition() {
  yield* takeEvery(ADD_DEFINITION, addDefinition)
}

export function* watchAddDefinitionSuccess() {
  yield* takeEvery(ADD_DEFINITION_SUCCESS, fetchWord)
}

function* addVote(action) {
  yield call(wordApi.addVote, action);
  yield put(addVoteSuccessAction(action));
}

export function* watchAddVote() {
  yield* takeEvery(ADD_VOTE, addVote)
}

function* addVoteSuccess() {
  const selectedWord = yield select(getSelectedWord);
  const userId = yield select(selectUserId);
  yield put(fetchWordAction(selectedWord));
  yield put(fetchUser(userId));
}

export function* watchAddVoteSuccess() {
  yield* takeEvery(ADD_VOTE_SUCCESS, addVoteSuccess)
}
