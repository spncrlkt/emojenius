import fetch from 'isomorphic-fetch'

function fetchWords() {
  return fetch(`${ENV.apiHost}/words`)
  .then(response => {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.json();
  })
}

const adminApi = {
  fetchWords,
}

export default adminApi;
