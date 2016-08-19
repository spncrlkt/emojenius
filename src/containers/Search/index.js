import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



import {
  searchResults,
} from 'selectors/search';

import {
  search,
} from 'actions/search';

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
    return (
      <div>
        <h2>SEARCH</h2>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onChange}/>
        <button onClick={ this.onSearch }>search</button>
        <div>
          <pre>
            { JSON.stringify(this.props.searchResults, null, 2) }
          </pre>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchResults: searchResults(state),
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
)(Search)
