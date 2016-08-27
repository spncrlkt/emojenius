import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router';

import {
  newWords,
  newDefs,
} from 'selectors/home';

import {
  fetchHome,
} from 'actions/home';

import WordMatches from 'components/Search/WordMatches';
import DefinitionMatches from 'components/Search/DefinitionMatches';

class Home extends Component {
  componentDidMount() {
    const {
      fetchHome,
    } = this.props;

    fetchHome();
  }

  render() {
    const {
      newWords,
      newDefs,
      ...rest,
    } = this.props;

    return (
      <div>
        <span><h2>RECENTLY ADDED EMOJI</h2></span>
        <WordMatches
          { ...rest }
          matchingWords={ newWords }/>
        <span><h2>RECENTLY ADDED DEFINITIONS</h2></span>
        <DefinitionMatches
          { ...rest }
          matchingDefinitions={ newDefs }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newWords: newWords(state),
    newDefs: newDefs(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchHome: bindActionCreators(fetchHome, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home))
