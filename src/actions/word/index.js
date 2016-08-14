import * as types from 'constants/ActionTypes'

export function setSelected(word) {
  return {
    type: types.SET_SELECTED_WORD,
    word,
  };
}

export function loadWord(word) {
  return {
    type: types.LOAD_WORD,
    word,
  };
}

export function addWord(word) {
  return {
    type: types.ADD_WORD,
    word,
  };
}

export function wordAdded() {
  return {
    type: types.WORD_ADDED,
  };
}

export function fetchWord(word) {
  return {
    type: types.FETCH_WORD,
    word,
  };
}

export function addDefinition(word, definition, userId) {
  return {
    type: types.ADD_DEFINITION,
    word, definition, userId,
  };
}

export function addDefinitionSuccess({ word }) {
  return {
    type: types.ADD_DEFINITION_SUCCESS,
    word,
  };
}

export function addVote(word, definitionId, userId, isUpvote) {
  return {
    type: types.ADD_VOTE,
    word, definitionId, userId, isUpvote,
  };
}

export function addVoteSuccess({definitionId, isUpvote}) {
  return {
    type: types.ADD_VOTE_SUCCESS,
    definitionId, isUpvote,
  };
}
