"use strict"

import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import { reducer as formReducer} from 'redux-form'
import { devTools  } from 'redux-devtools'
import { createHistory } from 'history'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import routes from 'routes'
import reducers from 'reducers'

import App from 'App'

const reducer = combineReducers({
  app: reducers,
  form: formReducer,
  router: routerStateReducer
});

const middleware = __DEV__ ?
  [ thunk, logger() ] :
  [ thunk ]

const store = compose(
  applyMiddleware(...middleware),
  reduxReactRouter({ createHistory }),
  __DEV__ && devTools()
)(createStore)(reducer);

render(
  <App routes={routes} store={store} />,
  document.getElementById('app')
)