import React, {Component} from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import logo from '../../src/LEO_Events.png'
import './App.css';

import HomeView from '../views/homeView/homeview';
import Navbar from '../components/navbar/navbar';
import TestButton from '../components/functionalButton/testButton';

class App extends Component {
  render () {
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
             The Real LEO Events Site
          </a>
          <TestButton />
        </header>
        <BrowserRouter>
          <div>
            <Navbar/>
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact Component={HomeView}/>
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>

      </div>
    );

  }

}

export default App;
