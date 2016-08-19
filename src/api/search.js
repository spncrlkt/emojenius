import fetch from 'isomorphic-fetch'

function search(term) {
  return fetch(`${ENV.apiHost}/search/${term}`)
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

const searchApi = {
  search,
}

export default searchApi;
