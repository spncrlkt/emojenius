import React, { Component } from 'react'
import Navbar from 'containers/Navbar';

import styles from './styles.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={ styles.content }>
          { this.props.children }
        </div>
      </div>
    )
  }
}
