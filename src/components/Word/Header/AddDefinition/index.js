import React, { Component } from 'react';

import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

import styles from './styles.css';

export default class AddDefinition extends Component {
  constructor() {
    super();
    this.state = { value: '' }
  }
  handleTextChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = () => {
    const {
      addDefinition,
      word,
    } = this.props;

    addDefinition(word.get('title'), this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className={ styles.container }>
        <TextField
          hintText="Add Definition"
          onChange={ this.handleTextChange }
          value={ this.state.value }
          multiLine={true} />
        <br/>
        <FlatButton
          onTouchTap={ this.handleSubmit }
          label="submit"
          primary={true} />
      </div>
    );
  }
}
