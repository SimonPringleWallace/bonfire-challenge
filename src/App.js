import React, { Component } from 'react';
import Hero from './hero.js';
import BoxContainer from './Boxes-Box_Container/box-container.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    // store which filter button has been clicked so that the appropriate boxes
    // can be displayed conditionally on the screen. This state is passed as a prop
    // to the Box Container, to control which boxes appear on the screen.
    this.state = {
      showAll: null,
      showEven: null,
      showOdd: null
    }
  }
  // As a default, show all of the boxes when the page loads
componentDidMount(){
  this.setState({showAll: true})
}

// based off of the value of whichever button has been clicked,
// set the state accordingly - passed to filter-button.js as prop.

filterBoxes = (title) => {
  if (title === 'show all'){
    this.setState({showAll: true, showEven: false, showOdd: false})

  }else if (title === 'show even'){
    this.setState({showAll: false, showEven: true, showOdd: false})

  }else{
    this.setState({showAll: false, showEven: false, showOdd: true})
  }
}

  render() {
    return (
      <React.Fragment>
        <Hero
        filterBoxes = {this.filterBoxes.bind(this)}
        filter = {this.state}
        />
        <BoxContainer
        filter = {this.state} />
      </React.Fragment>
    );
  }
}

export default App;
