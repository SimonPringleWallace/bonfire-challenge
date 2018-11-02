import React, { Component } from 'react';
import {Hero} from './hero.js';
import BoxContainer from './box-container.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showAll: null,
      showEven: null,
      showOdd: null
    }
  }
componentDidMount(){
  this.setState({showAll: true})
}

filterBoxes = async (value) => {
if (value === 'show all'){
  this.setState({showAll: true, showEven: false, showOdd: false})
}else if (value === 'show even'){
  this.setState({showAll: false, showEven: true, showOdd: false})
}else{
  this.setState({showAll: false, showEven: false, showOdd: true})
}
}

  render() {
    return (
      <React.Fragment>
        <Hero
        filterBoxes = {this.filterBoxes.bind(this)} />
        <BoxContainer
        filter = {this.state} />
      </React.Fragment>
    );
  }
}

export default App;
