import React, { Component } from 'react'

import styles from './styles.css';
import WordMatch from './WordMatch';

export default class WordMatches extends Component {
  render() {
    const {
      matchingWords,
      ...rest,
    } = this.props;
    const matches = matchingWords.map((word, index) =>
      <WordMatch
        { ...rest }
        key={ index }
        word={ word }/>
    );

    return (
      <div className={ styles.container }>
        { matches }
      </div>
    );
  }
}
