import React, { Component } from 'react';
import IsActive from './components/is-active.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="question">Oggi l'area C è attiva?</h1>
        </header>
        <IsActive/>
      </div>
    );
  }
}

export default App;
