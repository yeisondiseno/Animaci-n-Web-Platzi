import React from 'react';
//import logo from './logo.svg';
import logoPlatzi from './img/platzi-logo.png';
import './App.css';
import {CSSTransitionGroup}  from 'react-transition-group'; // ES6


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CSSTransitionGroup
          transitionName="fade"
          trasitionEnterTimeout={1000}
          trasitionLeaveTimeout={1000}>
          <img src={logoPlatzi} className="App-logo" alt="logo"/>
        </CSSTransitionGroup>
        <h2>
          Hola mundo
        </h2>
        <button >
          Click me!
        </button>
      </header>
    </div>
  );
}

export default App;
