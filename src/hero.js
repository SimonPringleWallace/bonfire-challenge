import React from 'react';
import {Header} from './header.js';
import FilterButton from './filter-button.js'
import './filter.css'
import './hero.css';

class Hero extends React.Component {
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
  toggleButtons = (value) => {
    if (value === 'show all'){
      this.setState({showAll: true, showEven: false, showOdd: false})
    }else if (value === 'show even'){
      this.setState({showAll: false, showEven: true, showOdd: false})
    }else{
      this.setState({showAll: false, showEven: false, showOdd: true})
    }
    console.log(this.state)
  }
// TODO: DRY out these three functions
  showAll = () => {
    if (this.state.showAll) {
      return '-clicked'
    }else{
      return ''
    }
  }
  showEven = () => {
    if (this.state.showEven) {
      return '-clicked'
    }else {
      return ''
    }
  }
  showOdd = () => {
    if (this.state.showOdd) {
      return '-clicked'
    }else{
      return ''
    }
  }

  render () {
    return (
      <div className="hero">
        <Header />
        <div className='greeting'>
          <h1> Why Hello There</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris.
          </p>
        </div>
        <div className='filter-container'>
          <FilterButton filterBoxes={this.props.filterBoxes.bind(this)}
                        value='show all'
                        toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={this.showAll()}>
                        </FilterButton>
          <FilterButton filterBoxes={this.props.filterBoxes.bind(this)}
                        value='show even'
                        toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={this.showEven()}>
                        </FilterButton>
          <FilterButton filterBoxes={this.props.filterBoxes.bind(this)}
                        value='show odd'
                        toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={this.showOdd()}>
                       </FilterButton>
        </div>
      </div>
    )

  }
}

export default Hero
