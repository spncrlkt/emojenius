import { combineReducers } from 'redux-immutable';

import admin from './admin';
import search from './search';

import user from './user';
import word from './word';
import error from './error';

export default combineReducers({
  admin,
  search,
  user,
  word,
  error,
})
