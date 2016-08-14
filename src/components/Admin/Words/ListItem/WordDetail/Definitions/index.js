import React, { Component } from 'react'

import Definition from './Definition'

export default class Definitions extends Component {
  render() {
    const {
      word,
      ...rest
    } = this.props;

    const renderedDefinitions = word.get('definitions').map((definition, i) => (
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
