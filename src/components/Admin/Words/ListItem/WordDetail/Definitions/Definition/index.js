import React, { Component } from 'react'

export default class Definition extends Component {
  render() {
    const {
      definition
    } = this.props;

    return (
      <li>
        { definition.definition } - { definition.id }
      </li>
    );
  }
}
