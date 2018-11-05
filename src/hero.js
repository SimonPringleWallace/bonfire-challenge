import React from 'react';
import {Header} from './header.js';
import FilterButton from './filter-button.js'
import './filter.css'
import './hero.css';

// Component containing all elements present in the Hero image/text section of
// page

const Hero = ({filter, filterBoxes}) => {

  // These three functions are responsible for toggling the css class on the buttons
  // making them either 'clicked or unclicked'

  const showAllClicked = () => (filter.showAll ? '-clicked' : '')
  const showEvenClicked = () => (filter.showEven ? '-clicked' : '')
  const showOddClicked = () => (filter.showOdd ? '-clicked' : '')

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
          <FilterButton filterBoxes={filterBoxes.bind(this)}
                        title='show all'
                        // toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={showAllClicked()}>
                        </FilterButton>
          <FilterButton filterBoxes={filterBoxes.bind(this)}
                        title='show even'
                        // toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={showEvenClicked()}>
                        </FilterButton>
          <FilterButton filterBoxes={filterBoxes.bind(this)}
                        title='show odd'
                        // toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={showOddClicked()}>
                       </FilterButton>
        </div>
      </div>
    )
}

export default Hero
