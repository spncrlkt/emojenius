import { combineReducers } from 'redux-immutable';
import user from './user';
import admin from './admin';
import word from './word';
import error from './error';

export default combineReducers({
  user,
  admin,
  word,
  error,
})
