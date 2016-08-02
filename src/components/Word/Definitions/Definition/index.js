import React, { Component } from 'react'

export default class Definition extends Component {
  render() {
    const {
      definition,
    } = this.props;

    return (
      <li>
        { JSON.stringify(definition, null, 2) }
      </li>
    );
  }
}
