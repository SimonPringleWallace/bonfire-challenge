import React from 'react';
import {Header} from './header.js';
import FilterButton from './filter-button.js'
import './filter.css'
import './hero.css';

// Component containing all elements present in the Hero image/text section of
// page

class Hero extends React.Component {
  constructor() {
    super()
// this.state holds the status of which buttons are currently clicked and which aren't
// to allow toggling between the buttons i.e clicking one unclickes another.
    this.state = {
      showAll: null,
      showEven: null,
      showOdd: null
    }
  }

  // As a default, select the 'show all' button when the page loads
  componentDidMount(){
    this.setState({showAll: true})
  }

  // toggleButtons function is passed down to the individual buttons via props, it
  // take the value of the button clicked as an argument and set's this components
  // state accordingly
  toggleButtons = (value) => {
    if (value === 'show all'){
      this.setState({showAll: true, showEven: false, showOdd: false})
    }else if (value === 'show even'){
      this.setState({showAll: false, showEven: true, showOdd: false})
    }else{
      this.setState({showAll: false, showEven: false, showOdd: true})
    }
  }

  // These three functions are responsible for toggling the css class on the buttons
  // making them either 'clicked or unclicked'
  showAllClicked = () => (this.state.showAll ? '-clicked' : '')
  showEvenClicked = () => (this.state.showEven ? '-clicked' : '')
  showOddClicked = () => (this.state.showOdd ? '-clicked' : '')

  render () {
    return (
      <div className="hero">
        <Header />
        <div className='greeting'>
          <h1> Why Hello There</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accu-santium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et
          </p>
        </div>
        <div className='filter-container'>
          <FilterButton filterBoxes={this.props.filterBoxes.bind(this)}
                        value='show all'
                        toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={this.showAllClicked()}>
                        </FilterButton>
          <FilterButton filterBoxes={this.props.filterBoxes.bind(this)}
                        value='show even'
                        toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={this.showEvenClicked()}>
                        </FilterButton>
          <FilterButton filterBoxes={this.props.filterBoxes.bind(this)}
                        value='show odd'
                        toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={this.showOddClicked()}>
                       </FilterButton>
        </div>
      </div>
    )

  }
}

export default Hero
