import React, { Component } from 'react';
import logo from './logo.png';
import ShortInput from './ShortInput.js';
import LongInput from './LongInput.js';
import RadioInput from './RadioInput.js';

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
  renderRadioInput(prompt, ...options) {
    const list = options.map(option => 
      <RadioInput
          option = {option}
          name = {prompt}
          />
    );
    return (
      <div>
        <h3>{prompt}</h3>
        {list}
      </div>
    );
  }

  handleSubmit(event) {
    alert("ji" + (document.getElementById("Name").value));
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
          {this.renderRadioInput("Have you received your gift?", "Yes", "No", "No but will soon")}
          {this.renderLongInput("Any thoughts or suggestions?")}
          <input type="button" value="Submit" onClick={this.handleSubmit} />

        </div>
      </div>
      </div>
    );
  }
}

export default App;
