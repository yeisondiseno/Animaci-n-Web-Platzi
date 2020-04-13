import React from 'react';
import logo from './logo.svg';
import logoPlatzi from './img/platzi-logo.png';
import './App.css';
import {CSSTransitionGroup}  from 'react-transition-group'; // ES6



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CSSTransitionGroup
          transitionName="fade"
        >
          <img src={logoPlatzi} className="App-logo" alt="logo" />
        </CSSTransitionGroup>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
