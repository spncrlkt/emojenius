import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import userApi from 'api/user';

import {
  login,
  fetchUser as fetchUserAction,
} from 'actions/user';

import {
  FETCH_USER,
  LOGOUT,
  CHECK_USER_SESSION,
} from 'constants/ActionTypes';


function* fetchUser(action) {
  const user =  yield call(userApi.fetchUser, action);
  user.twitter.authToken = action.authToken;
  yield call(userApi.storeUserInSession, user);
  yield put(login(user));
}

export function* watchFetchUser() {
  yield* takeEvery(FETCH_USER, fetchUser)
}

export function* logout() {
  userApi.clearUserInSession();
}

export function* watchLogout() {
  yield* takeEvery(LOGOUT, logout)
}

export function* checkUserSession() {
  const user = userApi.getUserFromSession();
  if (user) {
    yield put(login(user));
    yield put(fetchUserAction(user.twitter.userId, user.twitter.authToken));
  }
}

export function* watchCheckUserSession() {
  yield* takeEvery(CHECK_USER_SESSION, checkUserSession)
}
