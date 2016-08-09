import * as types from 'constants/ActionTypes'

export function loadWords(words) {
  return {
    type: types.LOAD_WORDS,
    words,
  };
}

export function fetchWords() {
  return {
    type: types.FETCH_WORDS,
  };
}

export function loadUsers(users) {
  return {
    type: types.LOAD_USERS,
    users,
  };
}

export function fetchUsers() {
  return {
    type: types.FETCH_USERS,
  };
}
