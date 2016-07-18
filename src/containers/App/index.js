import React, { Component } from 'react'
import Navbar from 'components/Navbar';

import styles from './styles.css';

export default class App extends Component {
  render() {
    return (
      <div className={ styles.content }>
        <Navbar />
        { this.props.children }
      </div>
    )
  }
}
