import React, { Component } from 'react';

class RadioInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : '',
      option : props.option,
      name : props.name,
    };
  }
  handleContentChange = event => {
    this.setState({ content: event.target.value})
  };
  render () {
    return (
      <div>
        <input
          type="radio"
          name={this.state.name}
          value={this.state.option}
          onChange={this.handleContentChange}
        />{this.state.option}
      </div>
      );
  }
}

export default RadioInput;