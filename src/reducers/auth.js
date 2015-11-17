"use strict"

import { authTypes } from 'constants';

export function authReducer(state={}, action) {
  switch (action.type) {
  case authTypes.AUTH_SET_USER:
    return {
      loginFailed: false,
      user: action.user
    }

  case authTypes.AUTH_FAILED:
    return {
      loginFailed: true
    }

  case authTypes.AUTH_DISCARD:
    return {
      user: null
    }

  }

  return state;
}