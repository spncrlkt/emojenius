import React, { Component } from 'react';

import Definition from './Definition';

export default class Definitions extends Component {
  render() {
    const {
      definitions,
      ...rest,
    } = this.props;

    const renderedDefinitions = definitions.entrySeq().map(([i, definition]) => (
      <Definition definition={ definition } key={i} { ...rest }/>
    ));


    return (
      <div>
        { renderedDefinitions }
      </div>
    );
  }
}
