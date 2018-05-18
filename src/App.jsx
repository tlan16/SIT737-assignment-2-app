import React from 'react';
import logo from './logo.svg';
import './App.css';
import Vison from './components/Vision';

const App = () =>
  (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        Vision
      </p>
      <Vison />
    </div>
  );

export default App;
