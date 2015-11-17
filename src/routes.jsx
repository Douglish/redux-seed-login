"use strict"

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router'
import { UserContainer, Root, LoginContainer } from 'containers'
import { requireAuthentication } from 'components'

export default (
  <ReduxRouter>
    <Route path='/' component={Root}>
      <IndexRoute component={requireAuthentication(UserContainer)} />
      <Route path='login' component={LoginContainer} />
    </Route>
  </ReduxRouter>
);