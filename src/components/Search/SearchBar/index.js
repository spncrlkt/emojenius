import React, { Component } from 'react';

import TextField from 'material-ui/lib/text-field';

export default class SearchBar extends Component {
  onSearch = (event) => {
    const {
      search,
      clearSearchResults,
      router,
    } = this.props;
    if (event.target.value != '') {
      router.push('/search');
      search(event.target.value);
    } else {
      clearSearchResults();
    }
  }

  render() {

    const searchFieldStyles = {
      width: 200,
      marginTop: 7,
      fontSize: 22,
    };

    return (
      <TextField
        style={ searchFieldStyles }
        onChange={ this.onSearch }
        hintText="Search Emoji"
      />
    );
  }
}
