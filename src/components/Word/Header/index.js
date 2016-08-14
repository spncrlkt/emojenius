import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';

import styles from './styles.css';

import AddDefinition from './AddDefinition';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (e) => {
    this.setState({open: !this.state.open});
  }

  render() {
    const {
      params,
      isLoggedIn,
    } = this.props;

    return (
      <div className={ styles.container }>
        <div className={ styles.inner }>
          <Paper zDepth={ 2 }>
            <div className={ styles.container }>
              <span
                className={ styles.cursor }
                onTouchTap={ this.handleTouchTap }>
                <h2>{ params.title }</h2>
              </span>
              { isLoggedIn && this.state.open && <AddDefinition { ...this.props }/> }
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
