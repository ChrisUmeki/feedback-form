import React, { Component } from 'react';
import logo from './logo.png';
import ShortInput from './ShortInput.js';
import LongInput from './LongInput.js';
import RadioInput from './RadioInput.js';
import $ from 'jquery';

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
    const formData = {
      "name": document.getElementById("Name").value,
      "email": document.getElementById("Email").value,
      "year": document.getElementById("Year").value,
      "received": document.querySelector('input[name="Have you received your gift?"]:checked').value,
      "comments": document.getElementById("Any thoughts or suggestions?").value
    };
    $.ajax({
      url: 'index.html',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(formData),
      success: function (data) {
        console.log('Submitted' + formData.email);
        this.setState({data: data});
      }.bind(this),
      error: function (data) {
        console.log('Submission Error: ' + formData.email);
      }
    });
    alert("Thank you for the feedback, " + formData.name + "!");
    
  }

  render() {
    return (
      <div>

      <form className="App" onSubmit={this.handleSubmit}>
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
          <br/><button>Submit</button><br/><br/><br/>

        </div>
      </form>
      </div>
    );
  }
}

export default App;
