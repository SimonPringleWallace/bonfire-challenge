import React, { Component } from 'react';
import {Hero} from './hero.js';
import BoxContainer from './box-container.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <BoxContainer />
      </React.Fragment>
    );
  }
}

export default App;
