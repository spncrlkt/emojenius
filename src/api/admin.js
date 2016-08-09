import fetch from 'isomorphic-fetch'

function fetchWords() {
  return fetch(`${ENV.apiHost}/words`)
  .then(response => {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.json();
  }).then(json => json.words);
}

function fetchUsers() {
  return fetch(`${ENV.apiHost}/users`)
  .then(response => {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.json();
  }).then(json => json.users);
}

const adminApi = {
  fetchWords,
  fetchUsers,
}

export default adminApi;
