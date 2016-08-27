import fetch from 'isomorphic-fetch'

function fetchHome() {
  return fetch(`${ENV.apiHost}/home`)
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

const homeApi = {
  fetchHome,
}

export default homeApi;

