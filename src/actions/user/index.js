import * as types from 'constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function login(userInfo) {
  return {
    type: types.LOGIN,
    userInfo
  }
}

export function logout() {
  return {
    type: types.LOGOUT
  }
}

export function fetchUser(userId) {
  return {
    type: types.FETCH_USER,
    userId,
  }
}

export function checkUserSession() {
  return {
    type: types.CHECK_USER_SESSION
  }
}
