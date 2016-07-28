import shop from '../api/shop' // RM

import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function receiveProducts(products) {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
  }
}

export function getAllProducts() {
  return dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}

function addToCartUnsafe(productId) {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export function addToCart(productId) {
  return (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId))
    }
  }
}

export function checkout(products) {
  return (dispatch, getState) => {
    const cart = getState().cart

    dispatch({
      type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
      dispatch({
        type: types.CHECKOUT_SUCCESS,
        cart
      })
      // Replace the line above with line below to rollback on failure:
      // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
  }
}

/********/
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
      })
  }
}
