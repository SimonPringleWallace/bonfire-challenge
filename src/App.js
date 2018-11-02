import React, { Component } from 'react';
import {Hero} from './hero.js';
import BoxContainer from './box-container.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showAll: false,
      showEven: false,
      showOdd: true
    }
  }
  render() {
    return (
      <React.Fragment>
        <Hero />
        <BoxContainer
        filter = {this.state} />
      </React.Fragment>
    );
  }
}

export default App;
