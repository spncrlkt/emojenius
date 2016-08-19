import { createSelector } from 'reselect'

export const searchResults = (state) => {
  return state.getIn(['search', 'results']);
}
