import fetch from 'isomorphic-fetch'

import {
  getSelectedWordData,
  getSelectedWord,
} from 'selectors/word'

function fetchWord() {
  return (dispatch, getState) => {
    const state = getState();
    if (getSelectedWordData(state)) return;

    const selectedWord = getSelectedWord(state);
    if (!selectedWord) return;

    fetch(`${ENV.apiHost}/word/${selectedWord}`)
    .then(response => {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(json =>
      dispatch(loadWord(json.word))
    )
    .catch(function(ex) {
      throw new Error(`Parsing failed: ${ex}`);
    });
  }
}

function addWord(word) {
  return fetch(`${ENV.apiHost}/word/add/${word}`)
  .then(response => {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.json();
  })
}

function addDefinition(word, definition) {
  return (dispatch) => {
    fetch(
      `${ENV.apiHost}/word/${word}/definition`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          definition,
        })
      }
    )
    .then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(json => {
      console.log('addDefinition res: ' + JSON.stringify(json));
      // return dispatch(fetchWords())
    })
    .catch(function(ex) {
      throw new Error(`Parsing failed: ${ex}`);
    });
  }
}

const wordApi = {
  fetchWord,
  addWord,
  addDefinition,
};

export default wordApi;
