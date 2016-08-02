import * as types from 'constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function login(userInfo) {
  return {
    type: types.LOGIN,
    userInfo
  }
}

export function logout() {
  return {
    type: types.LOGOUT
  }
}

export function fetchUser(userId) {
  return (dispatch) => {
    fetch(`${ENV.apiHost}/user/${userId}`)
    .then(response => {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(json =>
      dispatch(login(json))
    )
    .catch(function(ex) {
      throw new Error(`Parsing failed: ${ex}`);
    });
  }
}
