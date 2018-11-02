import React from 'react';
import {Header} from './header.js';
import FilterButton from './filter-button.js'
import './filter.css'
import './hero.css';

export const Hero = ({filterBoxes}) => {
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
        <FilterButton filterBoxes={filterBoxes.bind(this)} value='show all'> </FilterButton>
        <FilterButton filterBoxes={filterBoxes.bind(this)} value='show even'> </FilterButton>
        <FilterButton filterBoxes={filterBoxes.bind(this)} value='show odd'> </FilterButton>
      </div>
    </div>
  )
}
