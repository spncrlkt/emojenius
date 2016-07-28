import {
  LOGIN,
  LOGOUT,
} from '../constants/ActionTypes'

import { combineReducers } from 'redux'

function twitter(state={}, action) {
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
