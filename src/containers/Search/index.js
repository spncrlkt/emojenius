import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router';

import {
  matchingWords,
  matchingDefinitions,
} from 'selectors/search';

import {
  search,
} from 'actions/search';

import WordMatches from 'components/Search/WordMatches';
import DefinitionMatches from 'components/Search/DefinitionMatches';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
    };
  }

  onChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  }

  onSearch = () => {
    const {
      search,
    } = this.props;
    search(this.state.term);
  }

  render() {
    const {
      matchingWords,
      matchingDefinitions,
      ...rest,
    } = this.props;

    /*
      const defMatches = searchResults.matching_definitions.map((def) => {
        return (
          <div>
            <a>{ def.word.title } - { def.definition }</a>
          </div>
        );
      });
   */

    return (
      <div>
        <h2>SEARCH</h2>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onChange}/>
        <button onClick={ this.onSearch }>search</button>
        <WordMatches
          { ...rest }
          matchingWords={ matchingWords }/>
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    search: bindActionCreators(search, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Search))
