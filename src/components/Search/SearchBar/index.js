import React, { Component } from 'react';

import TextField from 'material-ui/lib/text-field';

export default class SearchBar extends Component {

  onSearch = (event) => {
    const {
      search,
      clearSearchResults,
      router,
    } = this.props;

    this.setState({
      term: event.target.value,
    });

    if (event.target.value != '') {
      router.push('/search');
      search(event.target.value);
    } else {
      clearSearchResults();
    }
  }

  openSearchField = () => {
    this.setState({
      searching: true,
    });
    this._textField && this._textField.focus();
  }

  textFieldRef = (c) => {
    if (c) {
      this._textField = c;
      this._textField.focus();
    }
  }

  closeSearchField = () => {
    this.setState({
      searching: false,
    });
  }

  constructor() {
    super();
    this.state = {
      searching: false,
      term: '',
    };
  }

  render() {
    const searchFieldStyles = {
      width: 290,
      marginTop: 7,
      fontSize: 22,
    };

    const searchIconStyles = {
      marginTop: 17,
      fontSize: 28,
    };

    return this.state.searching ? (
      <TextField
        style={ searchFieldStyles }
        value={ this.state.term }
        ref={ this.textFieldRef }
        onChange={ this.onSearch }
        hintText="Search Emoji"
        onBlur={ this.closeSearchField }
      />
    ) : (
      <span
        style={ searchIconStyles }
        onTouchTap={ this.openSearchField }
      >🔎</span>
    );
  }
}
