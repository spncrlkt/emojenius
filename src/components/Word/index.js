import React, { Component } from 'react';

import Definitions from './Definitions';

export default class Word extends Component {
  render() {
    const {
      word,
      ...rest,
    } = this.props;

    return (
      <div>
        { word && word.title } - { word && word.id }
        { word && <Definitions definitions={ word.definitions } { ...rest }/> }
      </div>
    );
  }
}
