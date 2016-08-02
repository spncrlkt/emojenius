import React, { Component } from 'react'
import AddWord from './AddWord';
import WordList from './WordList';

import styles from './styles.css';

export default class Words extends Component {
  render() {
    return (
      <div className={ styles.words }>
        <h2>WORDS</h2>
        <AddWord { ...this.props }/>
        <WordList {...this.props }/>
      </div>
    );
  }
}
