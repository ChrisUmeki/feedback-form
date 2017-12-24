import React, { Component } from 'react';
import logo from './logo.png';
//import './all.css';
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
          value={this.state.content}
          onChange={this.handleContentChange}
        />
      </div>
      );
  }
}

class App extends Component {
  renderShortInput(prompt, type, placeholder) {
    return <ShortInput
              prompt = {prompt}
              type = {type}
              placeholder = {placeholder}
            />;
  }
  renderLongInput(prompt) {
    return <LongInput prompt = {prompt}/>;
  }

  render() {
    return (
      <div>

      <div className="App">
        <div className="logo">
          <img id = "logo" src={logo} className="App-logo" alt="logo" />
          <h1>Big Red Gifts<br/>Feedback Form</h1>
        </div>
        <div className="sign_up">
          {this.renderShortInput("Name","text","Touchdown the Bear")}
          {this.renderShortInput("Email","email","NetId@Cornell.edu")}
          {this.renderShortInput("Year","text","2021")}
          {this.renderLongInput("Any thoughts or suggestions?")}

        </div>
      </div>
      </div>
    );
  }
}

export default App;
