import fetch from 'isomorphic-fetch'

function fetchWord(word) {
  return fetch(`${ENV.apiHost}/word/${word}`)
  .then(response => {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(json => json.word)
  .catch(function(ex) {
    throw new Error(`Parsing failed: ${ex}`);
  });
}

function addWord(word) {
  return fetch(`${ENV.apiHost}/word/add/${word}`)
  .then(response => {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(json => {
    if (json.error) {
      throw new Error(json.error)
    }
    return json;
  })
}

function addDefinition({ word, definition, userId, authToken }) {
  return fetch(
    `${ENV.apiHost}/word/${word}/definition`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        definition,
        userId,
        authToken,
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
    if (json.error) {
      throw new Error(json.error)
    }
    return json;
  })
}

function deleteDefinition({ word, definitionId, userId, authToken }) {
  return fetch(
    `${ENV.apiHost}/word/${word}/definition/${definitionId}/delete`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        authToken,
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
    if (json.error) {
      throw new Error(json.error)
    }
    return json;
  })
}

function addVote({ definitionId, isUpvote, userId, authToken}) {
  return fetch(
    `${ENV.apiHost}/definition/${definitionId}/vote`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        authToken,
        isUpvote,
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
    if (json.error) {
      throw new Error(json.error)
    }
    return json;
  })
}

const wordApi = {
  fetchWord,
  addWord,
  addDefinition,
  deleteDefinition,
  addVote,
};

export default wordApi;
