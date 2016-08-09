import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getSelectedWordData,
} from 'selectors/word';

import {
  setSelected,
  fetchWord,
} from 'actions/word';

import WordComponent from 'components/Word';
import Header from 'components/Word/Header';

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
        <Header { ...this.props }/>
        <WordComponent { ...this.props }/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    word: getSelectedWordData(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSelected: bindActionCreators(setSelected, dispatch),
    fetchWord: bindActionCreators(fetchWord, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Word)
