import React, { Component } from 'react'

import UserDropdown from './UserDropdown';

export default class AddDefinition extends Component {

  constructor() {
    super();
    this.state = {
      value: 'pizza pizza pizza',
    }
  }

  handleChange =  (event) => {
    this.setState({ value: event.target.value });
  }

  handleUserChange = (userId) => {
    this.setState({ selectedUser: userId });
  }

  handleAddDefinition = (event) => {
    event.preventDefault();
    const {
      addDefinition,
      word,
    } = this.props;
    addDefinition(word.get('title'), this.state.value, this.state.selectedUser);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}/>
          <button onClick={ this.handleAddDefinition }>
            add definition
          </button>
          <UserDropdown
            handleUserChange={ this.handleUserChange }
            { ...this.props }/>
        </form>
      </div>
    );
  }
}
