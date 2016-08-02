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

class Word extends Component {

  componentDidMount() {
    const {
      fetchWord,
      setSelected,
      params,
    } = this.props;

    setSelected(params.title);
    fetchWord();
  }

  render() {
    return (
      <div>
        <h2>WORD</h2>
        <h2>{ this.props.params.title }</h2>
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
