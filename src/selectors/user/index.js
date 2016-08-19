import { createSelector } from 'reselect'

export const isLoggedIn = (state) => {
  return !!state.getIn(['user', 'twitter', 'userId']);
}

export const userId = (state) => {
  return state.getIn(['user', 'twitter', 'userId']);
}

export const authToken = (state) => {
  return state.getIn(['user', 'twitter', 'authToken']);
}

export const votes = (state) => {
  return state.getIn(['user', 'content', 'votes']);
}

export const userDefinitions = (state) => {
  return state.getIn(['user', 'content', 'definitions']);
}
