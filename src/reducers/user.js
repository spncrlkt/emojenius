import {
  LOGIN,
  LOGOUT,
  ADD_VOTE,
  ADD_DEFINITION_SUCCESS,
} from '../constants/ActionTypes';

import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';

const twitterInitialState = Immutable.fromJS({
  userId: null,
  userName: null,
});

const contentInitialState = Immutable.fromJS({
  votes: {},
  definitions: {},
});


function twitter(state=twitterInitialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.merge({
        userId: action.userInfo.twitter.user_id,
        userName: action.userInfo.twitter.screen_name,
      });
    case LOGOUT:
      return twitterInitialState;
    default:
      return state;
  }
}

function content(state=contentInitialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.merge({
        votes: Immutable.Map(action.userInfo.votes),
        definitions: Immutable.Map(action.userInfo.definitions),
      });
    case LOGOUT:
      return contentInitialState;
    case ADD_VOTE:
      return state.setIn(
          ['votes', action.definitionId.toString()],
          action.isUpvote ? 1 : -1
      );
    case ADD_DEFINITION_SUCCESS:
      return state.setIn(
          ['definitions', action.definitionId.toString()],
          action.definition
       );
    default:
      return state;
  }
}

export default combineReducers({
  twitter,
  content,
})
