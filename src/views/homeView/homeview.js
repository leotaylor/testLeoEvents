import React from 'react';
import Home from '../../components/home/home'

import './homeview.css';

class HomeView extends React.Component {
  render () {
    return (
      <div className="Home">
        <Home/>
        <h1>HOME</h1>
      </div>

    );
  }
}

export default HomeView;