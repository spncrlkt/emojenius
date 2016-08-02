import React, { Component } from 'react'
import { Link } from 'react-router'

import AddDefinition from './AddDefinition'
import Definitions from './Definitions'

export default class WordDetail extends Component {
  render() {
    const {
      title,
    } = this.props;

    return (
      <div>
        <Link to={`/word/${title}`}>{ title }</Link>
        <AddDefinition { ...this.props }/>
        <Definitions { ...this.props }/>
      </div>
    );
  }
}
