import React, { Component } from 'react';

import Header from 'components/Word/Header';
import Definitions from './Definitions';

export default class Word extends Component {

  render() {
    const {
      word,
      ...rest,
    } = this.props;

    return (
      <div>
        <Header { ...this.props }/>
        <br/>
        { word && <Definitions { ...rest }/> }
      </div>
    );
  }
}
