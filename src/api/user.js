import fetch from 'isomorphic-fetch'

function storeUserInSession(userInfo) {
  sessionStorage.user = JSON.stringify(userInfo);
}

function clearUserInSession() {
  sessionStorage.user = null;
}

function getUserFromSession() {
  return sessionStorage.user && JSON.parse(sessionStorage.user);
}

function fetchUser({ userId }) {
  return fetch(`${ENV.apiHost}/user/${userId}`)
  .then(response => {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.json();
  })
  .catch(function(ex) {
    throw new Error(`Parsing failed: ${ex}`);
  });
}

const userApi = {
  storeUserInSession,
  clearUserInSession,
  getUserFromSession,
  fetchUser,
};

export default userApi;
