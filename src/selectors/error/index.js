import { createSelector } from 'reselect'

export const errorMessage = (state) => {
  return state.getIn(['error', 'snackbar', 'message']);
}

export const snackbarOpen = (state) => {
  return state.getIn(['error', 'snackbar', 'open']);
}
