import React, { Component } from 'react'
import ListItem from '../ListItem'

import styles from './styles.css'

export default class Words extends Component {
  render() {
    const {
      words,
      ...rest,
    } = this.props;

    const children = words ? words.map((word) => (
      <ListItem key={ word.id } { ...word } { ...rest }/>
    )) :
    [];

    return (
      <ul className={ styles.list }>
        { children }
      </ul>
    );
  }
}
