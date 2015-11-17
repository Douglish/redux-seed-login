"use strict"

import React, {PropTypes} from 'react'
import {reduxForm} from 'redux-form'

require('./Login.less');

class Login extends React.Component {
  static propTypes = {
    loginSubmit: PropTypes.func.isRequired,
    next: PropTypes.string
  }

  // TODO
  // we might figure out better
  // this is just a workaround to receive next link for redirect after login
  login(data, dispatch) {
    this.props.loginSubmit(data, dispatch, this.props.next);
  }

  render() {
    const {fields: {username, password}, handleSubmit} = this.props;

    return (
        <form className="form-signin well" onSubmit={handleSubmit(this.login.bind(this))}>
          <h2 clasName="form-signin-heading">Sign in</h2>
          <div className="form-group">
            <input className="form-control" type="text" {...username} placeholder="Username" />
          </div>

          <div className="form-group">
            <input className="form-control" type="password"  {...password} placeholder="Password" />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
          </div>
        </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  fields: ['username', 'password']
})(Login);