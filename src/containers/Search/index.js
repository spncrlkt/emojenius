import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router';

import {
  matchingWords,
  matchingDefinitions,
  isEmoji,
} from 'selectors/search';

import WordMatches from 'components/Search/WordMatches';
import DefinitionMatches from 'components/Search/DefinitionMatches';


class Search extends Component {
  render() {
    const {
      matchingWords,
      matchingDefinitions,
      isEmoji,
      ...rest,
    } = this.props;

    return (
      <div>
        <WordMatches
          { ...rest }
          matchingWords={ matchingWords }
          isEmoji={ isEmoji }/>
        <DefinitionMatches
          { ...rest }
          matchingDefinitions={ matchingDefinitions }/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    matchingWords: matchingWords(state),
    matchingDefinitions: matchingDefinitions(state),
    isEmoji: isEmoji(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Search))
