import React, { Component } from 'react';

const FilterButton =({filterBoxes, toggleButtons, selectedButton, value}) => {

const filterActions = (value) => {
  filterBoxes(value)
  toggleButtons(value)
}
    return (
      <React.Fragment>
        <button
          className={`filter-button${selectedButton}`}
          onClick={filterActions.bind(this,value)}
          >{value}
          </button>
      </React.Fragment>
    )
}

export default FilterButton;
