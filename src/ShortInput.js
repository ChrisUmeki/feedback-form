import React, { Component } from 'react';

class ShortInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : '',
      prompt : props.prompt,
      type : props.type,
      placeholder : props.placeholder,
    };
  }
  handleContentChange = event => {
    this.setState({ content: event.target.value})
  };
  render () {
    return (
      <div>
        <h3>{this.state.prompt}</h3>
        <input
          id = {this.state.prompt}
          type={this.state.type}
          placeholder={this.state.placeholder}
          value={this.state.content}
          onChange={this.handleContentChange}
          required
        />
      </div>
      );
  }
}

export default ShortInput;