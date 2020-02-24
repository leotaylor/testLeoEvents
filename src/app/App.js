import React from 'react';
// import logo from './logo.svg';
import logo from '../../src/LEO_Events.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yay! LEO Events in a React App.
        </p>
        <a
          className="App-link"
          href="https://www.leoevents.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit The Real LEO Events Site
        </a>
      </header>
    </div>
  );
}

export default App;
