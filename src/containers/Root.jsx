"use strict"

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { LoginContainer } from 'containers'

class Root extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    let { user } = this.props;

    return (
      <div className="container">
        <h2>Bootstrap app</h2>
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // user: state.app.login.user
  };
}

export default connect(
  mapStateToProps
)(Root)
