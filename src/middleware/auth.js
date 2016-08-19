import * as types from 'constants/ActionTypes';
import {
  userId,
  authToken,
} from 'selectors/user';

const authTypes = [
  types.ADD_DEFINITION,
  types.DELETE_DEFINITION,
  types.ADD_VOTE,
];

const auth = store => next => action => {
  if (authTypes.indexOf(action.type) != -1) {
    const state = store.getState();
    action.userId = userId(state);
    action.authToken = authToken(state);
  }
  return next(action)
}

export default auth;
