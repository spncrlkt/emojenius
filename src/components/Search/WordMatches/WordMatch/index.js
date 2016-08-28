import React, { Component } from 'react';
import { Link } from 'react-router'

import Paper from 'material-ui/lib/paper';

import styles from './styles.css';

export default class WordMatch extends Component {
  handlePillClick = () => {
    const {
      router,
      word,
    } = this.props;
    const title = word.get('title');

    router.push(`/word/${title}`);
  }

  render() {
    const {
      word,
    } = this.props;

    const title = word.get('title');

    return (
      <div className={ styles.container } onClick={ this.handlePillClick }>
        <Paper>
          <span className={ styles.pill }>
            <a >{ title }</a>
          </span>
        </Paper>
      </div>
    );
  }
}
