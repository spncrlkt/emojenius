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
  setError,
} from 'actions/error';

import {
  getSelectedWord,
} from 'selectors/word';

import {
  userId as selectUserId,
  authToken as selectAuthToken,
} from 'selectors/user';

import {
  ADD_WORD,
  FETCH_WORD,
  ADD_DEFINITION,
  ADD_DEFINITION_SUCCESS,
  DELETE_DEFINITION,
  ADD_VOTE,
  ADD_VOTE_SUCCESS,
} from 'constants/ActionTypes';

function* addWord(action) {
  try {
    const word = yield call(wordApi.addWord, action.word);
    yield put(wordAdded());
  }
  catch (error) {
    yield put(setError(error.message));
  }
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
  try {
    const res = yield call(wordApi.addDefinition, action);
    const successAction = Object.assign({}, action, {
      definitionId: res.definition.id,
    });
    yield put(addDefinitionSuccess(successAction));
  }
  catch (error) {
    yield put(setError(error.message));
  }
}

export function* watchAddDefinition() {
  yield* takeEvery(ADD_DEFINITION, addDefinition)
}

export function* watchAddDefinitionSuccess() {
  yield* takeEvery(ADD_DEFINITION_SUCCESS, fetchWord)
}

function* deleteDefinition(action) {
  try {
    yield call(wordApi.deleteDefinition, action);
    yield put(fetchWordAction(action.word));

    const userId = yield select(selectUserId);
    const authToken = yield select(selectAuthToken);
    yield put(fetchUser(userId, authToken));
  }
  catch (error) {
    yield put(setError(error.message));
  }
}

export function* watchDeleteDefinition() {
  yield* takeEvery(DELETE_DEFINITION, deleteDefinition)
}


function* addVote(action) {
  try {
    yield call(wordApi.addVote, action);
    yield put(addVoteSuccessAction(action));
  }
  catch (error) {
    yield put(setError(error.message));
  }
}

export function* watchAddVote() {
  yield* takeEvery(ADD_VOTE, addVote)
}

function* addVoteSuccess() {
  const selectedWord = yield select(getSelectedWord);
  yield put(fetchWordAction(selectedWord));

  const userId = yield select(selectUserId);
  const authToken = yield select(selectAuthToken);
  yield put(fetchUser(userId, authToken));
}

export function* watchAddVoteSuccess() {
  yield* takeEvery(ADD_VOTE_SUCCESS, addVoteSuccess)
}
