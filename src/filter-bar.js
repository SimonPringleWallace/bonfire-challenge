import React, { Component } from 'react';
import FilterButton from './filter-button.js';
import  './filter.css'

class Filters extends Component {
  render() {

    return (
      <div className='filter-container'>
        <FilterButton value='show all'> </FilterButton>
        <FilterButton value='show even'> </FilterButton>
        <FilterButton value='show odd'> </FilterButton>
      </div>
    )
  }
}

export default Filters;
