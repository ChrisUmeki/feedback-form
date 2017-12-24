import React, { Component } from 'react';
import logo from './logo.png';
//import './all.css';

class App extends Component {
  render() {
    return (
      <div>

      <div className="App">
        <div className="logo">
          <img id = "logo" src={logo} className="App-logo" alt="logo" />
          <h1>Big Red Gifts<br/>Feedback Form</h1>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
