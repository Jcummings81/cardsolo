import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input placeholder="now"type="text"></input>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> You reload.
        </p>
      </div>
    );
  }
}

export default App;
