import {
  LOAD_WORD,
  SET_SELECTED_WORD,
  ADD_VOTE,
} from '../constants/ActionTypes'

import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable';

function words(state=Immutable.Map({}), action) {
  switch (action.type) {
    case LOAD_WORD:
      if (action.word) {
        return state.set(action.word.title, Immutable.fromJS(action.word));
      }
      return state;
    case ADD_VOTE:
      return state.updateIn(
        [action.word, 'definitions'],
        (definitions) => {
          const voteDefId = action.definitionId.toString();
          return definitions.update(
            definitions.findIndex((def) => def.get('id') === voteDefId),
            (definition) => {
              let upvotes = definition.get('upvotes');
              let downvotes = definition.get('downvotes');
              if (action.isUpvote) {
                upvotes++;
              } else {
                downvotes++;
              }
              return definition.merge({
                upvotes,
                downvotes,
              });
            }
          )
        }
      );
    default:
      return state;
  }
}

function selected(state=null, action) {
  switch (action.type) {
    case SET_SELECTED_WORD:
      return action.word;
    default:
      return state;
  }
}

export default combineReducers({
  selected,
  words,
})
