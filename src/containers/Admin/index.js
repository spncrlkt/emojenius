import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchWords,
} from 'actions/admin';

import {
  isLoggedIn,
} from 'selectors/user';


class Admin extends Component {
  componentDidMount() {
    const {
      fetchWords,
    } = this.props;

    fetchWords();
  }

  render() {
    return (
      <div>
        <h2>ADMIN</h2>
        <span>Logged in: { this.props.isLoggedIn ? 'YUP' : 'NOPE' }</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWords: bindActionCreators(fetchWords, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)
