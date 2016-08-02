import React, { Component } from 'react'

export default class AddWord extends Component {

  constructor() {
    super();
    this.state = {
      value: '🍕🍕🍕',
    }
  }

  handleChange =  (event) => {
    this.setState({value: event.target.value});
  }

  handleAddWord = () => {
    const {
      addWord,
    } = this.props;
    addWord(this.state.value);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}/>
          <button onClick={ this.handleAddWord }>
            add word
          </button>
        </form>
      </div>
    );
  }
}
