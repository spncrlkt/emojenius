import React, { Component } from 'react';

import styles from './styles.css';

import WordDetail from './WordDetail';

export default class ListItem extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const {
      title,
    } = this.props;

    const className = this.state.open ? styles.open : null;

    return (
      <li className={ className }>
        <span
          className={ styles.title }
          onClick={ this.handleOpen }>
            { title }
        </span>
        { this.state.open && <WordDetail { ...this.props }/> }
      </li>
    );
  }
}
