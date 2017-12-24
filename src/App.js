import React, { Component } from 'react';
import logo from './logo.png';
//import './all.css';
class ShortAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      prompt : props.prompt,
    };
  }
  handleNameChange = event => {
    this.setState({ name: event.target.value})
  };
  render () {
    return (
      <div>
        <h3>{this.state.prompt}</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      </div>
      );
  }
}

class App extends Component {
  renderShort(str) {
    return <ShortAnswer prompt = {str}/>;
  }
  renderLong(str) {
    return;
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
          {this.renderShort("Name")}
          {this.renderShort("NetID")}
          {this.renderShort("Year")}

        </div>
      </div>
      </div>
    );
  }
}

export default App;
