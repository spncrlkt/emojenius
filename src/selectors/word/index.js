import Immutable from 'immutable';

import { createSelector } from 'reselect'
import {
  isLoggedIn,
  votes,
  userDefinitions,
} from 'selectors/user';

export const getSelectedWord = (state) => state.getIn(['word', 'selected'])
export const getWords = (state) => state.getIn(['word', 'words'])

export const getSelectedWordData = createSelector(
  [ getSelectedWord, getWords ],
  (selectedWord, words) => {
    return words.get(selectedWord) || Immutable.Map({});
   }
)

export const selectedWordDefinitions = createSelector(
    [getSelectedWordData],
    (selectedWordData) => {
      return selectedWordData && selectedWordData.get('definitions');
    }
)

export const getDefinitions = createSelector(
  [ isLoggedIn, selectedWordDefinitions, votes, userDefinitions ],
  (isLoggedIn, selectedWordDefinitions, votes, userDefinitions) => {
    if (!isLoggedIn) {
      return selectedWordDefinitions;
    }
    if (!selectedWordDefinitions) {
      return Immutable.List([]);
    }
    const definitions = selectedWordDefinitions.map((definition) => {
      const vote = votes.get(definition.get('id').toString());
      if (vote == 1) {
        definition = definition.set('userUpvoted', true);
      } else if (vote == -1) {
        definition = definition.set('userDownvoted', true);
      }
      if (userDefinitions.has(definition.get('id').toString())) {
        definition = definition.set('userOwns', true);
      }
      return definition;
    });
    return definitions;
  }
)

export const userHasDefinition = createSelector(
    [userDefinitions, getDefinitions],
    (userDefinitions, definitions) => {
      const userDefIds = userDefinitions.keySeq().toArray();
      if (definitions) {
        const defIds = definitions.map((def) => def.get('id').toString()).toJS();
        for (let i = 0; i < userDefIds.length; i++) {
          if (defIds.indexOf(userDefIds[i].toString()) != -1) {
            return true;
          }
        }
      }
      return false;
    }
)

