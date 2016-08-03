import React, { Component } from 'react';

import styles from './styles.css';

export default class Header extends Component {
  render() {
    const {
      params
    } = this.props;

    return (
      <div className={ styles.container }>
        <div className={ styles.inner }>
          <h2>{ params.title }</h2>
        </div>
      </div>
    );
  }
}
