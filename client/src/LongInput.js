import React, { Component } from 'react';

class LongInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : '',
      prompt : props.prompt,
    };
  }
  handleContentChange = event => {
    this.setState({ content: event.target.value})
  };
  render () {
    return (
      <div>
        <h3>{this.state.prompt}</h3>
        <textarea
          id={this.state.prompt}
          value={this.state.content}
          onChange={this.handleContentChange}
        />
      </div>
      );
  }
}

export default LongInput;