import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getSelectedWordData,
  getDefinitions,
} from 'selectors/word';

import {
  isLoggedIn,
  userId,
} from 'selectors/user';

import {
  setSelected,
  fetchWord,
  addDefinition,
  deleteDefinition,
  addVote,
} from 'actions/word';

import WordComponent from 'components/Word';

class Word extends Component {

  componentDidMount() {
    const {
      fetchWord,
      setSelected,
      params,
    } = this.props;

    setSelected(params.title);
    fetchWord(params.title);
  }

  render() {
    return (
      <div>
        <WordComponent { ...this.props }/>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  console.log('mstp');
  return {
    word: getSelectedWordData(state),
    isLoggedIn: isLoggedIn(state),
    userId: userId(state),
    definitions: getDefinitions(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSelected: bindActionCreators(setSelected, dispatch),
    fetchWord: bindActionCreators(fetchWord, dispatch),
    addDefinition: bindActionCreators(addDefinition, dispatch),
    deleteDefinition: bindActionCreators(deleteDefinition, dispatch),
    addVote: bindActionCreators(addVote, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Word)
