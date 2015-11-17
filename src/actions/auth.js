"use strict"

import { authTypes } from 'constants'
import Promise from 'bluebird'
import { pushState } from 'redux-router'

function logoutAction() {
  return {
    type: authTypes.AUTH_DISCARD
  };
}
/**
 * Discards user's token on logout
 */
function logout() {
  return dispatch => {
    dispatch(logoutAction());
    dispatch(pushState(null, "/login"));
  }
}

/**
 * Login success action creator
 * @param {Object} user - user data from server
 */
function loginSuccess(user) {
  return {
    type: authTypes.AUTH_SET_USER,
    user
  }
}

function loginError() {
  return {
    type: authTypes.AUTH_FAILED
  }
}
// TODO:
// This is not a action creator as it's doing something and dispatched an action
// We might use actionCreators and actions to separate this

/**
 * Login submit handler
 * @param {Object} data - form data
 * @param {Function} dispatch - store dispatch method
 */
function loginSubmit(data, dispatch, next) {
  // simulate asynchronous login request
  // because we use form, it injects dispatch as second argument

  // if we don't use form, we need to use thunk middleware and return function
  // more information in thunk middleware

  var promise = new Promise((resolve, reject) => {
    setTimeout( () => {
      // this is recevied from backend, but now simulated
      if ( data.username == 'harry' && data.password === 'heslo' ) {
        const userData = {
          username: 'johndoe',
          fullName: 'John Doe',
          authToken: '12uj-s21as-s8d7a-skk2'
        }

        resolve(userData);
      } else {
        reject(new Error("auth failed"));
      }
    }, 800);
  })

  return promise.then( (userData) => {
    dispatch(loginSuccess(userData));
    dispatch(pushState(null, next));

  }, () => dispatch(loginError()));
}

function getUser(state) {
  return state.app.user;
}

export {
  loginSubmit,
  logout,
  getUser
}