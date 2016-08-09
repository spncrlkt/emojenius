import { createSelector } from 'reselect'

export const getWords = (state) => {
  return state.admin.words;
}

export const getUsers = (state) => {
  return state.admin.users;
}
