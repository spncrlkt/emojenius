import { createSelector } from 'reselect'

export const getWords = (state) => {
  return state.getIn(['admin', 'words']);
}

export const getUsers = (state) => {
  return state.getIn(['admin', 'users']);
}
