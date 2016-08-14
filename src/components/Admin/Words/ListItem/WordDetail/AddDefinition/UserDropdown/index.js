import React, { Component } from 'react';

export default class UserDropdown extends Component {
  componentDidMount = () => {
    const {
      handleUserChange,
      users,
    } = this.props;
    handleUserChange(users.getIn([0, 'id']));
  }

  handleOnChange = (event) => {
    const {
      handleUserChange,
    } = this.props;

    handleUserChange(event.target.value);
  }

  render() {
    const {
      users,
    } = this.props;

    const userOptions = users.map((user, index) => {
      return (
        <option key={ index } value={ user.get('id') }>{ user.get('name') }</option>
      );
    });

    return (
      <select onChange={ this.handleOnChange }>
        { userOptions }
      </select>
    );
  }
}
