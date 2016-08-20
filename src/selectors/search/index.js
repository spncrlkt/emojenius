import { createSelector } from 'reselect'

export const matchingWords = (state) => {
  return state.getIn(['search', 'results', 'matchingWords']);
}

export const matchingDefinitions = (state) => {
  return state.getIn(['search', 'results', 'matchingDefinitions']);
}
