import React, { Component } from 'react'
import Navbar from 'components/Navbar';

import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={ styles.text }>
        <Navbar />
        { this.props.children }
      </div>
    )
  }
}
