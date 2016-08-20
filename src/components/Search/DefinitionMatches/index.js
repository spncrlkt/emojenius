import React, { Component } from 'react'

import DefinitionMatch from './DefinitionMatch';

export default class DefinitionMatches extends Component {
  render() {
    const {
      matchingDefinitions,
      ...rest,
    } = this.props;
    const matches = matchingDefinitions.map((definition, index) =>
      <DefinitionMatch
        { ...rest }
        key={ index }
        definition={ definition }/>
    );

    return (
      <div>
        { matches }
      </div>
    );
  }
}
