import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';

import styles from './styles.css';

import AddDefinition from './AddDefinition';

export default class Header extends Component {
  render() {
    const {
      params,
      isLoggedIn,
      userHasDefinition,
      word,
    } = this.props;

    return (
      <div className={ styles.container }>
        <div className={ styles.inner }>
          <Paper zDepth={ 2 }>
            <div className={ styles.container }>
              <span
                className={ styles.cursor }>
                <h2>{ params.title }</h2>
              </span>
              { isLoggedIn && !userHasDefinition && <AddDefinition { ...this.props }/> }
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
