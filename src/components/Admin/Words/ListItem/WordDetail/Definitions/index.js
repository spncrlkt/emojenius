import React, { Component } from 'react'

import Definition from './Definition'

export default class Definitions extends Component {
  render() {
    const {
      definitions,
      ...rest
    } = this.props;

    const renderedDefinitions = definitions.map((definition, i) => (
      <Definition
        key={ i }
        definition={ definition }
        { ...rest }
       />
    ));
    return (
      <ul>
        { renderedDefinitions }
      </ul>
    );
  }
}
