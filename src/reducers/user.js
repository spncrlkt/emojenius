import {
  LOGIN,
  LOGOUT,
} from '../constants/ActionTypes'

import { combineReducers } from 'redux'

const initialState = {
  userId: null,
  userName: null,
};

function twitter(state=initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        userId: action.userInfo.user_id,
        userName: action.userInfo.screen_name,
      })
    case LOGOUT:
      return Object.assign({}, state, {
        userId: null,
        userName: null,
      })
    default:
      return state
  }
}

export default combineReducers({
  twitter,
})
