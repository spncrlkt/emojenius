import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  isLoggedIn,
} from 'selectors/user';


import {
  getWords,
  getUsers,
} from 'selectors/admin';

import {
  fetchWords,
  fetchUsers,
} from 'actions/admin';

import {
  addWord,
  addDefinition,
} from 'actions/word'

import Words from 'components/Admin/Words/'


class Admin extends Component {

  componentDidMount() {
    const {
      fetchWords,
      fetchUsers,
    } = this.props;

    fetchWords();
    fetchUsers();
  }

  render() {
    const {
      isLoggedIn,
      ...rest,
    } = this.props;

    return (
      <div>
        <h2>ADMIN</h2>
        <span>Logged in: { isLoggedIn ? 'YUP' : 'NOPE' }</span>
        <Words { ...rest }/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
    words: getWords(state),
    users: getUsers(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWords: bindActionCreators(fetchWords, dispatch),
    fetchUsers: bindActionCreators(fetchUsers, dispatch),
    addWord: bindActionCreators(addWord, dispatch),
    addDefinition: bindActionCreators(addDefinition, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)
