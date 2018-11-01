import React, { Component } from 'react';
import {Hero} from './hero.js';
import Filters from './filter-bar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Filters />
      </React.Fragment>
    );
  }
}

export default App;
