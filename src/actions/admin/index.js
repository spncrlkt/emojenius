import * as types from 'constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function loadWords(words) {
  return {
    type: types.LOAD_WORDS,
    words,
  };
}

export function fetchWords() {
  return (dispatch) => {
    fetch(`${ENV.apiHost}/words`)
      .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(json =>
        dispatch(loadWords(json))
      )
      .catch(function(ex) {
        throw new Error(`Parsing failed: ${ex}`);
      })
  }
}
