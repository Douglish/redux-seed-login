"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';

export function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps() {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.isAuthenticated) {
        let redirectAfterLogin = this.props.location.pathname;
        this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
      }
    }

    render() {
      return (
          <div>
              {this.props.isAuthenticated === true
                  ? <Component {...this.props}/>
                  : null
              }
          </div>
      )
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: state.app.auth && !!state.app.auth.user
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}