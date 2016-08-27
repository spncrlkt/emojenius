import React, { Component } from 'react';
import FlatButton from 'material-ui/lib/flat-button';

export default class LoginHeader extends Component {
  render() {
    const {
      onSignIn,
    } = this.props;
    return (
      <FlatButton onTouchTap={ onSignIn } label="Add Definition"/>
    );
  }
}
