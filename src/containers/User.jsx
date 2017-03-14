"use strict"

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { logout } from 'actions/auth'

export class UserContainer extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  render() {
    let { user } = this.props;

    return (
      <div>
        <h1>{ user.fullName }</h1>

        <div className="well">{ user.username }</div>

        <button className="btn btn-danger" onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.app.auth.user
  }
}

export default connect(
  mapStateToProps,
  { logout }
)(UserContainer)
