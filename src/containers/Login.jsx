"use strict"

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { loginSubmit } from 'actions/auth'
import { Login } from 'components'

class LoginContainer extends React.Component {
  static propTypes = {
    loginSubmit: PropTypes.func.isRequired,
    loginFailed: PropTypes.bool,
    next: PropTypes.string
  }

  render() {
    let {loginFailed, loginSubmit} = this.props;

    console.log("[LoginContainer] props: ", this.props);
    return (
      <div>
        { loginFailed &&
          <div className="alert alert-danger">Authentication failed</div>
        }

        <Login loginSubmit={loginSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginFailed: state.app.auth && state.app.auth.loginFailed,
    next: state.router.location.query.next
  };
}

export default connect(
  mapStateToProps,
  { loginSubmit }
)(LoginContainer)