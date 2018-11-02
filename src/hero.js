import React from 'react';
import {Header} from './header.js';
import FilterButton from './filter-button.js'
import './filter.css'
import './hero.css';

export const Hero = () => (
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
    <FilterButton value='show all'> </FilterButton>
    <FilterButton value='show even'> </FilterButton>
    <FilterButton value='show odd'> </FilterButton>
  </div>
  </div>
)
