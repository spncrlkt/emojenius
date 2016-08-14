import React, { Component } from 'react'
import ListItem from '../ListItem'

import styles from './styles.css'

export default class WordList extends Component {
  render() {
    const {
      words,
      ...rest,
    } = this.props;

    const children = words ? words.map((word) => (
      <ListItem key={ word.get('id') } word={ word } { ...rest }/>
    )) :
    [];

    return (
      <ul className={ styles.list }>
        { children }
      </ul>
    );
  }
}
