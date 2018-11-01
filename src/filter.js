import React, { Component } from 'react';
import  './filter.css'

class Filters extends Component {
  render() {
    return (
      <div className='filter-container'>
        <button className='filter-button'>See all</button>
        <button className='filter-button'> See Even</button>
        <button className='filter-button'> See Odd </button>
      </div>
    )
  }
}

export default Filters;
