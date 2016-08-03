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
      params
    } = this.props;

    return (
      <div className={ styles.container }>
        <div
          className={ styles.inner }
          onTouchTap={ this.handleTouchTap }>
          <Paper zDepth={ 2 }>
            <div>
              <h2>{ params.title }</h2>
              { this.state.open && <AddDefinition /> }
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
