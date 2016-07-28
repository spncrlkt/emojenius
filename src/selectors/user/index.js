import { createSelector } from 'reselect'

export const isLoggedIn = (state) => {
  return !!state.user.twitter.userId;
}
