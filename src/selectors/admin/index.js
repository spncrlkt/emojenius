import { createSelector } from 'reselect'

export const getWords = (state) => {
  return state.admin.words.words;
}
