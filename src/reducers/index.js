import { combineReducers } from 'redux-immutable';
import user from './user';
import admin from './admin';
import word from './word';

export default combineReducers({
  user,
  admin,
  word,
})
