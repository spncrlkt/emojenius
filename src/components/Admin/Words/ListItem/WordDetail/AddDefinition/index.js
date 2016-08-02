import React, { Component } from 'react'

export default class AddDefinition extends Component {

  constructor() {
    super();
    this.state = {
      value: 'pizza pizza pizza',
    }
  }

  handleChange =  (event) => {
    this.setState({value: event.target.value});
  }

  handleAddDefinition = () => {
    const {
      addDefinition,
    } = this.props;
    addDefinition(this.props.title, this.state.value);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}/>
          <button onClick={ this.handleAddDefinition }>
            add definition
          </button>
        </form>
      </div>
    );
  }
}
